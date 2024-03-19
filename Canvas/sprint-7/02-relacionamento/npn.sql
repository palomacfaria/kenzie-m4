CREATE TABLE products (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(150) NOT NULL,
    "price" INTEGER NOT NULL
);

CREATE TABLE categories(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(150) NOT NULL
);

CREATE TABLE products_categories(
    "id" SERIAL PRIMARY KEY,
    "productId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    FOREIGN KEY ("productId") REFERENCES products("id") ON DELETE CASCADE,
    FOREIGN KEY ("categoryId") REFERENCES categories("id") ON DELETE CASCADE
);

INSERT INTO products ("name", "price") VALUES ('Computador', 2500),('Notbook', 3500), ('Mouse', 250) RETURNING *;

INSERT INTO categories ("name") VALUES ('Computadores'),('Notbooks'), ('Acessórios') RETURNING *;

INSERT INTO products_categories("productId", "categoryId") VALUES (1, 1), (2, 1), (2, 2) RETURNING*;