import { db } from "../db/db.js"

export const getPosts= async (req, res) => {

    try{
        const sql = 'select * from Posts'
        const posts= await db.query(sql)
        res.json(posts)
    }catch(error){
        res.status(500).json({messagae: "Failed fetching Posts"})
    }

}

export const addPost= async (req,res) => {

    const tmp= req.body

    try{
        const sql= 'INSERT INTO Posts (content, users_id) values ($1, $2)'
        const arr= [tmp.content, tmp.users_id]
        const results = await db.query(sql, arr)
        res.status(200).json({message: "Post has been added"})
    }catch(error){
        console.log(error)
        res.status(500).json({message: "Failed to add Post"})
    }
}

export const getPostsID = async (req,res) =>{
    const posts_id= req.params.id
    console.log(req.params)
    console.log(posts_id)
        try{
            const sql= 'select * from Posts WHERE posts_id= $1 '
            
            const result = await db.query(sql, [posts_id])
            res.json(result)
        }catch(error){
            res.status(500).json({message: error})
        }

}


export const deletePost= async (req, res) =>{

    const posts_id = req.params.id
    const sql = `delete from posts where posts_id = $1`
    const arr = [posts_id]

    const result = await db.query(sql, arr)

    res.json({ message: "Post Deleted" })
}