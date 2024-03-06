import { Router } from "express";
import { UsersControllers } from "../controllers/users.controllers";

export const usersRouter = Router();

const usersControllers = new UsersControllers();

usersRouter.post("/", usersControllers.registerUser);