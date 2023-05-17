using Molas.DTO;
using Molas.Repositories.Interfaces;
using Molas.Services.Interfaces;
using static Molas.DTO.CommonDTO;

namespace Molas.Services
{
    public class UsersService : IUsersService
    {
        private readonly IUserRepository _userRepository;
        public UsersService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public async Task<ResultDTO> GetPostByUser(int id, int? pagesize, int? pageindex)
        {
            return await _userRepository.GetPostByUser(id, pagesize, pageindex);
        }

        public Task<ResultDTO> GetSkillForUser(int id, int? pagesize, int? pageindex)
        {
            return _userRepository.GetSkillForUser(id, pagesize, pageindex);
        }
        public async Task<ResultDTO> GetPostApplied(int idUser, int? pagesize, int? pageindex)
        {
            return await _userRepository.GetPostApplied(idUser, pagesize, pageindex);
        }

        public async Task<ResultDTO> GetCvForUser(int id, int? pagesize, int? pageindex)
        {
            return await _userRepository.GetCvForUser(id,pagesize, pageindex);
        }

        public async Task<ResultDTO> GetListUser(int? pagesize, int pageindex)
        {
            return await _userRepository.GetListUser(pagesize, pageindex);
        }

        public async Task<bool> AddListSkill(ListSkillDTO listSkill)
        {
            return await _userRepository.AddListSkill(listSkill);
        }

        public async Task<bool> DeleteSkill(int skillId, int userId)
        {
            return await _userRepository.DeleteSkill(skillId,userId);
        }

        public async Task<bool> ChangeStatus(int idUser, int status)
        {
            return await _userRepository.ChangeStatus(idUser, status);
        }
    }
}
