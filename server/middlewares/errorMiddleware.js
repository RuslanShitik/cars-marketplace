import APIException from "../exceptions/apiExceptions.js";
export default function (err, req, res, next) {
    

    if (err instanceof APIException) {
        return res.status(err.status).json({
            message: err.message,
            errors: err.errors
        });
    }
    if (err.hasOwnProperty("errors")) {
        res.status(400).json({messages: err.errors.map(el=> el.message)});
    }
    else {
        console.error('500 - ExceptionMiddleWare: ',err);
        res.status(500).json();
    }
}