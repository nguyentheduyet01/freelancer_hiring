using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Molas.DTO;
using Molas.Models;
using Molas.Molas;
using Molas.Repositories.Interfaces;
using static Molas.DTO.CommonDTO;

namespace Molas.Repositories
{
    public class SkillRepository : ISkillRepository
    {
        private readonly MolasDbContext _dataContext;
        private readonly IMapper _mapper;
        private readonly ILogger<UserRepository> _logger;
        public SkillRepository(MolasDbContext dataContext, IMapper mapper, ILogger<UserRepository> logger)
        {
            _dataContext = dataContext;
            _mapper = mapper;
            _logger = logger;
        }

        public async Task<ResultDTO> GetUserBYSkillId(int id, int? pagesize, int? pageindex)
        {
            if (pagesize == null || pagesize == 0)
            {
                pagesize = 15;
            }
            if (pageindex == null || pageindex == 0)
            {
                pageindex = 1;
            }
            ResultDTO result = new ResultDTO();
            var res = new List<Users>();
            try
            {
                var pots = from p in _dataContext.Users
                           join up in _dataContext.UserSkill on p.Id equals up.UserId
                           where up.SkillId == id
                           select p;
                result.totalCount = await pots.Distinct().CountAsync();
                res = await pots.Skip((int)(pageindex - 1))
                .Distinct()
                .Take((int)pagesize)
                .ToListAsync();
                result.pageSize = pagesize;
                result.pageIndex = pageindex;
                result.totalPage = result.totalCount / result.pageSize + result.totalCount % result.pageSize > 0 ? 1 : 0;
                result.data = res;
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "can not get list post!");
                throw;
            }
        }
    }
}
