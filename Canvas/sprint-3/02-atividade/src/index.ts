import express, { json, Request, Response } from "express";

const app = express();

app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.send("Leitura efetuada com sucesso");
});

app.post("/", (req: Request, res: Response) => {
  res.send("Criação efetuada com sucesso");
});

app.patch("/", (req: Request, res: Response) => {
  res.send("Atualização parcial efetuada com sucesso");
});

app.put("/", (req: Request, res: Response) => {
  res.send("Atualização efetuada com sucesso");
});

app.delete("/", (req: Request, res: Response) => {
  res.send("Exclusão efetuada com sucesso");
});

const port = 3000;

app.listen(3000, () => {
  console.log(`API sucessfully started in port ${port}`);
});
