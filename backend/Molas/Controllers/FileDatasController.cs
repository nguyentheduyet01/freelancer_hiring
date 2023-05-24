using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Molas.Models;
using Molas.Molas;
using System.Net;

namespace Molas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileDatasController : ControllerBase
    {
        private readonly MolasDbContext _context;
        private static IWebHostEnvironment _webHostEnvironment;

        public FileDatasController(MolasDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }

        // GET: api/FileDatas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FileData>>> GetFileData()
        {
            if (_context.FileData == null)
            {
                return NotFound();
            }
            return await _context.FileData.ToListAsync();
        }
        [Route("upload")]
        [HttpPost]
        public async Task<ActionResult> Upload([FromForm] UploadFiles obj)
        {
            if (obj.files.Length > 0)
            {
                try
                {
                    FileData fileData = new FileData();
                    fileData.UserId = obj.UserId;
                    fileData.Title = obj.Title;
                    fileData.FileName = obj.files.FileName;
                    fileData.Type = obj.Type;
                    fileData.CreatedAt = DateTime.Now;
                    _context.FileData.Add(fileData);
                    await _context.SaveChangesAsync();
                    var idfile = fileData.Id;
                    if (!Directory.Exists(_webHostEnvironment.WebRootPath + "\\Files\\"))
                    {
                        Directory.CreateDirectory(_webHostEnvironment.WebRootPath + "\\Files\\");
                    }
                    using (FileStream fileStream = System.IO.File.Create(_webHostEnvironment.WebRootPath + "\\Files\\" + idfile.ToString() + "_" + obj.files.FileName))
                    {
                        obj.files.CopyTo(fileStream);
                        fileStream.Flush();
                        return Ok(idfile.ToString() + "_" + obj.files.FileName);
                    }
                }
                catch (Exception ex)
                {
                    throw;
                }
            }
            return BadRequest("No ok");
        }
        // GET: api/FileDatas/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetFileData(int id)
        {

            try
            {
                var fileData = await _context.FileData.FindAsync(id);

                if (fileData == null)
                {
                    return BadRequest("Không thấy file lưu trong cơ sở dữ liệu!");
                }
                //using (FileStream fileStream = System.IO.File.OpenRead(_webHostEnvironment.WebRootPath + "\\Files\\" + id.ToString() + "_" + fileData.FileName))
                //{

                //    return Ok(fileStream);
                //}
                var fullpath = _webHostEnvironment.WebRootPath + "\\Files\\" + id.ToString() + "_" + fileData.FileName;
                HttpContext.Response.ContentType =
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                FileContentResult result = new FileContentResult(System.IO.File.ReadAllBytes(fullpath),
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
                {
                    FileDownloadName = fileData.FileName
                };
                return result;
            }
            catch
            {
                return BadRequest("Không tìm thấy file hoặc sai đường dẫn ");
                throw;
            }

        }

        // PUT: api/FileDatas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFileData(int id, FileData fileData)
        {
            if (id != fileData.Id)
            {
                return BadRequest();
            }

            _context.Entry(fileData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FileDataExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FileDatas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FileData>> PostFileData(FileData fileData)
        {
            if (_context.FileData == null)
            {
                return Problem("Entity set 'MolasDbContext.FileData'  is null.");
            }
            _context.FileData.Add(fileData);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFileData", new { id = fileData.Id }, fileData);
        }

        // DELETE: api/FileDatas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFileData(int id)
        {
            if (_context.FileData == null)
            {
                return NotFound();
            }
            var fileData = await _context.FileData.FindAsync(id);
            if (fileData == null)
            {
                return NotFound();
            }

            _context.FileData.Remove(fileData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FileDataExists(int id)
        {
            return (_context.FileData?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
