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
    delete(req: Request, res: Response){
        const todoServices = new TodoServices();

        const {id} = req.params

        const response = todoServices.delete(Number(id))

        res.status(204).json()
    }
}