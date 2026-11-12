
-- =============================================
-- RentFlow Systems
-- Migracion 003: Creacion de clientes
-- =============================================

USE rentflow;

CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(150) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    email VARCHAR(100) NULL,
    estatus TINYINT(1) NOT NULL DEFAULT 1,
    fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;
