import {Router} from "express";
import userRouter from "./userRouter.js";
import transmissionTypeRouter from "./transmissionTypeRouter.js";
import advertiseRouter from "./AdvertiseRouter.js";
import markRouter from "./markRouter.js";

const router = new Router();

router.use('/user', userRouter)
router.use('/transmission', transmissionTypeRouter)
router.use('/advertise', advertiseRouter)
router.use('/mark', markRouter)

export default router