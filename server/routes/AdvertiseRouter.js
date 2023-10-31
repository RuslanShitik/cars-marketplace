import { Router } from "express";
import AdvertiseController from "../controllers/AdvertiseController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const advertiseRouter = new Router();

advertiseRouter.get('/', AdvertiseController.getAll)
advertiseRouter.post('/', authMiddleware, AdvertiseController.create)

export default advertiseRouter;