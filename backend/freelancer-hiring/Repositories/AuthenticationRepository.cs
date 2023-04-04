using freelancer_hiring.Data;
using freelancer_hiring.Models;
using freelancer_hiring.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace freelancer_hiring.Repositories
{
    public class AuthenticationRepository :IAuthenticationRepository
    {
        private readonly Database _dBShop;

        public AuthenticationRepository()
        {
        }

        public AuthenticationRepository(Database dBShop)
        {
            _dBShop = dBShop;
        }

        public async Task<Account> FindByUsernameAsync(string username)
        {
            return await _dBShop.Account.Where(n => n.Username == username).FirstOrDefaultAsync();
        }
    }
}
