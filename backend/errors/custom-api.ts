import { StatusCodes } from "http-status-codes";

interface CustomAPIError {
    statusCode: StatusCodes
}

class CustomAPIError extends Error {
    constructor(message: string) {
        super(message)
    }
}


export default CustomAPIError;

