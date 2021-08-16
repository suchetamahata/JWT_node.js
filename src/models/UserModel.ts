import mongoose from 'mongoose'
import {UserSchema} from '../schema/UserSchema'

export const UserModel =  mongoose.model('user', UserSchema)

