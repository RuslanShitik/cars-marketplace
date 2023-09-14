import APIException from "../exceptions/apiExceptions.js";
export default function (err, req, res, next) {
    console.error('ExceptionMiddleWare: ',err);

    if (err instanceof APIException) {
        return res.status(err.status).json({
            message: err.message,
            errors: err.errors
        });
    }
    else {
        res.status(500).json(err);
    }
}