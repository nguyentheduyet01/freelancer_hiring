﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace Molas.Models;

public partial class Category
{
    public int Id { get; set; }

    public string Name { get; set; }

    public virtual ICollection<Posts> Posts { get; } = new List<Posts>();

    public virtual ICollection<Skill> Skill { get; } = new List<Skill>();
}