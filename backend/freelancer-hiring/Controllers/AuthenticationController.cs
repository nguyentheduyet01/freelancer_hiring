using freelancer_hiring.DTO;
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
        public async Task<ActionResult<LoginOutput>> Login([FromBody] AccountDTO account)
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
