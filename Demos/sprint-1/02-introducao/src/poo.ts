//Programação orientada a objetos
//Trabalhar com classes - Agrupamento de variáveis e métodos

import { ITodo } from "./crud";

//Diretamente no corpo da classe não temos LET e CONST

//CLASS: Planta arquitetônica
class TodoServices {
  //Privado restringe na instância e na herança
  private id: number = 1;
  private todoList: ITodo[] = [];

  constructor(todoList: ITodo[] = []) {
    this.todoList = todoList;
  }

  getTodoList() {
    return this.addTodo;
  }

  addTodo(title: string, content: string) {
    const newTodo = { id: this.id, title, content };
    this.todoList.push(newTodo);
    this.id++;
  }

  removeTodo(removingId: number) {
    const index = this.todoList.findIndex((todo) => todo.id === removingId);
    this.todoList.splice(index, 1);
  }
}
//Instância - Prédio
const todoServices = new TodoServices();
todoServices.addTodo("Estou aprendendo sobre POO", "ta sendo muito maneiro");
todoServices.addTodo(
  "Ta sendo super Legal",
  "Sabe que esse negócio de classe nem é tão difícil"
);
console.log(todoServices.getTodoList());

const secondTodoServices = new TodoServices();
secondTodoServices.addTodo(
  "Pensei que era programação",
  " Mas era engenharia cívil"
);
console.log(secondTodoServices.getTodoList());
