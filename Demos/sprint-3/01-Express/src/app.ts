import express, { json } from "express";
import { todoRoutes } from "./routes/todo.routes";

//Controllers
//Integração com o framework

//Sevices
//Regras de negócio sem influência de um framework

export const app = express();

app.use(json());

//Endereço das rotas, roteador
app.use("/todos", todoRoutes);
