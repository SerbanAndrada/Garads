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
    public class TicketProfile : Profile
    {

        public TicketProfile()
        {
            CreateMap<Ticket, TicketDTO>();

            CreateMap<TicketDTO, Ticket>()
                .ForMember(dest => dest.User, src => src.Ignore())
                .ForMember(dest => dest.Address, src => src.Ignore())
                .ForMember(dest => dest.SeatList, src => src.Ignore())
                .ForMember(dest => dest.FlightSchedule, src => src.Ignore());
        }
    }
}
