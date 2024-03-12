import helmet from "helmet";
import express, { json } from "express";
import { productsRoutes } from "./routes/products.routes";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/products", productsRoutes);