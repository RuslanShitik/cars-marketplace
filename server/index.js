// import mongoose from "mongoose";
import sequelize from "./sequelize.js";
import dotenv from 'dotenv';
import {admin, adminRouter} from "./admin/index.js";
import app from "./app.js";
dotenv.config();


async function startApp() {
    console.log('starting...')
    try {
        await sequelize.authenticate();
        console.log('Connection to POSTGRES has been established successfully.')


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