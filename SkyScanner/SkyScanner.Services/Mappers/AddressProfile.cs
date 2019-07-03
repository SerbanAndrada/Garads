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
    public class AddressProfile : Profile
    {
        public AddressProfile()
        {
            CreateMap<Address, AddressDTO>();

            CreateMap<AddressDTO, Address>()
                .ForMember(dest => dest.AddressId, src => src.Ignore())
                .ForMember(dest => dest.Tickets, src => src.Ignore());
        }
    }
}
