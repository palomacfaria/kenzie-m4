import express, { json } from "express";
import { TodoControllers } from "./controllers/todo.controllers";

//Controllers
//Integração com o framework

//Sevices
//Regras de negócio sem influência de um framework

const app = express();

const todoServices = new TodoControllers();

app.use(json());

app.get("/todos", todoServices.getTodos);

app.post("/todos", todoServices.create);

app.delete("/todos/:todoId", todoServices.delete);

app.listen(3000, () => {
  console.log("API successfully started");
});
