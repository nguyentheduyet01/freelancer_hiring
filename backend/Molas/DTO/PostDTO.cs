namespace Molas.DTO
{
    public class PostDTO
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string LinkApply { get; set; }

        public string Descriptions { get; set; }

        public string Requirement { get; set; }

        public decimal? Budget { get; set; }

        public int? CreatedBy { get; set; }

        public int? UpdatedBy { get; set; }

        public DateTime? CreaatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public DateTime? Expired { get; set; }

        public int? Status { get; set; }

        public int? CategoryId { get; set; }

        public int? IdUserPost { get; set; }

    }
    public class PostInput
    {
        public int pagesize { get; set; }
        public int pageindex { get; set; }
        public int? category_id { get; set; }
    }
}
