import { Router } from "express";
import AdvertiseController from "../controllers/AdvertiseController.js";

const advertiseRouter = new Router();

advertiseRouter.get('/', AdvertiseController.getAll)

export default advertiseRouter;