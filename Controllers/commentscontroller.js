import { db } from "../db/db.js";


export const getComments = async (req, res) => {
/*add correction to use post_id*/
    const id_post=req.params.posts_id
    try{
        const sql = `select 
        comments_id,
        content,
        email,
        to_char(created_at, 'mm-dd-yyyy') created_at
        from comments where posts_id= $1`
        const comments = await db.query(sql, [id_post])
        res.json(comments)
    }catch(error){
        res.status(500).json({message: `Failed to fetch comments`})
    }

}

export const addComments = async (req,res) => {
    const tmp = req.body

    try{
        const sql= 'INSERT INTO COMMENTS (content, email, posts_id) values ($1,$2,$3)'
        const arr= [tmp.content, tmp.email, tmp.posts_id]
        const results= await db.query(sql, arr)
        res.status(200).json({message: "Added Comment"})
    }catch(error){
        console.log(error.message)
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