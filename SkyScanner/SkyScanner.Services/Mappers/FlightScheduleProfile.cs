using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using SkyScanner.DTO;
using SkyScanner.Poco;

namespace SkyScanner.Services.Mappers
{
    public class FlightScheduleProfile: Profile
    {
        public FlightScheduleProfile()
        {
            CreateMap<FlightSchedule, FlightScheduleDTO>();
                //.ForMember(dest => dest.ArrivalAirportDTO, opt => opt.MapFrom(src => src.Airport))
                //.ForMember(dest => dest.DepartureAirportDTO, src => src.Ignore());
                //.ForMember(dest => dest.Company, opt => opt.MapFrom(src => src.Company));

            CreateMap<FlightScheduleDTO, FlightSchedule>()
                .ForMember(dest => dest.CompanyId, src => src.Ignore())
                .ForMember(dest => dest.Company, src => src.Ignore())
                .ForMember(dest => dest.DepartureAirportId, src => src.Ignore())
                .ForMember(dest => dest.ArrivalAirportId, src => src.Ignore())
                .ForMember(dest => dest.DepartureAirport, src => src.Ignore())
                .ForMember(dest => dest.ArrivalAirport, src => src.Ignore())
                .ForMember(dest => dest.ShortLists, src => src.Ignore())
                .ForMember(dest => dest.SeatLists, src => src.Ignore())
                .ForMember(dest => dest.Tickets, src => src.Ignore());
        }
    }
}
