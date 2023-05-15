namespace Molas.DTO
{
    public class UserPostDTO
    {
        public decimal? Salary { get; set; }

        public DateTime? CreatedAt { get; set; }

        public int? UserId { get; set; }

        public int? PostId { get; set; }
        public int? CvId { get; set; }
        public string? Suggestion { get; set; }
        public DateTime? IntendTime { get; set; }
    }
}
