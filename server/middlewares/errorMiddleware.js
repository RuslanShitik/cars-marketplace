import APIException from "../exceptions/apiExceptions.js";
export default function (err, req, res, next) {
    console.error('ExceptionMiddleWare: ',err);
    console.log('-----ExceptionMiddleWare-----\n', err.errors)

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
        res.status(500).json();
    }
}