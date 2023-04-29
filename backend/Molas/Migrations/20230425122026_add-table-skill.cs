using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Molas.Migrations
{
    /// <inheritdoc />
    public partial class addtableskill : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id_Category",
                table: "skill",
                newName: "id_category");

            migrationBuilder.RenameColumn(
                name: "id_category",
                table: "skill",
                newName: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id_category",
                table: "skill",
                newName: "Id_Category");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "skill",
                newName: "id_category");
        }
    }
}
