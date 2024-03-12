import "express-async-errors";
import helmet from "helmet";
import express, { json } from "express";
import { productsRouter } from "./routes/products.routes";
import { HandleErrors } from "./errors/handleErrors.middlewars";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/products", productsRouter);

app.use(HandleErrors.execute);
