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
        public async Task<bool> ApplyPost(UserPostDTO userPost)
        {
            return await _postRepository.ApplyPost(userPost);
        }
        public async Task<ResultDTO> GetListPostAsync(PostInput input)
        {
            return await _postRepository.GetListPostsAsync(input);
           
        }

        public async Task<ResultDTO> GetListUserApplied(int id)
        {
            return await _postRepository.GetListUserApplied(id);
        }

        public Task<PostDTO> GetPostByIdAsync(int id)
        {
           return _postRepository.GetPostByIdAsync(id);
        }
        public async Task<OutputDTO> PostPostAsync(PostDTO post)
        {
            OutputDTO result = new OutputDTO();
            var res = await _postRepository.PostPostAsync(post);
            if (res)
            {
                result.isSuccess = true;
            }
            else
            {
                result.isSuccess = false;
                result.message = "Post did not successfully";
            }
            return result;
        }
    }
}
