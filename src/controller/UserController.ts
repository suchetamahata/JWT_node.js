import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {Request, Response, NextFunction} from 'express'

const {UserModel} = require('./../models/UserModel')
const secret = 'my super secret'

const createUser = async (req: Request, res: Response) => {
  try {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    
    const user = await UserModel.findOne({ name: req.body.name })
    if(user === null){
      const newUser = new UserModel({
        name: req.body.name,
        password: hashedPassword,
        utype: req.body.utype
      })
      const saveDoc = (await newUser.save()).toObject()
      delete saveDoc['password']
      delete saveDoc['__v']
      res.json({
        message: 'New user created',
        data: saveDoc
      })
    }  
    else{
      res.status(400).send('username already taken, try another name')
    }  
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}

const userLogin = async (req: Request, res: Response) => {
  try {
      const user = await UserModel.findOne({ name: req.body.name })
      const xyz = await bcrypt.compare(req.body.password, user.password)
      if (user === undefined) {
        res.status(400).send('no user by this name')
      }
      else if (xyz) {
        const trimmedUser = user.toObject()
        delete trimmedUser.password
        delete trimmedUser.__v
        const token = jwt.sign(trimmedUser,secret)
        res.json({
          message: 'logged in successfully',
          token,
          userid: trimmedUser._id
        })
      }
      else {
        res.send('wrong password/username')
      }
  } catch (error) {
      console.error(error)
      res.status(500)
    }
}


module.exports = {
  userLogin,
  createUser
}
