# Pet Shop Management API

Esta pasta contém a API ASP.NET Core do sistema de gerenciamento de petshop.

## Estrutura

- `APIs/`: endpoints da API em Minimal API
- `models/`: entidades usadas pelo Entity Framework Core
- `Migrations/`: histórico de migrations do banco
- `Properties/`: configurações de execução local
- `Request.http`: exemplos de chamadas HTTP para teste manual
- `BancoDeDados.cs`: contexto do Entity Framework Core
- `Program.cs`: configuração da aplicação e dos serviços

## Requisitos

- .NET SDK 8
- MySQL 8 ou compatível
- Entity Framework CLI
- Docker, opcional para executar com Docker Compose

## Configuração local

Você pode configurar a conexão com o banco de três formas:

1. Copiando `.env.example` para `conexao.env`
2. Ajustando `ConnectionStrings:DefaultConnection` em `appsettings.Development.json`
3. Definindo a variável de ambiente `ConnectionStrings__DefaultConnection`

Exemplo de conexão no arquivo `conexao.env`:

```env
DB_CONNECTION=server=localhost;port=3306;database=petshopdb;user=root;password=sua_senha
```

## Executar localmente

Aplique as migrations:

```bash
dotnet ef database update
```

Execute a API:

```bash
dotnet run
```

Swagger:

```text
http://localhost:5119/swagger
https://localhost:7081/swagger
```

## Testando endpoints

O arquivo `Request.http` possui exemplos de requisições para testar animais, pessoas e produtos pelo VS Code com a extensão REST Client.

## Executar com Docker

Na raiz do repositório, execute:

```bash
docker compose up --build
```

A API ficará disponível em:

```text
http://localhost:5119
```

## Observações

- O `README.md` da raiz do repositório explica o projeto completo.
- Ao iniciar, a API aplica automaticamente as migrations pendentes no banco, caso isso esteja configurado no `Program.cs`.
- O arquivo `conexao.env` não deve ser enviado para o GitHub.
