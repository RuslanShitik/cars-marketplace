import { AdvertiseListSimpleDTO } from "../dtos/AdvertiseDTO.js";
import AdvertiseService from "../services/AdvertiseService.js";

class AdvertiseController {
    async getAll(req, res, next) {
        try {
            const { mark, model, generation } = req.query;
            const filter = {
                isActual: true,
                isModerated: true,
            };

            if (mark) {
                filter['Generation.model.mark.name'] = mark;
            }

            if (model) {
                filter['Generations.Models.name'] = model;
            }

            if (generation) {
                filter['generation.name'] = generation;
            }

            const advertises = await AdvertiseService.getAll({ where: filter });

            const advertisesDTO = advertises.data.map((advertise) => new AdvertiseListSimpleDTO(advertise.dataValues));
            res.json({meta: advertises.meta, advertises: advertisesDTO})
        }
        catch (e) {
            next(e);
        }
    }

    async create(req, res, next) {
        try {
            const {
                price, year, capacity, mileage, 
                vin, description, generationId,
                transmissionId, fuelId, bodyId,
                drivingId, colorId,
            } = req.body;
            const { userId } = req.user;

            const createdAdvertise = await AdvertiseService.create(
                price, year, capacity, mileage, 
                vin, description, generationId,
                transmissionId, fuelId, bodyId,
                drivingId, colorId, userId, 
            )
            res.status(201).json({id: createdAdvertise.id})
        }
        catch (e) {
            next(e);
        }
    }
}

export default new AdvertiseController;