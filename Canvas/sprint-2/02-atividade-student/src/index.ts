class Student {
  name: string;
  module: string;
  grade: number | null = null;

  constructor(name: string, module: string) {
    this.name = name;
    this.module = module;
  }

  sayHello() {
    console.log(
      `Olá eu me chamo ${this.name} e estou matriculado(a) no módulo ${this.module}`
    );
  }

  setGrade(note: number) {
    this.grade = note;
  }

  getGrade() {
    console.log(this.grade);
  }
}

const student1 = new Student("Osvaldo", "M4");
student1.sayHello();
student1.setGrade(10);
student1.getGrade();
