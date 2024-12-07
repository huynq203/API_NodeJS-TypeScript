import { Request } from 'express'
import User from './models/schemas/User.schema'

//mở rộng kiểu dữ liệu Request
declare module 'express' {
  interface Request {
    user?: User
  }
}
