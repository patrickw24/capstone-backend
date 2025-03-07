import express from 'express'
export const comments = express()
import { getComments, addComments, deleteComment } from '../Controllers/commentscontroller.js'

comments.get('/:posts_id', getComments)
comments.post('/', addComments )
comments.delete('/:id', deleteComment)