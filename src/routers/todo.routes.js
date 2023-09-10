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

todoRouter.get('/todo/:id', async (req, res) => {
  try {
    const { id } = req.params.id
    const todo = await Todo.findOne({ where: { todo_id: id } })

    res.status(200).json({
      todo,
    })
  } catch (error) {
    console.log(error.message)
  }
})

todoRouter.post('/todo', async (req, res) => {
  try {
    const { description } = req.body

    const newTodo = await Todo.create({
      description: description,
    })

    res.status(201).json({
      newTodo,
      msg: 'successfully created',
    })
  } catch (error) {
    console.log(error.message)
  }
})
