-------------------------------------------------------------------------------
-- Baza de date
-------------------------------------------------------------------------------

IF  NOT EXISTS (SELECT * FROM sys.databases WHERE name = N'SkyScanner')
BEGIN
	CREATE DATABASE [SkyScanner]
END;
GO

USE [SkyScanner]
GO


-------------------------------------------------------------------------------
-- User
-------------------------------------------------------------------------------

IF OBJECT_ID(N'[dbo].[User]', N'U') IS NOT NULL
	DROP TABLE [dbo].[User]
GO  

CREATE TABLE [dbo].[User] (
    [UserId] INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
	[UserName] NVARCHAR(100) NOT NULL UNIQUE,
    [UserEmail] NVARCHAR(100) NOT NULL UNIQUE,
	[UserPassword] NVARCHAR(1000)
	);


-------------------------------------------------------------------------------
-- Address
-------------------------------------------------------------------------------

IF OBJECT_ID(N'[dbo].[Address]', N'U') IS NOT NULL
	DROP TABLE [dbo].[Address]
GO  

CREATE TABLE [dbo].[Address] (
    [AddressId] INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    [Country] NVARCHAR(100) NOT NULL ,
	[City] NVARCHAR(100) NOT NULL ,
	[Street] NVARCHAR(100) NOT NULL ,
	[Number] INT NOT NULL ,
);

-------------------------------------------------------------------------------
-- Airport
-------------------------------------------------------------------------------

IF OBJECT_ID(N'[dbo].[Airport]', N'U') IS NOT NULL
	DROP TABLE [dbo].[Airport]
GO  

CREATE TABLE [dbo].[Airport] (
    [AirportId] INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    [AirportName] NVARCHAR(100) NOT NULL ,
	[AirportCountry] NVARCHAR(100) NOT NULL,
	[AirportCity] NVARCHAR(100) NOT NULL
);

-------------------------------------------------------------------------------
-- Company
-------------------------------------------------------------------------------

IF OBJECT_ID(N'[dbo].[Company]', N'U') IS NOT NULL
	DROP TABLE [dbo].[Company]
GO  

CREATE TABLE [dbo].[Company] (
    [CompanyId] INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    [CompanyName] NVARCHAR(100) NOT NULL ,
	[CompanyDescription] NVARCHAR(1000)
);



-------------------------------------------------------------------------------
-- FlightSchedule
-------------------------------------------------------------------------------

IF OBJECT_ID(N'[dbo].[FlightSchedule]', N'U') IS NOT NULL
	DROP TABLE [dbo].[FlightSchedule]
GO  

CREATE TABLE [dbo].[FlightSchedule] (
    [FlightScheduleId] INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    [CompanyId] INT NOT NULL ,
	[DepartureAirportId] INT NOT NULL ,
	[DepartureDT] DATETIME NOT NULL,
	[ArrivalAirportId] INT NOT NULL ,
	[ArrivalDT] DATETIME NOT NULL,
	[Duration] INT NOT NULL ,
	[Price] DECIMAL(10,2) NOT NULL,

	CONSTRAINT [FK_FlightSchedule_Company] 
    FOREIGN KEY ([CompanyId]) REFERENCES [dbo].[Company] ([CompanyId]) ,

	CONSTRAINT [FK_FlightSchedule_Airport_Departure] 
    FOREIGN KEY ([DepartureAirportId]) REFERENCES [dbo].[Airport] ([AirportId]) ,

	CONSTRAINT [FK_FlightSchedule_Airport_Arrival] 
    FOREIGN KEY ([ArrivalAirportId]) REFERENCES [dbo].[Airport] ([AirportId]) 

);

-------------------------------------------------------------------------------
-- ShortList
-------------------------------------------------------------------------------

IF OBJECT_ID(N'[dbo].[ShortList]', N'U') IS NOT NULL
	DROP TABLE [dbo].[ShortList]
GO  

CREATE TABLE [dbo].[ShortList] (
	[ShortListId] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [UserId] INT NOT NULL,
    [FlightScheduleId] INT NOT NULL ,

	CONSTRAINT [FK_ShortList_User] 
    FOREIGN KEY ([UserId]) REFERENCES [dbo].[User] ([UserId]) ,

	CONSTRAINT [FK_ShortList_FlightScheduleId] 
    FOREIGN KEY ([FlightScheduleId]) REFERENCES [dbo].[FlightSchedule] ([FlightScheduleId]) ,

);

-------------------------------------------------------------------------------
-- SeatList
-------------------------------------------------------------------------------

IF OBJECT_ID(N'[dbo].[SeatList]', N'U') IS NOT NULL
	DROP TABLE [dbo].SeatList
GO  

CREATE TABLE [dbo].SeatList (
    [SeatId] INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    [FlightScheduleId] INT NOT NULL ,
	[SeatName] NVARCHAR(4) NOT NULL,
	[Available] BIT DEFAULT(1),

	CONSTRAINT [FK_TicketList_FlightSchedule] 
    FOREIGN KEY ([FlightScheduleId]) REFERENCES [dbo].[FlightSchedule] ([FlightScheduleId]) 

);

-------------------------------------------------------------------------------
-- Ticket
-------------------------------------------------------------------------------

IF OBJECT_ID(N'[dbo].[Ticket]', N'U') IS NOT NULL
	DROP TABLE [dbo].Ticket
GO  

CREATE TABLE [dbo].Ticket (
    [TicketId] INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
	[SeatId] INT NOT NULL ,
	[FlightScheduleId] INT NOT NULL,
    [UserId] INT NOT NULL ,
	[AddressId] INT NOT NULL ,
	[CNP] VARCHAR(13) NOT NULL,
	[Name] NVARCHAR(100) NOT NULL ,
	[Comments] NVARCHAR(1000) ,

	CONSTRAINT [FK_Ticket_SeatList] 
    FOREIGN KEY ([SeatId]) REFERENCES [dbo].[SeatList] ([SeatId]) ,

	CONSTRAINT [FK_Ticket_FlightSchedule] 
    FOREIGN KEY ([FlightScheduleId]) REFERENCES [dbo].[FlightSchedule] ([FlightScheduleId]) ,

	CONSTRAINT [FK_Ticket_User] 
    FOREIGN KEY ([UserId]) REFERENCES [dbo].[User] ([UserId]),

	CONSTRAINT [FK_Ticket_Address] 
    FOREIGN KEY ([AddressId]) REFERENCES [dbo].[Address] ([AddressId]),

);
