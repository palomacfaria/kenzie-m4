//Omit Pick Partial
interface IPost {
  id: number;
  title: string;
  content: string;
  authorId: number;
  category: string;
  createdAt: Date;
}

//Omit -> Exluindo, não ecibindo
type TPostCreateFormDate = Omit<IPost, "id" | "authorId">;

//Pick -> Pegando chaves e trazendo para um novo tipo
type TPostParams = Pick<IPost, "authorId">;

//Partial -> Transforma todos os valores de um typo ou interface em opcional
type TPostUpdateData = Partial<TPostCreateFormDate>;
