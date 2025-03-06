import express from 'express'
export const authUser = express()
import { registerUser, loginUser } from '../Controllers/authcontroller.js'

authUser.post('/register', registerUser)
authUser.post('/login', loginUser)