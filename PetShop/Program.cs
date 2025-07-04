using Microsoft.EntityFrameworkCore;
// Carregar variáveis de ambiente do arquivo .env
using DotNetEnv;
Env.Load();

var builder = WebApplication.CreateBuilder(args);

// Configuração do CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        policyBuilder =>
        {
            policyBuilder.WithOrigins("http://localhost:3000") // substitua pelo URL do seu front-end
                          .AllowAnyHeader()
                          .AllowAnyMethod();
        });
});

// Configuração Swagger no builder
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configuração banco MySQL
var connectionString = Environment.GetEnvironmentVariable("DB_CONNECTION");

builder.Services.AddDbContext<BancoDeDados>(options =>
    options.UseMySQL(connectionString));

var app = builder.Build();

// Uso do CORS
app.UseCors("AllowSpecificOrigin");

// Configuração Swagger no app
app.UseSwagger();
app.UseSwaggerUI();

// URL do Swagger: http://localhost:xxxx/swagger/index.html

app.MapGet("/", () => "PetShop");

// Mapear APIs
app.MapPessoasApi();
app.MapPetShopApi();
app.MapProdutosApi();

app.Run();
