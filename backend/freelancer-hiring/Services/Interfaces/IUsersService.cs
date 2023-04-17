using freelancer_hiring.DTO;
using freelancer_hiring.Models;

namespace freelancer_hiring.Services.Interfaces
{
    public interface IUsersService
    {
        Task<IEnumerable<Users>> GetUsersAsync(int? pageindex, int? pagesize);
        Task<Users> GetUsersByIdAsync(int id);
        Task<UserDTO> GetUsersByUsername(string username);
        Task<OutputDTO> InsertUser(UserDTO user);

    }
}
