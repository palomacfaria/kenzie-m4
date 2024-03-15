UPDATE products SET price = 320000 WHERE id = 1;

UPDATE products SET ("name", "price") = ROW ('Computador X', 300000) WHERE id = 1;

UPDATE products SET price = 360000 WHERE id = 2 RETURNING *;