import { Router } from 'express'

import { sayHello, greeting, Protectedpage } from '../controller/ViewerController'
import { sayHi, Greeting } from '../controller/AdminController'
import { authorization } from './../utils/auth'

const router = Router()

router.get('/myProtectedPage', Protectedpage)
router.get('/helloV', sayHello)
router.get('/viewerGreeting', greeting)

router.get('/hiA', authorization, sayHi)
router.get('/Admingereeting', authorization, Greeting)

export default router