
-- RentFlow Systems
-- Migracion 005: Creacion de asignaciones de renta

USE rentflow;

CREATE TABLE asignaciones_renta (
    id_asignacion INT AUTO_INCREMENT PRIMARY KEY,
    id_renta INT NOT NULL,
    id_usuario INT NOT NULL,
    tipo_operacion ENUM('ENTREGA', 'RECOLECCION') NOT NULL,
    es_responsable TINYINT(1) NOT NULL DEFAULT 0,
    fecha_asignacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    observaciones TEXT NULL,

    CONSTRAINT uq_asignacion_renta_usuario_operacion
        UNIQUE (id_renta, id_usuario, tipo_operacion),

    CONSTRAINT fk_asignaciones_renta
        FOREIGN KEY (id_renta)
        REFERENCES rentas(id_renta),

    CONSTRAINT fk_asignaciones_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES usuarios(id_usuario)

) ENGINE=InnoDB;
