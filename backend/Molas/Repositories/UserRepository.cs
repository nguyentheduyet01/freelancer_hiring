using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Molas.DTO;
using Molas.Models;
using Molas.Molas;
using Molas.Repositories.Interfaces;
using System.Linq;
using static Molas.DTO.CommonDTO;

namespace Molas.Repositories
{
    public class UserRepository :IUserRepository
    {
        private readonly MolasDbContext _dataContext;
        private readonly IMapper _mapper;
        private readonly ILogger<UserRepository> _logger;


        public UserRepository(MolasDbContext dataContext, IMapper mapper, ILogger<UserRepository> logger)
        {
            _dataContext = dataContext;
            _mapper = mapper;
            _logger = logger;
        }

        public async Task<ResultDTO> GetCvForUser(int id, int? pagesize, int? pageindex)
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
            var res = new List<FileData>();
            try
            {
                var cv = _dataContext.FileData.Where(n => n.UserId == id && n.Type == 2);
                result.totalCount = await cv.Distinct().CountAsync();
                res = await cv.Skip((int)(pageindex - 1))
                .Distinct()
                .Take((int)pagesize)
                .ToListAsync();
                result.pageSize = pagesize;
                result.pageIndex = pageindex;
                result.data = res;
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "can not get list post!");
                throw;
            }
        }

        public async Task<IEnumerable<Users>> GetListUser(int? pageindex, int? pagesize)
        {
            return _dataContext.Users.Skip(100).ToList();

        }

        public async Task<ResultDTO> GetPostApplied(int idUser, int? pagesize, int? pageindex)
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
            var res = new List<Posts>();
            try
            {
                var pots = from p in _dataContext.Posts
                           join up in _dataContext.UserPost on p.Id equals up.PostId
                           where up.UserId == idUser
                           select p;
                result.totalCount = await pots.Where(s => s.Status == 1).Distinct().CountAsync();
                res = await pots.Skip((int)(pageindex - 1))
                .Distinct()
                .Take((int)pagesize)
                .Where(s => s.Status == 1)
                .ToListAsync();
                result.pageSize = pagesize;
                result.pageIndex = pageindex;
                result.data = res;
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "can not get list post!");
                throw;
            }
        }

        public async Task<ResultDTO> GetPostByUser(int id, int? pagesize, int? pageindex)
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
            var res = new List<Posts>();
            try
            {
                var pots = _dataContext.Posts.Where(n => n.CreatedBy == id);
                result.totalCount = await pots.Where(s => s.Status == 1).Distinct().CountAsync();
                res = await pots.Skip((int)(pageindex - 1))
                .Distinct()
                .Take((int)pagesize)
                .Where(s => s.Status == 1)
                .ToListAsync();
                result.pageSize = pagesize;
                result.pageIndex = pageindex;
                result.data = res;
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "can not get list post!");
                throw;
            }

        }

        public async Task<ResultDTO> GetSkillForUser(int id, int? pagesize, int? pageindex)
        {
            if(pagesize == null || pagesize == 0)
            {
                pagesize = 15;
            }
            if(pageindex == null || pageindex ==0)
            {
                pageindex = 1;
            }
            ResultDTO result = new ResultDTO();
            try
            {
                var skills = from skill in _dataContext.Skill
                             join us in _dataContext.UserSkill on skill.Id equals us.IdSkill
                             where us.IdUser == id
                             select new { skill, id };
                //var skills = _dataContext.Skill.Join(_dataContext.UserSkill, sk => sk.Id, us => us.Id_Skill,
                //    (sk, us) => new
                //    {
                //        sk,
                //        us.Id_User
                //    }).Where(n => n.Id_User == id);
                result.totalCount = await skills.Distinct().CountAsync();
                var res = await skills.Skip((int)(pageindex -1))
                .Distinct()
                .Take((int)pagesize)
                .ToListAsync();
                result.pageSize = pagesize;
                result.pageIndex = pageindex;
                result.data = res;
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "can not get list skill for user!");
                throw;
            }
        }

        public async Task<Users> GetUserById(int id)
        {
            return await _dataContext.Users.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<UserDTO> GetUserByIdAccount(int id)
        {
            var res = await _dataContext.Users.FirstAsync(x => x.AccountId == id);
            return _mapper.Map<UserDTO>(res);
        }

        public async Task<bool> InsertUser(UserDTO user)
        {
            Users u = new Users();
            u.Id = user.Id;
            u.Age = user.Age;
            u.Name = user.Name;
            u.Email = user.Email;
            u.Phone = user.Phone;
            u.Experince = user.Experince;
            u.Gentle = user.Gentle;
            var res = await _dataContext.Users.AddAsync(u);
            OutputDTO result = new OutputDTO();
            if (res != null)
            {
                return true;

            }
            else
            {
                return false;
            }
        }
    }
}
