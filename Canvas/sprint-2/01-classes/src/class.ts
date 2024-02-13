//POO - Programação Orientada a Objetos
//class - encapsular

export class Person {
  //Protected - Restringe o uso do recurso na instância
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public saySomething(message: string) {
    console.log(message);
  }

  //Private - Restringe o uso na instância e também na herança
  /* private */ sayMyName() {
    console.log(`Me chamo ${this.name}`);
  }
}

//Herança
export class Student extends Person {
  module: string;

  constructor(name: string, module: string) {
    //Se a subclasse tiver um construtor, é necessário chamar o construtor da superclasse usando a palavra-chave super() antes de inicializar seus próprios atributos.
    super(name);
    this.module = module;
  }

  sayMyModule() {
    console.log(`Estou matriculado no módulo ${this.module}`);
  }
}

//Polimorfismo
//Permite que métodos com o mesmo nome tenham implementações diferentes em classes distintas. Isso significa que podemos chamar métodos com o mesmo nome em objetos de classes diferentes, e cada objeto executará sua própria implementação específica do método.
export class Teacher extends Person {
  sayMyName(): void {
    console.log(`Sou o professor ${this.name}`);
  }
}
