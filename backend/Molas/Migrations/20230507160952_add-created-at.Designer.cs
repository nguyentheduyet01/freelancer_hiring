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
    [Migration("20230507160952_add-created-at")]
    partial class addcreatedat
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

            modelBuilder.Entity("Molas.Models.Cv", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime")
                        .HasColumnName("created_at");

                    b.Property<string>("CvName")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("cv_name");

                    b.Property<string>("Link")
                        .HasMaxLength(200)
                        .IsUnicode(false)
                        .HasColumnType("varchar(200)")
                        .HasColumnName("link");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("title");

                    b.Property<int?>("UserId")
                        .HasColumnType("int")
                        .HasColumnName("user_id");

                    b.HasKey("Id")
                        .HasName("PK__CV__3213E83F188E17C5");

                    b.ToTable("CV", (string)null);
                });

            modelBuilder.Entity("Molas.Models.Image", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Link")
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("link");

                    b.Property<string>("Namefile")
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("namefile");

                    b.Property<int>("UserId")
                        .HasColumnType("int")
                        .HasColumnName("userId");

                    b.HasKey("Id")
                        .HasName("PK__images__3213E83FC8EAB19E");

                    b.HasIndex("UserId");

                    b.ToTable("Image");
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

                    b.Property<int?>("CategoryId")
                        .HasColumnType("int")
                        .HasColumnName("category_id");

                    b.Property<DateTime?>("CreaatedAt")
                        .HasColumnType("datetime")
                        .HasColumnName("cratedat");

                    b.Property<int?>("CreatedBy")
                        .HasColumnType("int")
                        .HasColumnName("created_by");

                    b.Property<string>("Descriptions")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("descriptions");

                    b.Property<DateTime?>("Expired")
                        .HasColumnType("datetime")
                        .HasColumnName("expired");

                    b.Property<int?>("IdUserPost")
                        .HasColumnType("int")
                        .HasColumnName("id_user_post");

                    b.Property<string>("LinkApply")
                        .HasMaxLength(200)
                        .IsUnicode(false)
                        .HasColumnType("varchar(200)")
                        .HasColumnName("link_apply");

                    b.Property<string>("Requirement")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("requirement");

                    b.Property<int?>("Status")
                        .HasColumnType("int")
                        .HasColumnName("status");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("title");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime")
                        .HasColumnName("updatedat");

                    b.Property<int?>("UpdatedBy")
                        .HasColumnType("int")
                        .HasColumnName("updated_by");

                    b.HasKey("Id")
                        .HasName("PK__Posts__3213E83F818983E9");

                    b.HasIndex("CategoryId");

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

            modelBuilder.Entity("Molas.Models.Image", b =>
                {
                    b.HasOne("Molas.Models.Users", "User")
                        .WithMany("Image")
                        .HasForeignKey("UserId")
                        .IsRequired()
                        .HasConstraintName("FK_images_Users");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Molas.Models.Posts", b =>
                {
                    b.HasOne("Molas.Models.Category", "Category")
                        .WithMany("Posts")
                        .HasForeignKey("CategoryId")
                        .HasConstraintName("FK_Posts_Category");

                    b.Navigation("Category");
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
                    b.Navigation("Posts");

                    b.Navigation("Skill");
                });

            modelBuilder.Entity("Molas.Models.Role", b =>
                {
                    b.Navigation("Account");
                });

            modelBuilder.Entity("Molas.Models.Users", b =>
                {
                    b.Navigation("Image");
                });
#pragma warning restore 612, 618
        }
    }
}
