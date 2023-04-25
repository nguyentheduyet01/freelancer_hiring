using Microsoft.AspNetCore.Mvc;
using Molas.DTO;
using Molas.Services.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Molas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticationService _authenticationService;
        public AuthenticationController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
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
            return Ok(acc);
        }
    }
}
