import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
app.use(express.json())
dotenv.config()

app.use(cors())



const port = process.env.PORT || 8080
app.listen(port)