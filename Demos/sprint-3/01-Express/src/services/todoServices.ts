import { generateId, todoList } from "../database/databese";
import { TCreateRodoBody } from "../interfaces/todo.interface";

export class TodoServices {
  getTodos() {
    return todoList;
  }

  create(data:TCreateRodoBody) {
    const newTodo = {
      id: generateId(),
      title: data.title,
      content: data.content,
    };

    todoList.push(newTodo);

    return newTodo;
  }

  delete(removingId: number) {

    const index = todoList.findIndex((todo) => todo.id === removingId);

    todoList.splice(index, 1);
  }
}
