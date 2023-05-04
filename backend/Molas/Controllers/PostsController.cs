using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Molas.DTO;
using Molas.Models;
using Molas.Molas;
using Molas.Services.Interfaces;
using static Molas.DTO.CommonDTO;

namespace Molas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly MolasDbContext _context;
        private readonly IPostService _postService;

        public PostsController(MolasDbContext context,IPostService postService)
        {
            _context = context;
            _postService = postService;
        }

        // GET: api/Posts
        //[HttpGet]
        //[Authorize]
        //public async Task<ActionResult<IEnumerable<Posts>>> GetPosts()
        //{
        //  if (_context.Posts == null)
        //  {
        //      return NotFound();
        //  }
        //    return await _context.Posts.ToListAsync();
        //}
        [HttpGet]
        public async Task<ActionResult<ResultDTO>> GetListPostsAsync(int pagesize = 15, int pageindex = 1, int? category_id = 0)
        {
            try
            {
                var res = await _postService.GetListPostAsync(pageindex, pagesize, category_id);
                return Ok(res);
            }
            catch (Exception ex)
            {

                return NotFound();
            }
        }

        // GET: api/Posts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PostDTO>> GetPostsById(int id)
        {
            try
            {
                var res = await _postService.GetPostByIdAsync(id);
                return res;
            }
            catch 
            {
                throw;
            }
        }

        // PUT: api/Posts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPosts(int id, Posts posts)
        {
            if (id != posts.Id)
            {
                return BadRequest();
            }

            _context.Entry(posts).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Posts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<OutputDTO>> PostPosts(PostDTO posts)
        {
            var res = await _postService.PostPostAsync(posts);
            return Ok(res);
        }

        // DELETE: api/Posts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePosts(int id)
        {
            if (_context.Posts == null)
            {
                return NotFound();
            }
            var posts = await _context.Posts.FindAsync(id);
            if (posts == null)
            {
                return NotFound();
            }

            _context.Posts.Remove(posts);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PostsExists(int id)
        {
            return (_context.Posts?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
