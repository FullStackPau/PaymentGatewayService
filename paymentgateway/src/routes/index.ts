import express from "express";
import payment from "./payment";
const router = express.Router();

router.use("/payment", payment);




export default router;