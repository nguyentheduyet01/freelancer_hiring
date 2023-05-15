using Molas.DTO;
using static Molas.DTO.CommonDTO;

namespace Molas.Repositories.Interfaces
{
    public interface IPostRepository
    {
        Task<ResultDTO> GetListPostsAsync(PostInput input);
        Task<PostDTO> GetPostByIdAsync(int id);
        Task<bool> PostPostAsync(PostDTO post);
        Task<bool> ApplyPost(UserPostDTO userPost);
    }
}
