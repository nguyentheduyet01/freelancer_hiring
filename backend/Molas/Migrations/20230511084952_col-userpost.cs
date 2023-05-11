using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Molas.Migrations
{
    /// <inheritdoc />
    public partial class coluserpost : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "intend_time",
                table: "user_post",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "suggestion",
                table: "user_post",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "intend_time",
                table: "user_post");

            migrationBuilder.DropColumn(
                name: "suggestion",
                table: "user_post");
        }
    }
}
