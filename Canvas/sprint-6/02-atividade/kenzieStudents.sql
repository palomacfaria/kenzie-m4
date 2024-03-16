/*CRIANDO BANCO DE DADOS*/
CREATE DATABASE m4_atividades;

/*SELECIONANDO DATABASE*/
\c m4_atividades;

/*CRIANDO TABELA STUDENTS*/
CREATE TABLE students(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(150) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "module" CHAR(2) NOT NULL,
    "score" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL
);

/*INSERINDO 3 STUDENTS*/
INSERT INTO students("name", "email", "module", "score", "active")
VALUES('Enzo', 'enzo@email.com', 'M3', 85, TRUE), ('Valentina', 'valentina@email.com', 'M4', 97, TRUE),
('Osvaldo', 'osvaldo@email.com', 'M5', 65, FALSE)RETURNING*;

/*REALIZANDO CONSULTA PARA RETORNAR OS ESTUDANTES COM SCORE MAIOR QUE 79*/
SELECT * FROM students WHERE score > 79;

/*REALIZANDO CONSULTA PARA RETORNAR APENAS ESTUDANTES INATIVOS*/
SELECT * FROM students WHERE active = FALSE;

/*UPDATE PARA ATIVAR O ESTUDANTE OSVALDO*/
UPDATE students SET active = TRUE WHERE id = 3 RETURNING*;

/*EXCLUINDO O ESTUDANTE ENZO*/
DELETE FROM students WHERE id = 1;