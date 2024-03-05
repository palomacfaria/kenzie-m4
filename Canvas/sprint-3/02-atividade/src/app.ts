import express, { json} from "express";
import { booksRouter } from "./routes/books.routes";

const app = express();

app.use(json());

app.use("/books", booksRouter);

const port = 3000;

app.listen(3000, () => {
  console.log(`API sucessfully started in port ${port}`);
});
