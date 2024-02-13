import { Person, Student, Teacher } from "./class";
import { ProductList } from "./static";

const person1 = new Person("Paloma");
person1.saySomething("Olá");
person1.sayMyName();

const person2 = new Person("Alex");
person2.sayMyName();

ProductList.addProduct("Computador");
ProductList.getProducts();

const student1 = new Student("Paloma", "M4");
student1.sayMyName();
student1.sayMyModule();

const teacher = new Teacher("Alex");
teacher.sayMyName();
