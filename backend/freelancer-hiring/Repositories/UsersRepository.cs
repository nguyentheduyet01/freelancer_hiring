using freelancer_hiring.Data;
using freelancer_hiring.DTO;
using freelancer_hiring.Models;
using freelancer_hiring.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace freelancer_hiring.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        private readonly DataContext _dataContext;
        public UsersRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async  Task<IEnumerable<Users>> GetListUser(int? pageindex, int? pagesize)
        {
            return _dataContext.Users.Skip(100).ToList();

        }

        public async Task<Users> GetUserById(int id)
        {
            return await _dataContext.Users.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Users> GetUserByIdAccount(int id)
        {
            return await _dataContext.Users.FirstAsync(x => x.AccountId == id);
        }

        public async Task<bool> InsertUser(UserDTO user)
        {
                Users u = new Users();
                u.Id = user.Id;
                u.Age = user.Age;
                u.Name = user.Name;
                u.Email = user.Email;
                u.Phone = user.Phone;
                u.Experince = user.Experince;
                u.Gentle = user.Gentle;
                var res = await _dataContext.Users.AddAsync(u);
                OutputDTO result = new OutputDTO();
                if (res != null)
                {
                return true;

                }
                else
                {
                return false;
                }
        }

        Task<UserDTO> IUsersRepository.GetUserByIdAccount(int id)
        {
            throw new NotImplementedException();
        }
    }
}
