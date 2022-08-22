# Config eslint and prettier
- https://www.notion.so/ESLint-e-Prettier-Trilha-Node-js-d3f3ef576e7f45dfbbde5c25fa662779

# Auto reload quando salva arquivo (semelhante nodemon)
```shell
yarn add ts-node-dev -D
```

- Package.json 
```json
"scripts": {
    "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts"
},
```

# Debugar app

# Dicas ts
- Desabilitar "strict": true
    - Fica checando erros dentro do app