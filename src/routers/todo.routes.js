import { Router } from 'express'
import { Todo } from '../model/todo.js'

export const todoRouter = Router()

todoRouter.get('/todo', async (req, res) => {
  try {
    const todos = await Todo.findAll()

    res.status(200).json({
      todos,
    })
  } catch (error) {
    console.log(error.message)
  }
})
