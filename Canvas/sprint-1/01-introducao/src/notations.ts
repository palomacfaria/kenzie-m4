//Notations (Tipagens relacionadas a parâmetros e retornos de função);

const sum = (a: number, b: number): number => {
  return a + b;
};
sum(10, 17);

const noReturn = (message: string): void => {
  console.log(message);
};
noReturn("Olá");
