import {Router} from "express";
import userRouter from "./userRouter.js";
import transmissionTypeRouter from "./transmissionTypeRouter.js";

const router = new Router();

router.use('/user', userRouter)
router.use('/transmission', transmissionTypeRouter)

export default router