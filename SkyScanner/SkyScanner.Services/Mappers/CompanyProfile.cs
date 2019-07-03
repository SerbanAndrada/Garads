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
    public class CompanyProfile : Profile
    {
        public CompanyProfile()
        {
            CreateMap<Company, CompanyDTO>();

            CreateMap<CompanyDTO, Company>()
                .ForMember(dest => dest.FlightSchedules, src => src.Ignore());
            
        }
       
    }
}
