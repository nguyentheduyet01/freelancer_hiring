namespace Molas.DTO
{
    public class CommonDTO
    {
        public class OutputDTO
        {
            public bool isSuccess { get; set; }
            public string message { get; set; }
            public object? data { get; set; }
        }
        public class ResultDTO
        {
            public int? pageSize { get; set; }
            public int? totalCount { get; set; }
            public int? totalPage { get; set; }

            public int? pageIndex { get; set; }
            public object? data { get; set; }
        }
    }
}
