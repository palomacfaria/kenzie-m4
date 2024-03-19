/*CRIANDO BANCO DE DADOS*/
CREATE DATABASE atividade_relacionamentos2;

/*SELECIONANDO BANCO DE DADOS*/
\c atividade_relacionamentos2;

/*CRIANDO TABELAS*/
CREATE TABLE areas(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(200) NOT NULL
);

CREATE TABLE courses(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(200) NOT NULL
);

CREATE TABLE courses_areas(
    "areaId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    FOREIGN KEY ("areaId") REFERENCES areas("id") ON DELETE CASCADE,
    FOREIGN KEY ("courseId") REFERENCES courses("id") ON DELETE CASCADE
);

/*INSERINDO 3 AREAS*/
INSERT INTO areas("name") VALUES('Técnologia'), ('Humanas'), ('Exatas') RETURNING*;

/*INSERINDO 3 CURSOS*/
INSERT INTO courses("name") VALUES('Análise e Desenvolvimento de Sistemas'), ('Psicologia'), ('Engenharia') RETURNING*;

/*INSERINDO RELAÇÕES*/
INSERT INTO courses_areas("areaId", "courseId") VALUES (1, 2), (1, 3), (2, 2), (2, 1), (3, 1) RETURNING*;