using Molas.DTO;

namespace Molas.Repositories.Interfaces
{
    public interface IPostRepository
    {
        Task<IEnumerable<PostDTO>> GetListPostsAsync(int pageindex, int pagesize);
        Task<PostDTO> GetPostByIdAsync(int id);
    }
}
