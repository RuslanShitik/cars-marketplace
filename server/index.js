import express from 'express'
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(cors())
app.use(express.json())

async function startApp() {
    console.log('starting...')
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(process.env.PORT, ()=> console.log('server started'))
    }
    catch (e){
        console.log(e)
    }
}

await startApp()