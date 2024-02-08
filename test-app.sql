/*
 SQLyog Professional
 MySQL - 8.0.30 : Database - test-app
 *********************************************************************
 */
/*!40101 SET NAMES utf8 */
;

/*!40101 SET SQL_MODE=''*/
;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;

/*Table structure for table `categories` */
CREATE TABLE `categories` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `desciption` (`description`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*Data for the table `categories` */
insert into
  `categories`(`id`, `description`, `state`)
values
  (1, 'TECNOLOGIA', 1),
  (2, 'HOGAR', 1),
  (3, 'ACCESORIOS', 1);

/*Table structure for table `products` */
CREATE TABLE `products` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(100) NOT NULL,
  `price` double NOT NULL DEFAULT '0',
  `category_id` bigint NOT NULL DEFAULT '1',
  `state` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `categories_id_products_category_id` (`category_id`),
  CONSTRAINT `categories_id_products_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 9 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*Data for the table `products` */
insert into
  `products`(
    `id`,
    `description`,
    `price`,
    `category_id`,
    `state`
  )
values
  (1, 'LAPTO', 0, 1, 1),
  (2, 'MOUSE INALAMBRICO', 0, 3, 1),
  (3, 'NEVERA', 0, 2, 1),
  (4, 'AUDIFONOS INALAMBRICO', 0, 3, 1),
  (5, 'CABLE USB', 0, 3, 1),
  (6, 'CARGADOR LAPTO', 0, 3, 1),
  (7, 'LAVADORA', 0, 2, 1),
  (8, 'COCINA 4 HORNILLAS', 0, 2, 1),
  (9, 'TECLADO', 0, 3, 1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;