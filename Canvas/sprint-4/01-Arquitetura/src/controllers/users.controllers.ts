import { Request, Response } from "express";
import { UsersDatabase, generateId } from "../database/users.database";

export class UsersControllers{
    registerUser(req: Request, res: Response){
        const {name, email} = req.body;

        const newUser = {id: generateId(),name, email};

        UsersDatabase.push(newUser);

        return res.status(201).json({user:newUser, message: "Usuário criado com sucesso!"})
    }
}