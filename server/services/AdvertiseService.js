import { Advertise, Generation, TransmissionType, FuelType, BodyType, DrivingType, Color, User, Model, Mark } from "../models/index.js";
import DefaultModelService from "./DefaultModelService.js";

class AdvertiseService extends DefaultModelService {
    async getAll (query = {}) {
        return super.getAll({...query, 
            include: [{ all: true, nested: true}]
        }, Advertise);
    }
}

export default new AdvertiseService;