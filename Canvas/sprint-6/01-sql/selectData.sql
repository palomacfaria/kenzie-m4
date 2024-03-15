/*Buscando todas as colunas*/
SELECT * FROM products;

/*Filtrar colunas*/
SELECT "name", "description" FROM products;

/*Filtrando com condicionais*/
SELECT * FROM products WHERE id = 1;

/*Filtrando produtos que possuem o preço menor que 300.000*/
SELECT * FROM products WHERE price < 300000;

/*Filtrando caso contenha a palavra Computador*/
SELECT * FROM products WHERE name LIKE '%Computador%';

/*Filtrando caso contenha a plavra contendo ela letras minusculas ou maiusculas*/
SELECT * FROM products WHERE name LIKE '%Computador%';