import express, { json, Request, Response } from "express";

const app = express();

app.use(json());

app.get("/", (Request, res: Response) => {
    res.send("Olá Mundo!")
});

const port = 3000;
app.listen(port, () => {
  console.log(`API sucessfully started in port ${port}`);
});
