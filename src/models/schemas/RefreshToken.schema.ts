import { ObjectId } from 'mongodb'
interface RefreshTokenType {
  _id?: ObjectId
  token: string
  created_At?: Date
  user_id: ObjectId
}
export default class RefreshToken {
  _id?: ObjectId
  token: string
  created_At: Date
  user_id: ObjectId
  constructor({ _id, token, created_At, user_id }: RefreshTokenType) {
    this._id = _id
    this.token = token
    this.created_At = created_At || new Date()
    this.user_id = user_id
  }
}
