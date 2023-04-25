using Molas.DTO;
using Molas.Repositories.Interfaces;
using Molas.Services.Interfaces;
using static Molas.DTO.CommonDTO;

namespace Molas.Services
{
    public class PostService : IPostService
    {
        private readonly IPostRepository  _postRepository;
        public PostService(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }
        public async Task<ResultDTO> GetListPostAsync(int pagesize, int pagenumber)
        {
            var res = await _postRepository.GetListPostsAsync(pagesize, pagenumber);
            ResultDTO result = new ResultDTO();
            result.totalCount = 0;
            result.pageSize = pagesize;
            result.pageIndex = pagenumber;
            result.data = res;
            return result;
        }
    }
}
