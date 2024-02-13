interface IProductList {
  productList: string[];
  getProducts(): string[];
  addProduct(product: string): void;
  removeProduct(index: number): void;
}

/* class ProductList implements IProductList {
  productList: string[];

  getProducts(): string[] {}
  addProduct(product: string): void {}
  removeProduct(index: number): void {}
}
 */
