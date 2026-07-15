# PetShop Manager Frontend

Frontend em React do sistema de gerenciamento de petshop.

## Funcionalidades

- Tela inicial de apresentação do projeto
- Área operacional para pessoas/clientes, animais e produtos
- Listagem de registros vindos da API
- Formulários de cadastro
- Integração com API ASP.NET Core
- Interface organizada para apresentação em portfólio

## Tecnologias utilizadas

- React
- React Router
- Axios
- JavaScript
- CSS

## Estrutura

```text
app-front
├── public
├── src
│   ├── imagens
│   ├── layout
│   └── paginas
├── .env.example
├── package.json
├── package-lock.json
└── README.md
```

## Configuração

Por padrão, o frontend consome a API em:

```text
http://localhost:5119
```

Para alterar essa URL, copie `.env.example` para `.env`:

```bash
cp .env.example .env
```

No Windows:

```bash
copy .env.example .env
```

Exemplo:

```env
REACT_APP_API_URL=http://localhost:5119
```

## Instalar dependências

```bash
npm install
```

## Executar em desenvolvimento

```bash
npm start
```

O frontend será iniciado em:

```text
http://localhost:3000
```

## Gerar build de produção

```bash
npm run build
```

> A pasta `build` é gerada automaticamente e não deve ser versionada no GitHub.

## Observações

- O backend precisa estar em execução para que os dados sejam carregados corretamente.
- Caso apareça erro ao carregar os dados, verifique se a API está ativa em `http://localhost:5119`.
