
using Molas.DTO;
using static Molas.DTO.CommonDTO;

namespace Molas.Services.Interfaces
{
    public interface IPostService
    {
        Task<ResultDTO> GetListPostAsync(PostInput input);
        Task<PostDTO> GetPostByIdAsync(int id);
        public Task<OutputDTO> PostPostAsync(PostDTO post);

    }
}
