import { db } from "../db/db.js";


export const getComments = async (req, res) => {
/*add correction to use post_id*/
    try{
        const sql = "select * from comments"
        const comments = await db.query(sql)
        res.json(comments)
    }catch(error){
        res.status(500).json({message: `Failed to fetch comments`})
    }

}

export const addComments = async (req,res) => {
    const tmp = req.body

    try{
        const sql= 'INSERT INTO COMMENTS (content, user_id, posts_id) values ($1,$2,$3)'
        const arr= [tmp.content, tmp.user_id, tmp.posts_id]
        const results= await db.query(sql, arr)
        res.status(200).json({message: "Added Comment"})
    }catch(error){
        res.status(500).json({error: 'Failed to add Comment'})
    }
}



export const deleteComment = async (req, res) => {
    const comments_id = req.params.id    
    try{
        const sql = 'Delete FROM Comments where comments_id= $1'
        const arr = [comments_id]
        const result = await db.query(sql,arr)
        res.json({message: "Comment Deleted"})
    }catch(error){
        res.status(500).json({message: "Failed to delete comment"})
    }
}