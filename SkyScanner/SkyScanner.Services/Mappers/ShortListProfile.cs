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
    public class ShortListProfile : Profile
    {
        public ShortListProfile()
        {
        CreateMap<ShortList, ShortListDTO>();

        CreateMap<ShortListDTO, ShortList>()
                .ForMember(dest => dest.User, src => src.Ignore())
                .ForMember(dest => dest.FlightScheduleId, src => src.Ignore());
        }
        
    }
}
