interface IProduct {
  id: number;
  name: string;
  price: number;
  qty: number;
}

type TCreateProductData = Omit<IProduct, "qty">;

//Megazord força animal com lazers
class CartService {
  productList: IProduct[] = [];

  getTotal() {
    return this.productList.reduce((prevValue, product) => {
      return prevValue + product.price * product.qty;
    }, 0);
  }

  addProduct(newProduct: TCreateProductData) {
    const currentProduct = this.productList.find(
      (product) => product.id === newProduct.id
    );

    if (currentProduct) {
      const updatingProduct = {
        ...currentProduct,
        qty: currentProduct.qty + 1,
      };
      const index = this.productList.findIndex(
        (product) => product.id === newProduct.id
      );
      this.productList.splice(index, 1, updatingProduct);
      // Produto já está no carrinho
    } else {
      const addingProduct = { ...newProduct, qty: 1 };
      this.productList.push(addingProduct);
    }
  }

  removeProduct(removingId: number) {
    const currentProduct = this.productList.find(
      (product) => product.id === removingId
    );
    const index = this.productList.findIndex(
      (product) => product.id === removingId
    );

    if (currentProduct) {
      if (currentProduct?.qty > 1) {
        const updatingProduct = {
          ...currentProduct,
          qty: currentProduct.qty - 1,
        };

        this.productList.splice(index, 1, updatingProduct);
      } else {
        this.productList.splice(index, 1);
      }
    }
  }
}

// Instância
const littleShopping = new CartService();
littleShopping.addProduct({ id: 1, name: "PC Gamer", price: 2500 });
littleShopping.addProduct({ id: 1, name: "PC Gamer", price: 2500 });
littleShopping.addProduct({ id: 2, name: "Mouse", price: 200 });
console.log(littleShopping.getTotal());
console.log(littleShopping.productList);
littleShopping.removeProduct(1);
console.log(littleShopping.getTotal());
console.log(littleShopping.productList);
