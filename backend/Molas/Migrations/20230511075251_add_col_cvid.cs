using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Molas.Migrations
{
    /// <inheritdoc />
    public partial class add_col_cvid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "cv_id",
                table: "user_post",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "cv_id",
                table: "user_post");
        }
    }
}
