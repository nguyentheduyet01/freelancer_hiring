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

        public AuthenticationServices()
        {
        }

        public AuthenticationServices(IConfiguration config, IAuthenticationRepository repository)
        {
            _config = config;
            _repository = repository;
        }
        public async Task<Account> Login(string username, string password)
        {
            var account = await _repository.FindByUsernameAsync(username);
            if (account == null)
            {
                return null;
            }
            else
            {
                if (account.Password == password)
                {
                    Account acc = new Account();
                    var tokenStr = GenerateJWT(account);
                    acc.Id = account.Id;
                    acc.Username = account.Username;
                    acc.Password = account.Password;
                   // acc.Token = tokenStr;
                    return acc;
                }
                return null;
            }
        }
        private string GenerateJWT(Account account)
        {
            var issuer = _config["Jwt:Issuer"];
            var audience = _config["Jwt:Audience"];
            var key = Encoding.ASCII.GetBytes
            (_config["Jwt:Key"]);
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
