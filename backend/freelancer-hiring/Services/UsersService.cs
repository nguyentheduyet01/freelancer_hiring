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
        public UsersService(IUsersRepository usersRepository, ILogger logger, IConfiguration configuration,IAuthenticationRepository authenticationRepository)
        {
            _usersRepository = usersRepository;
            _authenticationRepository = authenticationRepository;
            _logger = logger;
            _configuration = configuration;
        }
        public async Task<IEnumerable<Users>> GetUsersAsync()
        {
            return await _usersRepository.GetListUser();
        }

        public async Task<Users> GetUsersByIdAsync(int id)
        {
            return await _usersRepository.GetUserById(id);
        }

        public async Task<Users> GetUsersByUsername(string username)
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
