import { Router } from 'express'
import {
  allTodo,
  deleteTodo,
  editTodo,
  oneTodo,
  postTodo,
} from '../controller/todo.js'

export const todoRouter = Router()

todoRouter.get('/todos', allTodo)

todoRouter.get('/todo/:id', oneTodo)

todoRouter.post('/todo', postTodo)

todoRouter.put('/todoUpdate/:id', editTodo)

todoRouter.delete('/todoDel/:id', deleteTodo)
