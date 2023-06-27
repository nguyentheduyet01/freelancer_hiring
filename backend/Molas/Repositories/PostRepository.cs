using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Molas.DTO;
using Molas.Models;
using Molas.Molas;
using Molas.Repositories.Interfaces;
using System.Drawing.Printing;
using static Molas.DTO.CommonDTO;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Molas.Repositories
{
    public class PostRepository : IPostRepository
    {
        private readonly MolasDbContext _dbContext;
        private readonly ILogger<PostRepository> _logger;
        private readonly IMapper _mapper;
        public PostRepository(MolasDbContext dbContext, ILogger<PostRepository> logger,IMapper mapper)
        {
            _dbContext = dbContext;
            _logger = logger;
            _mapper = mapper;
        }

        public async Task<bool> ApplyPost(UserPostDTO userPost)
        {
            try
            {
                UserPost apply = _mapper.Map<UserPost>(userPost);
                 _dbContext.UserPost.Add(apply);
                 await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "can not apply post!");
                throw;
            }
        }

        public async Task<ResultDTO> GetListPostsAsync(PostInput input)
        {
            try
            {
                ResultDTO result = new ResultDTO();
                var res = new List<Posts>();
                IQueryable<Posts> query = _dbContext.Posts;
                var posts = await _dbContext.Posts.Where(n => n.Status == 1).ToListAsync();
                if (input.category.HasValue && input.category > 0)
                {
                    query = from a in _dbContext.Posts
                               join cp in _dbContext.CategoryPost on a.Id equals cp.PostId
                               where cp.CategoryId == input.category
                               select a;
                }
                if (input.skill.HasValue && input.skill > 0) 
                {
                    query = from a in query
                            join cp in _dbContext.PostSkill on a.Id equals cp.PostId
                            where cp.SkillId == input.skill
                            select a;
                }
                if(input.PaymentMethod.HasValue && input.PaymentMethod > 0)
                {
                    query = query.Where(n => n.PaymentMethod == input.PaymentMethod);
                }
                if(input.WorkingMethod.HasValue && input.WorkingMethod > 0)
                {
                    query = query.Where(n => n.WorkingMethod == input.WorkingMethod);
                }
                if (!string.IsNullOrEmpty(input.address))
                {
                    query = query.Where(n => n.Address.ToLower().Contains(input.address.ToLower()));
                }
                if (!string.IsNullOrEmpty(input.search))
                {
                    query = query.Where(n => n.Title.ToLower().Contains(input.search.ToLower()));
                }
                
                result.totalCount = query.Where(s => s.Status == 1 && s.Expired > DateTime.Now).Distinct().Count();
                res = query.Skip((int)((input.pageindex - 1) * input.pagesize))
                   .Distinct()
                   .Where(s => s.Status == 1 && s.Expired > DateTime.Now)
                   .Take(input.pagesize)
                   .ToList();
                result.pageSize = input.pagesize;
                result.pageIndex = input.pageindex;
                result.totalPage = ( result.totalCount / result.pageSize) + (result.totalCount % result.pageSize > 0 ? 1 : 0);
                result.data = res;
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex,"can not get list post!");
                throw;
            }
        }

        public async Task<ResultDTO> GetListUserApplied(int id)
        {
            var pots = from user in _dbContext.Users
                       join userpost in _dbContext.UserPost on user.Id equals userpost.UserId
                       where userpost.PostId == id
                       select new {user, userpost};
            var data = pots.ToList();
            var resultList = new List<object>();
            for (int i = 0; i < data.Count - 1; i++)
            {
                if (data[i].user != data[i + 1].user)
                {
                    resultList.Add(data[i]);
                }
                if (i == data.Count - 2)
                {
                    resultList.Add(data[i + 1]);
                }

            }
            var result = new ResultDTO();
            result.data = resultList;
            if(data.Count == 1)
            {
                result.data = data[0];
            }
            return result;
        }

        public async Task<PostDTO> GetPostByIdAsync(int id)
        {
            var res = await _dbContext.Posts.Where(n => n.Id == id).FirstOrDefaultAsync();
            return _mapper.Map<PostDTO>(res);
        }

        public async Task<bool> PostPostAsync(PostDTO post)
        {
            try
            {
                Posts posts = _mapper.Map<Posts>(post);
                _dbContext.Posts.Add(posts);
                await _dbContext.SaveChangesAsync();
                CategoryPost categoryPost = new CategoryPost();
                categoryPost.CategoryId = post.categoryId;
                categoryPost.PostId = posts.Id;
                _dbContext.CategoryPost.Add(categoryPost);
                await _dbContext.SaveChangesAsync();

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
