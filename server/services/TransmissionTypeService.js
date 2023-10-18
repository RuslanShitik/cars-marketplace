import TransmissionType from "../models/TransmissionType.js";
import {IdNameDto} from "../dtos/IdNameDto.js";
import DefaultModelService from "./DefaultModelService.js";
class TransmissionTypeService extends DefaultModelService{
    async create(name) {
        const newTransmission = await TransmissionType.create({name})
        return newTransmission
    }
    async getAll(query = {}, model) {
        return super.getAll(TransmissionType, query);
    }

    // async getAll() {
    //     const transmissions = await TransmissionType.find().limit(2)
    //     const transmissionsDto = transmissions.map((el) => new IdNameDto(el))
    //     return transmissionsDto
    // }
}

export default new TransmissionTypeService