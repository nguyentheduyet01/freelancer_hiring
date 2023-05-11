using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Molas.DTO;
using Molas.Models;
using Molas.Molas;
using Molas.Services.Interfaces;

namespace Molas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly MolasDbContext _context;
        private readonly IUsersService _usersService;

        public UsersController(MolasDbContext context, IUsersService usersService)
        {
            _context = context;
            _usersService = usersService;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Users>> GetUsers(int id)
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            var users = await _context.Users.FindAsync(id);

            if (users == null)
            {
                return NotFound();
            }

            return users;
        }
        [HttpGet("{id}/posts")]
        public async Task<ActionResult<PostDTO>> GetPostByUser(int id, int? pagesize, int? pageindex)
        {
          if (id == 0)
          {
              return NotFound();
          }
            var users = await _context.Users.FindAsync(id);

            if (users == null)
            {
                return BadRequest("Can not find User have id = "+ id);
            }
            var res = await _usersService.GetPostByUser(id, pagesize, pageindex);
            return Ok(res);
        }
        [HttpGet("{id}/skill")]
        public async Task<ActionResult<PostDTO>> GetSkillForUser(int id, int? pagesize, int? pageindex)
        {
          if (id == 0)
          {
              return NotFound();
          }
            var users = await _context.Users.FindAsync(id);

            if (users == null)
            {
                return BadRequest("Can not find User have id = "+ id);
            }
            var res = await _usersService.GetSkillForUser(id, pagesize, pageindex);
            return Ok(res);
        }
         [HttpGet("{id}/received")]
        public async Task<ActionResult<PostDTO>> GetPostApplied(int id, int? pagesize, int? pageindex)
        {
          if (id == 0)
          {
              return NotFound();
          }
            var users = await _context.Users.FindAsync(id);

            if (users == null)
            {
                return BadRequest("Can not find User have id = "+ id);
            }
            var res = await _usersService.GetPostApplied(id, pagesize, pageindex);
            return Ok(res);
        }
        [HttpGet("{id}/cvs")]
        public async Task<ActionResult<PostDTO>> GetCvForUser(int id, int? pagesize, int? pageindex)
        {
          if (id == 0)
          {
              return NotFound();
          }
            var users = await _context.Users.FindAsync(id);

            if (users == null)
            {
                return BadRequest("Can not find User have id = "+ id);
            }
            var res = await _usersService.GetCvForUser(id, pagesize, pageindex);
            return Ok(res);
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsers(int id, Users users)
        {
            if (id != users.Id)
            {
                return BadRequest();
            }

            _context.Entry(users).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsersExists(id))
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

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Users>> PostUsers(Users users)
        {
          if (_context.Users == null)
          {
              return Problem("Entity set 'MolasDbContext.Users'  is null.");
          }
            _context.Users.Add(users);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsers", new { id = users.Id }, users);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsers(int id)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            var users = await _context.Users.FindAsync(id);
            if (users == null)
            {
                return NotFound();
            }

            _context.Users.Remove(users);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsersExists(int id)
        {
            return (_context.Users?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
