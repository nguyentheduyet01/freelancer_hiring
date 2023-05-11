using Molas.Repositories.Interfaces;
using Molas.Services.Interfaces;
using static Molas.DTO.CommonDTO;

namespace Molas.Services
{
    public class SkillService : ISkillService
    {
        private readonly ISkillRepository _skillRepository;
        public SkillService(ISkillRepository skillRepository)
        {
            _skillRepository = skillRepository;
        }
        public async Task<ResultDTO> GetUserBYSkillId(int id, int? pagesize, int? pageindex)
        {
            return await _skillRepository.GetUserBYSkillId(id, pagesize, pageindex);
        }
    }
}
