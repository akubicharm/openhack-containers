namespace TripViewer.Utility
{

    public class TripViewerConfiguration
    {
        public string USERPROFILE_API_ENDPOINT { get; set; }
        public string TRIPS_API_ENDPOINT { get; set; }
        // public string USERPROFILE_API_ENDPOINT =  "http://userprofile.api.svc.cluster.local";
        // public string TRIPS_API_ENDPOINT = "http://trips.api.svc.cluster.local";
        public string BING_MAPS_KEY { get; set; }
    }
}