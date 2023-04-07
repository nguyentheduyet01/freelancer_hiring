using freelancer_hiring.Data;
using freelancer_hiring.DTO;
using freelancer_hiring.Models;
using freelancer_hiring.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace freelancer_hiring.Repositories
{
    public class AuthenticationRepository :IAuthenticationRepository
    {
        private readonly DataContext _db;

        public AuthenticationRepository()
        {
        }

        public AuthenticationRepository(DataContext db)
        {
            _db = db;
        }

        public async Task<Account> FindByUsernameAsync(string username)
        {
            return await _db.Account.Where(n => n.Username == username).FirstOrDefaultAsync();
        }
    }
}
