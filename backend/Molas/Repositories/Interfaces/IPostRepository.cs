using Molas.DTO;
using static Molas.DTO.CommonDTO;

namespace Molas.Repositories.Interfaces
{
    public interface IPostRepository
    {
        Task<ResultDTO> GetListPostsAsync(int pageindex, int pagesize,int? category_id);
        Task<PostDTO> GetPostByIdAsync(int id);
    }
}
