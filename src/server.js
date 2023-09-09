import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(2000, () => console.log('Server is running on port 2000'))
