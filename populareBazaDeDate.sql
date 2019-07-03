BEGIN TRAN

DELETE FROM [ShortList];
DELETE FROM [Ticket];
DELETE FROM [SeatList];
DELETE FROM [FlightSchedule];
DELETE FROM [User];
DELETE FROM [Address];
DELETE FROM [Company];
DELETE FROM [Airport];

DBCC CHECKIDENT ('[User]', RESEED, 0); 
GO
DBCC CHECKIDENT ('[Airport]', RESEED, 0); 
GO
DBCC CHECKIDENT ('[Company]', RESEED, 0); 
GO
DBCC CHECKIDENT ('[Address]', RESEED, 0); 
GO
DBCC CHECKIDENT ('[ShortList]', RESEED, 0); 
GO
DBCC CHECKIDENT ('[FlightSchedule]', RESEED, 0); 
GO
DBCC CHECKIDENT ('[SeatList]', RESEED, 0); 
GO
DBCC CHECKIDENT ('[Ticket]', RESEED, 0); 
GO

-- seed User

INSERT INTO [dbo].[User] ([UserName],[UserEmail],[UserPassword]) VALUES ('Andra','andrada.serban@yahoo.com', '1234');
INSERT INTO [dbo].[User] ([UserName],[UserEmail],[UserPassword]) VALUES ('Ionel','ionel@gmail.com', '1234');
INSERT INTO [dbo].[User] ([UserName],[UserEmail],[UserPassword]) VALUES ('Marcel','marcel@yahoo.com', '1234');
INSERT INTO [dbo].[User] ([UserName],[UserEmail],[UserPassword]) VALUES ('Miruna','popescu@yahoo.com', '1234');
INSERT INTO [dbo].[User] ([UserName],[UserEmail],[UserPassword]) VALUES ('Andreea','andreea@yahoo.com', '1234');
INSERT INTO [dbo].[User] ([UserName],[UserEmail],[UserPassword]) VALUES ('Popa','popa@yahoo.com', '1234');
INSERT INTO [dbo].[User] ([UserName],[UserEmail],[UserPassword]) VALUES ('Anca','anca@gmail.com', '1234');
INSERT INTO [dbo].[User] ([UserName],[UserEmail],[UserPassword]) VALUES ('Cristina','cristina@yahoo.com', '1234');
INSERT INTO [dbo].[User] ([UserName],[UserEmail],[UserPassword]) VALUES ('Vlad','vlad@yahoo.com', '1234');
INSERT INTO [dbo].[User] ([UserName],[UserEmail],[UserPassword]) VALUES ('Ion','ion@yahoo.com', '1234');

SELECT * FROM dbo.[User];

-- seed Address

INSERT INTO [dbo].[Address] ([Country],[City],[Street],[Number]) VALUES ('Romania', 'Bucharest', 'Barierei', 19);
INSERT INTO [dbo].[Address] ([Country],[City],[Street],[Number]) VALUES ('France', 'Paris', 'Rue des Lombards', 112);
INSERT INTO [dbo].[Address] ([Country],[City],[Street],[Number]) VALUES ('France', 'Paris', 'Rue Saint-Denis', 1);
INSERT INTO [dbo].[Address] ([Country],[City],[Street],[Number]) VALUES ('France', 'Paris', 'Rue de Belleville', 45);
INSERT INTO [dbo].[Address] ([Country],[City],[Street],[Number]) VALUES ('Romania', 'Bucharest', 'Stirbei Voda', 19);
INSERT INTO [dbo].[Address] ([Country],[City],[Street],[Number]) VALUES ('Romania', 'Bucharest', 'Calea Victoriei', 356);
INSERT INTO [dbo].[Address] ([Country],[City],[Street],[Number]) VALUES ('Romania', 'Bucharest', 'Corneliu Coposu', 20);
INSERT INTO [dbo].[Address] ([Country],[City],[Street],[Number]) VALUES ('Romania', 'Sibiu', 'Bulevardul Victoriei', 32);
INSERT INTO [dbo].[Address] ([Country],[City],[Street],[Number]) VALUES ('Romania', 'Sibiu', 'SOctavian Goga', 64);
INSERT INTO [dbo].[Address] ([Country],[City],[Street],[Number]) VALUES ('Romania', 'Sibiu', 'Morilor', 4);

SELECT * FROM dbo.[Address];

-- seed Company

INSERT INTO [dbo].[Company] ([CompanyName],[CompanyDescription]) VALUES ('Blue Air', 'Blue Air este o companie română de aviație privată, de tip hybrid, cu sediul în București. Baza principală a companiei este Aeroportul Internațional Henri Coandă, principalul aeroport al Bucureștiului. ');
INSERT INTO [dbo].[Company] ([CompanyName],[CompanyDescription]) VALUES ('Ryanair', 'Ryanair este o companie aeriană irlandeză de tip low-cost, deținută de Ryanair Holdings plc, cea mai mare din Europa, depășind la numărul de pasageri și profit toate companiile aeriane, inclusiv cele ce nu sunt low-cost.');
INSERT INTO [dbo].[Company] ([CompanyName],[CompanyDescription]) VALUES ('Flydubai', 'No descrption');
INSERT INTO [dbo].[Company] ([CompanyName],[CompanyDescription]) VALUES ('Wizz Air', 'Wizz Air este o companie aeriană maghiară, deținută de Wizz Air Holdings Plc și axată pe zboruri în Europa.');
INSERT INTO [dbo].[Company] ([CompanyName],[CompanyDescription]) VALUES ('Tarom', 'umea ar fi un loc mai bun dacă oamenii ar vedea viața ca pe o sumă a călătoriilor pe care le facem. S.C. Transporturile Aeriene Române S.A., este transportatorul de pavilion și cea mai veche companie aeriană din România cu sediul în Otopeni, în apropiere de București. ');


SELECT * FROM dbo.[Company];


-- seed Airport

INSERT INTO [dbo].[Airport] ([AirportName],[AirportCountry],[AirportCity]) VALUES ('Henri Coanda', 'Romania', 'Bucharest');
INSERT INTO [dbo].[Airport] ([AirportName],[AirportCountry],[AirportCity]) VALUES ('Baneasa', 'Romania', 'Bucharest');
INSERT INTO [dbo].[Airport] ([AirportName],[AirportCountry],[AirportCity]) VALUES ('Charles de Gaulle', 'France', 'Paris');
INSERT INTO [dbo].[Airport] ([AirportName],[AirportCountry],[AirportCity]) VALUES ('Orly', 'France', 'Paris');
INSERT INTO [dbo].[Airport] ([AirportName],[AirportCountry],[AirportCity]) VALUES ('Otlteni', 'Romania', 'Craiova');
INSERT INTO [dbo].[Airport] ([AirportName],[AirportCountry],[AirportCity]) VALUES ('A Suarez Barajas', 'Spain', 'Madrid');
INSERT INTO [dbo].[Airport] ([AirportName],[AirportCountry],[AirportCity]) VALUES ('Luton', 'Grate Britain', 'London');
INSERT INTO [dbo].[Airport] ([AirportName],[AirportCountry],[AirportCity]) VALUES ('Tegel', 'Germany', 'Berlin');
INSERT INTO [dbo].[Airport] ([AirportName],[AirportCountry],[AirportCity]) VALUES ('John F Kennedy', 'US', 'New York');
INSERT INTO [dbo].[Airport] ([AirportName],[AirportCountry],[AirportCity]) VALUES ('Dorval', 'Canada', 'Montreal');

SELECT * FROM dbo.[Airport];


-- seed FlightSchedule

INSERT INTO [dbo].[FlightSchedule] ([CompanyId],[DepartureAirportId],[DepartureDT],[ArrivalAirportId],[ArrivalDT],[Duration],[Price]) 
	VALUES (1, 1, '2018-11-11 13:00:00' ,2, '2018-11-11 18:00:00', 1004330, 1000 );
INSERT INTO [dbo].[FlightSchedule] ([CompanyId],[DepartureAirportId],[DepartureDT],[ArrivalAirportId],[ArrivalDT],[Duration],[Price]) 
	VALUES (2, 2, '2018-11-11 17:30:00' ,4, '2018-11-11 21:30:00', 104300, 400 );
INSERT INTO [dbo].[FlightSchedule] ([CompanyId],[DepartureAirportId],[DepartureDT],[ArrivalAirportId],[ArrivalDT],[Duration],[Price]) 
	VALUES (3, 3, '2018-11-11 09:00:00' ,5, '2018-11-11 17:00:00', 35340, 7500 );
INSERT INTO [dbo].[FlightSchedule] ([CompanyId],[DepartureAirportId],[DepartureDT],[ArrivalAirportId],[ArrivalDT],[Duration],[Price]) 
	VALUES (4, 4, '2018-12-11 06:10:00' ,1, '2018-12-11 08:10:00', 55300, 10000 );
INSERT INTO [dbo].[FlightSchedule] ([CompanyId],[DepartureAirportId],[DepartureDT],[ArrivalAirportId],[ArrivalDT],[Duration],[Price]) 
	VALUES (5, 7, '2018-12-11 11:00:00' ,3, '2018-12-11 14:00:00', 10005, 1090.80 );
INSERT INTO [dbo].[FlightSchedule] ([CompanyId],[DepartureAirportId],[DepartureDT],[ArrivalAirportId],[ArrivalDT],[Duration],[Price]) 
	VALUES (1, 2, '2018-12-11 12:00:00' ,1, '2018-12-11 21:00:00', 10060, 650 );
INSERT INTO [dbo].[FlightSchedule] ([CompanyId],[DepartureAirportId],[DepartureDT],[ArrivalAirportId],[ArrivalDT],[Duration],[Price]) 
	VALUES (3, 2, '2019-02-07 13:50:00' ,8, '2019-02-07 18:00:00', 10400, 809 );
INSERT INTO [dbo].[FlightSchedule] ([CompanyId],[DepartureAirportId],[DepartureDT],[ArrivalAirportId],[ArrivalDT],[Duration],[Price]) 
	VALUES (3, 1, '2019-01-20 19:15:00' ,6, '2019-01-20 23:40:00', 13000, 190 );
INSERT INTO [dbo].[FlightSchedule] ([CompanyId],[DepartureAirportId],[DepartureDT],[ArrivalAirportId],[ArrivalDT],[Duration],[Price]) 
	VALUES (2, 8, '2019-01-13 16:00:00' ,5, '2019-01-13 19:10:00', 11000, 106 );
INSERT INTO [dbo].[FlightSchedule] ([CompanyId],[DepartureAirportId],[DepartureDT],[ArrivalAirportId],[ArrivalDT],[Duration],[Price]) 
	VALUES (1, 10, '2019-01-14 16:00:00' ,2, '2019-01-14 19:10:00', 11000, 106 );

SELECT * FROM dbo.[FlightSchedule];


-- seed ShortList

INSERT INTO [dbo].[ShortList] ([UserId],[FlightScheduleId]) VALUES (1, 2);
INSERT INTO [dbo].[ShortList] ([UserId],[FlightScheduleId]) VALUES (1, 5);
INSERT INTO [dbo].[ShortList] ([UserId],[FlightScheduleId]) VALUES (2, 1);
INSERT INTO [dbo].[ShortList] ([UserId],[FlightScheduleId]) VALUES (2, 2);
INSERT INTO [dbo].[ShortList] ([UserId],[FlightScheduleId]) VALUES (2, 6);
INSERT INTO [dbo].[ShortList] ([UserId],[FlightScheduleId]) VALUES (3, 1);
INSERT INTO [dbo].[ShortList] ([UserId],[FlightScheduleId]) VALUES (4, 3);
INSERT INTO [dbo].[ShortList] ([UserId],[FlightScheduleId]) VALUES (4, 2);
INSERT INTO [dbo].[ShortList] ([UserId],[FlightScheduleId]) VALUES (5, 3);
INSERT INTO [dbo].[ShortList] ([UserId],[FlightScheduleId]) VALUES (6, 2);


SELECT * FROM dbo.[ShortList];



-- seed SeatList

INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (1,'1A');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (1,'2A');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (1,'3A');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (1,'4A');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (1,'5A');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (1,'6A');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (1,'7A');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (2,'1A');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (2,'1B');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (2,'1C');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (2,'2A');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (3,'1A');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (3,'1B');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (3,'2A');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (3,'1B');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (3,'3A');
INSERT INTO [dbo].[SeatList] ([FlightScheduleId],[SeatName]) VALUES (3,'3B');

SELECT * FROM dbo.[SeatList];


-- seed Ticket

INSERT INTO [dbo].[Ticket] ([SeatId],[FlightScheduleId],[UserId],[AddressId],[CNP],[Name],[Comments])
	VALUES (1, 1, 1, 1,'294320949101','Andrada Serban','Vreau mancare!');
INSERT INTO [dbo].[Ticket] ([SeatId],[FlightScheduleId],[UserId],[AddressId],[CNP],[Name],[Comments])
	VALUES (2, 1, 1, 4,'294320949102','Ionel','Vreau multa mancare!');
INSERT INTO [dbo].[Ticket] ([SeatId],[FlightScheduleId],[UserId],[AddressId],[CNP],[Name],[Comments])
	VALUES (3, 1, 2, 2,'294320949103','Marcel','Vreau si mai multa mancare!');
INSERT INTO [dbo].[Ticket] ([SeatId],[FlightScheduleId],[UserId],[AddressId],[CNP],[Name],[Comments])
	VALUES (8, 2, 2, 6,'294320949104','Popa','Vreau mancare!');
INSERT INTO [dbo].[Ticket] ([SeatId],[FlightScheduleId],[UserId],[AddressId],[CNP],[Name],[Comments])
	VALUES (9, 2, 1, 1,'294320949105','Banana Mircea','Vreau mancare!');
INSERT INTO [dbo].[Ticket] ([SeatId],[FlightScheduleId],[UserId],[AddressId],[CNP],[Name],[Comments])
	VALUES (10, 2, 5, 10,'294320949106','Gogo','Vreau mancare!');
INSERT INTO [dbo].[Ticket] ([SeatId],[FlightScheduleId],[UserId],[AddressId],[CNP],[Name],[Comments])
	VALUES (14, 3, 5, 8,'294320949107','Miruna','Vreau mancare!');
INSERT INTO [dbo].[Ticket] ([SeatId],[FlightScheduleId],[UserId],[AddressId],[CNP],[Name],[Comments])
	VALUES (15, 3, 5, 1,'294320949108','Teo','Vreau mancare!');
INSERT INTO [dbo].[Ticket] ([SeatId],[FlightScheduleId],[UserId],[AddressId],[CNP],[Name],[Comments])
	VALUES (16, 3, 1, 1,'294320949109','Cosmin','Vreau mancare!');
INSERT INTO [dbo].[Ticket] ([SeatId],[FlightScheduleId],[UserId],[AddressId],[CNP],[Name],[Comments])
	VALUES (17, 3, 2, 1,'2943209491010','Andrei','Vreau mancare!');


SELECT * FROM dbo.[Ticket];

COMMIT