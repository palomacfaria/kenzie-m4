class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`Olá, sou ${this.name}`);
  }
}

class Programmer extends Person {
  stack: string[];

  constructor(name: string, stack: string[]) {
    super(name); //Transportar parametros para a classe herdada
    this.stack = stack;
  }

  showMyStack() {
    console.table(this.stack);
  }
}

const programmerA = new Programmer("Paloma", [
  "React",
  "NextJs",
  "Node",
  "Express",
]);
programmerA.sayHello();
programmerA.showMyStack();
