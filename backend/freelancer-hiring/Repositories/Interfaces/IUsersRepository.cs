using freelancer_hiring.DTO;
using freelancer_hiring.Models;

namespace freelancer_hiring.Repositories.Interfaces
{
    public interface IUsersRepository
    {
        Task<IEnumerable<Users>> GetListUser();
        Task<Users> GetUserByIdAccount(int id);
        Task<Users> GetUserById(int id);
        Task<bool> InsertUser(UserDTO user);
    }
}
