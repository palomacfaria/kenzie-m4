export interface ITask {
  id: number;
  title: string;
  content: string;
  done: boolean;
  creatdAt: Date;
  updatedAt?: Date;
}
//Método de Leitura
//Método de Criação
export type TCreaTaskData = Pick<ITask, "title" | "content">;
//Método de Atualização
export type TUpdateTaskData = Partial<
  Omit<ITask, "id" | "createadAt" | "updatedAt">
>;
//Método de Exclusão

export interface ITaskServices {
  getTasks(): ITask[];
  create(data: TCreaTaskData): ITask;
  update(id: number, data: TUpdateTaskData): ITask | string;
  delete(id: number): string;
}
