interface ITech {
  id: number;
  name: string;
  level: "Básico" | "Intermediário" | "Avançado";
  createdAt: Date;
  updatedAt?: Date;
}

//Pegando apenas as informações de nome e nivel
type TTechCreateData = Pick<ITech, "name" | "level">;

type TTechUpdateDate = Pick<ITech, "level">;

class TechServices {
  private id = 1;
  private techList: ITech[] = [];

  getTechs() {
    return this.techList;
  }

  createTech(data: TTechCreateData) {
    const date = new Date(); //Horário e data do servidor
    const newTech = { ...data, id: this.id, createdAt: date };
    this.techList.push(newTech);
    this.id++;
  }

  updateTech(id: number, data: TTechUpdateDate) {
    const date = new Date();
    const index = this.techList.findIndex((tech) => tech.id === id);
    const currentTech = this.techList.find((tech) => tech.id === id);

    if (currentTech) {
      //O que está na direita sempre vai substituir o que está na esquerda
      const updateTech = { ...currentTech, ...data, updatedAt: date };

      this.techList.splice(index, 1, updateTech);

      return updateTech; //Se eu quero utilizar este valor após a execução do método eu precido retornar
    } else {
      console.error("A técnologia não existe!");
    }
  }

  deleteTech(id: number) {
    const index = this.techList.findIndex((tech) => tech.id === id);

    if (index >= 0) {
      this.techList.splice(index, 1);
    } else {
      console.error("A técnologia não existe!");
    }
  }
}

const techList = new TechServices();
techList.createTech({ name: "React", level: "Avançado" });
techList.createTech({ name: "NextJs", level: "Avançado" });
techList.createTech({ name: "Node", level: "Avançado" });

console.table(techList.getTechs());

techList.updateTech(2, { level: "Intermediário" });
console.table(techList.getTechs());
