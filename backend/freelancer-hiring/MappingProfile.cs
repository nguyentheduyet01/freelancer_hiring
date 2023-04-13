using AutoMapper;
using freelancer_hiring.DTO;
using freelancer_hiring.Models;

internal class MappingProfile : Profile
{
    public MappingProfile()
    {
        // Add as many of these lines as you need to map your objects
        CreateMap<Users, UserDTO>();
        CreateMap<UserDTO, Users>();
    }
}