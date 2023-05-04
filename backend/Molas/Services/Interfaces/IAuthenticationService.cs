using Molas.DTO;
using Molas.Models;
using static Molas.DTO.CommonDTO;

namespace Molas.Services.Interfaces
{
    public interface IAuthenticationService
    {
        Task<LoginOutput> Login(string username, string password);
        Task<OutputDTO>  CreateAccount(string username, string password, int role);
    }
}
