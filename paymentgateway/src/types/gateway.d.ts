import { ApplicationError } from "../models/Error"

export type PaymentProvider = {
        name: string,
        active: boolean
}
export type ResultPaymentProcessing = {
    error: boolean,
    message: string
}
export interface IPaymentGateway {
    pay: (amount: number) => ResultPaymentProcessing | ApplicationError,
    reimburse: (item: string) =>  ResultPaymentProcessing | ApplicationError,
    validProvider: (provider: string) => boolean 
}
export interface IPGateway1 {
    partialReimburse: (item: string) =>  ResultPaymentProcessing | ApplicationError
}

export interface IPaymentProcessor {
    paymentProcessing: (amount: number) => Promise<ResultPaymentProcessing | ApplicationError>,
    reimburseProcessing:(item: string) => Promise<ResultPaymentProcessing | ApplicationError>,
    partialReimburseProcessing:(item: string) => Promise<ResultPaymentProcessing | ApplicationError>
}