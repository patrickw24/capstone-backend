import express from 'express'
export const authUser= express()
import { loginUser, registerUser } from '../Controllers/authcontroller.js'

authUser.post('/register', registerUser)
authUser.post('/login', loginUser)