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
    public class AirportProfile : Profile
    {
        public AirportProfile()
        {
            CreateMap<Airport, AirportDTO>();

            CreateMap<AirportDTO, Airport>()
                .ForMember(dest => dest.FlightSchedules, src => src.Ignore())
                .ForMember(dest => dest.FlightSchedules1, src => src.Ignore());
        }
    }
}
