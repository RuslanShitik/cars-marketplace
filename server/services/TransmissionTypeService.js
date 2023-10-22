import { TransmissionType } from "../models/index.js";
import DefaultModelService from "./DefaultModelService.js";
class TransmissionTypeService extends DefaultModelService{
    async create(name) {
        const newTransmission = await TransmissionType.create({name})
        return newTransmission
    }

    async getAll(query = {}, model) {
        return super.getAll(query, TransmissionType);
    }

}

export default new TransmissionTypeService