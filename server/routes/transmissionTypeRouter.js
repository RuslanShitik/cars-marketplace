import {Router} from "express";
import TransmissionController from "../controllers/TransmissionTypeController.js";

const transmissionTypeRouter = new Router()

transmissionTypeRouter.post('/', TransmissionController.create) //todo: add validation and isrole middleware
transmissionTypeRouter.get('/', TransmissionController.getAll)

export default transmissionTypeRouter