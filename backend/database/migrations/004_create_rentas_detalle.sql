-- =============================================
-- RentFlow Systems
-- Migracion 004: Rentas y detalle de rentas
-- =============================================

USE rentflow;

-- Tabla: rentas
CREATE TABLE rentas (
    id_renta INT AUTO_INCREMENT PRIMARY KEY,
    folio VARCHAR(20) NOT NULL UNIQUE,
    id_cliente INT NOT NULL,
    id_usuario INT NOT NULL,

    fecha_hora_entrega DATETIME NOT NULL,
    fecha_hora_devolucion DATETIME NOT NULL,

    fecha_entrega_real DATETIME NULL,
    fecha_devolucion_real DATETIME NULL,

    id_usuario_entrega INT NULL,
    id_usuario_recoleccion INT NULL,

    direccion_entrega TEXT NOT NULL,

    total_por_dia DECIMAL(10,2) NOT NULL,
    total_renta DECIMAL(10,2) NOT NULL,

    observaciones TEXT NULL,

    estatus ENUM(
        'POR_ENTREGAR',
        'EN_RENTA',
        'COMPLETADA',
        'CANCELADA'
    ) NOT NULL DEFAULT 'POR_ENTREGAR',

    fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion DATETIME NULL,

    CONSTRAINT chk_rentas_total_por_dia
        CHECK (total_por_dia >= 0),

    CONSTRAINT chk_rentas_total
        CHECK (total_renta >= 0),

    CONSTRAINT fk_rentas_clientes
        FOREIGN KEY (id_cliente)
        REFERENCES clientes(id_cliente),

    CONSTRAINT fk_rentas_usuarios
        FOREIGN KEY (id_usuario)
        REFERENCES usuarios(id_usuario),

    CONSTRAINT fk_rentas_usuario_entrega
        FOREIGN KEY (id_usuario_entrega)
        REFERENCES usuarios(id_usuario),

    CONSTRAINT fk_rentas_usuario_recoleccion
        FOREIGN KEY (id_usuario_recoleccion)
        REFERENCES usuarios(id_usuario)
) ENGINE=InnoDB;



-- Tabla: detalle_renta
CREATE TABLE detalle_renta (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_renta INT NOT NULL,
    id_mobiliario INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario_dia DECIMAL(10,2) NOT NULL,
    subtotal_dia DECIMAL(10,2) NOT NULL,

    CONSTRAINT chk_detalle_cantidad
        CHECK (cantidad > 0),

    CONSTRAINT chk_detalle_precio
        CHECK (precio_unitario_dia >= 0),

    CONSTRAINT chk_detalle_subtotal
        CHECK (subtotal_dia >= 0),

    CONSTRAINT uq_detalle_renta_mobiliario
        UNIQUE (id_renta, id_mobiliario),

    CONSTRAINT fk_detalle_renta
        FOREIGN KEY (id_renta)
        REFERENCES rentas(id_renta),

    CONSTRAINT fk_detalle_mobiliario
        FOREIGN KEY (id_mobiliario)
        REFERENCES mobiliario(id_mobiliario)
) ENGINE=InnoDB;
