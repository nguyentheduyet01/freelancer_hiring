﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Molas.DTO;
using Molas.Models;
using Molas.Molas;

namespace Molas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly MolasDbContext _context;

        public CategoriesController(MolasDbContext context)
        {
            _context = context;
        }

        // GET: api/Categories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategory()
        {
          if (_context.Category == null)
          {
              return NotFound();
          }
            return await _context.Category.ToListAsync();
        }
        [HttpGet("{id}/skills")]
        public async Task<ActionResult<IEnumerable<Skill>>> GetCategoryandSkill(int id)
        {
          if (_context.Skill == null)
          {
              return NotFound();
          }
            
            return await _context.Skill.Where(n=> n.IdCategory == id).ToListAsync();
        }
        //[HttpGet("skills")]
        //public async Task<ActionResult<IEnumerable<CategoryDTO>>> GetCategoryandSkill()
        //{

        //  if (_context.Category == null)
        //  {
        //      return NotFound();
        //  }
        //    var res = new List<CategoryDTO>();
        //    var ca = await _context.Category.ToListAsync();
        //    foreach(var item in ca)
        //    {
        //        var n = new CategoryDTO();
        //        n.Id = item.Id;
        //        n.Name = item.Name;
        //        res.Add(n);
        //    }
        //    foreach(var item in res)
        //    {
        //        item.skills = await _context.Skill.Where(n => n.IdCategory == item.Id).ToListAsync();
        //    }
        //    return res;
        //}

        // GET: api/Categories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
          if (_context.Category == null)
          {
              return NotFound();
          }
            var category = await _context.Category.FindAsync(id);

            if (category == null)
            {
                return NotFound();
            }

            return category;
        }

        // PUT: api/Categories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategory(int id, Category category)
        {
            if (id != category.Id)
            {
                return BadRequest();
            }

            _context.Entry(category).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
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

        // POST: api/Categories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Category>> PostCategory(Category category)
        {
          if (_context.Category == null)
          {
              return Problem("Entity set 'MolasDbContext.Category'  is null.");
          }
            _context.Category.Add(category);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategory", new { id = category.Id }, category);
        }

        // DELETE: api/Categories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            if (_context.Category == null)
            {
                return NotFound();
            }
            var category = await _context.Category.FindAsync(id);
            if (category == null)
            {
                return NotFound();
            }

            _context.Category.Remove(category);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoryExists(int id)
        {
            return (_context.Category?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
