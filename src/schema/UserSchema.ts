import mongoose from 'mongoose'

var utype : 'admin' | 'viewer'

export const UserSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  utype : {
    required: true,
  }
})

