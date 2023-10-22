import { isRole } from "../helpers/role";
import APIException from "../exceptions/apiExceptions.js";
import TokenService from "../services/TokenService.js";

export default function (roles = []) {
    return function(req, res, next) {
        try {
            const accessToken = req.headers.autharization.split(' ')[1];  
            if (!accessToken) {
                return next(APIException.unauthorized())
            }

            const userData = TokenService.validateAccessToken(accessToken)
            if (!userData) {
                return next(APIException.unauthorized())
            }
            if (isRole(roles, userData.role)) {
                return next(APIException.forbidden())
            }
            
            req.user = userData;
            next()
        }
        catch (e){
            return next(APIException.unauthorized())
        }
    }
}