using freelancer_hiring.Repositories;
using freelancer_hiring.Repositories.Interfaces;
using freelancer_hiring.Services;
using freelancer_hiring.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddScoped<IAuthenticationServices, AuthenticationServices>();
builder.Services.AddScoped<IAuthenticationRepository, AuthenticationRepository>();
builder.Services.AddScoped<IUsersService, UsersService>();
builder.Services.AddScoped<IUsersRepository, UsersRepository>();


builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
}));
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<freelancer_hiring.Data.DataContext>(
    options =>
    {
        options.UseSqlServer(builder.Configuration.GetConnectionString("connectdata"));
    });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
//Remaining code has been removed
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
