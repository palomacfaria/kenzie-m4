import { Request, Response } from "express";
import { ProductServices } from "../services/products.services";

export class ProductsControllers{
    createProduct(req: Request, res: Response){
        const productsServices = new ProductServices();

        const response = productsServices.createProduct(req.body);

        return res.status(201).json(response);
    }
}