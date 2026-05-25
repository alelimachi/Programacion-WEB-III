CREATE DATABASE empresa_db;
USE empresa_db;

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    createdAt DATETIME NOT NULL DEFAULT current_timestamp(),
    updatedAt DATETIME NOT NULL DEFAULT current_timestamp()
);

INSERT INTO categorias(nombre, descripcion)
VALUES
('Electrónica', 'Dispositivos electrónicos'),
('Oficina', 'Material de oficina');

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    categoria_id INT,

    FOREIGN KEY (categoria_id)
    REFERENCES categorias(id)
    ON DELETE CASCADE
);
INSERT INTO productos(nombre, precio, categoria_id)
VALUES
('Laptop', 5000, 1),
('Mouse', 80, 1),
('Cuaderno', 25, 2);