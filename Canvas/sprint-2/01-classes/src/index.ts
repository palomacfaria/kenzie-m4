//POO - Programação Orientada a Objetos
//class - encapsular

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  saySomething(message: string) {
    console.log(message);
  }

  sayMyName() {
    console.log(`Me chamo ${this.name}`);
  }
}

const person1 = new Person("Paloma");
person1.saySomething("Olá");
person1.sayMyName();

const person2 = new Person("Alex");
person2.sayMyName();
