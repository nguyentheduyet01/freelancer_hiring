using static Molas.DTO.CommonDTO;

namespace Molas.Services.Interfaces
{
    public interface ISkillService
    {
        Task<ResultDTO> GetUserBYSkillId(int id, int? pagesize, int? pageindex);
    }
}
