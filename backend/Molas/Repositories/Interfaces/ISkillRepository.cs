using static Molas.DTO.CommonDTO;

namespace Molas.Repositories.Interfaces
{
    public interface ISkillRepository
    {
        Task<ResultDTO> GetUserBYSkillId(int id, int? pagesize, int? pageindex);
    }
}
