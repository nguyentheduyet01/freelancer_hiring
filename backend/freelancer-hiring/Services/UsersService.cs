using freelancer_hiring.DTO;
using freelancer_hiring.Models;
using freelancer_hiring.Repositories.Interfaces;
using freelancer_hiring.Services.Interfaces;

namespace freelancer_hiring.Services
{
    public class UsersService : IUsersService
    {
        private readonly IUsersRepository _usersRepository;
        private readonly IAuthenticationRepository _authenticationRepository;
        private readonly ILogger _logger;
        private readonly IConfiguration _configuration;
        public UsersService(IUsersRepository usersRepository, IAuthenticationRepository authenticationRepository)
        {
            _usersRepository = usersRepository;
            _authenticationRepository = authenticationRepository;
        }
        public async Task<IEnumerable<Users>> GetUsersAsync(int? pageindex, int? pagesize)
        {
            return await _usersRepository.GetListUser(pageindex,pagesize);
        }

        public async Task<Users> GetUsersByIdAsync(int id)
        {
            return await _usersRepository.GetUserById(id);
        }

        public async Task<UserDTO> GetUsersByUsername(string username)
        {
            var acc = await _authenticationRepository.FindByUsernameAsync(username);
            return await _usersRepository.GetUserByIdAccount(acc.Id);
        }

        public async Task<OutputDTO> InsertUser(UserDTO user)
        {
                var res = await _usersRepository.InsertUser(user);
                OutputDTO output = new OutputDTO();
                if (res)
                {
                    output.isSuccess = true;
                    return output;
                }
                else
                {
                    output.isSuccess= false;
                    output.message = "Thêm mới người dùng không thành công";
                    return output;
                }
        }
    }
}
