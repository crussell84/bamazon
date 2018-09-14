CREATE DATABASE  IF NOT EXISTS `bamazon`;
USE `bamazon`;

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) DEFAULT NULL,
  `department_name` varchar(45) DEFAULT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `stock_quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;


LOCK TABLES `products` WRITE;
INSERT INTO `products` VALUES (1,'Blood Red','Books',8.99,3),(2,'Home from the Sea','Books',3.99,2),(3,'The Fairy Godmother','Books',2.99,5),(4,'Deadpool','Movies',19.99,20),(5,'Black Panther','Movies',15.99,2),(6,'The Fifth Element','Movies',9.99,22),(7,'The Princess Bride','Movies',12.99,18),(8,'Magic Binds','Books',8.99,17),(9,'Night and Silence','Books',13.99,4),(10,'A Hidden Fire','Books',3.99,7);
UNLOCK TABLES;

