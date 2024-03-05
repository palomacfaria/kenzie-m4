import { Router, Request, Response } from "express";

export const booksRouter = Router();

booksRouter.get("/", (req: Request, res: Response) => {
  res.send("Leitura efetuada com sucesso");
});

booksRouter.post("/", (req: Request, res: Response) => {
  res.send("Criação efetuada com sucesso");
});

booksRouter.patch("/", (req: Request, res: Response) => {
  res.send("Atualização parcial efetuada com sucesso");
});

booksRouter.put("/", (req: Request, res: Response) => {
  res.send("Atualização efetuada com sucesso");
});

booksRouter.delete("/", (req: Request, res: Response) => {
  res.send("Exclusão efetuada com sucesso");
});
