import { IProduct } from "../interfaces/products.interfaces";

export const productsDatabase: IProduct[] = [];

let id = 0;

export const generateId = () => {
    id++;
    return id;
}