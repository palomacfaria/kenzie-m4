export interface ITodo {
  id: number;
  title: string;
  content: string;
}

export type TCreateRodoBody = Omit<ITodo, "id">;
