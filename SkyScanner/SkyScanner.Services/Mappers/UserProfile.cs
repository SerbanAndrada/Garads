using AutoMapper;
using SkyScanner.DTO;
using SkyScanner.Poco;

namespace SkyScanner.Services.Mappers
{
    public class UserProfile: Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDTO>();

            CreateMap<UserDTO, User>()
                .ForMember(dest => dest.ShortLists, src => src.Ignore())
                .ForMember(dest => dest.Tickets, src => src.Ignore())
                .ForMember(dest => dest.UserId, src => src.Ignore()); 
        }
        
    }
}
