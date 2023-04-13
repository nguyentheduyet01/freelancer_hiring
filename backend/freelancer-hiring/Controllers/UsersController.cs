using freelancer_hiring.DTO;
using freelancer_hiring.Models;
using freelancer_hiring.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace freelancer_hiring.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IActionResult _result;
        private readonly ILogger _logger; 
        private readonly IUsersService _usersService;
        public UsersController(IUsersService usersService)
        {
            _usersService = usersService;
        }
        // GET: api/<UsersController>
        [HttpGet]
        public async Task<ResultDTO> GetListUser(int? pageindex, int? pagesize)
        {
            try
            {
                ResultDTO result = new ResultDTO();
                result.pageIndex = pageindex;
                result.pageSize = pagesize;
                var res = await _usersService.GetUsersAsync(pageindex, pagesize);
                if (res != null)
                {
                    result.totalCount = res.Count();
                    result.data = res.ToList();
                }
                return result;
            }
            catch (Exception ex) {
                _logger.LogInformation(ex, "Get list user exeption!");
                throw;
            }
        }

        // GET api/<UsersController>/5
        [HttpGet("{id}")]
        public async Task<UserDTO> Get(int id)
        {
            return await _usersService.GetUsersByIdAsync(id);
        }

        // POST api/<UsersController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<UsersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
