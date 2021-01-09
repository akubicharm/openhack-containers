exports.INSERT_USER_PROFILE =
`INSERT INTO UserProfiles
(
  Id,
  FirstName,
  LastName,
  UserId,
  ProfilePictureUri,
  Rating,
  Ranking,
  TotalDistance,
  TotalTrips,
  TotalTime,
  HardStops,
  HardAccelerations,
  FuelConsumption,
  MaxSpeed,
  CreatedAt,
  UpdatedAt,
  Deleted
) values (
  $1,
  $2,
  $3,
  $4,
  $5,
  $6,
  $7,
  $8,
  $9,
  $10,
  $11,
  $12,
  $13,
  $14,
  now(),
  now(),
  '0')
  RETURNING *`;


exports.UPDATE_USER_PROFILE=
`UPDATE UserProfiles
SET 
  FirstName           = updaterecord.FirstName,
  LastName            = updaterecord.LastName,
  UserId              = updaterecord.UserId,
  ProfilePictureUri   = updaterecord.ProfilePictureUri,
  Rating              = updaterecord.Rating,
  Ranking             = updaterecord.Ranking,
  TotalDistance       = updaterecord.TotalDistance,
  TotalTrips          = updaterecord.TotalTrips,
  TotalTime           = updaterecord.TotalTime,
  HardStops           = updaterecord.HardStops,
  HardAccelerations   = updaterecord.HardAccelerations,
  FuelConsumption     = updaterecord.FuelConsumption,
  MaxSpeed            = updaterecord.MaxSpeed,
  UpdatedAt           = updaterecord.UpdatedAt,
  Deleted             = updaterecord.Deleted
FROM 
  ( SELECT
      u.Id,
      COALESCE($2, u.FirstName) AS FirstName,
      COALESCE($3, u.LastName) AS LastName,
      COALESCE($4, u.UserId) AS UserId,
      COALESCE($5, u.ProfilePictureUri) AS ProfilePictureUri,
      COALESCE($6, u.Rating) AS Rating,
      COALESCE($7, u.Ranking) AS Ranking,
      COALESCE($8, u.TotalDistance) AS TotalDistance,
      COALESCE($9, u.TotalTrips) AS TotalTrips,
      COALESCE($10, u.TotalTime) AS TotalTime,
      COALESCE($11, u.HardStops) AS HardStops,
      COALESCE($12, u.HardAccelerations) AS HardAccelerations,
      COALESCE($13, u.FuelConsumption) AS FuelConsumption,
      COALESCE($14, u.MaxSpeed) AS MaxSpeed, 
      u.CreatedAt,
      now() AS UpdatedAt,
      COALESCE($15 , u.Deleted) AS Deleted
    FROM   
      UserProfiles u
    WHERE 
      u.Id = $1 
  ) updaterecord
WHERE
    UserProfiles.Id = updaterecord.Id
RETURNING *`;
    
exports.SELECT_USER_PROFILE_BY_ID=
 'select * from UserProfiles WHERE id = $1';

exports.SELECT_USER_PROFILES=
 'select * FROM UserProfiles';

exports.DELETE_USER_PROFILE=
 'UPDATE UserProfiles SET Deleted = TRUE WHERE id = $1';