import { PaymentProcessor } from "../models/Payment";
import { IPaymentGateway } from "../types/gateway";

export const payService = (gateway: IPaymentGateway, amount: number) => {
    const processor = new PaymentProcessor(gateway)
    return processor.paymentProcessing(amount); 
}

export const reimburseService = (gateway: IPaymentGateway, item: string) => {
    const processor = new PaymentProcessor(gateway);
    return processor.reimburseProcessing(item);
}

export const partialReimburseService = (gateway: IPaymentGateway, item: string) => {
    const processor = new PaymentProcessor(gateway);
    return processor.partialReimburseProcessing(item);
}