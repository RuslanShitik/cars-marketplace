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

const DEFAULT_ADMIN = {
    email: 'root@root.com',
    password: 'root',
}

const authenticate = async (email, password) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
        return Promise.resolve(DEFAULT_ADMIN)
    }
    return null
}


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
        const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
            admin,
            {
                authenticate,
                cookieName: 'adminjs',
                cookiePassword: 'sessionsecret',
            },
            null,
            {
                resave: true,
                saveUninitialized: true,
                secret: 'sessionsecret',
                cookie: {
                    httpOnly: process.env.NODE_ENV === 'production',
                    secure: process.env.NODE_ENV === 'production',
                },
                name: 'adminjs',
            }
        )
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