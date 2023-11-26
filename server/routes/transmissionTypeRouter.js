import {Router} from "express";
import TransmissionTypeController from "../controllers/TransmissionTypeController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const transmissionTypeRouter = new Router()

transmissionTypeRouter.post('/', authMiddleware, TransmissionTypeController.create) //todo: add validation
transmissionTypeRouter.get('/', TransmissionTypeController.getAll)// todo: add express-rate-limit

export default transmissionTypeRouter