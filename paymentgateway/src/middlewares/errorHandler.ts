import { Request, Response, NextFunction } from "express";

export const errorHandler = (error:any, req: Request, res: Response, next: NextFunction) => {
    return res.status(error.code).json({
        error: true,
        mesage: error.message
    });
}