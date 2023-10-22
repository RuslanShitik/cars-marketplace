import {Router} from "express";
import TransmissionController from "../controllers/TransmissionTypeController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const transmissionTypeRouter = new Router()

transmissionTypeRouter.post('/', TransmissionController.create) //todo: add validation
transmissionTypeRouter.get('/', authMiddleware, TransmissionController.getAll)// todo: add express-rate-limit

export default transmissionTypeRouter