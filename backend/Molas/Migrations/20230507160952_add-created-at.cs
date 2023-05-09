using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Molas.Migrations
{
    /// <inheritdoc />
    public partial class addcreatedat : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "cratedat",
                table: "Posts",
                type: "datetime",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "updatedat",
                table: "Posts",
                type: "datetime",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "cratedat",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "updatedat",
                table: "Posts");
        }
    }
}
