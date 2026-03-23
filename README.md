# Pet Shop Management System

Repositorio com backend em ASP.NET Core e frontend em React para um sistema de gerenciamento de pet shop.

## Estrutura do repositorio

- `PetShop/`: backend .NET 8 da solucao `PetShopManagement.Api` com Entity Framework Core e MySQL
- `app-front/`: aplicacao React que consome a API

## Tecnologias

- .NET 8
- ASP.NET Core Minimal API
- Entity Framework Core
- MySQL
- React 18
- React Router
- Axios
- Swagger
- Docker Compose

## Requisitos

- .NET SDK 8
- Node.js 18 ou superior
- MySQL 8 ou compativel
- Docker Desktop opcional

## Como clonar

```bash
git clone https://github.com/GabrielDittrich/petshop-management-api.git
cd petshop-management-api
```

## Subir banco + backend com um comando

```bash
docker compose up --build
```

A API fica disponivel em `http://localhost:5119` e o banco MySQL em `localhost:3306`.

## Rodar sem Docker

### Backend

```bash
cd PetShop
copy .env.example conexao.env
```

Voce tambem pode usar `appsettings.Development.json` ou a variavel `ConnectionStrings__DefaultConnection`.

Exemplo de conexao:

```bash
DB_CONNECTION="server=localhost;port=3306;database=petshopdb;user=root;password=PetShopDev123!"
```

Aplicar migracoes e executar:

```bash
dotnet ef database update
dotnet run
```

Swagger:

```text
http://localhost:5119/swagger
https://localhost:7081/swagger
```

### Frontend

```bash
cd app-front
copy .env.example .env
npm install
npm start
```

Por padrao, o frontend roda em `http://localhost:3000`.

## Funcionalidades atuais

- Cadastro e listagem de animais
- Cadastro e listagem de pessoas
- Cadastro e listagem de produtos
- Documentacao da API com Swagger
- Comunicacao entre frontend React e backend .NET

## Documentacao por pasta

- Backend: `PetShop/README.md`
- Frontend: `app-front/README.md`
