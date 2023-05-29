﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Molas.Models;

namespace Molas.Molas;

public partial class MolasDbContext : DbContext
{
    public MolasDbContext(DbContextOptions<MolasDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Account> Account { get; set; }

    public virtual DbSet<Category> Category { get; set; }

    public virtual DbSet<CategoryPost> CategoryPost { get; set; }

    public virtual DbSet<FileData> FileData { get; set; }

    public virtual DbSet<PostSkill> PostSkill { get; set; }

    public virtual DbSet<Posts> Posts { get; set; }

    public virtual DbSet<Role> Role { get; set; }

    public virtual DbSet<Skill> Skill { get; set; }

    public virtual DbSet<UserPost> UserPost { get; set; }

    public virtual DbSet<UserSkill> UserSkill { get; set; }

    public virtual DbSet<Users> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Password)
                .IsRequired()
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.Username)
                .IsRequired()
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.Role).WithMany(p => p.Account)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("FK_Account_role");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Category__3213E83F21DEFD49");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("name");
        });

        modelBuilder.Entity<CategoryPost>(entity =>
        {
            entity.ToTable("category_post");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.PostId).HasColumnName("post_id");
        });

        modelBuilder.Entity<FileData>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__CV__3213E83F188E17C5");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.FileName).HasColumnName("file_name");
            entity.Property(e => e.Link)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("link");
            entity.Property(e => e.Title).HasColumnName("title");
            entity.Property(e => e.Type)
                .HasComment("1:image, 2: cv")
                .HasColumnName("type");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.FileData)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_File_Users");
        });

        modelBuilder.Entity<PostSkill>(entity =>
        {
            entity.ToTable("post_skill");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.PostId).HasColumnName("post_id");
            entity.Property(e => e.SkillId).HasColumnName("skill_id");
        });

        modelBuilder.Entity<Posts>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Posts__3213E83F818983E9");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address).HasColumnName("address");
            entity.Property(e => e.Budget)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("budget");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.CreatedBy).HasColumnName("created_by");
            entity.Property(e => e.Descriptions).HasColumnName("descriptions");
            entity.Property(e => e.Expired)
                .HasColumnType("datetime")
                .HasColumnName("expired");
            entity.Property(e => e.LinkApply)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("link_apply");
            entity.Property(e => e.PaymentMethod)
                .HasComment("1: theo dự án, 2: theo giờ, 3: theo tháng")
                .HasColumnName("payment_method");
            entity.Property(e => e.Requirement).HasColumnName("requirement");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.Title).HasColumnName("title");
            entity.Property(e => e.WorkingMethod)
                .HasComment("1:bán thời gian, 2: toàn thời gian, 3: theo dự án")
                .HasColumnName("working_method");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__role__3213E83F0D113C99");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Skill>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.IdCategory).HasColumnName("id_category");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("name");

            entity.HasOne(d => d.IdCategoryNavigation).WithMany(p => p.Skill)
                .HasForeignKey(d => d.IdCategory)
                .HasConstraintName("FK_Skill_Category");
        });

        modelBuilder.Entity<UserPost>(entity =>
        {
            entity
                .ToTable("user_post");
            entity.Property(e => e.Id).HasColumnName("id");

            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("created_at");
            entity.Property(e => e.CvId).HasColumnName("cv_id");
            entity.Property(e => e.IntendTime)
                .HasMaxLength(100)
                .HasColumnName("intend_time");
            entity.Property(e => e.PostId).HasColumnName("post_id");
            entity.Property(e => e.Salary)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("salary");
            entity.Property(e => e.Suggestion).HasColumnName("suggestion");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Post).WithMany()
                .HasForeignKey(d => d.PostId)
                .HasConstraintName("FK_user_post_Posts");

            entity.HasOne(d => d.User).WithMany()
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_user_post_Users");
        });

        modelBuilder.Entity<UserSkill>(entity =>
        {
            entity.ToTable("user_skill");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.SkillId).HasColumnName("skill_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");
        });

        modelBuilder.Entity<Users>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3213E83F920E6F9B");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AccountId).HasColumnName("account_id");
            entity.Property(e => e.Address).HasColumnName("address");
            entity.Property(e => e.Age).HasColumnName("age");
            entity.Property(e => e.Decription).HasColumnName("decription");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Experince)
                .HasMaxLength(255)
                .HasColumnName("experince");
            entity.Property(e => e.Gentle).HasColumnName("gentle");
            entity.Property(e => e.Introdue)
                .HasMaxLength(100)
                .HasColumnName("introdue");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("phone");
            entity.Property(e => e.Status).HasColumnName("status");

            entity.HasOne(d => d.Account).WithMany(p => p.Users)
                .HasForeignKey(d => d.AccountId)
                .HasConstraintName("FK_Users_Account");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}