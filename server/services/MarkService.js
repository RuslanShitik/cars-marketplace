import { Mark } from "../models/index.js";
import DefaultModelService from "./DefaultModelService.js";

class MarkService extends DefaultModelService{
    async getAll(query = {}, model) {
        return super.getAll(query, Mark);
    }

}

export default new MarkService
