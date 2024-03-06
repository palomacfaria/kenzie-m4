import express, { json } from "express";
import { usersRouter } from "./routes/users.routes";

//Executando express
const app = express();

//Receber JSON
app.use(json());

//Criando rotas e usando o roteador
app.use("/users", usersRouter);

//Associando a uma porta do localhost
const port = 3000;

app.listen(port, () => {
  console.log(`API sucessfully started on port ${port}`);
});
