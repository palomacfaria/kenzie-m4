/*Vamos considerar uma situação em que temos duas tabelas, "Produtos" e "Pedidos". Queremos encontrar todos os produtos pedidos pelo menos uma vez. Uma subconsulta pode ser usada para resolver isso:*/
SELECT Nome
FROM Produtos
WHERE ID IN (SELECT Produto_ID FROM Pedidos);

/*Exemplo de Subconsulta Correlacionada*/
/*Suponha que queremos encontrar todos os clientes que fizeram pelo menos dois pedidos:*/
SELECT Nome
FROM Clientes C
WHERE (SELECT COUNT(*) FROM Pedidos P WHERE P.Cliente_ID = C.ID) >= 2;