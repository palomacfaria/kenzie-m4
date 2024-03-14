import { TProduct } from "../interfaces/products.interfaces";

export const productsDatabase: TProduct[] = [];

let id = 0;

export const generateId = () => {
    id++;
    return id;
}