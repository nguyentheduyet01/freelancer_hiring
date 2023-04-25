using Molas.Models;

namespace Molas.DTO
{
    public class AccountDTO
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public int? RoleId { get; set; }


    }
    public class LoginInput
    {
        public string username { get; set; }
        public string password { get; set; }
    }
    public class LoginOutput
    {
        public bool isSuccess { get; set; }
        public string message { get; set; }
        public string token { get; set; }
        public UserDTO? data { get; set; }
    }
}
