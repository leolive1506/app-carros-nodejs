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

# Separando arquivos de rotas
- Criar uma pasta "routes"
    - seguir padrão name_file.route.ts
        ```ts
        import { Router } from 'express'

        const categoriesRoutes = Router()
        categoriesRoutes.post('/teste', (request, response) => res.send())

        export { categoriesRoutes }
        ```
    - No server.ts para usar
        ```ts
        // deixando tudo com prefixo categories
        app.use('/categories', categoriesRoutes)
        ```

# Dicas ts
- Desabilitar "strict": true
    - Fica checando erros dentro do app


# Dicas js
- Atribuir valor a um objeto de forma mais limpa
```js
const category = new Category()
Object.assign(category, { name, description })

// mesma coisa disso abaixo
category.name = name
category.description = description
```