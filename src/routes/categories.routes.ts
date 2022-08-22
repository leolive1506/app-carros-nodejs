import { Router } from 'express'
import { v4 as uuidV4 } from 'uuid'
import { Category } from '../model/Category'
import { CategoriesRepository } from '../repositories/CategoriesRepository'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body
    const category = categoriesRepository.create({ name, description })

    return response.status(201).json({ category })
})

export { categoriesRoutes }