import { Request, Response } from "express";
import { ProductServices } from "../services/products.services";

export class ProductsControllers {
  getProducts(req: Request, res: Response): Response {
    const productServices = new ProductServices();

    const response = productServices.getProducts();

    return res.status(200).json(response);
  }

  getOneProducts(req: Request, res: Response): Response {
    const productServices = new ProductServices();

    const response = productServices.getOneProducts(req.params.id);

    return res.status(200).json(response);
  }

  createProduct(req: Request, res: Response): Response {
    const productServices = new ProductServices();

    const response = productServices.createProduct(req.body);

    return res.status(201).json(response);
  }

  deleteProduct(req: Request, res: Response): Response {
    const productServices = new ProductServices();

    const response = productServices.deleteProduct(req.params.id);

    return res.status(204).json(response);
  }
  editProduct(req: Request, res: Response): Response{
    const productsService = new ProductServices();

    const response = productsService.editProduct(req.params.id, req.body);

    return res.status(200).json(response);
}
}
