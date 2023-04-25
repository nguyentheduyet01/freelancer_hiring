using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Molas.DTO;
using Molas.Models;
using Molas.Molas;
using Molas.Repositories.Interfaces;
using static Molas.DTO.CommonDTO;

namespace Molas.Repositories
{
    public class UserRepository :IUserRepository
    {
        private readonly MolasDbContext _dataContext;
        private readonly IMapper _mapper;

        public UserRepository(MolasDbContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }
        public async Task<IEnumerable<Users>> GetListUser(int? pageindex, int? pagesize)
        {
            return _dataContext.Users.Skip(100).ToList();

        }

        public async Task<Users> GetUserById(int id)
        {
            return await _dataContext.Users.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<UserDTO> GetUserByIdAccount(int id)
        {
            var res = await _dataContext.Users.FirstAsync(x => x.AccountId == id);
            return _mapper.Map<UserDTO>(res);
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
    }
}
