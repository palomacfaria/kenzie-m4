//Types -> Aceita qualquer tipagem existente

//type Product = string;

//type Product = string | number;

interface IProduct {
  id: number;
  name: string;
  price: number;
  categories: string[];
}

type Product = IProduct | null;

type Modules = "M1" | "M2" | "M3" | "M4";

const courseModule: Modules = "M1";
