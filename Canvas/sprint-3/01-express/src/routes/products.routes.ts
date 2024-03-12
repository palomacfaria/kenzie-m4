import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductIdValid } from "../middlewares/isProductIdValid.middlewares";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { createProductBodySchema } from "../schemas/createProductBody.schema";

export const productsRouter = Router();

const productsControllers = new ProductsControllers();

productsRouter.get("/", productsControllers.getProducts);

productsRouter.get(
  "/:id",
  IsProductIdValid.execute,
  productsControllers.getOneProducts
);

productsRouter.post(
  "/",
  ValidateBody.execute({ body: createProductBodySchema }),
  productsControllers.createProduct
);

productsRouter.delete(
  "/:id",
  IsProductIdValid.execute,
  productsControllers.deleteProduct
);
