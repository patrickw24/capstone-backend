import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { comments } from './Routes/commentRoutes .js';
import { posts } from './Routes/postRoutes .js';
import { authUser } from './Routes/authroutes.js';

const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())
app.use('/auth', authUser)

import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const tokenValidation = (req, res, next) => {

    const authorization = req.headers['authorization']
    if (!authorization) {
        return res.status(400).json({ message: "You need to pass a Token" })
    }

    const token = authorization.replace('Bearer ', '')

    try {
        const secret = process.env.KEY_SECRET
        jwt.verify(token, secret)
        next()
    } catch (err) {
        console.log(err.message)
        return res.status(400).json({ message: "Invalid Token" })

    }

}



app.use('/api/posts', tokenValidation, posts);
app.use('/api/comments', tokenValidation, comments);

app.post('/api/validatesession', tokenValidation, (req,res) => {
    res.json({ message: "Valid Token"})
})

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html")); // React
});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server running on port ${port}`))