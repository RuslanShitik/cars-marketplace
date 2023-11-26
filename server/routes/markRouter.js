import {Router} from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import MarkController from "../controllers/MarkController.js";

const markRouter = new Router()

markRouter.get('/', MarkController.getAll)// todo: add express-rate-limit

export default markRouter