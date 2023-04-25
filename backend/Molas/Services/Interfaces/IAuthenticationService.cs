using Molas.DTO;

namespace Molas.Services.Interfaces
{
    public interface IAuthenticationService
    {
        Task<LoginOutput> Login(string username, string password);
    }
}
