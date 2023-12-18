import { IPGateway1, IPaymentGateway, IPaymentProcessor, PaymentProvider } from "../types/gateway";
import { ApplicationError } from "./Error";
import { provider } from "../paymentproviders";

//To process one of the two payment gateways
export class PaymentProcessor implements IPaymentProcessor{
    private gateway: IPaymentGateway;
    constructor(gateway: IPaymentGateway){
        this.gateway = gateway;
    }
    async paymentProcessing(amount: number){
        return this.gateway.pay(amount);
    }
    async reimburseProcessing(item: string){
        return this.gateway.reimburse(item);
    }
    async partialReimburseProcessing(item: string){
        if(this.gateway instanceof PGateway1) {
            return this.gateway.partialReimburse(item);
        }
        return new ApplicationError(500, "Invalid Payment Gateway");
    }
}


class PaymentGateway implements IPaymentGateway{
    protected products = [{product:"Headphones", price:12.99}]
    protected paymentProvidersList:PaymentProvider[] = provider;
    protected providername = "";
    constructor(providername: string){
        this.providername = providername;
    }
    pay(amount: number){
        if(!this.validProvider()){
            return new ApplicationError(404, "Payment Provider not found");
        }
        if(amount > 100){
            return { error: false, message: `Payment was Successful ${this.providername}`}
        }
        return new ApplicationError(500, "Not enough amount of money");
    }
    reimburse(item: string){
        if(!this.validProvider()){
            return new ApplicationError(404, "Payment Provider not found");
        }
        const product = this.products.find(({product}: {product:string}) => product === item);
        if(product){
            return { error: false, message: `Reimburse was successful complete with ${this.providername}: ${product.price}` }
        }
        return new ApplicationError(404, "Product not Found");
    }
    validProvider(){
        const providerexist = this.paymentProvidersList.find(item => item.name === this.providername && item.active);
        if(!providerexist){
            return false;
        }
        return true;
    }
}

export class PGateway1 extends PaymentGateway implements IPGateway1 {
    partialReimburse(item: string){
        if(!this.validProvider()){
            return new ApplicationError(404, "Payment Provider not found");
        }
        const product = this.products.find(({product}: {product:string}) => product === item);
        if(product){
            const reimburse = product.price/2;
            return { error: false, message: `Partial Reimburse was successful complete with ${this.providername}: ${Math.floor(reimburse* 100)/100}` }
        }
        return new ApplicationError(404, "Product not Found");
    }
}
export class PGateway2 extends PaymentGateway {

}

