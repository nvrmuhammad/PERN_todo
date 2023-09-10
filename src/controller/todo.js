import { Todo } from '../model/todo.js'

export const allTodo = async (req, res) => {
  try {
    const todos = await Todo.findAll()

    res.status(200).json(todos || { msg: 'Todos not found' })
  } catch (error) {
    console.log(error.message)
  }
}

export const oneTodo = async (req, res) => {
  try {
    const { id } = req.params

    const todo = await Todo.findOne({ where: { todo_id: id } })

    if (!todo) {
      return res.status(404).json({
        msg: 'Todo is not defined',
      })
    }

    res.status(200).json(todo)
  } catch (error) {
    console.log(error.message)
  }
}

export const postTodo = async (req, res) => {
  try {
    const { description } = req.body

    if (!req.body || !description) {
      return res.status(400).json({ msg: 'Please input fully' })
    }

    const newTodo = await Todo.create({
      description: description,
    })

    res.status(201).json({
      new_todo: newTodo,
      msg: 'successfully created',
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const editTodo = async (req, res) => {
  try {
    const { description } = req.body
    const { id } = req.params

    if (!req.body || !description) {
      return res.status(400).json({ msg: 'Please input fully' })
    }

    const updatedTodo = await Todo.update(
      {
        description: description,
      },
      { where: { todo_id: id } }
    )

    res.status(201).json({
      msg: 'successfully created',
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params

    const updatedTodo = await Todo.destroy({ where: { todo_id: id } })

    res.status(201).json({
      msg: 'successfully deleted',
    })
  } catch (error) {
    console.log(error.message)
  }
}
