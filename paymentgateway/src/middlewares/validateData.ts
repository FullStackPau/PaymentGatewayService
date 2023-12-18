import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { ApplicationError } from "../models/Error";

export const validatePaymenData = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        amount: Joi.number().precision(2).strict().required()
    });
    const { error, value } = schema.validate(req.body);
    if(error){
        return next(new ApplicationError(400, `The specified data type field is not valid: ${error}`));
    }
    //Joi automaticamente parseara en este caso "12" (string) a 12 (number)
    req.body = value;
    return next();
}
export const validateReimbursePaymentData = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        product: Joi.string().strict().required()
    });
    const { error, value } = schema.validate(req.body);
    if(error){  
        return next(new ApplicationError(400, `The specified data type field is not valid: ${error}`));
    }
    req.body = value;
    return next();
}