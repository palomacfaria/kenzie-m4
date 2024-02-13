type TOperation = "sum" | "sub" | "mult" | "div";

interface IOpearatorConfig {
  operation: TOperation;
  number: number;
}

let total = 0;

function operator({ number, operation }: IOpearatorConfig) {
  switch (operation) {
    case "sum":
      total = total + number;
      break;
    case "sub":
      total = total - number;
      break;
    case "mult":
      total = total * number;
      break;
    case "div":
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
