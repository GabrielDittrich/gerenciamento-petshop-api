# App Front

Esta pasta contem o frontend React do projeto.

## Requisitos

- Node.js 18 ou superior
- npm

## Configuracao

Por padrao, o frontend consome a API em `http://localhost:5119`.

Se quiser alterar essa URL, copie `.env.example` para `.env`:

```bash
copy .env.example .env
```

Exemplo:

```bash
REACT_APP_API_URL=http://localhost:5119
```

## Instalar dependencias

```bash
npm install
```

## Executar em desenvolvimento

```bash
npm start
```

## Build de producao

```bash
npm run build
```

## Estrutura

- `src/layout/`: componentes de layout
- `src/paginas/`: paginas da aplicacao
- `public/`: arquivos publicos
