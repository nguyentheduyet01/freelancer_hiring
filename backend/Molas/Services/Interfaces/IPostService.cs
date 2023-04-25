
using static Molas.DTO.CommonDTO;

namespace Molas.Services.Interfaces
{
    public interface IPostService
    {
        Task<ResultDTO> GetListPostAsync(int pagesize, int pagenumber);
    }
}
