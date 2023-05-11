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

        public int? WorkingMethod { get; set; }
        public int? PaymentMethod { get; set; }

        public DateTime? Expired { get; set; }

        public int? Status { get; set; }

        public DateTime? CreatedAt { get; set; }
        public string? Address { get; set; }


    }
    public class PostInput
    {
        public int pagesize { get; set; }
        public int pageindex { get; set; }
        public int? category_id { get; set; }
    }
}
