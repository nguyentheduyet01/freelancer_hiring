using freelancer_hiring.Models;

namespace freelancer_hiring.Repositories.Interfaces
{
    public interface IAuthenticationRepository
    {
        Task<Account> FindByUsernameAsync(string username);
    }
}
