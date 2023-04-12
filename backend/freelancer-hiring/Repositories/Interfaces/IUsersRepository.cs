using freelancer_hiring.DTO;
using freelancer_hiring.Models;

namespace freelancer_hiring.Repositories.Interfaces
{
    public interface IUsersRepository
    {
        Task<IEnumerable<UserDTO>> GetListUser(int? pageindex, int? pagesize);
        Task<UserDTO> GetUserByIdAccount(int id);
        Task<UserDTO> GetUserById(int id);
        Task<bool> InsertUser(UserDTO user);
    }
}
