truncate table devices;
truncate table POISource;
truncate table POIs;
truncate table TripPointSource;
truncate table TripPoints;
truncate table Trips;
truncate table UserProfiles;
truncate table factMLOutputData;

\copy Devices from Devices_export.txt with csv
-- \copy IoTHubDatas IOTHubDatas_export.txt with csv
\copy POISource from POISource_export.txt with csv
\copy POIs from POIs_export.txt with csv
\copy TripPointSource from TripPointSource_export.txt with csv
\copy TripPoints from TripPoints_export.txt with csv
\copy Trips from Trips_export.txt with csv
\copy UserProfiles from UserProfiles_export.txt with csv
\copy factMLOutputData from factMLOutputData_export.txt with csv
