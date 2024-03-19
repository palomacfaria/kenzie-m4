CREATE TABLE users (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(250) NOT NULL,
    "email" VARCHAR(100) NOT NULL
);

CREATE TABLE addresses(
    "id" SERIAL PRIMARY KEY,
    "street" VARCHAR(250) NOT NULL,
    "number"INTEGER,
    "userId" INTEGER  NOT NULL,
    FOREIGN KEY ("userId") REFERENCES users("id") ON DELETE CASCADE
);

/*JOIN*/
/*  1 para muitos 1 -> N*/
SELECT * FROM users
JOIN addresses ON users."id" = addresses."userId";

/*Renomeando as colunas*/
SELECT users."id" AS "userId", 
users."name" AS "userName",
users."email" AS "userEmail",
addresses."id" AS "addressId",
addresses."street",
addresses."number"
FROM users
JOIN addresses ON users."id" = addresses."userId";

