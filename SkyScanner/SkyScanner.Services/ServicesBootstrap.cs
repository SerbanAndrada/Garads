using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using SkyScanner.DataAccess;
using SkyScanner.Repository;
using SkyScanner.Repository.Implementation;
using SkyScanner.Services.Implementations;
using SkyScanner.Services.Interfaces;
using SkyScanner.Services.Mappers;
using Unity;

namespace SkyScanner.Services
{
    public static class ServicesBootstrap
    {
        public static void ConfigureAutoMapper()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile<UserProfile>();
                cfg.AddProfile<FlightScheduleProfile>();
                cfg.AddProfile<CompanyProfile>();
                cfg.AddProfile<ShortListProfile>();
                cfg.AddProfile<AirportProfile>();
                cfg.AddProfile<SeatListProfile>();
                cfg.AddProfile<AddressProfile>();
                cfg.AddProfile<TicketProfile>();
            });

            Mapper.AssertConfigurationIsValid();
        }

        public static UnityContainer ConfigureUnityContainer()
        {
            var container = new UnityContainer();

            container.RegisterType<IUserService, UserService>();
            container.RegisterType<IFlightScheduleService, FlightScheduleService>();
            container.RegisterType<IShortListService, ShortListService>();
            container.RegisterType<ISeatListService, SeatListService>();
            container.RegisterType<ITicketService, TicketService>();
            container.RegisterType<IAddressService, AddressService>();

            container.RegisterType<ISkyScannerContext, SkyScannerContext>();
            container.RegisterType<IUnitOfWork, SqlUnitOfWork>();

            return container;
        }
    }
}
