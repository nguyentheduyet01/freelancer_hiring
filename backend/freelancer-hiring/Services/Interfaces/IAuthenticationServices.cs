using freelancer_hiring.Models;

namespace freelancer_hiring.Services.Interfaces
{
    public interface IAuthenticationServices
    {
        Task<Account> Login(string username, string password);
    }
}
