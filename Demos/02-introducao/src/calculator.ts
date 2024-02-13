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
