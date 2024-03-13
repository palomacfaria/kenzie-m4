import { generateId, productsDatabase } from "../database/database";
import { TCreateProductBody, TEditProductBody, TProduct } from "../interfaces/products.interfaces";

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

  createProduct(data: TCreateProductBody) {
    const newProduct: TProduct = {
      id: generateId(),
      name: data.name,
      price: data.price,
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

  editProduct(id: string, data: TEditProductBody) {
    const product = productsDatabase.find(
      (product) => product.id === Number(id)
    ) as TProduct;

    const newProduct = { ...product, ...data };

    const index = productsDatabase.findIndex(
      (product) => product.id === Number(id)
    );

    productsDatabase.splice(index, 1, newProduct);

    return newProduct;
  }
}
