import pg from 'pg-promise'
import dotenv from 'dotenv'

dotenv.config()
const pgp= pg()
const db= pgp(process.env.DATABASE_URL)

export { db }


db.connect()
.then(()=>{
    console.log("Success Connection")
})
.catch((err)=>{
    console.log(`Error Connection ${err}`)
})