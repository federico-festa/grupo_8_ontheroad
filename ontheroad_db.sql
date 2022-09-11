DROP DATABASE IF EXISTS ontheroad;
CREATE DATABASE ontheroad;
USE ontheroad;

DROP TABLE IF EXISTS regions;
CREATE TABLE regions (
	id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    clima varchar(100) NOT NULL,
    date datetime NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS payment_type;
CREATE TABLE payment_type (
	id int NOT NULL AUTO_INCREMENT,
    nombre varchar(100) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS type_user;
CREATE TABLE type_user (
	id int NOT NULL AUTO_INCREMENT,
    rango varchar(100) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS admin;
CREATE TABLE admin (
	id int NOT NULL AUTO_INCREMENT,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    dni int NOT NULL UNIQUE,
    email varchar(50) NOT NULL UNIQUE,
    id_type int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_type) REFERENCES type_user (id)
);

DROP TABLE IF EXISTS clients;
CREATE TABLE clients (
	id int NOT NULL AUTO_INCREMENT,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    dni int NOT NULL UNIQUE,
    genero varchar(50) NOT NULL,
    email varchar(50) NOT NULL UNIQUE,
    password varchar(50) NOT NULL UNIQUE,
    domicilio varchar(50) NOT NULL,
    telefono int,
    codigoPostal int,
    pais varchar(100),
    id_type int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_type) REFERENCES type_user (id)
);

DROP TABLE IF EXISTS products;
CREATE TABLE products (
	id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    price decimal(5, 2) NOT NULL,
    discount int,
    descriptionShort varchar(100),
    descriptionLong varchar(500),
	img varchar(255),
    id_region int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_region) REFERENCES regions (id)
);

DROP TABLE IF EXISTS cart;
CREATE TABLE cart (
	id int NOT NULL AUTO_INCREMENT,
    cantProduct int NOT NULL,
    id_client int NOT NULL,
    id_product int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_client) REFERENCES clients (id),
    FOREIGN KEY (id_product) REFERENCES products (id)
);

DROP TABLE IF EXISTS order_step;
CREATE TABLE order_step (
	id int NOT NULL AUTO_INCREMENT,
    totalPrice decimal(10, 2) NOT NULL,
    id_tipoPago int NOT NULL,
    id_client int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_tipoPago) REFERENCES payment_type (id),
    FOREIGN KEY (id_client) REFERENCES clients (id)
);

DROP TABLE IF EXISTS order_detail;
CREATE TABLE order_detail (
	id int NOT NULL AUTO_INCREMENT,
    price decimal(10, 2) NOT NULL,
    cantidad int NOT NULL,
    id_order int NOT NULL,
    id_product int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_order) REFERENCES order_step (id),
    FOREIGN KEY (id_product) REFERENCES products (id)
);