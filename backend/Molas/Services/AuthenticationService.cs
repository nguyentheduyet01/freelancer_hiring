using Microsoft.IdentityModel.Tokens;
using Molas.DTO;
using Molas.Models;
using Molas.Repositories.Interfaces;
using Molas.Services.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Molas.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IConfiguration _config;
        private readonly IAuthenticationRepository _repository;
        private readonly ILogger<AuthenticationService> _logger;
        private readonly IUserRepository _users;

        public AuthenticationService(IAuthenticationRepository repository, IUserRepository users, IConfiguration configuration, ILogger<AuthenticationService> logger)
        {
            _config = configuration;
            _logger = logger;
            _repository = repository;
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
                        res.token = tokenStr;
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
                Guid.NewGuid().ToString()),
                new Claim("Username", account.Username),
                new Claim("Role", account.RoleId.ToString())
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
        private string EncryptString(string text)
        {
            var key = Encoding.UTF8.GetBytes(_config["Password:Key"]);

            using (var aesAlg = Aes.Create())
            {
                using (var encryptor = aesAlg.CreateEncryptor(key, aesAlg.IV))
                {
                    using (var msEncrypt = new MemoryStream())
                    {
                        using (var csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                        using (var swEncrypt = new StreamWriter(csEncrypt))
                        {
                            swEncrypt.Write(text);
                        }

                        var iv = aesAlg.IV;

                        var decryptedContent = msEncrypt.ToArray();

                        var result = new byte[iv.Length + decryptedContent.Length];

                        Buffer.BlockCopy(iv, 0, result, 0, iv.Length);
                        Buffer.BlockCopy(decryptedContent, 0, result, iv.Length, decryptedContent.Length);

                        return Convert.ToBase64String(result);
                    }
                }
            }
        }

        private string DecryptString(string cipherText)
        {
            var fullCipher = Convert.FromBase64String(cipherText);

            var iv = new byte[16];
            var cipher = new byte[16];

            Buffer.BlockCopy(fullCipher, 0, iv, 0, iv.Length);
            Buffer.BlockCopy(fullCipher, iv.Length, cipher, 0, iv.Length);
            var key = Encoding.UTF8.GetBytes(_config["Password:Key"]);

            using (var aesAlg = Aes.Create())
            {
                using (var decryptor = aesAlg.CreateDecryptor(key, iv))
                {
                    string result;
                    using (var msDecrypt = new MemoryStream(cipher))
                    {
                        using (var csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                        {
                            using (var srDecrypt = new StreamReader(csDecrypt))
                            {
                                result = srDecrypt.ReadToEnd();
                            }
                        }
                    }

                    return result;
                }
            }
        }
    }

}
