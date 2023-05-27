namespace Molas.Models
{
    public class UploadFiles
    {
        public int UserId { get; set; }
        public IFormFile files { get; set; }
        public string? Title { get; set; }
        public int Type { get; set; }
    }
}
