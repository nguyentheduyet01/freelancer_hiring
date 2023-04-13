using freelancer_hiring.DTO;
using freelancer_hiring.Models;

namespace freelancer_hiring.Services.Interfaces
{
    public interface IAuthenticationServices
    {
        Task<LoginOutput> Login(string username, string password);
    }
}
