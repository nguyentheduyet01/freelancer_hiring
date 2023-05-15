using static Molas.DTO.CommonDTO;

namespace Molas.Services.Interfaces
{
    public interface IUsersService
    {
        Task<ResultDTO> GetPostByUser(int id, int? pagesize, int? pageindex);
        Task<ResultDTO> GetListUser( int? pagesize, int pageindex);
        Task<ResultDTO> GetSkillForUser(int id, int? pagesize, int? pageindex);
        Task<ResultDTO> GetPostApplied(int idUser, int? pagesize, int? pageindex);
        Task<ResultDTO> GetCvForUser(int id, int? pagesize, int? pageindex);
    }
}
