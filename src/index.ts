import express, { Request, Response, NextFunction } from 'express'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
import { defaultErrorHanlder } from './middlewares/error.middlewares'
databaseService.connect()
const app = express()
const port = 3000
app.use(express.json()) //chuyen json sang body

app.use('/api/v2/users', usersRouter) // dong nay goi la App Handler

//default error handle errror.middlleware.ts
app.use(defaultErrorHanlder)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
