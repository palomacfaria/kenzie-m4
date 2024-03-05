export interface ITodo {
  id: number;
  title: string;
  content: string;
}

export type TCreateTodoBody = Omit<ITodo, "id">;

export type TUpdateTodoBody = Partial<TCreateTodoBody>