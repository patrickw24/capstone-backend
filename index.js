import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js'

const app = express()
app.use(express.json())
dotenv.config()

app.use(cors())

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server running on port ${port}`))