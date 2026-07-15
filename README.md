# Gerenciamento Petshop

Sistema full stack para gerenciamento de petshop, desenvolvido com backend em ASP.NET Core e frontend em React.

O projeto permite cadastrar e listar pessoas/clientes, animais e produtos, utilizando uma API REST com Entity Framework Core, MySQL e integração com uma interface web em React.

## Funcionalidades

- Cadastro e listagem de pessoas/clientes
- Cadastro e listagem de animais
- Cadastro e listagem de produtos
- Comunicação entre frontend React e backend .NET
- Documentação da API com Swagger
- Persistência de dados com MySQL
- Configuração com Docker Compose
- Dados iniciais para demonstração
- Arquivo `Request.http` para testar endpoints da API pelo VS Code

## Tecnologias utilizadas

### Backend

- .NET 8
- ASP.NET Core Minimal API
- Entity Framework Core
- MySQL
- Swagger
- Docker

### Frontend

- React
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
├── app-front
│   ├── public
│   ├── src
│   │   ├── imagens
│   │   ├── layout
│   │   └── paginas
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
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
├── docker-compose.yml
├── README.md
├── .gitignore
└── .gitattributes
```

## Requisitos

Antes de começar, é necessário ter instalado:

- .NET SDK 8
- Node.js 18 ou superior
- Git
- Docker Desktop ou Docker Engine
- Entity Framework CLI, caso execute o backend localmente fora do Docker

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

O Swagger ficará disponível em:

```text
http://localhost:5119/swagger
```

O banco MySQL ficará exposto localmente em:

```text
localhost:3307
```

> Dentro do Docker, a API acessa o banco pelo serviço `db` na porta interna `3306`.

## Executando o backend sem Docker

Para rodar o backend localmente, mantenha apenas o banco MySQL rodando pelo Docker:

```bash
docker compose up -d db
```

Depois acesse a pasta do backend:

```bash
cd backend
```

Crie o arquivo de configuração de ambiente:

```bash
cp .env.example conexao.env
```

No Windows:

```bash
copy .env.example conexao.env
```

Configure a string de conexão no arquivo `conexao.env`:

```env
DB_CONNECTION=server=localhost;port=3307;database=petshopdb;user=root;password=sua_senha
```

Restaure as dependências:

```bash
dotnet restore
```

Aplique as migrations:

```bash
dotnet ef database update
```

Execute a API:

```bash
dotnet run
```

A documentação da API ficará disponível no Swagger:

```text
http://localhost:5119/swagger
```

> A porta pode variar conforme a configuração local do projeto.

## Executando o frontend

Acesse a pasta do frontend:

```bash
cd app-front
```

Crie o arquivo de ambiente:

```bash
cp .env.example .env
```

No Windows:

```bash
copy .env.example .env
```

Instale as dependências:

```bash
npm install
```

Execute o frontend:

```bash
npm start
```

Por padrão, o frontend será iniciado em:

```text
http://localhost:3000
```

## Testando a API

Além do Swagger, o projeto possui um arquivo `Request.http` com exemplos de requisições para testar os endpoints da API diretamente pelo VS Code.

```text
backend/Request.http
```

Esse arquivo pode ser usado com a extensão **REST Client**.

Com a API em execução, basta abrir o arquivo `Request.http` e enviar as requisições pelo próprio VS Code.

## Dados de demonstração

Ao iniciar a API, o sistema cria automaticamente alguns dados iniciais para facilitar testes e apresentação do projeto.

Os dados incluem exemplos de pessoas/clientes, animais e produtos, permitindo visualizar a área operacional preenchida logo após executar o sistema.

## Documentação por pasta

O projeto também possui READMEs específicos para cada parte da aplicação:

```text
backend/README.md
app-front/README.md
```

## Observações sobre arquivos de ambiente

Arquivos como `conexao.env` e `.env` não devem ser versionados no GitHub, pois podem conter dados sensíveis, como usuário e senha do banco de dados.

O ideal é manter apenas arquivos `.env.example` no repositório, com valores de exemplo.

## Objetivo do projeto

Este projeto foi desenvolvido para praticar a criação de uma aplicação full stack, integrando uma API REST em C#/.NET com um frontend em React, utilizando MySQL, Entity Framework Core, Swagger e Docker Compose.
