import {Router} from 'express'

const { createUser, userLogin } = require('../controller/UserController')

const router = Router()

router.post('/create', createUser)
router.post('/login', userLogin) 
//router.get('/get-users', GetUser)


export default router
