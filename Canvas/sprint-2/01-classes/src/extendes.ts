//Herança em interfaces
interface IAnimal {
  name: string;
  type: string;
}

interface IBird extends IAnimal {
  wings: number;
}

//Herança em tipos

type TBird = IAnimal & {
  wings: number;
};

type TPerson = {
  name: string;
  age: number;
};

type TEmployee = {
  job: string;
  budget: number;
};

type TWorker = TPerson & TEmployee;
