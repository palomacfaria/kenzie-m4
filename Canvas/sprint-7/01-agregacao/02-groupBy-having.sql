/*GROUP BY -  é usada para agrupar registros com base em valores semelhantes em uma ou mais colunas. Ela permitte criar grupos de registros que compartilham caracteristicas comuns em uma coluna especifica e, em seguida realizar operações de agregação como COUNT, SUM, AVG...*/

/*Neste exemplo usamos o GROUP BY para agrupar as vendas por categoria, e calcular a soma dos valores de cada categoria*/
SELECT Categria, SUM(Valor) AS TotalVendas
FROM Vendas
GROUP BY Categoria;

/*HAVING - Usada para filtrar dados de uma cláusula GROUP BY. Permite aplicar condições aos grupos, de forma semelhante à clausula WHERE, mas funciona após o GROUP BY e se aplica aos grupos em vez de registros individuais*/

/*Filtrando categorias com vendas totais superiores a $1.000*/
SELECT Categoria, SUM(Valor) AS TotalVendas
FROM Vendas
GROUP BY Categoria
HAVING SUM(Valor) > 1000
