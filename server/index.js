import express from 'express'
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import router from "./routes/index.js";
import AdminJS from "adminjs";
import AdminJSExpress from '@adminjs/express'
import * as AdminJSMongoose from '@adminjs/mongoose'
import resources from "./admin/index.js";
import errorMiddleware from './middlewares/errorMiddleware.js';
dotenv.config();


const app = express();


AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
})

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorMiddleware)

async function startApp() {
    console.log('starting...')
    try {
        await mongoose.connect(process.env.DB_URL)

        const admin = new AdminJS({resources})
        const adminRouter = AdminJSExpress.buildRouter(admin)
        app.use(admin.options.rootPath, adminRouter)

        app.listen(process.env.PORT, () => {
            console.log(`server started on port ${process.env.PORT}`)
            console.log(`AdminJS started on http://localhost:${process.env.PORT}${admin.options.rootPath}`)
        })
    }
    catch (e){
        console.error(e)
    }
}

await startApp()

//help: https://github.com/libeyondea/backend-node-express/blob/main/src/routes/v1/authRoute.js