import { Request, Response, NextFunction } from 'express'

export const sayHi = async (req: Request, res: Response) => {
    res.send('Hi Admin')
}

export const Greeting = async (req: Request, res: Response) => {
    res.send('good morning!! have a good day')
}

