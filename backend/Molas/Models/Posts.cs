﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace Molas.Models;

public partial class Posts
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
    public string? Address { get; set; }

    public DateTime? Expired { get; set; }

    public int? Status { get; set; }

    public DateTime? CreatedAt { get; set; }
}