﻿using Molas.DTO;
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
    }
}