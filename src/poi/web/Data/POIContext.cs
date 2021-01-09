using Microsoft.EntityFrameworkCore;
using poi.Models;


using System;
using System.Text.RegularExpressions;


namespace poi.Data
{
    public class POIContext : DbContext
    {
        public POIContext(DbContextOptions<POIContext> options) : base(options)
        {

        }

        public DbSet<POI> POIs { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            foreach(var entity in builder.Model.GetEntityTypes())
            {
                // Replace table names
                entity.Relational().TableName = entity.Relational().TableName.ToSnakeCase();

                // Replace column names            
                foreach(var property in entity.GetProperties())
                {
                    property.Relational().ColumnName = property.Relational().ColumnName.ToSnakeCase();
                }

                foreach(var key in entity.GetKeys())
                {
                    key.Relational().Name = key.Relational().Name.ToSnakeCase();
                }

                foreach(var key in entity.GetForeignKeys())
                {
                    key.Relational().Name = key.Relational().Name.ToSnakeCase();
                }

                foreach(var index in entity.GetIndexes())
                {
                    index.Relational().Name = index.Relational().Name.ToSnakeCase();
                }
            }
        }
    }


    public static class StringExtensions
    {
        public static string ToSnakeCase(this string input)
        {
            if (string.IsNullOrEmpty(input)) { return input; }

            //var startUnderscores = Regex.Match(input, @"^_+");
            //return startUnderscores + Regex.Replace(input, @"([a-z0-9])([A-Z])", "$1_$2").ToLower();
            return Regex.Replace(input, @"([a-z0-9])([A-Z])", "$1$2").ToLower();
        }
    }


}