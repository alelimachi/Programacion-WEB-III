CREATE TABLE artistas (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(255) NOT NULL,
  nacionalidad varchar(100) DEFAULT NULL,
  biografia text DEFAULT NULL,
  foto varchar(255) DEFAULT NULL,
  estado tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
) 
CREATE TABLE logs_acceso (
  id int(11) NOT NULL AUTO_INCREMENT,
  usuario_id int(11) NOT NULL,
  ip varchar(45) NOT NULL,
  evento varchar(20) NOT NULL,
  navegador text NOT NULL,
  fecha datetime NOT NULL,
  PRIMARY KEY (id),
  KEY fk_logs_usuario (usuario_id)
)

CREATE TABLE obras (
  id int(11) NOT NULL AUTO_INCREMENT,
  titulo varchar(255) NOT NULL,
  descripcion text NOT NULL,
  precio decimal(10,2) NOT NULL,
  imagen varchar(255) NOT NULL,
  artista_id int(11) NOT NULL,
  estado tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (id),
  KEY fk_obras_artista (artista_id),
  CONSTRAINT fk_obras_artista FOREIGN KEY (artista_id) REFERENCES artistas (id)
)

CREATE TABLE usuarios (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  email varchar(150) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  rol varchar(20) NOT NULL DEFAULT 'user',
  estado tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (id),
  UNIQUE KEY uq_email (email)
)