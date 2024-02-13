//Tipos Primitivos
let firstName = "Paloma";
let age = 24;
let isATeacher = false;

function sayMyName(name: string) {
  console.log(name);
}
sayMyName(firstName);

function sum(a: number, b: number): number {
  return a + b;
}
sum(5, 2);

//Podemos apontar tipos em qualquer circunstância, mas não é obrigatório

//Inferência - Dedução automática de tipos

//QUANDO EU PRECISO APONTAR TIPAGEM? Quando a inferência falha

//A inferência não vai conseguir deduzir tipos de listas que iniciam vazias

//A inferência não vai conseguir deduzir tipos de parametros de função

//A inferência não vai conseguir deduzir tipos que varaiam
