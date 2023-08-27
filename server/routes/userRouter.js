import {Router} from "express";
import UserController from "../controllers/UserController.js";

const userRouter = new Router();

userRouter.post('/registration', UserController.registration )

export default userRouter