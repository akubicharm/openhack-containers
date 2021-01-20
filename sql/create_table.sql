DROP TABLE DEVICES;
CREATE TABLE Devices(
        Id varchar(128) default gen_random_uuid() NOT NULL,
        Name text NULL,
        -- Version timestamp NOT NULL,
        Version timestamp default now(),
        CreatedAt timestamp default now(),
        UpdatedAt timestamp,
        Deleted boolean NOT NULL,
        UserProfile_Id varchar(128) NULL,
 CONSTRAINT PK_Devices PRIMARY KEY 
(
        Id 
)
);

DROP TABLE factMLOutputData;
CREATE TABLE factMLOutputData(
--       id int IDENTITY(1,1) NOT NULL,
        id serial NOT NULL,
        tripId varchar(50) NULL,
        userId varchar(50) NULL,
        tripstarttime varchar(50) NULL,
        driverType varchar(50) NULL,
PRIMARY KEY 
(
        id 
)
);

DROP TABLE IOTHubDatas;
CREATE TABLE IOTHubDatas(
        Id varchar(128) default gen_random_uuid() NOT NULL,
        -- Version timestamp NOT NULL,
        Version timestamp default now(),
        CreatedAt timestamp default now(),
        UpdatedAt timestamp,
        Deleted boolean NOT NULL,
 CONSTRAINT PK_IOTHubDatas PRIMARY KEY 
(
        Id 
)
);


DROP TABLE POIs;
CREATE TABLE POIs(
        Id varchar(128) default gen_random_uuid() NOT NULL,
        TripId varchar(128) NULL,
        Latitude float NOT NULL,
        Longitude float NOT NULL,
        POIType int NOT NULL,
        RecordedTimeStamp varchar(50) NULL,
        -- Version timestamp NOT NULL,
        Version timestamp default now(),
        CreatedAt timestamp default now(),
        UpdatedAt timestamp,
        Deleted boolean NOT NULL,
        Timestamp timestamp NOT NULL,
 CONSTRAINT PK_POIs PRIMARY KEY 
(
        Id 
)
);


DROP TABLE TripPoints;
CREATE TABLE TripPoints(
        Id varchar(128) default gen_random_uuid() NOT NULL,
        TripId varchar(128) NULL,
        Latitude float NOT NULL,
        Longitude float NOT NULL,
        Speed float NOT NULL,
        RecordedTimeStamp timestamp NOT NULL,
        Sequence int NOT NULL,
        RPM float NOT NULL,
        ShortTermFuelBank float NOT NULL,
        LongTermFuelBank float NOT NULL,
        ThrottlePosition float NOT NULL,
        RelativeThrottlePosition float NOT NULL,
        Runtime float NOT NULL,
        DistanceWithMalfunctionLight float NOT NULL,
        EngineLoad float NOT NULL,
        MassFlowRate float NOT NULL,
        EngineFuelRate float NOT NULL,
        VIN text NULL,
        HasOBDData boolean NOT NULL,
        HasSimulatedOBDData boolean NOT NULL,
        -- Version timestamp NOT NULL,
        Version timestamp default now(),
        CreatedAt timestamp default now(),
        UpdatedAt timestamp,
        Deleted boolean NOT NULL,
 CONSTRAINT PK_TripPoints PRIMARY KEY 
(
        Id 
)
);

DROP TABLE Trips;
CREATE TABLE Trips(
        Id varchar(128) default gen_random_uuid() NOT NULL,
        Name text NULL,
        UserId varchar(128) NULL,
        RecordedTimeStamp timestamp NOT NULL,
        EndTimeStamp timestamp NOT NULL,
        -- RecordedTimeStamp varchar(24) NOT NULL,
        -- EndTimeStamp varchar(24) NOT NULL,
        Rating int NOT NULL,
        IsComplete boolean NOT NULL,
        HasSimulatedOBDData boolean NOT NULL,
        AverageSpeed float NOT NULL,
        FuelUsed float NOT NULL,
        HardStops bigint NOT NULL,
        HardAccelerations bigint NOT NULL,
        MainPhotoUrl text NULL,
        Distance float NOT NULL,
        -- Version timestamp NOT NULL,
        Version timestamp default now(),
        CreatedAt timestamp default now(),
        UpdatedAt timestamp,
        Deleted boolean NOT NULL,
 CONSTRAINT PK_Trips PRIMARY KEY 
(
        Id 
)
);

DROP TABLE UserProfiles;
CREATE TABLE UserProfiles(
        -- Id serial NOT NULL,
        Id varchar(128) default gen_random_uuid() NOT NULL,
        FirstName text NULL,
        LastName text NULL,
        UserId text NULL,
        ProfilePictureUri text NULL,
        Rating int NOT NULL,
        Ranking int NOT NULL,
        TotalDistance float NOT NULL,
        TotalTrips bigint NOT NULL,
        TotalTime bigint NOT NULL,
        HardStops bigint NOT NULL,
        HardAccelerations bigint NOT NULL,
        FuelConsumption float NOT NULL,
        MaxSpeed float NOT NULL,
        -- Version timestamp NOT NULL,
        Version timestamp default now(),
        CreatedAt timestamp default now(),
        UpdatedAt timestamp,
        Deleted boolean NOT NULL,
 CONSTRAINT PK_UserProfiles PRIMARY KEY 
(
        Id 
)
);


DROP TABLE POISource;
CREATE TABLE POISource (
    -- Id                serial NOT NULL,
    Id varchar(128) default gen_random_uuid() NOT NULL,
    TripId            varchar (1024) NULL,
    Latitude          FLOAT (53)     NOT NULL,
    Longitude         FLOAT (53)     NOT NULL,
    POIType           INT            NOT NULL,
    RecordedTimeStamp varchar (50)  NULL,
    CONSTRAINT PK_POISource_ID PRIMARY KEY  (Id )
);


DROP TABLE TripPointSource;
CREATE TABLE TripPointSource (
    tripid                   VARCHAR (36)     NOT NULL,
    userid                   VARCHAR (33)     NOT NULL,
    name                     VARCHAR (30)     NULL,
    trippointid              VARCHAR (36)     NOT NULL,
    lat                      NUMERIC (18, 15) NOT NULL,
    lon                      NUMERIC (19, 14) NOT NULL,
    speed                    INT              NOT NULL,
    recordedtimestamp        VARCHAR (28)     NOT NULL,
    sequence                 INT              NOT NULL,
    enginerpm                INT              NOT NULL,
    shorttermfuelbank        INT              NOT NULL,
    longtermfuelbank         INT              NOT NULL,
    throttleposition         INT              NOT NULL,
    relativethrottleposition INT              NOT NULL,
    runtime                  INT              NOT NULL,
    distancewithmil          INT              NOT NULL,
    engineload               INT              NOT NULL,
    mafflowrate              INT              NOT NULL,
    outsidetemperature       VARCHAR (30)     NULL,
    enginefuelrate           INT              NOT NULL,
    FIELD21                  INT              NULL,
    PRIMARY KEY  (trippointid )
);
