import { query } from "express";

class DefaultModelService {
    limit = 10;
    page = 1;
    
    async getAll(queryRaw = {}, model){
        const limit = Number(queryRaw?.limit || this.limit)
        const offset = ((queryRaw?.page || this.page) - 1) * limit;
        const query = {...queryRaw, limit, offset}

        const { count, rows } = await model.findAndCountAll(query)
            
        return {
            meta: {
                page: (offset/limit) + 1,
                perPage: limit,
                total: count
            },
            data: rows
        }
    }
}

export default DefaultModelService