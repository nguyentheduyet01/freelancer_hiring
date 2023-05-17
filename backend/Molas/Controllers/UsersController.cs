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
using static Molas.DTO.CommonDTO;

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
        public async Task<ActionResult<ResultDTO>> GetUsers(int? pagesize, int pageindex)
        {

            return await _usersService.GetListUser(pagesize, pageindex);
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
            var u = new Users();
            u =  _context.Users.FirstOrDefault(u => u.Id == id);
            u.Decription = !string.IsNullOrEmpty(users.Decription) ? users.Decription : u.Decription; 
            u.Name = !string.IsNullOrEmpty(users.Name) ? users.Name : u.Name; 
            u.Gentle = users.Gentle.HasValue ? users.Gentle : u.Gentle; 
            u.Age = users.Age.HasValue ? users.Age : u.Age; 
            u.Phone = !string.IsNullOrEmpty(users.Phone) ? users.Phone : u.Phone; 
            u.Email = !string.IsNullOrEmpty(users.Email) ? users.Email : u.Email; 
            u.Experince = !string.IsNullOrEmpty(users.Experince) ? users.Experince : u.Experince; 
            u.Address = !string.IsNullOrEmpty(users.Address) ? users.Address : u.Address; 
            u.AccountId = users.AccountId.HasValue ? users.AccountId : u.AccountId; 
            u.Status = users.Status.HasValue ? users.Status : u.Status; 
            u.Introdue = !string.IsNullOrEmpty(users.Introdue) ? users.Introdue : u.Introdue; 
            _context.Entry(u).State = EntityState.Modified;

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
        [HttpDelete("skill")]
        public async Task<IActionResult> DeleteSkill(int skillId,int userId)
        {
            var res = await _usersService.DeleteSkill(skillId, userId);
            if (res)
            {
                return Ok("success");
            }
            return BadRequest("Delete faile!");
        }
        [HttpPost("listskill")]
        public async Task<IActionResult> AddListSkill(ListSkillDTO userSkill)
        {
            var res = await _usersService.AddListSkill(userSkill);
            if (res)
            {
                return Ok("success");
            }
            return BadRequest("Add faile!");
        }
         [HttpGet("changestatus")]
        public async Task<IActionResult> ChangeStatus(int idUser, int status)
        {
            var res = await _usersService.ChangeStatus(idUser,status);
            if (res)
            {
                return Ok("success");
            }
            return BadRequest("change faile!");
        }

        private bool UsersExists(int id)
        {
            return (_context.Users?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
