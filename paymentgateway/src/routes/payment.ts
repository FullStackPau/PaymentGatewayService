import express from "express";
import { partialReimburseControllerV1, paymentControllerV1, paymentControllerV2, reimburseControllerV1, reimburseControllerV2 } from "../controllers/payment";
import { validatePaymenData, validateReimbursePaymentData } from "../middlewares/validateData";

const payment = express.Router();

payment.post("/v1/:provider/pay", validatePaymenData, paymentControllerV1);
payment.post("/v1/:provider/reimburse", validateReimbursePaymentData,  reimburseControllerV1);
payment.post("/v1/:provider/partialreimburse", validateReimbursePaymentData, partialReimburseControllerV1);


payment.post("/v2/:provider/pay", validatePaymenData, paymentControllerV2);
payment.post("/v2/:provider/reimburse", validateReimbursePaymentData, reimburseControllerV2);



export default payment;