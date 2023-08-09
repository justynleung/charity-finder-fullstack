import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { MongoServerError } from "mongodb";

const errorHandlerMiddleware = (err: MongoServerError, req: Request, res: Response, next: NextFunction) => {
    let customError = {
        // set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong try again later',
    };

    if (err.code && err.code === 11000) {
        customError.msg = `Already in your fav list`
        customError.statusCode = StatusCodes.CONFLICT
    }


    return res.status(customError.statusCode).json({ msg: customError.msg });
};

export default errorHandlerMiddleware;