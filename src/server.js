import express from 'express'
import cors from 'cors'
import sequelize from './db/db'

async function server() {
  try {
    const app = express()
    app.use(express.json())
    app.use(cors())

    sequelize.sync({ alter: true })
    console.log('Database connected successfully')

    app.listen(2000, () => console.log('Server is running on port 2000'))
  } catch (error) {
    console.log(error.message)
  }
}
server()
