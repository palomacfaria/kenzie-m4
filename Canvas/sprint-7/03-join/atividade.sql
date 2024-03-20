/*CRIANDO DATABASE*/
CREATE DATABASE atividade_types_join;
/*SELECIONANDO DATABASE*/
\ c atividade_types_join;
/*CRIANDO TABELAS*/
CREATE TABLE enderecos(
    "id" SERIAL PRIMARY KEY,
    "pais" VARCHAR(100) NOT NULL,
    "estado" CHAR(2) NOT NULL
);
CREATE TABLE pessoas(
    "id" SERIAL PRIMARY KEY,
    "nome" VARCHAR(100) NOT NULL,
    "idade" INTEGER NOT NULL,
    "endereco_id" INTEGER UNIQUE,
    FOREIGN KEY ("endereco_id") REFERENCES enderecos("id") ON DELETE CASCADE
);
/*INSERINDO VALORES*/
INSERT INTO enderecos (pais, estado)
VALUES ('Brasil', 'SP'),
    ('Brasil', 'PR'),
    ('Brasil', 'RJ'),
    ('Brasil', 'MG');

INSERT INTO pessoas (nome, idade, endereco_id)
VALUES ('Mario', 27, 1),
    ('Joana', 22, 2),
    ('Zé', 29, 3),
    ('Ana', 28, null);

/*INNER JOIN*/
SELECT pessoas."nome",
pessoas."idade",
enderecos."pais",
enderecos."estado"
FROM pessoas
JOIN enderecos ON enderecos."id" = pessoas."endereco_id";

/*LEFT JOIN*/
SELECT pessoas."nome",
pessoas."idade",
enderecos."pais",
enderecos."estado"
FROM pessoas
LEFT JOIN enderecos ON enderecos."id" = pessoas."endereco_id";

/*RIGTH JOIN*/
SELECT pessoas."nome",
pessoas."idade",
enderecos."pais",
enderecos."estado"
FROM pessoas
RIGHT JOIN enderecos ON enderecos."id" = pessoas."endereco_id";

/*FULL OUTER JOIN*/
SELECT pessoas."nome",
pessoas."idade",
enderecos."pais",
enderecos."estado"
FROM pessoas
FULL OUTER JOIN enderecos ON enderecos."id" = pessoas."endereco_id";