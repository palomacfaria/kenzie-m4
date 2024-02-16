type TOperation = "sum" | "sub" | "mult" | "div";

interface IOpearatorConfig {
  operation: TOperation;
  number: number;
}

let total = 0;

enum Operations {
  SUM = "sum",
  SUB = "sub",
  MULT = "mult",
  DIV = "div",
}

function operator({ number, operation }: IOpearatorConfig) {
  switch (operation) {
    case Operations.SUM:
      total = total + number;
      break;
    case Operations.SUB:
      total = total - number;
      break;
    case Operations.MULT:
      total = total * number;
      break;
    case Operations.DIV:
      total = total / number;
      break;
  }
  return total;
}

function reset() {
  total = 0;
}

console.log(operator({ operation: "sum", number: 10 }));
console.log(operator({ operation: "div", number: 2 }));
console.log(operator({ operation: "mult", number: 3 }));

//POO - Calculadora
class CalculatorServices {
  total: number;

  //Constructor -
  constructor(number = 0) {
    this.total = number;
  }

  //Projeto arquitetônico da calculadora
  doOperator({ number, operation }: IOpearatorConfig) {
    switch (operation) {
      case Operations.SUM:
        this.total += number;
        break;
      case Operations.SUB:
        this.total -= number;
        break;
      case Operations.MULT:
        this.total *= number;
        break;
      case Operations.DIV:
        this.total /= number;
        break;
    }
    return this.total;
  }
  reset() {
    this.total = 0;
  }
}

//Construindo o prédio
const calc1 = new CalculatorServices(10);
calc1.doOperator({ number: 20, operation: "sum" });
calc1.doOperator({ number: 5, operation: "sub" });
console.log(calc1.total);

const calc2 = new CalculatorServices();
calc2.doOperator({ number: 10, operation: "sum" });
calc2.doOperator({ number: 10, operation: "mult" });
console.log(calc2.total);
