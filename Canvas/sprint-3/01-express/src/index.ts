import express, { json, Request, Response } from "express";

const app = express();

app.use(json());

app.get("/", (req: Request, res: Response) => {
  return res.send("Leitura realizada com sucesso!");
});

app.post("/", (req: Request, res: Response) => {
  //Req - Requisição
  // console.log(req.body); - corpo da requisição
  // console.log(req.params); - Parâmetros de url (url/param)
  // console.log(req.query); Parâmetros de busca (url?param=value)
  // console.log(req.headers); - Configuraçãoes e credênciais de acesso

  return res.status(201).json({message: "Criação realizada com sucesso"});
});

app.put("/", (req: Request, res: Response) => {
  return res.send("Atualização realizada com sucesso");
});

app.delete("/", (req: Request, res: Response) => {
  return res.send("Exclusão realizada com sucesso");
});

const port = 3000;
app.listen(port, () => {
  return console.log(`API sucessfully started in port ${port}`);
});
