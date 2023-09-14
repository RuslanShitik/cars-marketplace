import {Router} from "express";
import TransmissionController from "../controllers/TransmissionController.js";

const transmissionRouter = new Router()

transmissionRouter.post('/', TransmissionController.create)

export default transmissionRouter