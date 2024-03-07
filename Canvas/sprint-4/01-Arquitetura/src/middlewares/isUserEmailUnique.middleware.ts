import { NextFunction, Request, Response } from "express";
import { UsersDatabase } from "../database/users.database";


//Verificando se o e-mail já existe no banco de dados
export class IsUserEmailUnique {
  static execute(req: Request, res: Response, next: NextFunction) {
    if(UsersDatabase.some(user => user.email === req.body.email)){
        return res.status(409).json({message: "Email already registred."})
    }
    return next();
  }
}
