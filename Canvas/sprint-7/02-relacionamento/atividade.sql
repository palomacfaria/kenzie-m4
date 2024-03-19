/*CRIANDO BANCO DE DADOS*/
CREATE DATABASE atividade_relacionamentos;

/*SELECIONANDO BANCO DE DADOS*/
\c atividade_relacionamentos;

/*CRIANDO TABELAS*/
CREATE TABLE employees(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(200) NOT NULL,
    "email" VARCHAR(200) NOT NULL
);

CREATE TABLE contracts(
    "id" SERIAL PRIMARY KEY,
    "startedAt" DATE NOT NULL,
    "expiresAt" DATE NOT NULL,
    "employeeId" INTEGER UNIQUE NOT NULL,
    FOREIGN KEY ("employeeId") REFERENCES employees("id") ON DELETE CASCADE
);

CREATE TABLE skills(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "employeeId" INTEGER NOT NULL,
    FOREIGN KEY ("employeeId") REFERENCES employees("id") ON DELETE CASCADE
);

/*INSERINDO UM EMPREGADO NA TABELA EMPLOYEES*/
INSERT INTO employees("name", "email") VALUES('Carlos', 'carlos@email.com') RETURNING *;

/*INSERINDO UM CONTRATO*/
INSERT INTO contracts("startedAt", "expiresAt", "employeeId") VALUES('2024-03-19', '2028-03-19', 1)RETURNING *;

/*INSERINDO 3 HABILIDADES A TABELA SKILLS*/
INSERT INTO skills("name", "employeeId") VALUES('React', 1), ('Typescript', 1), ('SQL', 1) RETURNING *;