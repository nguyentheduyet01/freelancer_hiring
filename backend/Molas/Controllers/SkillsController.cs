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
using Molas.Services;
using Molas.Services.Interfaces;

namespace Molas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillsController : ControllerBase
    {
        private readonly MolasDbContext _context;
        private readonly ISkillService _skillService;
       
        public SkillsController(MolasDbContext context, ISkillService skillService)
        {
            _context = context;
            _skillService = skillService;
        }

        // GET: api/Skills
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Skill>>> GetSkill()
        {
          if (_context.Skill == null)
          {
              return NotFound();
          }
            return await _context.Skill.ToListAsync();
        }
        [HttpGet("{id}/users")]
        public async Task<ActionResult<PostDTO>> GetUserBYSkillId(int id, int? pagesize, int? pageindex)
        {
            if (id == 0)
            {
                return NotFound();
            }
            var users = await _context.Skill.FindAsync(id);

            if (users == null)
            {
                return BadRequest("Can not find skill have id = " + id);
            }
            var res = await _skillService.GetUserBYSkillId(id, pagesize, pageindex);
            return Ok(res);
        }

        // GET: api/Skills/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Skill>> GetSkill(int id)
        {
          if (_context.Skill == null)
          {
              return NotFound();
          }
            var skill = await _context.Skill.FindAsync(id);

            if (skill == null)
            {
                return NotFound();
            }

            return skill;
        }

        // PUT: api/Skills/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSkill(int id, Skill skill)
        {
            if (id != skill.Id)
            {
                return BadRequest();
            }

            _context.Entry(skill).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SkillExists(id))
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

        // POST: api/Skills
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Skill>> PostSkill(Skill skill)
        {
          if (_context.Skill == null)
          {
              return Problem("Entity set 'MolasDbContext.Skill'  is null.");
          }
            _context.Skill.Add(skill);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSkill", new { id = skill.Id }, skill);
        }

        // DELETE: api/Skills/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSkill(int id)
        {
            if (_context.Skill == null)
            {
                return NotFound();
            }
            var skill = await _context.Skill.FindAsync(id);
            if (skill == null)
            {
                return NotFound();
            }

            _context.Skill.Remove(skill);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SkillExists(int id)
        {
            return (_context.Skill?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
