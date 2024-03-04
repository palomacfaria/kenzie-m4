import express, { json } from "express";

/*O que o express faz?
    => Permite a criação de rotas
    => Oferece o servidor local */
const app = express();

app.use(json());

app.get("/hello", (req, res) => {
  //Resposta é o que nos desejamos estabelecer como retorno dessa rota;
  return res.status(200).json({ message: "Olá mundo!" });
});

/* app.post("/products/:productID", (req, res) => {
    //Requisição consiste em todo o conjunto de dados fornecidos externamente para uma requisição
    //Os dados que vem de fora
    //return res.status(201).json(req.body);
    // return res.status(201).json(req.params);
    // return res.status(201).json(req.headers);
    //return res.status(201).json(req.query);
}) */

//Crudizinho
interface ITodo {
  id: number;
  title: string;
  content: string;
}

let id = 1;

export const todoList: ITodo[] = [];

app.get("/todos", (req, res) => {
  return res.status(200).json(todoList);
});

app.post("/todos", (req, res) => {
  console.log(req.body);

  const newTodo = {
    id,
    title: req.body.title,
    content: req.body.content,
  };

  console.log(newTodo);

  todoList.push(newTodo);
  console.log(todoList);
  id++;

  return res.status(201).json(newTodo);
});

app.delete("/todos/:todoId", (req, res) => {
  //Todo parametro será um formato string
  const { todoId } = req.params;

    console.log(todoId)

  const index = todoList.findIndex((todo) => todo.id === Number(todoId));

  console.log(index)

  todoList.splice(index, 1);

  console.log(todoList)

  return res.status(204).json()
});

app.listen(3000, () => {
  console.log("API successfully started");
});
