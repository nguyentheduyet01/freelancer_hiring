﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Molas.Molas;

#nullable disable

namespace Molas.Migrations
{
    [DbContext(typeof(MolasDbContext))]
    [Migration("20230511075251_add_col_cvid")]
    partial class add_col_cvid
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Molas.Models.Account", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<int?>("RoleId")
                        .HasColumnType("int")
                        .HasColumnName("role_id");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("Account");
                });

            modelBuilder.Entity("Molas.Models.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)")
                        .HasColumnName("name");

                    b.HasKey("Id")
                        .HasName("PK__Category__3213E83F21DEFD49");

                    b.ToTable("Category");
                });

            modelBuilder.Entity("Molas.Models.CategoryPost", b =>
                {
                    b.Property<int?>("CategoryId")
                        .HasColumnType("int")
                        .HasColumnName("category_id");

                    b.Property<int?>("PostsId")
                        .HasColumnType("int")
                        .HasColumnName("posts_id");

                    b.HasIndex("CategoryId");

                    b.HasIndex("PostsId");

                    b.ToTable("category_post", (string)null);
                });

            modelBuilder.Entity("Molas.Models.FileData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime")
                        .HasColumnName("created_at");

                    b.Property<string>("FileName")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("file_name");

                    b.Property<string>("Link")
                        .HasMaxLength(200)
                        .IsUnicode(false)
                        .HasColumnType("varchar(200)")
                        .HasColumnName("link");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("title");

                    b.Property<int?>("Type")
                        .HasColumnType("int")
                        .HasColumnName("type")
                        .HasComment("1:image, 2: cv");

                    b.Property<int?>("UserId")
                        .HasColumnType("int")
                        .HasColumnName("user_id");

                    b.HasKey("Id")
                        .HasName("PK__CV__3213E83F188E17C5");

                    b.HasIndex("UserId");

                    b.ToTable("FileData");
                });

            modelBuilder.Entity("Molas.Models.PostSkill", b =>
                {
                    b.Property<int?>("PostId")
                        .HasColumnType("int")
                        .HasColumnName("post_id");

                    b.Property<int?>("SkillId")
                        .HasColumnType("int")
                        .HasColumnName("skill_id");

                    b.HasIndex("PostId");

                    b.HasIndex("SkillId");

                    b.ToTable("post_skill", (string)null);
                });

            modelBuilder.Entity("Molas.Models.Posts", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<decimal?>("Budget")
                        .HasColumnType("decimal(18, 0)")
                        .HasColumnName("budget");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime")
                        .HasColumnName("created_at");

                    b.Property<int?>("CreatedBy")
                        .HasColumnType("int")
                        .HasColumnName("created_by");

                    b.Property<string>("Descriptions")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("descriptions");

                    b.Property<DateTime?>("Expired")
                        .HasColumnType("datetime")
                        .HasColumnName("expired");

                    b.Property<string>("LinkApply")
                        .HasMaxLength(200)
                        .IsUnicode(false)
                        .HasColumnType("varchar(200)")
                        .HasColumnName("link_apply");

                    b.Property<int?>("PaymentMethod")
                        .HasColumnType("int")
                        .HasColumnName("payment_method");

                    b.Property<string>("Requirement")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("requirement");

                    b.Property<int?>("Status")
                        .HasColumnType("int")
                        .HasColumnName("status");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("title");

                    b.Property<int?>("WorkingMethod")
                        .HasColumnType("int")
                        .HasColumnName("working_method");

                    b.HasKey("Id")
                        .HasName("PK__Posts__3213E83F818983E9");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("Molas.Models.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("name");

                    b.HasKey("Id")
                        .HasName("PK__role__3213E83F0D113C99");

                    b.ToTable("Role");
                });

            modelBuilder.Entity("Molas.Models.Skill", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("IdCategory")
                        .HasColumnType("int")
                        .HasColumnName("id_category");

                    b.Property<string>("Name")
                        .HasMaxLength(100)
                        .HasColumnType("nchar(100)")
                        .HasColumnName("name")
                        .IsFixedLength();

                    b.HasKey("Id");

                    b.HasIndex("IdCategory");

                    b.ToTable("Skill");
                });

            modelBuilder.Entity("Molas.Models.UserPost", b =>
                {
                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime")
                        .HasColumnName("created_at");

                    b.Property<int?>("CvId")
                        .HasColumnType("int")
                        .HasColumnName("cv_id");

                    b.Property<int?>("PostId")
                        .HasColumnType("int")
                        .HasColumnName("post_id");

                    b.Property<decimal?>("Salary")
                        .HasColumnType("decimal(18, 0)")
                        .HasColumnName("salary");

                    b.Property<int?>("UserId")
                        .HasColumnType("int")
                        .HasColumnName("user_id");

                    b.HasIndex("PostId");

                    b.HasIndex("UserId");

                    b.ToTable("user_post", (string)null);
                });

            modelBuilder.Entity("Molas.Models.UserSkill", b =>
                {
                    b.Property<int?>("IdSkill")
                        .HasColumnType("int")
                        .HasColumnName("id_skill");

                    b.Property<int?>("IdUser")
                        .HasColumnType("int")
                        .HasColumnName("id_user");

                    b.HasIndex("IdSkill");

                    b.HasIndex("IdUser");

                    b.ToTable("user_skill", (string)null);
                });

            modelBuilder.Entity("Molas.Models.Users", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("AccountId")
                        .HasColumnType("int")
                        .HasColumnName("account_id");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("address");

                    b.Property<int?>("Age")
                        .HasColumnType("int")
                        .HasColumnName("age");

                    b.Property<int?>("CvId")
                        .HasColumnType("int")
                        .HasColumnName("cv_id");

                    b.Property<string>("Decription")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("decription");

                    b.Property<string>("Email")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("email");

                    b.Property<string>("Experince")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("experince");

                    b.Property<int?>("Gentle")
                        .HasColumnType("int")
                        .HasColumnName("gentle");

                    b.Property<string>("Introduce")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("introduce");

                    b.Property<string>("Name")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)")
                        .HasColumnName("name");

                    b.Property<string>("Phone")
                        .HasMaxLength(20)
                        .IsUnicode(false)
                        .HasColumnType("varchar(20)")
                        .HasColumnName("phone");

                    b.HasKey("Id")
                        .HasName("PK__Users__3213E83F920E6F9B");

                    b.HasIndex("AccountId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Molas.Models.Account", b =>
                {
                    b.HasOne("Molas.Models.Role", "Role")
                        .WithMany("Account")
                        .HasForeignKey("RoleId")
                        .HasConstraintName("FK_Account_role");

                    b.Navigation("Role");
                });

            modelBuilder.Entity("Molas.Models.CategoryPost", b =>
                {
                    b.HasOne("Molas.Models.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId")
                        .HasConstraintName("FK_category_post_Category");

                    b.HasOne("Molas.Models.Posts", "Posts")
                        .WithMany()
                        .HasForeignKey("PostsId")
                        .HasConstraintName("FK_category_post_Posts");

                    b.Navigation("Category");

                    b.Navigation("Posts");
                });

            modelBuilder.Entity("Molas.Models.FileData", b =>
                {
                    b.HasOne("Molas.Models.Users", "User")
                        .WithMany("FileData")
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK_File_Users");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Molas.Models.PostSkill", b =>
                {
                    b.HasOne("Molas.Models.Posts", "Post")
                        .WithMany()
                        .HasForeignKey("PostId")
                        .HasConstraintName("FK_post_skill_Posts");

                    b.HasOne("Molas.Models.Skill", "Skill")
                        .WithMany()
                        .HasForeignKey("SkillId")
                        .HasConstraintName("FK_post_skill_Skill");

                    b.Navigation("Post");

                    b.Navigation("Skill");
                });

            modelBuilder.Entity("Molas.Models.Skill", b =>
                {
                    b.HasOne("Molas.Models.Category", "IdCategoryNavigation")
                        .WithMany("Skill")
                        .HasForeignKey("IdCategory")
                        .HasConstraintName("FK_Skill_Category");

                    b.Navigation("IdCategoryNavigation");
                });

            modelBuilder.Entity("Molas.Models.UserPost", b =>
                {
                    b.HasOne("Molas.Models.Posts", "Post")
                        .WithMany()
                        .HasForeignKey("PostId")
                        .HasConstraintName("FK_user_post_Posts");

                    b.HasOne("Molas.Models.Users", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK_user_post_Users");

                    b.Navigation("Post");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Molas.Models.UserSkill", b =>
                {
                    b.HasOne("Molas.Models.Skill", "IdSkillNavigation")
                        .WithMany()
                        .HasForeignKey("IdSkill")
                        .HasConstraintName("FK_user_skill_Skill");

                    b.HasOne("Molas.Models.Users", "IdUserNavigation")
                        .WithMany()
                        .HasForeignKey("IdUser")
                        .HasConstraintName("FK_user_skill_Users");

                    b.Navigation("IdSkillNavigation");

                    b.Navigation("IdUserNavigation");
                });

            modelBuilder.Entity("Molas.Models.Users", b =>
                {
                    b.HasOne("Molas.Models.Account", "Account")
                        .WithMany("Users")
                        .HasForeignKey("AccountId")
                        .HasConstraintName("FK_Users_Account");

                    b.Navigation("Account");
                });

            modelBuilder.Entity("Molas.Models.Account", b =>
                {
                    b.Navigation("Users");
                });

            modelBuilder.Entity("Molas.Models.Category", b =>
                {
                    b.Navigation("Skill");
                });

            modelBuilder.Entity("Molas.Models.Role", b =>
                {
                    b.Navigation("Account");
                });

            modelBuilder.Entity("Molas.Models.Users", b =>
                {
                    b.Navigation("FileData");
                });
#pragma warning restore 612, 618
        }
    }
}