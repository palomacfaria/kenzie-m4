import { generateId, productsDatabase } from "../database/database";
import { IProduct } from "../interfaces/products.interfaces";

export class ProductServices {
  getProducts() {
    return productsDatabase;
  }

  getOneProducts(id: string) {
    const findProduct = productsDatabase.find(
      (product) => product.id === Number(id)
    );

    return findProduct;
  }

  createProduct(name: string, price: number) {
    const newProduct: IProduct = {
      id: generateId(),
      name: name,
      price: price,
    };

    productsDatabase.push(newProduct);

    return newProduct;
  }

  deleteProduct(id: string) {
    const index = productsDatabase.findIndex(
      (product) => product.id === Number(id)
    );

    productsDatabase.splice(index, 1);
  }
}
