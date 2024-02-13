/* Interface - tipo para descrever especificamente um objeto*/

interface ITodo {
  id: number;
  title: string;
  content: string;
}

let id = 1;

const todoList: ITodo[] = [];

function addTodo(title: string, content: string) {
  const newTodo: ITodo = { id, title, content };
  todoList.push(newTodo);
  id++;
}

function removeTodo(removingId: number) {
  const index = todoList.findIndex((todo) => todo.id === removingId);
  todoList.splice(index, 1);
}

//As vezes será nulo, as vezes será o objeto de usuário

interface IUser {
  id: number;
  name: string;
  email: string;
}

//Union type
let user: IUser | null = null;
