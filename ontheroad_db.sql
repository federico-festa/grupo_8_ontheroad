DROP DATABASE IF EXISTS ontheroad;
CREATE DATABASE ontheroad;
USE ontheroad;

DROP TABLE IF EXISTS regions;
CREATE TABLE regions (
	id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    clima varchar(100) NOT NULL,
    date date NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO regions VALUES (1, 'Jujuy', 'Soleado', 20220114), (2, 'Córdoba', 'Nublado', 20221010), (3, 'Buenos Aires', 'Despejado', 20220416);

DROP TABLE IF EXISTS payment_type;
CREATE TABLE payment_type (
	id int NOT NULL AUTO_INCREMENT,
    nombre varchar(100) NOT NULL,
    tipo varchar(50),
    PRIMARY KEY (id)
);

INSERT INTO payment_type VALUES (1, 'PayPal', null), (2, 'MasterCard', 'Debito'), (3, 'Visa', 'Credito'), (4, 'Visa', 'Debito');

DROP TABLE IF EXISTS type_user;
CREATE TABLE type_user (
	id int NOT NULL AUTO_INCREMENT,
    rango varchar(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO type_user VALUES (1, 'Administrador'), (2, 'Cliente');

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

INSERT INTO admin VALUES (1, 'Federico', 'Festa', 11111111, 'fede.festa@gmail.com', 1), (2, 'Juan', 'Cruz', 22222222, 'juan.c@gmail.com', 1);

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

INSERT INTO clients VALUES (1, 'Juan', 'Mendoza', 11111111, 'Masculino', 'juan.m@ontheroad.org', 'juandoza11', 'Calle Falsa - 123', 1592092288, 1820, 'Argentina', 2), (2, 'Maria', 'Chavez', 22222222, 'Femenino', 'mariavz@ontheroad.org', 'mriaz', '9 de Julio - 2133', 1549882228, 3020, 'Argentina', 2), (3, 'Brandon', 'Lopez', 33333333, 'Masculino', 'lopez@gmail.com', 'lolopez', 'Av. La Plata - 3310', 1521423354, 1824, 'Argentina', 2);

DROP TABLE IF EXISTS products;
CREATE TABLE products (
	id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    price decimal(10, 2) NOT NULL,
    discount int,
    descriptionShort varchar(100),
    descriptionLong varchar(500),
	img varchar(255),
    id_region int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_region) REFERENCES regions (id)
);

INSERT INTO products VALUES (1, 'Jujuy', 10000, null, 'DESCRIPCION CORTA', 'DESCRIPCION LARGA', null, 1), (2, 'Buenos Aires', 6000, 10, 'DESCRIPCION CORTA', 'DESCRIPCION LARGA', null, 2);

DROP TABLE IF EXISTS cart;
CREATE TABLE cart (
	id int NOT NULL AUTO_INCREMENT,
    cantProduct int NOT NULL DEFAULT 1,
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

UPDATE products
SET descriptionShort = 'El pueblo de Humahuaca se encuentra cerca de los 3.000 metros de altura, rodeado de cordones montañosos de gran belleza. El pueblo es la entrada a La Puna jujeña y es la última localidad importante de la Quebrada de Humahuaca, en el camino hacia el norte (La Quiaca). El pueblo al igual que la quebrada toma el nombre de los antiguos pobladores de la zona que fueron los omaguacas.'
WHERE id = 1

UPDATE products
SET img = 'partials'