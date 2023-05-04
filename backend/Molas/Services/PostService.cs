﻿using Molas.DTO;
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
        public async Task<ResultDTO> GetListPostAsync(int pagesize, int pagenumber, int? category_id)
        {
            return await _postRepository.GetListPostsAsync(pagesize, pagenumber,category_id);
           
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
