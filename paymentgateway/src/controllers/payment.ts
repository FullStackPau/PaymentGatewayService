import { Request, Response, NextFunction } from "express";
import { PGateway1, PGateway2 } from "../models/Payment";
import { partialReimburseService, payService, reimburseService } from "../services/paymentService";
import { ApplicationError } from "../models/Error";

export const paymentControllerV1 = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { amount } = req.body;
        const response = await payService(new PGateway1(req.params.provider), amount);
        if(response instanceof ApplicationError){
            return next(response);
        }
        return res.status(200).json(response);

    }catch(e){
        return next(new ApplicationError(500, "Error Processing Payment v1"));
    }
}
export const paymentControllerV2 = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { amount } = req.body;
        const response = await payService(new PGateway2(req.params.provider), amount);
        if(response instanceof ApplicationError){
            return next(response);
        }
        return res.status(200).json(response);
    }catch(e){
        return next(new ApplicationError(500, "Error Processing Payment v2"));
    }
}
export const reimburseControllerV1 = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { product } = req.body;
        const response = await reimburseService(new PGateway1(req.params.provider), product);
        if(response instanceof ApplicationError){
            return next(response);
        }
        return res.status(200).json(response);
    }catch(e){
        return next(new ApplicationError(500, "Error Processing Reimbursement v1"));
    }
}
export const reimburseControllerV2 = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { product } = req.body;
        const response = await reimburseService(new PGateway2(req.params.provider), product);
        if(response instanceof ApplicationError){
            return next(response);
        }
        return res.status(200).json(response);
    }catch(e){
        return next(new ApplicationError(500, "Error Processing Reimbursement v1"));
    }
}
export const partialReimburseControllerV1 = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { product } = req.body;
        const response = await partialReimburseService(new PGateway1(req.params.provider), product);
        if(response instanceof ApplicationError){
            return next(response);
        }
        return res.status(200).json(response);

    }catch(e){
        return next(new ApplicationError(500, "Error Processing Payment v1"));
    }
}