using AutoMapper;
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
        private readonly IMapper _mapper;
        public UsersRepository(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }
        public async  Task<IEnumerable<UserDTO>> GetListUser(int? pageindex, int? pagesize)
        {
            var listuser = _dataContext.Users.Skip(100).ToList();
            return _mapper.Map<IEnumerable<UserDTO>>(listuser);
        }

        public async Task<UserDTO> GetUserById(int id)
        {
            var res = await _dataContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            return _mapper.Map<UserDTO>(res);
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
