import APIException from "../exceptions/apiExceptions.js";
import TokenService from "../services/TokenService.js";

export default function(req, res, next) {
    try {
        const accessToken = req.headers.autharization.split(' ')[1];  
        if (!accessToken) {
            return next(APIException.unauthorized())
        }

        const userData = TokenService.validateAccessToken(accessToken)
        if (!userData) {
            return next(APIException.unauthorized())
        }
        req.user = userData;
        console.log('---req.user---\n',req.user)
        next()
    }
    catch (e){
        return next(APIException.unauthorized())
    }
}