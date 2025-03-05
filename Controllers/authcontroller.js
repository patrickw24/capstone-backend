import { db } from "../db/db.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const registerUser = async (req, res) => {
    const tmp = req.body

    try{
        const sql = 'INSERT INTO USERS ( password, name, email ) VALUES ($1, $2, $3)'
        const arr= [tmp.password, tmp.name, tmp.email]
        const result = await db.query(sql,arr)
        res.status(200).json({message: "User Created"})
    } catch(error) {
        console.log(error.message)
        res.status(500).json({error: "Failed to create user"})
    }
}

export const loginUser = async (req, res) => {
    const tmp = req.body

    try{
        const sql= 'select password, email from users where email = $1 and password = $2'
        const arr = [tmp.email, tmp.password]
        const results = await db.query(sql, arr)
        if (results.length > 0) {
            
            const secretKey = process.env.KEY_SECRET
            const token = jwt.sign(
                {
                    data: results
                },
                secretKey,
                {expiresIn: '3h'})

                return res.status(200).json({token});
        } else {
            return res.status(400).json({ message: "Invalid Credentials"})
        }
    }catch(error){
        const err = error.message;
        res.status(500).json({error: `Error register user ${err}`})
    }
}