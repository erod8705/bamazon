-- Creates the "bamazon" database --
CREATE DATABASE bamazon;

-- Makes it so all of the following code will only affect bamazon database--
USE bamazon;

-- Creates the table "products" within the "bamazon" database
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price INTEGER(10),
  stock_quantity INTEGER(10),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Oatmeal Cookie", "bakery", "1", "151"),
("Chocolate Chip Cookies", "bakery", "2", "100"),
("Chicken fried steak", "cafe", "10", "25"),
("Promiseland Chocolate Milk", "dairy", "4", "52"),
("Cat Food", "pet", "7", "28"),
("Nike MetCons", "apparel", "98", "10");


