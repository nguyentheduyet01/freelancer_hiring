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
                var res = await _dbContext.Posts.Skip(pageindex-1)
                .Take(pagesize)
                .ToListAsync();
                ResultDTO result = new ResultDTO();
                result.totalCount = await _dbContext.Posts.CountAsync();
                result.pageSize = pagesize;
                result.pageIndex = pageindex;
                result.data = res;
                if (category_id != null && category_id != 0)
                {
                result.data = res.Where(n =>n.CategoryId == category_id);
                }
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
