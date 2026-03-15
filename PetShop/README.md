# PetShop Backend

Esta pasta contem a API ASP.NET Core do projeto de gerenciamento de petshop.

## Estrutura

- `APIs/`: endpoints da API em Minimal API
- `models/`: entidades usadas pelo Entity Framework
- `Migrations/`: historico de migracoes do banco
- `Properties/`: configuracoes de execucao local
- `Request.http`: exemplos de chamadas HTTP para teste manual

## Requisitos

- .NET SDK 8
- MySQL 8 ou compativel
- Docker opcional para subir banco + API com um comando

## Configuracao local

Voce pode configurar a conexao com o banco de tres formas:

1. Copiar `.env.example` para `conexao.env`
2. Ajustar `ConnectionStrings:DefaultConnection` em `appsettings.Development.json`
3. Definir a variavel `ConnectionStrings__DefaultConnection`

## Executar localmente

Aplique as migracoes:

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

## Executar com Docker

Na raiz do repositorio:

```bash
docker compose up --build
```

A API fica disponivel em `http://localhost:5119`.

## Observacoes

- O `README.md` da raiz do repositorio explica o projeto completo.
- Ao iniciar, a API aplica automaticamente as migracoes pendentes no banco.
