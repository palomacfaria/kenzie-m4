import { Request, Response } from "express";
import { TodoServices } from "../services/todoServices";

export class TodoControllers{
    getTodos(req: Request, res: Response){
        const todoServices = new TodoServices();

        const response = todoServices.getTodos();

        res.status(200).json(response);
    }
    create(req: Request, res: Response){
        const todoServices = new TodoServices();

        const response = todoServices.create(req.body);

        res.status(201).json(response);
    }
    update(req: Request, res: Response){
        const todoServices = new TodoServices();
        
        const {todoId} = req.params;

        const response = todoServices.update(Number(todoId), req.body);

        res.status(200).json(response);
      }
    delete(req: Request, res: Response){
        const todoServices = new TodoServices();

        const {todoId} = req.params

        todoServices.delete(Number(todoId))

        res.status(204).json()
    }
}