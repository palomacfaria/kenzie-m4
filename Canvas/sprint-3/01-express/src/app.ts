import "express-async-errors";
import express, { json } from "express";
import { productsRouter } from "./routes/products.routes";
import { HandleErrors } from "./errors/handleErrors.middlewars";

export const app = express();

app.use(json());

app.use("/products", productsRouter);

app.use(HandleErrors.execute);