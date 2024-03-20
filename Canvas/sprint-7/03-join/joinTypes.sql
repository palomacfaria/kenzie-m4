/*O INNER JOIN é usado para combinar registros de duas tabelas com base em uma condição de igualdade entre colunas. Ele retorna apenas os registros com correspondências em ambas as tabelas.*/
SELECT Pedidos.ID, Pedidos.Data, Clientes.Nome
FROM Pedidos
INNER JOIN Clientes ON Pedidos.Cliente_ID = Clientes.ID;

/*O LEFT JOIN retorna todos os registros da tabela da esquerda (tabela principal) e os registros correspondentes da tabela da direita (tabela relacionada). Se não houver correspondência na tabela da direita, ele retorna valores nulos.*/
SELECT Clientes.ID, Clientes.Nome, Pedidos.ID AS Pedido_ID, Pedidos.Data
FROM Clientes
LEFT JOIN Pedidos ON Clientes.ID = Pedidos.Cliente_ID;

/*O RIGHT JOIN é semelhante ao LEFT JOIN, mas retorna todos os registros da tabela da direita (tabela relacionada) e os registros correspondentes da tabela da esquerda (tabela principal).*/
SELECT Pedidos.ID AS Pedido_ID, Pedidos.Data, Clientes.ID, Clientes.Nome
FROM Pedidos
RIGHT JOIN Clientes ON Pedidos.Cliente_ID = Clientes.ID;

/*O FULL JOIN retorna todos os registros de ambas as tabelas, combinando registros quando houver correspondências e preenchendo com valores nulos onde não houver correspondência.*/
SELECT Clientes.ID, Clientes.Nome, Pedidos.ID AS Pedido_ID, Pedidos.Data
FROM Clientes
FULL JOIN Pedidos ON Clientes.ID = Pedidos.Cliente_ID;