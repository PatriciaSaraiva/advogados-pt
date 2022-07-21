drop database `advogados`;
create database `advogados`;
use `advogados`;

CREATE TABLE `emails` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `subject` VARCHAR(255) NOT NULL,
    `field` VARCHAR(255) NOT NULL,
    `fullname` VARCHAR(80) NOT NULL,
    `email` VARCHAR(80) NOT NULL,
    `phone` VARCHAR(80) NOT NULL,
    `message` TEXT NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;
