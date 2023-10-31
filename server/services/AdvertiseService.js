import { Advertise, Generation, TransmissionType, FuelType, BodyType, DrivingType, Color, User, Model, Mark } from "../models/index.js";
import DefaultModelService from "./DefaultModelService.js";

class AdvertiseService extends DefaultModelService {
    async getAll (query = {}) {
        return super.getAll({...query, 
            include: [{ all: true, nested: true}]
        }, Advertise);
    }
    async create(
        price, year, capacity, mileage, vin,
        description, generationId,
        transmissionId, fuelId, bodyId,
        drivingId, colorId, userId, 
        ) {
        const createdAdvertise = await Advertise.create({
            price, year, capacity, mileage, 
            vin, description, generationId,
            transmissionId, fuelId, bodyId,
            drivingId, colorId, userId, 
        });
        return createdAdvertise;
    }
}

export default new AdvertiseService;