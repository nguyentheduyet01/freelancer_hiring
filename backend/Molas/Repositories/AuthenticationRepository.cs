using Microsoft.EntityFrameworkCore;
using Molas.Models;
using Molas.Molas;
using Molas.Repositories.Interfaces;

namespace Molas.Repositories
{
    public class AuthenticationRepository : IAuthenticationRepository
    {
        private readonly MolasDbContext _db;

        public AuthenticationRepository()
        {
        }

        public AuthenticationRepository(MolasDbContext db)
        {
            _db = db;
        }

        public async Task<Account> FindByUsernameAsync(string username)
        {
            return await _db.Account.Where(n => n.Username == username).FirstOrDefaultAsync();
        }
    }
}
