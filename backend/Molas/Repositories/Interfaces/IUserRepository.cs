using Molas.DTO;
using Molas.Models;

namespace Molas.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task<IEnumerable<Users>> GetListUser(int? pageindex, int? pagesize);
        Task<UserDTO> GetUserByIdAccount(int id);
        Task<Users> GetUserById(int id);
        Task<bool> InsertUser(UserDTO user);
    }
}
