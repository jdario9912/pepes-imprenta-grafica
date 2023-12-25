DROP DATABASE IF EXISTS pepesdb;

CREATE DATABASE IF NOT EXISTS pepesdb;

USE pepesdb;

DROP TABLE IF EXISTS clientes;

CREATE TABLE clientes (
  id INT(4) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100)NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  email VARCHAR(50) DEFAULT NULL,
  observaciones VARCHAR(255),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS bonos;

CREATE TABLE bonos (
  id INT(4) NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion VARCHAR(10),
  atendido_por VARCHAR(50),
  fecha_entrega VARCHAR(10),
  hora_entrega VARCHAR(6),
  muestra VARCHAR(2),
  producto VARCHAR(20) DEFAULT 'bonos',
  tipo VARCHAR(11),
  tamano VARCHAR(3),
  desde_numero INT(7),
  cantidad INT(6),
  numeradores INT(1),
  lotes INT(3),
  observaciones VARCHAR(255),
  total INT(7),
  entrega INT(7),
  estado VARCHAR(20),
  abono varchar(18),
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS disenos;

CREATE TABLE disenos (
  id INT(4) NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion VARCHAR(10),
  atendido_por VARCHAR(50),
  fecha_entrega VARCHAR(10),
  hora_entrega VARCHAR(6),
  muestra VARCHAR(2),
  producto VARCHAR(20) DEFAULT 'disenos',
  ubicacion_archivo VARCHAR(100),
  detalles VARCHAR(255),
  observaciones VARCHAR(255),
  total INT(7),
  entrega INT(7),
  estado VARCHAR(20),
  abono varchar(18),
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS impresiones;

CREATE TABLE impresiones (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion VARCHAR(10),
  atendido_por VARCHAR(50),
  fecha_entrega VARCHAR(10),
  hora_entrega VARCHAR(6),
  muestra VARCHAR(2),
  producto VARCHAR(20) DEFAULT 'impresiones',
  impresion VARCHAR(14),
  ubicacion_archivo VARCHAR (100),
  faz VARCHAR(6),
  tipo_papel VARCHAR(100),
  tamano_papel VARCHAR(6),
  orientacion VARCHAR(10),
  anillado VARCHAR(2),
  abrochado VARCHAR(2),
  corte VARCHAR(2),
  observaciones VARCHAR(255),
  total INT(7),
  entrega INT(7),
  estado VARCHAR(20),
  abono varchar(18),
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS loma;

CREATE TABLE loma (
  id INT(4) NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion VARCHAR(10),
  atendido_por VARCHAR(50),
  fecha_entrega VARCHAR(10),
  hora_entrega VARCHAR(6),
  muestra VARCHAR(2),
  producto VARCHAR(20) DEFAULT 'loma',
  ubicacion_archivo VARCHAR (100),
  material VARCHAR(22),
  orientacion VARCHAR(10),
  bolsillo VARCHAR(15),
  corte VARCHAR(2), 
  ojales VARCHAR(2),
  troquelado VARCHAR(2),
  portabaner VARCHAR(2),
  observaciones VARCHAR(255),
  total INT(7),
  entrega INT(7),
  estado VARCHAR(20),
  abono varchar(18),
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS plotter;

CREATE TABLE plotter (
  id INT(4) NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion VARCHAR(10),
  atendido_por VARCHAR(50),
  fecha_entrega VARCHAR(10),
  hora_entrega VARCHAR(6),
  muestra VARCHAR(2),
  producto VARCHAR(20) DEFAULT 'plotter',
  ubicacion_archivo VARCHAR(100),
  tamano VARCHAR(100),
  color INT(4),
  material VARCHAR(17),
  terminacion VARCHAR(9),
  observaciones VARCHAR(255),
  total INT(7),
  entrega INT(7),
  estado VARCHAR(20),
  abono varchar(18),
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS remeras;

CREATE TABLE remeras (
  id INT(4) NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion VARCHAR(10),
  atendido_por VARCHAR(50),
  fecha_entrega VARCHAR(10),
  hora_entrega VARCHAR(6),
  muestra VARCHAR(2),
  producto VARCHAR(20) DEFAULT 'remeras',
  ubicacion_archivo VARCHAR(100),
  talles VARCHAR(100),
  color VARCHAR(100),
  estampa_pecho VARCHAR(100),
  estampa_espalda VARCHAR(100),
  color_estampa VARCHAR(50),
  cantidad INT(4),
  observaciones VARCHAR(255),
  total INT(7),
  entrega INT(7),
  estado VARCHAR(20),
  abono varchar(18),
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS sellos;

CREATE TABLE sellos (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion VARCHAR(10),
  atendido_por VARCHAR(50),
  fecha_entrega VARCHAR(10),
  hora_entrega VARCHAR(6),
  muestra VARCHAR(2),
  producto VARCHAR(20) DEFAULT 'sellos',
  tipo VARCHAR(10),
  tamano VARCHAR(100),
  texto VARCHAR(100),
  dibujo VARCHAR(100),
  observaciones VARCHAR(255),
  total INT(7),
  entrega INT(7),
  estado VARCHAR(20),
  abono varchar(18),
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS talonarios;

CREATE TABLE talonarios (
  id INT(4) NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion VARCHAR(10),
  atendido_por VARCHAR(50),
  fecha_entrega VARCHAR(10),
  hora_entrega VARCHAR(6),
  muestra VARCHAR(2),
  producto VARCHAR(20) DEFAULT 'talonarios',
  tipo VARCHAR(14),
  cantidad INT(5),
  tamano VARCHAR(3),
  modelo_anterior VARCHAR(2),
  tiene_logo VARCHAR(2),
  ubicacion_logo VARCHAR(100),
  numero_desde INT(10),
  puntillado_emblocado VARCHAR(9),
  color_duplicado VARCHAR(13),
  triplicado VARCHAR(2),
  color_triplicado VARCHAR(8),
  observaciones VARCHAR(255),
  total INT(7),
  entrega INT(7),
  estado VARCHAR(20),
  abono varchar(18),
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS tarjetas;

CREATE TABLE tarjetas (
  id INT(4) NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion VARCHAR(10),
  atendido_por VARCHAR(50),
  fecha_entrega VARCHAR(10),
  hora_entrega VARCHAR(6),
  muestra VARCHAR(2),
  producto VARCHAR(20) DEFAULT 'tarjetas',
  ubicacion_archivo VARCHAR(100),
  tipo VARCHAR(12),
  cantidad INT(4),
  papel VARCHAR(11),
  terminacion VARCHAR(9),
  puntas_redondeadas VARCHAR(2),
  observaciones VARCHAR(255),
  total INT(7),
  entrega INT(7),
  estado VARCHAR(20),
  abono varchar(18),
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS varios;

CREATE TABLE varios (
  id INT(4) NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion VARCHAR (10),
  atendido_por VARCHAR(50),
  fecha_entrega VARCHAR(10),
  hora_entrega VARCHAR(6),
  muestra VARCHAR(2),
  producto VARCHAR(20) DEFAULT 'varios',
  detalle VARCHAR(255),
  observaciones VARCHAR(255),
  total INT(7),
  entrega INT(7),
  estado VARCHAR(20),
  abono varchar(18),
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS volantes;

CREATE TABLE volantes (
  id INT(4) NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion VARCHAR(10),
  atendido_por VARCHAR(50),
  fecha_entrega VARCHAR(10),
  hora_entrega VARCHAR(6),
  muestra VARCHAR(2),
  producto VARCHAR(20) DEFAULT 'volantes',
  tipo VARCHAR(16),
  tamano VARCHAR(4),
  cantidad INT(4),
  impresion VARCHAR(14),
  ubicacion_diseno VARCHAR(100),
  observaciones VARCHAR(255),
  total INT(7),
  entrega INT(7),
  estado VARCHAR(20),
  abono varchar(18),
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

-- INSERTS
INSERT INTO clientes (
  nombre,
  telefono,
  email,
  observaciones
) 
VALUES 
('Alejandro Juarez',	'3515520916', '', ''),
('ANA SUAREZ',	'3516133843', '', ''),
('Angel Rodriguez',	'3515146758', '', ''),
('Angelica Peludero',	'3516166534', '', ''),
('ARIDO BODEREAU',	'3515006382', '', ''),
('Benjamin Paz',	'3513915833', '', ''),
('Carina Ortega',	'3543577605', '', ''),
('Carlas Brito',	'3512450466', '', ''),
('Carolina Moreira',	'3543589650', '', ''),
('Cristian Cuello',	'3512086773', '', ''),
('Dainel Ceballos',	'3516680676', '', ''),
('David Carrizo',	'3515065882', '', ''),
('Eduardo Gomez',	'431555', '', ''),
('Eduardo Quevedo',	'431555', '', ''),
('Fernando Lastra',	'3516142703', '', ''),
('Giacon Angel',	'3543588237', '', ''),
('Gomez Silvina',	'3543530642', '', ''),
('Grisel Dameglio',	'3516236122', '', ''),
('JUAN FERREYRA',	'3516206784', '', ''),
('Juncos Luciano',	'3517637468', '', ''),
('Mercedes Palacios',	'3516652993', '', ''),
('Miguel Freites',	'3516504482', '', ''),
('Natalia Moyano',	'3543516680', '', ''),
('Natalia Sosa',	'3516071258', '', ''),
('Susana Agosti',	'3543655706', '', ''),
('Zamorano Maria',	'1158922726', '', ''),
('Miguel Angel Contreras',	'3515604860', '', ''),
('Lubri Centro San Alfonso',	'3516145158', '', ''),
('VETERINARIA NORES KARINA'	,'3513 996469', '', ''),
('Carolina Maldino Carito'	,'3512 548144', '', ''),
('Lucrecia Álvarez Saavedra',	'3513 50-5633', '', ''),
('Marina Ovalle',	'3513 41-4069', '', ''),
('Ludueña Zakka',	'3543-605286', '', ''),
('Florentina', '3516879214', 'florentinabortolotto@gmail.com', ''),
('Matias Gastardelli',	'3518009675','', 'campa futbol'),
('Arce Victoria',	'3517874871','' ,'munay danza'),
('Memory M',	'2043809755','', 'Fotografa'),
('Maru Pereyra', '157011540', 'maru@gmail.com', 'La one');