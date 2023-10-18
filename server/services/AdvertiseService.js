import Advertise from "../models/Advertise.js";
import DefaultModelService from "./DefaultModelService.js";

class AdvertiseService extends DefaultModelService {
    async getAll (query = {}) {
        return super.getAll(query, Advertise, [
            {
                path: 'generation',
                populate: {
                    path: 'model',
                    populate: {
                        path: 'mark'
                    }
                },
            },
            {
                path: 'transmission'  
            },
            {
                path: 'fuel'  
            },
            {
                path: 'body'  
            },
            {
                path: 'driving'  
            },
            {
                path: 'color'  
            },
        ]);
    }
}

export default new AdvertiseService;