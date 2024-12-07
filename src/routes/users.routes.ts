import { Router } from 'express'
const usersRouter = Router()
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'
import { loginController, registerController } from '~/controllers/users.controllers'
import { wrapRequestHandler } from '~/utils/handlers'
import { defaultErrorHanlder } from '~/middlewares/error.middlewares'

usersRouter.post('/login', loginValidator, wrapRequestHandler(loginController))

/**
 * Description: Register a new user
 * Path: /register
 * Method: POST
 * Body: {name:string,email:string,password:string,confirmPassword:string,Date of birth: 8601}
 */
usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController))
export default usersRouter
