DROP DATABASE IF EXISTS pepesdb;

CREATE DATABASE IF NOT EXISTS pepesdb;

USE pepesdb;

DROP TABLE IF EXISTS clientes;

-- clientes
CREATE TABLE clientes (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  email VARCHAR(50) DEFAULT NULL,
  observaciones VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
);

-- productos
DROP TABLE IF EXISTS bonos;

CREATE TABLE bonos (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atendido_por VARCHAR(50) NOT NULL,
  fecha_entrega DATE NOT NULL,
  hora_entrega TIME NOT NULL,
  muestra VARCHAR(2) NOT NULL,
  producto VARCHAR(20) DEFAULT 'bonos',
  tipo VARCHAR(11) NOT NULL,
  tamano VARCHAR(3) NOT NULL,
  desde_numero INT NOT NULL,
  cantidad INT NOT NULL,
  numeradores INT NOT NULL,
  lotes INT NOT NULL,
  observaciones VARCHAR(500),
  total INT NOT NULL,
  entrega INT NOT NULL,
  estado VARCHAR(20) NOT NULL,
  metodo_pago VARCHAR(18) NOT NULL NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS disenos;

CREATE TABLE disenos (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atendido_por VARCHAR(50),
  fecha_entrega DATE NOT NULL,
  hora_entrega TIME NOT NULL,
  muestra VARCHAR(2) NOT NULL,
  producto VARCHAR(20) DEFAULT 'disenos',
  ubicacion_archivo VARCHAR(100) NOT NULL,
  detalles VARCHAR(500) NOT NULL,
  observaciones VARCHAR(500),
  total INT NOT NULL,
  entrega INT NOT NULL,
  estado VARCHAR(20) NOT NULL,
  metodo_pago VARCHAR(18) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS impresiones;

CREATE TABLE impresiones (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atendido_por VARCHAR(50),
  fecha_entrega DATE NOT NULL,
  hora_entrega TIME NOT NULL,
  muestra VARCHAR(2) NOT NULL,
  producto VARCHAR(20) DEFAULT 'impresiones',
  impresion VARCHAR(14) NOT NULL,
  ubicacion_archivo VARCHAR (100) NOT NULL,
  faz VARCHAR(6) NOT NULL,
  tipo_papel VARCHAR(100) NOT NULL,
  tamano_papel VARCHAR(6) NOT NULL,
  orientacion VARCHAR(10) NOT NULL,
  anillado VARCHAR(2) NOT NULL,
  abrochado VARCHAR(2) NOT NULL,
  corte VARCHAR(2) NOT NULL,
  observaciones VARCHAR(500),
  total INT NOT NULL,
  entrega INT NOT NULL,
  estado VARCHAR(20) NOT NULL,
  metodo_pago VARCHAR(18) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS loma;

CREATE TABLE loma (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atendido_por VARCHAR(50),
  fecha_entrega DATE NOT NULL,
  hora_entrega TIME NOT NULL,
  muestra VARCHAR(2) NOT NULL,
  producto VARCHAR(20) DEFAULT 'loma',
  ubicacion_archivo VARCHAR (100) NOT NULL,
  material VARCHAR(22) NOT NULL,
  orientacion VARCHAR(10) NOT NULL,
  bolsillo VARCHAR(15) NOT NULL,
  corte VARCHAR(2) NOT NULL ,
  ojales VARCHAR(2) NOT NULL,
  troquelado VARCHAR(2) NOT NULL,
  portabaner VARCHAR(2) NOT NULL,
  observaciones VARCHAR(500),
  total INT NOT NULL,
  entrega INT NOT NULL,
  estado VARCHAR(20) NOT NULL,
  metodo_pago VARCHAR(18) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS plotter;

CREATE TABLE plotter (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atendido_por VARCHAR(50),
  fecha_entrega DATE NOT NULL,
  hora_entrega TIME NOT NULL,
  muestra VARCHAR(2) NOT NULL,
  producto VARCHAR(20) DEFAULT 'plotter',
  ubicacion_archivo VARCHAR(100) NOT NULL,
  tamano VARCHAR(100) NOT NULL,
  color INT NOT NULL,
  material VARCHAR(17) NOT NULL,
  terminacion VARCHAR(9) NOT NULL,
  observaciones VARCHAR(500),
  total INT NOT NULL,
  entrega INT NOT NULL,
  estado VARCHAR(20) NOT NULL,
  metodo_pago VARCHAR(18) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS remeras;

CREATE TABLE remeras (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atendido_por VARCHAR(50),
  fecha_entrega DATE NOT NULL,
  hora_entrega TIME NOT NULL,
  muestra VARCHAR(2) NOT NULL,
  producto VARCHAR(20) DEFAULT 'remeras',
  ubicacion_archivo VARCHAR(100) NOT NULL,
  talles VARCHAR(100) NOT NULL,
  color VARCHAR(100) NOT NULL,
  estampa_pecho VARCHAR(100) NOT NULL,
  estampa_espalda VARCHAR(100) NOT NULL,
  color_estampa VARCHAR(50) NOT NULL,
  cantidad INT NOT NULL,
  observaciones VARCHAR(500),
  total INT NOT NULL,
  entrega INT NOT NULL,
  estado VARCHAR(20) NOT NULL,
  metodo_pago VARCHAR(18) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS sellos;

CREATE TABLE sellos (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atendido_por VARCHAR(50),
  fecha_entrega DATE NOT NULL,
  hora_entrega TIME NOT NULL,
  muestra VARCHAR(2) NOT NULL,
  producto VARCHAR(20) DEFAULT 'sellos',
  tipo VARCHAR(10) NOT NULL,
  tamano VARCHAR(100) NOT NULL,
  texto VARCHAR(100) NOT NULL,
  dibujo VARCHAR(100) NOT NULL,
  observaciones VARCHAR(500),
  total INT NOT NULL,
  entrega INT NOT NULL,
  estado VARCHAR(20) NOT NULL,
  metodo_pago VARCHAR(18) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS talonarios;

CREATE TABLE talonarios (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atendido_por VARCHAR(50),
  fecha_entrega DATE NOT NULL,
  hora_entrega TIME NOT NULL,
  muestra VARCHAR(2) NOT NULL,
  producto VARCHAR(20) DEFAULT 'talonarios',
  tipo VARCHAR(14) NOT NULL,
  cantidad INT NOT NULL,
  tamano VARCHAR(3) NOT NULL,
  modelo_anterior VARCHAR(2) NOT NULL,
  tiene_logo VARCHAR(2) NOT NULL,
  ubicacion_logo VARCHAR(100) NOT NULL,
  numero_desde INT NOT NULL,
  puntillado_emblocado VARCHAR(9) NOT NULL,
  color_duplicado VARCHAR(13) NOT NULL,
  triplicado VARCHAR(2) NOT NULL,
  color_triplicado VARCHAR(8),
  observaciones VARCHAR(500),
  total INT NOT NULL,
  entrega INT NOT NULL,
  estado VARCHAR(20) NOT NULL,
  metodo_pago VARCHAR(18) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS tarjetas;

CREATE TABLE tarjetas (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atendido_por VARCHAR(50),
  fecha_entrega DATE NOT NULL,
  hora_entrega TIME NOT NULL,
  muestra VARCHAR(2) NOT NULL,
  producto VARCHAR(20) DEFAULT 'tarjetas',
  ubicacion_archivo VARCHAR(100) NOT NULL,
  tipo VARCHAR(12) NOT NULL,
  cantidad INT NOT NULL,
  papel VARCHAR(11) NOT NULL,
  terminacion VARCHAR(9) NOT NULL,
  puntas_redondeadas VARCHAR(2) NOT NULL,
  observaciones VARCHAR(500),
  total INT NOT NULL,
  entrega INT NOT NULL,
  estado VARCHAR(20) NOT NULL,
  metodo_pago VARCHAR(18) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS varios;

CREATE TABLE varios (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atendido_por VARCHAR(50),
  fecha_entrega DATE NOT NULL,
  hora_entrega TIME NOT NULL,
  muestra VARCHAR(2) NOT NULL,
  producto VARCHAR(20) DEFAULT 'varios',
  detalle VARCHAR(500) NOT NULL,
  observaciones VARCHAR(500),
  total INT NOT NULL,
  entrega INT NOT NULL,
  estado VARCHAR(20) NOT NULL,
  metodo_pago VARCHAR(18) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(id_cliente) REFERENCES clientes(id)
  ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS volantes;

CREATE TABLE volantes (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nro_orden BIGINT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atendido_por VARCHAR(50),
  fecha_entrega DATE NOT NULL,
  hora_entrega TIME NOT NULL,
  muestra VARCHAR(2) NOT NULL,
  producto VARCHAR(20) DEFAULT 'volantes',
  tipo VARCHAR(16) NOT NULL,
  tamano VARCHAR(4) NOT NULL,
  cantidad INT NOT NULL,
  impresion VARCHAR(14) NOT NULL,
  ubicacion_diseno VARCHAR(100) NOT NULL,
  observaciones VARCHAR(500),
  total INT NOT NULL,
  entrega INT NOT NULL,
  estado VARCHAR(20) NOT NULL,
  metodo_pago VARCHAR(18) NOT NULL,
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