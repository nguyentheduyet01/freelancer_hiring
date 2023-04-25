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
    public class CvsController : ControllerBase
    {
        private readonly MolasDbContext _context;

        public CvsController(MolasDbContext context)
        {
            _context = context;
        }

        // GET: api/Cvs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cv>>> GetCv()
        {
          if (_context.Cv == null)
          {
              return NotFound();
          }
            return await _context.Cv.ToListAsync();
        }

        // GET: api/Cvs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cv>> GetCv(int id)
        {
          if (_context.Cv == null)
          {
              return NotFound();
          }
            var cv = await _context.Cv.FindAsync(id);

            if (cv == null)
            {
                return NotFound();
            }

            return cv;
        }

        // PUT: api/Cvs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCv(int id, Cv cv)
        {
            if (id != cv.Id)
            {
                return BadRequest();
            }

            _context.Entry(cv).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CvExists(id))
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

        // POST: api/Cvs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Cv>> PostCv(Cv cv)
        {
          if (_context.Cv == null)
          {
              return Problem("Entity set 'MolasDbContext.Cv'  is null.");
          }
            _context.Cv.Add(cv);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCv", new { id = cv.Id }, cv);
        }

        // DELETE: api/Cvs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCv(int id)
        {
            if (_context.Cv == null)
            {
                return NotFound();
            }
            var cv = await _context.Cv.FindAsync(id);
            if (cv == null)
            {
                return NotFound();
            }

            _context.Cv.Remove(cv);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CvExists(int id)
        {
            return (_context.Cv?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
