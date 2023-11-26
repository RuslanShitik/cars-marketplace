import MarkService from "../services/MarkService.js";
import { IdNameDto } from "../dtos/IdNameDto.js";

class MarkController {
    async getAll(req, res, next) {
        try {
            const marks = await MarkService.getAll(req.query)
            const marksDTO = marks.data.map((mark) => new IdNameDto(mark.dataValues));
            res.json({meta: marks.meta, marks: marksDTO})
        }
        catch (e){
            next(e)
        }
    }
}

export default new MarkController