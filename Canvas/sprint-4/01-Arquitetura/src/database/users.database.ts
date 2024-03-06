import { IUser } from "../interfaces/users.interfaces";

export const UsersDatabase: IUser[] = [];

let id = 0;

export const generateId = () => {
    id++
    return id;
}