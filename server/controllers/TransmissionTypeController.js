import TransmissionTypeService from "../services/TransmissionTypeService.js";

class TransmissionTypeController {
    async create(req, res, next) {
        try {
            const { name } = req.body
            const newTransmission = await TransmissionTypeService.create(name)
            res.json(newTransmission)
        }
        catch (e) {
            next(e)
        }
    }
    async getAll(req, res, next) {
        try {
            const transmissions = await TransmissionTypeService.getAll(req.query)
            res.json(transmissions)
        }
        catch (e){
            next(e)
        }
    }
}

export default new TransmissionTypeController