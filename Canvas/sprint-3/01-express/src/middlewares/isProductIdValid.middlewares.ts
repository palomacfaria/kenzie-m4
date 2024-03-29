import { NextFunction, Request, Response } from "express";
import { productsDatabase } from "../database/database";
import { AppError } from "../errors/errors";

export class IsProductIdValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    if (
      !productsDatabase.some((product) => product.id === Number(req.params.id))
    ) {
      throw new AppError(404, "Product not found!")
    }
    return next();
  }
}


/*     //middleware que valida se um produto existe no banco de dados, buscando por seu id:
    const productFound = productsDatabase.find(
      (product) => product.id === Number(req.params.id)
    );

    if (!productFound) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.locals.product = productFound; */