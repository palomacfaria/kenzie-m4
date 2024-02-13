// Interface - Tipo que existe para descrever um objeto
interface ICategory {
  id: number;
  title: string;
  description: string;
}

interface IRecipe {
  id: number;
  title: string;
  ingredients: string[];
  steps: string[];
  category?: ICategory; //Interrogação torna uma chave opcional
}

//Type - Uma instância de qualquer tipo
type TRecipe = {
  id: number;
  title: string;
  ingredients: string[];
  steps: string[];
};

const recipe: IRecipe = {
  id: 1,
  title: "Receita de Bolo de Chocolate",
  ingredients: ["Trigo", "Ovos", "Chocolate"],
  steps: ["Passo 1", "Passo 2"],
};
