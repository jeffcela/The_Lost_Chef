DROP DATABASE IF EXISTS fridge_db;
CREATE DATABASE fridge_db;

USE fridge_db;

DROP TABLE IF EXISTS ingredients;
CREATE TABLE ingredients (
    ingredients_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ingredients_name VARCHAR(255) NOT NULL, 
    ingredients_api_id  VARCHAR(255) NOT NULL
);

-- LOAD DATA LOCAL INFILE '../seeds/top-1k-ingredients.csv' 
--  INTO TABLE ingredients 
--  FIELDS TERMINATED BY ',' 
--  IGNORE 1 ROWS 
--  (ingredients_name, ingredients_api_id);
