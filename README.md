# Gerenciamento Petshop

Sistema full stack para gerenciamento de petshop, desenvolvido com backend em ASP.NET Core e frontend em React.

O projeto permite cadastrar e listar pessoas, animais e produtos, utilizando uma API REST com Entity Framework Core, MySQL e integração com uma interface web em React.

## Funcionalidades atuais

- Cadastro e listagem de animais
- Cadastro e listagem de pessoas
- Cadastro e listagem de produtos
- Documentação da API com Swagger
- Comunicação entre frontend React e backend .NET
- Teste de endpoints com arquivo `Request.http`
- Configuração com Docker Compose

## Tecnologias utilizadas

### Backend

- .NET 8
- ASP.NET Core Minimal API
- Entity Framework Core
- MySQL
- Swagger
- Docker

### Frontend

- React 18
- React Router
- Axios
- JavaScript
- CSS

### Infraestrutura

- Docker Compose
- MySQL 8

## Estrutura do projeto

```text
gerenciamento-petshop-api
├── backend
│   ├── APIs
│   ├── Migrations
│   ├── models
│   ├── Properties
│   ├── BancoDeDados.cs
│   ├── Program.cs
│   ├── Dockerfile
│   ├── Request.http
│   ├── appsettings.json
│   ├── appsettings.Development.json
│   ├── .env.example
│   └── PetShopManagement.Api.csproj
├── app-front
│   ├── public
│   ├── src
│   │   ├── imagens
│   │   ├── layout
│   │   └── paginas
│   ├── package.json
│   └── README.md
├── docker-compose.yml
├── README.md
├── .gitignore
└── .gitattributes
```

## Requisitos

Antes de começar, é necessário ter instalado:

- .NET SDK 8
- Node.js 18 ou superior
- MySQL 8 ou compatível
- Git
- Docker, caso queira executar com Docker Compose
- Entity Framework CLI

Caso não tenha o Entity Framework CLI instalado, execute:

```bash
dotnet tool install --global dotnet-ef
```

## Como clonar o projeto

```bash
git clone https://github.com/GabrielDittrich/gerenciamento-petshop-api.git
cd gerenciamento-petshop-api
```

## Executando com Docker Compose

Para subir o banco MySQL e o backend com Docker, execute:

```bash
docker compose up --build
```

A API ficará disponível em:

```text
http://localhost:5119
```

O banco MySQL ficará disponível em:

```text
localhost:3306
```

> As portas podem variar conforme a configuração do `docker-compose.yml`.

## Executando sem Docker

### Backend

1. Acesse a pasta do backend:

```bash
cd backend
```

2. Crie o arquivo de ambiente:

```bash
cp .env.example conexao.env
```

No Windows, use:

```bash
copy .env.example conexao.env
```

3. Configure a conexão no arquivo `conexao.env`:

```env
DB_CONNECTION=server=localhost;port=3306;database=petshopdb;user=root;password=sua_senha
```

Também é possível configurar a conexão pelo `appsettings.Development.json` ou pela variável de ambiente:

```text
ConnectionStrings__DefaultConnection
```

4. Restaure as dependências:

```bash
dotnet restore
```

5. Aplique as migrations:

```bash
dotnet ef database update
```

6. Execute a API:

```bash
dotnet run
```

A documentação da API ficará disponível no Swagger:

```text
http://localhost:5119/swagger
```

ou:

```text
https://localhost:7081/swagger
```

> A porta pode variar conforme a configuração local do projeto.

## Frontend

1. Acesse a pasta do frontend:

```bash
cd app-front
```

2. Crie o arquivo de ambiente:

```bash
cp .env.example .env
```

No Windows, use:

```bash
copy .env.example .env
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o frontend:

```bash
npm start
```

Por padrão, o frontend será iniciado em:

```text
http://localhost:3000
```

## Testando a API

Além do Swagger, o projeto possui um arquivo `Request.http` com exemplos de requisições para testar os endpoints diretamente pelo VS Code.

```text
backend/Request.http
```

Esse arquivo pode ser usado com a extensão **REST Client**.

Com a API em execução, basta abrir o arquivo `Request.http` e enviar as requisições pelo próprio VS Code.

## Documentação por pasta

O projeto também possui READMEs específicos para cada parte da aplicação:

```text
backend/README.md
app-front/README.md
```

## Observações sobre arquivos de ambiente

O arquivo `conexao.env` não deve ser versionado no GitHub, pois pode conter dados sensíveis, como usuário e senha do banco de dados.

O ideal é manter apenas o arquivo `.env.example` no repositório, com valores de exemplo.

## Objetivo do projeto

Este projeto foi desenvolvido para praticar a criação de uma aplicação full stack, integrando uma API REST em C#/.NET com um frontend em React, utilizando MySQL, Entity Framework Core, Swagger e Docker Compose.
