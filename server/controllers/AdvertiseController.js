import { AdvertiseListSimpleDTO } from "../dtos/AdvertiseDTO.js";
import AdvertiseService from "../services/AdvertiseService.js";

class AdvertiseController {
    async getAll(req, res, next) {
        try {
            const advertises = await AdvertiseService.getAll({
                where: {
                    ...req.query,
                    isActual: true, 
                    isModerated: true
                }
            })
            const advertisesDTO = advertises.data.map((advertise) => new AdvertiseListSimpleDTO(advertise.dataValues));
            res.json({meta: advertises.meta, advertises: advertisesDTO})
        }
        catch (e) {
            next(e);
        }
    }
}

export default new AdvertiseController;//todo: create tests