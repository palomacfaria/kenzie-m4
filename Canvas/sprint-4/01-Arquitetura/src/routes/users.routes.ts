import { Router } from "express";
import { UsersControllers } from "../controllers/users.controllers";
import { IsUserEmailUnique } from "../middlewares/isUserEmailUnique.middleware";

export const usersRouter = Router();

const usersControllers = new UsersControllers();

usersRouter.post("/", IsUserEmailUnique.execute, usersControllers.registerUser);