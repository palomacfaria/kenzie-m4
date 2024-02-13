interface IPet {
  id: number;
  name: string;
  species: string;
}

interface IPerson {
  id: number;
  name: string;
  age: number;
  pet?: IPet;
}

interface IProgramer extends IPerson {
  stack: string[];
}

const programer: IProgramer = {
  id: 1,
  name: "Alex",
  age: 33,
  stack: ["React", "Next", "Node", "Express", "Nest"],
  pet: {
    id: 1,
    name: "Luz",
    species: "Cachorro",
  },
};

type TPerson = {
  id: number;
  name: string;
  age: number;
};

type TProgramer = TPerson & {
  stack: string[];
};

//const programer : TProgramer = {}

//Primitivos, Interfaces, Union - SÃO TODOS TIPOS
