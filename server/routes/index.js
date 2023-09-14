import {Router} from "express";
import userRouter from "./userRouter.js";
import transmissionRouter from "./transmissionRouter.js";

const router = new Router();

router.use('/user', userRouter)
router.use('/transmission', transmissionRouter)

export default router