# [XSpot](https://x-spot.vercel.app/)

Este projeto foi criado com a versão 10 do [Angular](https://angular.io/) e utilizando a estrutura de [Workspaces](https://angular.io/guide/file-structure).

Portanto, a estrura do projeto está da seguinte forma:

```js
projects
  │
  └───x-spot-app
  │
  │
  └───x-spot-lib
```

- `x-spot-app`: Projeto principal da aplicação `X-SPOT`.
- `x-spot-lib`: Projeto onde será implentado todos os componentes comuns que poderão ser reutilizados em projetos futuros.

## Ambiente de desenvolvimento

- Para instalar as dependencias:

  > yarn ou npm install

- Para rodar o projeto:

  > yarn start:app ou npm run start:app

## Preparando o projeto para produção

- Para rodar o `build` de produção:
  > yarn build:app ou npm run build:app

## Ambiente de produção: https://x-spot.vercel.app/
