import { Router, Request, Response } from "express";

export const productsRouter = Router();

productsRouter.get("/", (req: Request, res: Response) => {
  return res.send("Leitura realizada com sucesso!");
});

productsRouter.post("/", (req: Request, res: Response) => {
  //Req - Requisição
  // console.log(req.body); - corpo da requisição
  // console.log(req.params); - Parâmetros de url (url/param)
  // console.log(req.query); Parâmetros de busca (url?param=value)
  // console.log(req.headers); - Configuraçãoes e credênciais de acesso

  return res.status(201).json({ message: "Criação realizada com sucesso" });
});

productsRouter.put("/", (req: Request, res: Response) => {
  return res.send("Atualização realizada com sucesso");
});

productsRouter.delete("/", (req: Request, res: Response) => {
  return res.send("Exclusão realizada com sucesso");
});
