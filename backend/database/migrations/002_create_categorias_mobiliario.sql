
-- =============================================
-- RentFlow Systems
-- Migracion 002: Categorias y mobiliario
-- =============================================

USE rentflow;

-- Tabla: categorias
CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    estatus TINYINT(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB;

-- Tabla: mobiliario
CREATE TABLE mobiliario (
    id_mobiliario INT AUTO_INCREMENT PRIMARY KEY,
    id_categoria INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NULL,
    precio_dia DECIMAL(10,2) NOT NULL,
    stock_total INT NOT NULL,
    imagen_url VARCHAR(255) NULL,
    estatus TINYINT(1) NOT NULL DEFAULT 1,
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion DATETIME NULL,

    CONSTRAINT chk_mobiliario_precio
        CHECK (precio_dia >= 0),

    CONSTRAINT chk_mobiliario_stock
        CHECK (stock_total >= 0),

    CONSTRAINT fk_mobiliario_categorias
        FOREIGN KEY (id_categoria)
        REFERENCES categorias(id_categoria)
) ENGINE=InnoDB;
