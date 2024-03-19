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


/*JOIN*/
SELECT products."id" AS "productId",
products."name" AS "productsName",
products."price" AS "productsPrice",
categories."id" AS "categoryId",
categories."name" AS "categoryName"
FROM products
JOIN products_categories ON products."id" = products_categories."productId"
JOIN categories ON categories."id" = products_categories."categoryId" WHERE products."id" = 2;