export class ProductList {
  static productList: string[] = [];

  static addProduct(product: string) {
    this.productList.push(product);
  }

  static getProducts() {
    console.log(this.productList);
  }
}
