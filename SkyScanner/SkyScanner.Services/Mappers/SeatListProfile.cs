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
    public class SeatListProfile : Profile
    {
        public SeatListProfile()
        {
            CreateMap<SeatList, SeatListDTO>();

            CreateMap<SeatListDTO, SeatList>()
                .ForMember(dest => dest.Tickets, src => src.Ignore())
                .ForMember(dest => dest.FlightSchedule, src => src.Ignore());
        }
    }
}
