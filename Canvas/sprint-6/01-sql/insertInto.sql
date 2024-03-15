/*     "name" VARCHAR(250) NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP NOT NULL */

INSERT INTO products ("name", "description", "price", "createdAt", "updatedAt")
VALUES('Computador', 'Computador bonito', 250000, '2024-03-14', '2024-03-14');

INSERT INTO products ("name", "description", "price", "createdAt", "updatedAt")
VALUES('Notebook', 'Notebook bonito', 350000, '2024-03-14', '2024-03-14'), ('Mouse', 'Mouse bonito', 250, '2024-03-14', '2024-03-14');

INSERT INTO products ("name", "description", "price", "createdAt", "updatedAt")
VALUES('Computador Gamer', 'Computador Gamer bonito', 550000, '2024-03-14', '2024-03-14') RETURNING *;