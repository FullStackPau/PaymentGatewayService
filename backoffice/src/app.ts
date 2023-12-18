import express, { Request, Response} from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use("/", createProxyMiddleware({
    target:`http://paymentgatewayservice:8200`,
    changeOrigin: true,
    headers: {
        Accept: `application/json`
    },
    onError: (err:any, req: Request, res: Response) => {
        res.status(500).send("Proxy Error");
    }
}));
export default app;