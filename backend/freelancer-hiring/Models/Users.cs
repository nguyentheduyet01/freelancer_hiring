﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace freelancer_hiring.Models
{
    public partial class Users
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? Gentle { get; set; }
        public int? Age { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Experince { get; set; }
        public int? AccountId { get; set; }
        public int? CvId { get; set; }

        public virtual Account Account { get; set; }
        public virtual Cv Cv { get; set; }
    }
}