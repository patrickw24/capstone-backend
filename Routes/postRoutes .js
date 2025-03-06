import express from 'express'
export const posts = express()
import { getPosts, addPost, getPostsID,deletePost } from '../Controllers/postscontroller'

posts.get('/', getPosts)
posts.get('/:id', getPostsID )
posts.delete('/:id', deletePost)
posts.post('/', addPost)