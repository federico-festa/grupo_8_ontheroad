DROP DATABASE IF EXISTS ontheroad;
CREATE DATABASE ontheroad;
USE ontheroad;

DROP TABLE IF EXISTS regions;
CREATE TABLE regions (
	id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    weather varchar(100) NOT NULL,
    img varchar(255),
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS type_user;
CREATE TABLE type_user (
	id int NOT NULL AUTO_INCREMENT,
    role varchar(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO type_user VALUES (1, 'Administrador'), (2, 'Cliente');

DROP TABLE IF EXISTS users;
CREATE TABLE users (
	id int NOT NULL AUTO_INCREMENT,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    dni int UNIQUE,
    gender varchar(50),
    email varchar(50) UNIQUE,
    password varchar(500),
    address varchar(50),
    telephone int,
    postalCode int,
    country varchar(100),
    id_type int NOT NULL,
    img varchar(255),
    PRIMARY KEY (id),
    FOREIGN KEY (id_type) REFERENCES type_user (id)
);

DROP TABLE IF EXISTS products;
CREATE TABLE products (
	id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    price decimal(10, 2) NOT NULL,
    discount int,
    shortDescription varchar(100),
    longDescription varchar(500),
	img varchar(255),
    id_region int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_region) REFERENCES regions (id)
);
