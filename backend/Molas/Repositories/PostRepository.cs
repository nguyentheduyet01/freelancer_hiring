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
        public async Task<ResultDTO> GetListPostsAsync(int pageindex, int pagesize, int? category_id)
        {
            try
            {
                ResultDTO result = new ResultDTO();
                var res = new List<Posts>();
                if (category_id != null && category_id != 0)
                {
                    var pots  =  _dbContext.Posts.Where(n =>n.CategoryId == category_id);
                    result.totalCount = await pots.Where(s => s.Status == 1).CountAsync();
                    res = await pots.Skip(pageindex-1)
                    .Take(pagesize)
                    .Where(s => s.Status == 1)
                    .ToListAsync();
                }
                else
                {
                    result.totalCount = await _dbContext.Posts.Where(s => s.Status == 1).CountAsync();
                     res = await _dbContext.Posts.Skip(pageindex-1)
                    .Take(pagesize)
                    .Where(s => s.Status == 1)
                    .ToListAsync();
                }
                result.pageSize = pagesize;
                result.pageIndex = pageindex;
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
