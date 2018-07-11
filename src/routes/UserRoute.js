import express from 'express'
import { getUser } from '../controllers/UserController'

const router = express.Router()
router.post('/getUser', getUser)

export default router
