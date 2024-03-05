import { Router } from "express";
import { TodoControllers } from "../controllers/todo.controllers";

export const todoRoutes = Router();

const todoControllers = new TodoControllers();

todoRoutes.get("/", todoControllers.getTodos);

todoRoutes.post("/", todoControllers.create);

todoRoutes.patch("/:todoId", todoControllers.update);

todoRoutes.delete("/:todoId", todoControllers.delete);
