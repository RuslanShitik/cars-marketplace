import Transmission from "../models/Transmission.js";
class TransmissionController {
    async create(req, res, next) {
        try {
            const newTransmission = Transmission.create(req.body)
            res.json(newTransmission)
        }
        catch (e){
            console.log(e)
            next(e)
        }
    }
}