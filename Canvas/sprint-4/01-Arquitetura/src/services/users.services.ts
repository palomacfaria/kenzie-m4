import { UsersDatabase, generateId } from "../database/users.database";

export class UsersServices{
    registerUser(name: string, email: string){

    const newUser = {id: generateId(),name, email};

        UsersDatabase.push(newUser);

        return {user:newUser, message: "Usuário criado com sucesso!"}
    }
}