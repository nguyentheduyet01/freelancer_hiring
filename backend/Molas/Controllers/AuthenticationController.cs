using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Molas.DTO;
using Molas.Models;
using Molas.Molas;
using Molas.Services.Interfaces;
using static Molas.DTO.CommonDTO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Molas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly MolasDbContext _context;
        private readonly IAuthenticationService _authenticationService;
        public AuthenticationController(IAuthenticationService authenticationService, MolasDbContext context)
        {
            _authenticationService = authenticationService;
            _context = context;
        }
        [Route("login")]
        [HttpPost]
        public async Task<ActionResult<LoginOutput>> Login([FromBody] LoginInput account)
        {
            var acc = await _authenticationService.Login(account.username, account.password);

            if (acc == null)
            {
                return NotFound();
            }
            else if(acc.isSuccess == false)
            {
                return BadRequest(acc.message);
            }
            return Ok(acc);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Account>> GetCategory(int id)
        {
            if (_context.Account == null)
            {
                return NotFound();
            }
            var category = await _context.Account.FindAsync(id);

            if (category == null)
            {
                return NotFound();
            }

            return category;
        }

        // PUT: api/Categories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("changepassword")]
        public async Task<IActionResult> PutCategory(int id,[FromBody] PasswordDTO pass)
        {
          
                OutputDTO res = new OutputDTO();
            Account account = await _context.Account.FindAsync(id);
            if(account.Password != pass.OldPassword)
            {
                res.message = "Old password not corect!";
                return BadRequest(res);
            }
            if(pass.Password == pass.OldPassword)
            {
                res.message = "Old password equal new password!";
                return BadRequest(res);
            }
            
            account.Password = pass.Password;
            _context.Entry(account).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }
        private bool CategoryExists(int id)
        {
            return (_context.Account?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
