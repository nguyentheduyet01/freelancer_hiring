using Molas.Models;

namespace Molas.DTO
{
    public class UserDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int? Gentle { get; set; }

        public int? Age { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string Experince { get; set; }

        public int? AccountId { get; set; }

        public string Address { get; set; }

        public string Decription { get; set; }

        public int? Status { get; set; }

        public string Introdue { get; set; }

    }
    public class UserOutput : UserDTO
    {
        public List<Skill>? skills { get; set; }
    }
}
