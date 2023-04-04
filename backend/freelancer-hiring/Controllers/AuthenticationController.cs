using freelancer_hiring.Models;
using freelancer_hiring.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace freelancer_hiring.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticationServices _authenticationService;
        public AuthenticationController(IAuthenticationServices authenticationService)
        {
            _authenticationService = authenticationService;
        }
        [Route("login")]
        [HttpPost]
        public async Task<ActionResult<Account>> Login(string username, string password)
        {
            var account = await _authenticationService.Login(username, password);

            if (account == null)
            {
                return NotFound();
            }
            return Ok(account);
        }
    }
}
