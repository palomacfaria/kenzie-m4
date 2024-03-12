import { NextFunction, Request, Response } from "express";
import { productsDatabase } from "../database/database";

export class IsProductNameUnique{
    static execute(req: Request, res: Response, next: NextFunction){
        if(productsDatabase.some(product => product.name === req.body.name)){
            return res.status(409).json({ error: "Product already registered."});
        }

        next();
    }
}