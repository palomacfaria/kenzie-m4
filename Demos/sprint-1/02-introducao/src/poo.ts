//Programação orientada a objetos
//Trabalhar com classes - Agrupamento de variáveis e métodos

import { ITodo } from "./crud";

//Diretamente no corpo da classe não temos LET e CONST

//CLASS: Planta arquitetônica
class TodoServices {
  id: number = 1;
  todoList: ITodo[] = [];

  constructor(todoList: ITodo[] = []) {
    this.todoList = todoList;
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
console.log(todoServices.todoList);

const secondTodoServices = new TodoServices();
secondTodoServices.addTodo(
  "Pensei que era programação",
  " Mas era engenharia cívil"
);
console.log(secondTodoServices.todoList);
