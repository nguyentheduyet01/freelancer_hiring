using AutoMapper;
using freelancer_hiring.DTO;
using freelancer_hiring.Models;
using freelancer_hiring.Repositories.Interfaces;
using freelancer_hiring.Services.Interfaces;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace freelancer_hiring.Services
{
    public class AuthenticationServices : IAuthenticationServices
    {
        private readonly IConfiguration _config;
        private readonly IAuthenticationRepository _repository;
        private readonly ILogger<AuthenticationServices> _logger;
        private readonly IUsersRepository _users;
        private readonly IMapper _mapper;

        public AuthenticationServices( IAuthenticationRepository repository, IMapper mapper, IUsersRepository users)
        {
            _repository = repository;
            _mapper = mapper;
            _users = users;
        }
        public async Task<LoginOutput> Login(string username, string password)
        {
            try
            {
                LoginOutput res = new LoginOutput();
                var account = await _repository.FindByUsernameAsync(username);
                if (account == null)
                {
                    res.isSuccess = false;
                    res.message = "Tài khoản không tồn tại! ";
                    return res;
                }
                else
                {
                    if (account.Password == password)
                    {
                        var tokenStr = GenerateJWT(account);
                        res.isSuccess = true;
                        res.data = await _users.GetUserByIdAccount(account.Id);
                        return res;
                    }

                    res.isSuccess = false;
                    res.message = "Mật khẩu không chính xác!";
                    return res;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex?.ToString());
                throw new Exception();
            }
            
        }
        private string GenerateJWT(Account account)
        {
            var issuer = _config["Jwt:Issuer"];
            var audience = _config["Jwt:Audience"];
            var key = Encoding.ASCII.GetBytes(_config["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                new Claim("Id", Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Jti,
                Guid.NewGuid().ToString())
             }),
                Expires = DateTime.UtcNow.AddDays(5),
                Issuer = issuer,
                Audience = audience,
                SigningCredentials = new SigningCredentials
                (new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha512Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = tokenHandler.WriteToken(token);
            var stringToken = tokenHandler.WriteToken(token);
            return stringToken;
        }
    }
}
