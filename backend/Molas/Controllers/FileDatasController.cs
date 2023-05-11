using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Molas.Models;
using Molas.Molas;

namespace Molas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileDatasController : ControllerBase
    {
        private readonly MolasDbContext _context;

        public FileDatasController(MolasDbContext context)
        {
            _context = context;
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

        // GET: api/FileDatas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FileData>> GetFileData(int id)
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

            return fileData;
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
