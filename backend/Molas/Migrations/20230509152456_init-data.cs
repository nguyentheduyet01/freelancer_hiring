using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Molas.Migrations
{
    /// <inheritdoc />
    public partial class initdata : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Category__3213E83F21DEFD49", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    link_apply = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: true),
                    descriptions = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    requirement = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    budget = table.Column<decimal>(type: "decimal(18,0)", nullable: true),
                    created_by = table.Column<int>(type: "int", nullable: true),
                    working_method = table.Column<int>(type: "int", nullable: true),
                    expired = table.Column<DateTime>(type: "datetime", nullable: true),
                    status = table.Column<int>(type: "int", nullable: true),
                    created_at = table.Column<DateTime>(type: "datetime", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Posts__3213E83F818983E9", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Role",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__role__3213E83F0D113C99", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Skill",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nchar(100)", fixedLength: true, maxLength: 100, nullable: true),
                    id_category = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skill", x => x.id);
                    table.ForeignKey(
                        name: "FK_Skill_Category",
                        column: x => x.id_category,
                        principalTable: "Category",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "category_post",
                columns: table => new
                {
                    posts_id = table.Column<int>(type: "int", nullable: true),
                    category_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_category_post_Category",
                        column: x => x.category_id,
                        principalTable: "Category",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_category_post_Posts",
                        column: x => x.posts_id,
                        principalTable: "Posts",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "Account",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Password = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    role_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Account", x => x.id);
                    table.ForeignKey(
                        name: "FK_Account_role",
                        column: x => x.role_id,
                        principalTable: "Role",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "post_skill",
                columns: table => new
                {
                    skill_id = table.Column<int>(type: "int", nullable: true),
                    post_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_post_skill_Posts",
                        column: x => x.post_id,
                        principalTable: "Posts",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_post_skill_Skill",
                        column: x => x.skill_id,
                        principalTable: "Skill",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    gentle = table.Column<int>(type: "int", nullable: true),
                    age = table.Column<int>(type: "int", nullable: true),
                    phone = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true),
                    email = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    experince = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    account_id = table.Column<int>(type: "int", nullable: true),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    cv_id = table.Column<int>(type: "int", nullable: true),
                    decription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    introduce = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Users__3213E83F920E6F9B", x => x.id);
                    table.ForeignKey(
                        name: "FK_Users_Account",
                        column: x => x.account_id,
                        principalTable: "Account",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "FileData",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    link = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: true),
                    file_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    created_at = table.Column<DateTime>(type: "datetime", nullable: true),
                    user_id = table.Column<int>(type: "int", nullable: true),
                    type = table.Column<int>(type: "int", nullable: true, comment: "1:image, 2: cv")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__CV__3213E83F188E17C5", x => x.id);
                    table.ForeignKey(
                        name: "FK_File_Users",
                        column: x => x.user_id,
                        principalTable: "Users",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "user_post",
                columns: table => new
                {
                    salary = table.Column<decimal>(type: "decimal(18,0)", nullable: true),
                    created_at = table.Column<DateTime>(type: "datetime", nullable: true),
                    user_id = table.Column<int>(type: "int", nullable: true),
                    post_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_user_post_Posts",
                        column: x => x.post_id,
                        principalTable: "Posts",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_user_post_Users",
                        column: x => x.user_id,
                        principalTable: "Users",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "user_skill",
                columns: table => new
                {
                    id_user = table.Column<int>(type: "int", nullable: true),
                    id_skill = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_user_skill_Skill",
                        column: x => x.id_skill,
                        principalTable: "Skill",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_user_skill_Users",
                        column: x => x.id_user,
                        principalTable: "Users",
                        principalColumn: "id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Account_role_id",
                table: "Account",
                column: "role_id");

            migrationBuilder.CreateIndex(
                name: "IX_category_post_category_id",
                table: "category_post",
                column: "category_id");

            migrationBuilder.CreateIndex(
                name: "IX_category_post_posts_id",
                table: "category_post",
                column: "posts_id");

            migrationBuilder.CreateIndex(
                name: "IX_FileData_user_id",
                table: "FileData",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_post_skill_post_id",
                table: "post_skill",
                column: "post_id");

            migrationBuilder.CreateIndex(
                name: "IX_post_skill_skill_id",
                table: "post_skill",
                column: "skill_id");

            migrationBuilder.CreateIndex(
                name: "IX_Skill_id_category",
                table: "Skill",
                column: "id_category");

            migrationBuilder.CreateIndex(
                name: "IX_user_post_post_id",
                table: "user_post",
                column: "post_id");

            migrationBuilder.CreateIndex(
                name: "IX_user_post_user_id",
                table: "user_post",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_user_skill_id_skill",
                table: "user_skill",
                column: "id_skill");

            migrationBuilder.CreateIndex(
                name: "IX_user_skill_id_user",
                table: "user_skill",
                column: "id_user");

            migrationBuilder.CreateIndex(
                name: "IX_Users_account_id",
                table: "Users",
                column: "account_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropTable(
            //    name: "category_post");

            //migrationBuilder.DropTable(
            //    name: "FileData");

            //migrationBuilder.DropTable(
            //    name: "post_skill");

            //migrationBuilder.DropTable(
            //    name: "user_post");

            //migrationBuilder.DropTable(
            //    name: "user_skill");

            //migrationBuilder.DropTable(
            //    name: "Posts");

            //migrationBuilder.DropTable(
            //    name: "Skill");

            //migrationBuilder.DropTable(
            //    name: "Users");

            //migrationBuilder.DropTable(
            //    name: "Category");

            //migrationBuilder.DropTable(
            //    name: "Account");

            //migrationBuilder.DropTable(
            //    name: "Role");
        }
    }
}
