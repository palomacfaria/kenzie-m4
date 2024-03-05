import { generateId, todoList } from "../database/databese";
import { TCreateTodoBody, TUpdateTodoBody } from "../interfaces/todo.interface";

export class TodoServices {
  getTodos() {
    return todoList;
  }

  create(data: TCreateTodoBody) {
    const newTodo = {
      id: generateId(),
      title: data.title,
      content: data.content,
    };

    todoList.push(newTodo);
    return newTodo;
  }

  update(updatingId: number, data: TUpdateTodoBody){
    const currentTodo = todoList.find((todo) => todo.id === updatingId)

    if(currentTodo){
      const index = todoList.findIndex((todo) => todo.id === updatingId);

      const newTodo = {...currentTodo, ...data}

      todoList.splice(index, 1, newTodo);

      return newTodo;
    }
  }

  delete(removingId: number) {
    const index = todoList.findIndex((todo) => todo.id === removingId);
    todoList.splice(index, 1);
  }
}
