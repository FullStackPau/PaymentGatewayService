import express from "express";
import swagger from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import path from "path";
const app = express();

const options = {
  definition: {
      openapi: "3.0.0",
      info: {
          title: "Payment Gateway",
          version: "1.0.0"
      },
     
  },
  apis: [path.resolve(__dirname, '../endpoints.yaml')]
}

const swaggerSpec = swagger(options);
app.use(express.json());


app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/", router);



app.use(errorHandler);

export default app;