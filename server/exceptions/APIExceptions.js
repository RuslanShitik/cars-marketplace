class APIException extends Error {
    status;
    errors;

    constructor (status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;

    }

    static unauthorized () {
        return new APIException(401, 'Unauthorized');
    }

    static badRequest (message, errors = []) {
        return new APIException(400, message, errors);
    }

    static serverError (message, errors = []) {
        return new APIException(500, message, errors);
    }

    static notFound (message) {
        return new APIException(404, message);
    }

    static forbidden (message) {
        return new APIException(403, message);
    }
}

export default APIException;