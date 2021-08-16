import { Request, Response, NextFunction } from 'express'

export const Protectedpage = async (req: Request, res: Response) => {
    res.send('hello from my protected page')
}

export const sayHello = async (req: Request, res: Response) => {
    res.send('Hello User')
}
export const greeting = async (req: Request, res: Response) => {
    res.send('good morning!! have a good day')
}

