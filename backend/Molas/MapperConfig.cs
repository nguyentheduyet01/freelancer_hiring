using AutoMapper;
using Molas.DTO;
using Molas.Models;

namespace Molas
{
    public class MapperConfig : Profile
    {
        public MapperConfig()
        {
            CreateMap<Users, UserDTO>();
            CreateMap<UserDTO, Users>();
            CreateMap<PostDTO, Posts>();
            CreateMap<Posts, PostDTO>();
        }
    }
}
