import { Request, Response, NextFunction } from 'express'
import jwt from "jsonwebtoken"

const secret = 'my super secret'
var User = 'Admin'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.headers.authorization === undefined) {
            res.status(400).send('authorization token not provided')
            return
        }
        const token = (req.headers.authorization).split(' ')[1]
        const decodedToken = jwt.verify(token, secret)
        console.log(decodedToken)
        next()
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            res.status(403).send(error.message)
            console.log(error.name, error.message)
        }
    }
}

export const authorization = (req: Request, res: Response, next: NextFunction) => {
    if (User === 'Admin') {
        next()
    }
    else {
        res.send('you are not authorized').status(401)
    }
}
