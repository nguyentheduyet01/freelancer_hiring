using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Molas.DTO;
using Molas.Models;
using Molas.Molas;
using Molas.Repositories.Interfaces;
using static Molas.DTO.CommonDTO;

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
                if (input.category_id != null && input.category_id != 0)
                {
                    var pots = from a in _dbContext.Posts
                               join cp in _dbContext.CategoryPost on a.Id equals cp.PostId
                               where cp.CategoryId == input.category_id
                               select a;
                    result.totalCount = await pots.Where(s => s.Status == 1).CountAsync();
                    res = await pots.Skip(input.pageindex-1)
                    .Take(input.pagesize)
                    .Where(s => s.Status == 1)
                    .ToListAsync();
                }
                else
                {
                    result.totalCount = await _dbContext.Posts.Where(s => s.Status == 1).CountAsync();
                     res = await _dbContext.Posts.Skip(input.pageindex -1)
                    .Take(input.pagesize)
                    .Where(s => s.Status == 1)
                    .ToListAsync();
                }
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
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
