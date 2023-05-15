using Molas.DTO;
using Molas.Models;
using static Molas.DTO.CommonDTO;

namespace Molas.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task<IEnumerable<Users>> GetListUser(int? pageindex, int? pagesize);
        Task<UserDTO> GetUserByIdAccount(int id);
        Task<Users> GetUserById(int id);
        Task<bool> InsertUser(UserDTO user);
        Task<ResultDTO> GetPostByUser(int id, int? pagesize, int? pageindex);
        Task<ResultDTO> GetSkillForUser(int id, int? pagesize, int? pageindex);
        Task<ResultDTO> GetCvForUser(int id, int? pagesize, int? pageindex);
        Task<ResultDTO> GetPostApplied(int idUser, int? pagesize, int? pageindex);
        Task<ResultDTO> GetListUser(int? pagesize, int pageindex);

    }
}
