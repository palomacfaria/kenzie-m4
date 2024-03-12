import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductNameUnique } from "../middlewares/isProductNameUnique.middleware";
import { IsCreateProductBody } from "../middlewares/isCreateProductBodyValue.middleware";

export const productsRoutes = Router();

const productsControllers = new ProductsControllers();

productsRoutes.post("/", IsCreateProductBody.execute, IsProductNameUnique.execute, productsControllers.createProduct);
