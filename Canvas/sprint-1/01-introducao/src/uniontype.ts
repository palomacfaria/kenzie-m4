//Union

let age: string | number;
age = "33";
age = 33;

const soma = (num1: string | number, num2: string | number) => {
  return Number(num1) + Number(num2);
};

soma("22", 57);
