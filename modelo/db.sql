CREATE DATABASE db_clothes_inventory;

USE db_clothes_inventory;

CREATE TABLE tipo_documento(
    id_documento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_tipo VARCHAR(50) NOT NULL
);

CREATE TABLE USUARIO(
    id_usuario INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nombre_usuario VARCHAR(20) NOT NULL,
    tipo_documento INT NOT NULL,
	numero_documento VARCHAR(10) NOT NULL,
    correo_electronico VARCHAR(30) NOT NULL,
    contraseña VARCHAR(15) NOT NULL,
    FOREIGN KEY (tipo_documento) REFERENCES tipo_documento(id_documento)
);

CREATE TABLE PRODUCTO(
    id_producto INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nombre_producto VARCHAR(20) NOT NULL,
    codigo_producto CHAR(20) NOT NULL,
    costo_producto DECIMAL(10,2) NOT NULL,
    precio_producto DECIMAL(10,2) NOT NULL
);

CREATE TABLE ALMACEN(
    id_almacen INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nombre_almacen VARCHAR(25) NOT NULL
);

CREATE TABLE USUARIO_ALAMACEN(
    id_usuario INT NOT NULL,
	id_almacen INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES USUARIO(id_usuario),
    FOREIGN KEY (id_almacen) REFERENCES ALMACEN(id_almacen)
);

CREATE TABLE PRODUCTO_ALMACEN(
	id_almacen INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad_producto INT NULL,
    FOREIGN KEY (id_almacen) REFERENCES ALMACEN(id_almacen),
    FOREIGN KEY (id_producto) REFERENCES PRODUCTO(id_producto)
);

CREATE TABLE ENTRADA(
	id_entrada INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_producto INT NOT NULL,
    cantidad_entrada INT NOT NULL,
    costo_producto INT NOT NULL,
    origen_producto VARCHAR(20) NOT NULL,
    id_almacen INT NOT NULL,
    fecha_entrada DATETIME NOT NULL,
    FOREIGN KEY (id_producto) REFERENCES PRODUCTO(id_producto)
);

CREATE TABLE SALIDA(
	id_salida INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_producto INT NOT NULL,
 	cantidad_salida INT NOT NULL, 
    precio_producto DECIMAL(10,2) NOT NULL, 
    destino_salida VARCHAR(25) NOT NULL,
    id_almacen INT NOT NULL, 
    fecha_salida DATETIME NOT NULL,
    FOREIGN KEY (id_producto) REFERENCES PRODUCTO(id_producto),
    FOREIGN KEY (id_almacen) REFERENCES ALMACEN(id_almacen)
    
);

-------------------------------------------------------------------------------
INSERT INTO tipo_documento (nombre_tipo) VALUES
('Cedula de ciudadania'),
('Tarjeta de identidad'),
('Cedula de extranjeria'),
('Permiso especial de permanencia'),
('Pasaporte');


INSERT INTO usuario (nombre_usuario,tipo_documento,numero_documento,correo_electronico,contraseña) VALUES
('camilo',1,1012459636,'cmilocortes99@gmail.com','a3248e714'),
('sergio',2,5453454547,'sergioesgai@gmail.com','jgbjmhfngx'),
('juan',3,6865456556,'juanchitoelmejor@gmail.com','tdfzlfdvjkd');


INSERT INTO almacen (nombre_almacen) VALUES
('monastery'),
('givenchy');


INSERT INTO producto (nombre_producto,codigo_producto,costo_producto,precio_producto) VALUES
('camiseta oversize',459,20000,40000),
('camiseta polo',666,25000,77700),
('jean diesel',111,35000,80000);



