import express from 'express'
import cors from 'cors'
import sequelize from './db/db.js'
import 'dotenv/config'
import { todoRouter } from './routers/todo.routes.js'

async function server() {
  try {
    const app = express()
    app.use(express.json())
    app.use(cors())
    app.use(todoRouter)

    sequelize.sync({ alter: true })
    console.log('Database connected successfully')

    app.listen(process.env.PORT, () =>
      console.log(`Server is running on port ${process.env.PORT}`)
    )
  } catch (error) {
    console.log(error.message)
  }
}
server()
