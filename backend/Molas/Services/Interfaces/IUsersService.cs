using static Molas.DTO.CommonDTO;

namespace Molas.Services.Interfaces
{
    public interface IUsersService
    {
        public Task<ResultDTO> GetPostByUser(int id, int? pagesize, int? pageindex);
        public Task<ResultDTO> GetSkillForUser(int id, int? pagesize, int? pageindex);
    }
}
