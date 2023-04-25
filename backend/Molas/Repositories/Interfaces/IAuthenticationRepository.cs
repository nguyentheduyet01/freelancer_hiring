using Molas.Models;

namespace Molas.Repositories.Interfaces
{
    public interface IAuthenticationRepository
    {
        Task<Account> FindByUsernameAsync(string account);
    }
}
