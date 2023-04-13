using freelancer_hiring.Models;

namespace freelancer_hiring.DTO
{
    public class AccountDTO
    {
        public string username { get; set; }
        public string password { get; set; }
    }
    public class LoginOutput
    {
        public bool isSuccess { get; set; }
        public string message { get; set; }
        public Users data { get; set; }
    }
}
