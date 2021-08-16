require('dotenv').config()
import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'

import { authMiddleware } from './utils/auth'
import protectedApi from './apis/protectedApi'
import userAPI from './apis/userAPI'

const app = express()
const port = 3000

app.use(express.json())

app.use('/user', userAPI)
app.use('/protected', authMiddleware, protectedApi)
morgan('tiny')

mongoose.connect(process.env.MON_URI || '', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log('Cant connect db')
    process.exit(-1)
  } else {
    console.log('Connected to db')
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})