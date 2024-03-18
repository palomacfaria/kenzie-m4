/*COUNT Calcula o número de registros de uma coluna*/
SELECT COUNT(*) AS TotalPedidos FROM Pedidos;

/*SUM - Calcula a soma dos valores em uma coluna númerica*/
SELECT SUM(Valor) AS TotalvalorPedidos FROM Pedidos;

/*AVG - Calcula a média dos valores de uma coluna numérica*/
SELECT AVG(Idade) AS MediaIdadeClientes FROM Clientes;

/*MIN e MAX - Retornam o valor mínimo e máximo de uma coluna*/
SELECT MIN(Idade) AS MenorIdade, MAX(Idade) AS MaiorIdade FROM Clientes;