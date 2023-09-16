import {Router} from "express";
import TransmissionController from "../controllers/TransmissionTypeController.js";

const transmissionTypeRouter = new Router()

transmissionTypeRouter.post('/', TransmissionController.create)

export default transmissionTypeRouter