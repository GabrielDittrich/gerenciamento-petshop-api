using Microsoft.EntityFrameworkCore;

public class BancoDeDados : DbContext
{
    public BancoDeDados(DbContextOptions<BancoDeDados> options) : base(options)
    {
    }

    public DbSet<Animal> Animais { get; set; }
    public DbSet<Produto> Produtos { get; set; }
    public DbSet<Pessoa> Pessoas { get; set; }
}