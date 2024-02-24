import {
  ITask,
  ITaskServices,
  TCreaTaskData,
  TUpdateTaskData,
} from "./interfaces";

export class TaskServices implements ITaskServices {
  private id: number = 1;
  private taskList: ITask[] = [];

  getTasks(): ITask[] {
    return this.taskList;
  }

  create(data: TCreaTaskData): ITask {
    const now = new Date();

    const newTask: ITask = {
      ...data,
      id: this.id,
      done: false,
      creatdAt: now,
    };

    this.taskList.push(newTask);
    this.id++;

    return newTask;
  }

  update(id: number, data: TUpdateTaskData): ITask | string {
    const currentTask = this.taskList.find((task) => task.id === id);

    if (currentTask) {
      const index = this.taskList.findIndex((task) => task.id === id);

      const now = new Date();

      const updateTask: ITask = { ...currentTask, ...data, updatedAt: now };

      this.taskList.splice(index, 1, updateTask);

      return updateTask;
    } else {
      return "Tarefa não encontrada!";
    }
  }

  delete(id: number): string {
    const currentTask = this.taskList.find((task) => task.id === id);

    if (currentTask) {
      const index = this.taskList.findIndex((task) => task.id === id);

      this.taskList.splice(index, 1);

      return "Tarefa excluida com sucesso!";
    } else {
      return "Tarefa não encontrada!";
    }
  }
}

const taskService = new TaskServices();
console.log("-- CRIANDO TASK 1 --");
console.log(
  taskService.create({
    title: "Faxina",
    content: "Limpar a casa e lavar os banheiros",
  })
);
console.log("-- CRIANDO TASK 2 --");
console.log(
  taskService.create({
    title: "Typescript",
    content: "Estudar 2 horas o conteúdo de TS",
  })
);
console.log("-- LENDO TASKs --");
console.log(taskService.getTasks());
console.log("-- ATUALIZANDO TASK 1 --");
console.log(taskService.update(1, { done: true }));
console.log("-- EXCLUIR TASK 2 --");
console.log(taskService.delete(2));
console.log("-- ATUALIZAÇÃO DE TASK NÃO EXISTENTE --");
console.log(taskService.update(123, { done: true }));
