DROP DATABASE IF EXISTS pepesdb;

CREATE DATABASE IF NOT EXISTS pepesdb;

USE pepesdb;

DROP TABLE IF EXISTS empleados;

CREATE TABLE empleados (
  id INT(3) NOT NULL AUTO_INCREMENT,
  nickname VARCHAR(45) NOT NULL,
  email VARCHAR(50) DEFAULT NULL,
  password VARCHAR(100) NOT NULL,
  permisos VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

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
  metodo_pago VARCHAR(18) NOT NULL,
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
  ubicacion_logo VARCHAR(100) DEFAULT "",
  numero_desde INT NOT NULL,
  puntillado_emblocado VARCHAR(9) NOT NULL,
  color_duplicado VARCHAR(13) NOT NULL,
  triplicado VARCHAR(2) NOT NULL,
  color_triplicado VARCHAR(8) DEFAULT "",
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

-- ESTE PROCEDURE BUSCA TODAS LAS ORDENES PENDIENTES
DROP PROCEDURE IF EXISTS buscar_ordenes_pendientes;

DELIMITER $$
CREATE PROCEDURE buscar_ordenes_pendientes()
BEGIN
SELECT 
clientes.nombre,
impresiones.id,
impresiones.nro_orden,
impresiones.atendido_por, 
impresiones.fecha_creacion, 
impresiones.producto, 
impresiones.fecha_entrega, 
impresiones.hora_entrega
FROM clientes
INNER JOIN impresiones
ON clientes.id = impresiones.id_cliente
WHERE impresiones.estado = 'pendiente';

SELECT
clientes.nombre,
loma.id,
loma.nro_orden,
loma.atendido_por, 
loma.fecha_creacion, 
loma.producto, 
loma.fecha_entrega, 
loma.hora_entrega
FROM clientes
INNER JOIN loma
ON clientes.id = loma.id_cliente
WHERE loma.estado = 'pendiente';

SELECT
clientes.nombre,
talonarios.id,
talonarios.nro_orden,
talonarios.atendido_por, 
talonarios.fecha_creacion, 
talonarios.producto, 
talonarios.fecha_entrega, 
talonarios.hora_entrega
FROM clientes
INNER JOIN talonarios
ON clientes.id = talonarios.id_cliente
WHERE talonarios.estado = 'pendiente';

SELECT
clientes.nombre,
bonos.id,
bonos.nro_orden,
bonos.atendido_por, 
bonos.fecha_creacion, 
bonos.producto, 
bonos.fecha_entrega, 
bonos.hora_entrega
FROM clientes
INNER JOIN bonos
ON clientes.id = bonos.id_cliente
WHERE bonos.estado = 'pendiente';

SELECT
clientes.nombre,
disenos.id,
disenos.nro_orden,
disenos.atendido_por, 
disenos.fecha_creacion, 
disenos.producto, 
disenos.fecha_entrega, 
disenos.hora_entrega
FROM clientes
INNER JOIN disenos
ON clientes.id = disenos.id_cliente
WHERE disenos.estado = 'pendiente';

SELECT
clientes.nombre,
plotter.id,
plotter.nro_orden,
plotter.atendido_por, 
plotter.fecha_creacion, 
plotter.producto, 
plotter.fecha_entrega, 
plotter.hora_entrega
FROM clientes
INNER JOIN plotter
ON clientes.id = plotter.id_cliente
WHERE plotter.estado = 'pendiente';

SELECT
clientes.nombre,
remeras.id,
remeras.nro_orden,
remeras.atendido_por, 
remeras.fecha_creacion, 
remeras.producto, 
remeras.fecha_entrega, 
remeras.hora_entrega
FROM clientes
INNER JOIN remeras
ON clientes.id = remeras.id_cliente
WHERE remeras.estado = 'pendiente';

SELECT
clientes.nombre,
tarjetas.id,
tarjetas.nro_orden,
tarjetas.atendido_por, 
tarjetas.fecha_creacion, 
tarjetas.producto, 
tarjetas.fecha_entrega, 
tarjetas.hora_entrega
FROM clientes
INNER JOIN tarjetas
ON clientes.id = tarjetas.id_cliente
WHERE tarjetas.estado = 'pendiente';

SELECT
clientes.nombre,
volantes.id,
volantes.nro_orden,
volantes.atendido_por, 
volantes.fecha_creacion, 
volantes.producto, 
volantes.fecha_entrega, 
volantes.hora_entrega
FROM clientes
INNER JOIN volantes
ON clientes.id = volantes.id_cliente
WHERE volantes.estado = 'pendiente';

SELECT
clientes.nombre,
sellos.id,
sellos.nro_orden,
sellos.atendido_por, 
sellos.fecha_creacion, 
sellos.producto, 
sellos.fecha_entrega, 
sellos.hora_entrega
FROM clientes
INNER JOIN sellos
ON clientes.id = sellos.id_cliente
WHERE sellos.estado = 'pendiente';

SELECT
clientes.nombre,
varios.id,
varios.nro_orden,
varios.atendido_por, 
varios.fecha_creacion, 
varios.producto, 
varios.fecha_entrega, 
varios.hora_entrega
FROM clientes
INNER JOIN varios
ON clientes.id = varios.id_cliente
WHERE varios.estado = 'pendiente';
END$$

DELIMITER ;