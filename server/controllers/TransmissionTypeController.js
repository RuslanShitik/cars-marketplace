import Transmission from "../models/TransmissionType.js";
class TransmissionTypeController {
    async create(req, res, next) {
        try {
            console.log('req.body: ',req.body)
            const newTransmission = await Transmission.create(req.body)
            console.log('newTransmission: ',newTransmission)
            res.json(newTransmission)
        }
        catch (e){
            next(e)
        }
    }
}

export default new TransmissionTypeController