import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send('Hello world'))

// deixando tudo com prefixo categories
app.use('/categories', categoriesRoutes)

app.listen(3333, () => console.log('Server is running'))