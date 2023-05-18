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

        public async Task<bool> AddListSkill(ListSkillDTO listSkill)
        {
            try
            {
                foreach(var item in listSkill.ListIdSkill)
                {
                UserSkill userSkill = new UserSkill();
                    userSkill.SkillId = item;
                    userSkill.UserId = listSkill.idUser;
                    var re = _dataContext.UserSkill.Where(n => n.SkillId == userSkill.SkillId && n.UserId == userSkill.UserId).ToList();
                    if(re.Count > 0)
                    {
                        continue;
                    }
                         _dataContext.UserSkill.Add(userSkill);
                }
                await _dataContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                _logger.LogInformation(ex,"Exeption insert list skill");
                throw;
            }
        }

        public async Task<bool> ChangeStatus(int idUser, int status)
        {
            try
            {
                var user = _dataContext.Users.Where(x => x.Id == idUser).ToList();
                if (user.Count > 0)
                {
                    var user1 = user.FirstOrDefault();
                    user1.Status = status;
                    _dataContext.Users.Update(user1);
                    await _dataContext.SaveChangesAsync();
                    return true;
                }
                return false;

            }
            catch
            {
                throw;
            }
        }

        public async Task<bool> DeleteSkill(int skillId, int userId)
        {
            try
            {
                var userSkill = await _dataContext.UserSkill.Where(n => n.SkillId ==  skillId && n.UserId == userId).FirstOrDefaultAsync();
                if(userSkill != null)
                {
                 _dataContext.UserSkill.Remove(userSkill);

                }
                await _dataContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                _logger.LogInformation(ex, "Exeption delete skill");
                throw;
            }
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
                result.totalPage = (result.totalCount / result.pageSize) + (result.totalCount % result.pageSize > 0 ? 1 : 0);
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

        public async Task<ResultDTO> GetListUser(int? pagesize, int pageindex)
        {
            List<UserOutput> listuser = new List<UserOutput>();
            ResultDTO result = new ResultDTO();
            var res = new List<Users>();
            try
            {
                var pots = _dataContext.Users.Where(n => n.Status == 1);
                result.totalCount = await pots.Where(s => s.Status == 1).Distinct().CountAsync();
                res = await pots.Skip((int)(pageindex - 1))
                .Distinct()
                .Take((int)pagesize)
                .Where(s => s.Status == 1)
                .ToListAsync();
                result.pageSize = pagesize;
                result.pageIndex = pageindex;
                result.totalPage = (result.totalCount / result.pageSize) + (result.totalCount % result.pageSize > 0 ? 1 : 0);
                listuser = _mapper.Map< List<UserOutput>>(res);
                foreach(var item in listuser)
                {
                    var skills = from skill in _dataContext.Skill
                                               join us in _dataContext.UserSkill on skill.Id equals us.SkillId
                                               where us.UserId == item.Id
                                               select skill;
                    item.skills = skills.ToList();
                }
                result.data = listuser;
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "can not get list post!");
                throw;
            }
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
            try
            {
                var pots = from post in _dataContext.Posts
                           join userpost in _dataContext.UserPost on post.Id equals userpost.PostId
                           where userpost.UserId == idUser
                           select new { post, userpost };
                result.totalCount = await pots.Where(s => s.post.Status == 1).Distinct().CountAsync();
                result.data = await pots.Skip((int)(pageindex - 1))
                .Distinct()
                .Take((int)pagesize)
                .Where(s => s.post.Status == 1)
                .ToListAsync();
                result.pageSize = pagesize;
                result.pageIndex = pageindex;
                result.totalPage = (result.totalCount / result.pageSize) + (result.totalCount % result.pageSize > 0 ? 1 : 0);
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
                result.totalPage = (result.totalCount / result.pageSize) + (result.totalCount % result.pageSize > 0 ? 1 : 0);

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
                             join us in _dataContext.UserSkill on skill.Id equals us.SkillId
                             where us.UserId == id
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
                result.totalPage = (result.totalCount / result.pageSize) + (result.totalCount % result.pageSize > 0 ? 1 : 0);
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
