interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

//Omit - Posso usar a interface excluindo uma propriedade, como no caso abaixo, excluindo o id
type TRegisterData = Omit<IUser, "id">;

//Pick - Pegando apenas as propriedades que desejo
type TLoginBody = Pick<IUser, "email" | "password">;

//Partial - Torna todas as propriedades opcionais
type TPartialUser = Partial<IUser>;

//Partial + Omit
type TUpdateData = Partial<TRegisterData>;
