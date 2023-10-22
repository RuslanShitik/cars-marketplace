import {Router} from "express";
import TransmissionController from "../controllers/TransmissionTypeController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const transmissionTypeRouter = new Router()

transmissionTypeRouter.post('/', TransmissionController.create) //todo: add validation and isrole middleware
transmissionTypeRouter.get('/', authMiddleware, TransmissionController.getAll)

export default transmissionTypeRouter