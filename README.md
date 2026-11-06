# Universidad Tecnológica de Torreón
### Dirección de la Carrera de Ingeniería en Desarrollo y Gestión de Software

---

<br>

<div align="center">

# RENTFLOW SYSTEMS

*Documentación Técnica y Arquitectura de Software del Sistema Web de Gestión de Inventario, Control de Mobiliario y Reservas por Bloques Horarios*

</div>

<br>

**Asignatura:** Desarrollo Web Profesional  
**Docente:** Ing. Jesús Del Toro Robledo  
**Grado y Sección:** 8.º Cuatrimestre — Sección "A"  

<br>

### <u>Integrantes del Equipo de Desarrollo:</u>

* **Melany Elena de los Angeles Landeros Fernández** — *Líder de Proyecto (Project Lead & Software Architect)*
* **Diego Cassio** — *Desarrollador Frontend (Angular Specialist)*
* **Gabriel** — *Desarrollador Backend (Node.js & Express Specialist)*
* **Javier Saucedo** — *Administrador de Base de Datos (MySQL Specialist)*

<br>

<div align="center">

Torreón, Coahuila, México  
Octubre de 2026

</div>
## CAPÍTULO II. PROBLEMÁTICA Y JUSTIFICACIÓN DEL PROYECTO

### 2.1 Planteamiento y contextualización de la problemática

Los pequeños negocios dedicados al arrendamiento de mobiliario y equipo para eventos necesitan administrar sus existencias, clientes, reservaciones y actividades operativas de manera coordinada. Sin embargo, cuando estos procesos se realizan mediante registros manuales, hojas de cálculo o herramientas que no están integradas, pueden presentarse dificultades para consultar información, controlar la disponibilidad del inventario y organizar las entregas y recolecciones.

Una de las principales dificultades consiste en determinar la disponibilidad real del mobiliario durante un periodo específico. Por ejemplo, si un negocio cuenta con 50 sillas y un cliente solicita 25 para un evento durante la mañana, las sillas restantes y las comprometidas para ese evento deben contabilizarse correctamente al evaluar otra solicitud para la tarde o la noche. Si el control se realiza únicamente por fecha, sin considerar los horarios y las condiciones de entrega y devolución, podrían desaprovechar recursos que estarían disponibles para otra renta.

También existe el riesgo de aceptar reservaciones que se traslapen. Si un cliente solicita 25 sillas de 14:00 a 18:00 horas y otro solicita 30 sillas de 16:00 a 20:00 horas, la demanda durante el periodo de coincidencia sería de 55 sillas. Como el negocio dispone de 50, aceptar ambas solicitudes sin una validación adecuada provocaría un compromiso superior al inventario disponible. Este tipo de situación puede generar incumplimientos, inconvenientes con los clientes y afectaciones económicas.

Además del control de disponibilidad, la administración de clientes, precios, fechas, cantidades solicitadas y actividades de entrega o recolección puede volverse compleja conforme aumenta el número de operaciones. La información dispersa dificulta consultar el historial de las rentas, identificar las actividades programadas y conocer quién realizó modificaciones relevantes dentro del sistema.

Por lo anterior, se identifica la necesidad de una herramienta web que centralice la información operativa del negocio y permita consultar el inventario, registrar las rentas, validar la disponibilidad por intervalos de tiempo y organizar las actividades relacionadas con cada evento. La solución propuesta, **RentFlow Systems**, busca contribuir a una administración más ordenada mediante procesos digitales, validaciones consistentes y acceso controlado a la información.

---

### 2.2 Justificación del proyecto

El desarrollo de **RentFlow Systems** se justifica por la necesidad de facilitar la administración de pequeños negocios dedicados al arrendamiento de mobiliario para eventos. La propuesta busca integrar en una sola aplicación web las funciones esenciales para el control del inventario, el registro de clientes y rentas, la consulta de disponibilidad y el seguimiento de las actividades operativas.

La pertinencia del proyecto se analiza desde tres dimensiones: teórica, práctica y tecnológica. Estas permiten explicar los fundamentos de la solución, los beneficios operativos que se esperan y las herramientas seleccionadas para su desarrollo.

#### 2.2.1 Justificación teórica

Desde la perspectiva de la ingeniería de software, el proyecto aplica principios de modelado de datos, validación de reglas de negocio, control de acceso y gestión de operaciones concurrentes.

Uno de los aspectos centrales es la evaluación de intervalos de tiempo para determinar si una solicitud de renta coincide con otras reservaciones. La disponibilidad de cada artículo debe calcularse considerando las cantidades comprometidas durante los periodos que se traslapan, de manera que las nuevas operaciones no superen las existencias disponibles.

Asimismo, el proyecto contempla una arquitectura cliente-servidor basada en una interfaz web y una API REST. Esta separación permite que la interfaz se encargue de la interacción con el usuario, mientras que el servidor valida las solicitudes, aplica las reglas del negocio y administra el acceso a los datos. La arquitectura facilita el mantenimiento y permite considerar futuras ampliaciones, siempre que se evalúen sus requisitos técnicos.

#### 2.2.2 Justificación práctica y operativa

En el ámbito operativo, **RentFlow Systems** busca reducir la dependencia de registros dispersos y facilitar las actividades administrativas cotidianas. La centralización de la información permitirá consultar el catálogo de mobiliario, registrar los datos necesarios de los clientes, revisar las rentas y organizar las entregas y recolecciones programadas.

El sistema contempla dos perfiles principales para la primera versión:

* **Administrador:** podrá gestionar el catálogo, consultar el inventario y supervisar las rentas registradas, de acuerdo con los permisos establecidos.
* **Empleado operativo:** podrá consultar la información necesaria para la atención al cliente, registrar las operaciones autorizadas y revisar las actividades de entrega y recolección que le correspondan.

La disponibilidad por intervalos de tiempo permitirá evaluar las solicitudes antes de confirmar una renta. De esta manera, se busca disminuir los errores de asignación y aprovechar mejor los recursos disponibles. El registro de las operaciones también facilitará la consulta del historial y el seguimiento de cambios relevantes.

Estos beneficios son objetivos esperados del proyecto; su alcance real deberá comprobarse mediante pruebas funcionales y la evaluación de su uso en un negocio piloto.

#### 2.2.3 Justificación metodológica y tecnológica

La selección de las tecnologías responde a la necesidad de desarrollar una aplicación web modular, mantenible y adaptable a diferentes tamaños de pantalla, dentro del tiempo y los recursos disponibles para el equipo.

* **Angular (frontend):** permitirá construir una interfaz organizada mediante componentes reutilizables, formularios y vistas adaptables a computadoras, tabletas y teléfonos móviles. Las validaciones en la interfaz ayudarán a detectar errores de captura antes de enviar la información al servidor.
* **Node.js y Express (backend):** permitirán desarrollar la API REST encargada de procesar las solicitudes, aplicar las reglas de negocio y verificar los permisos de acceso. Las validaciones críticas se ejecutarán en el servidor, independientemente de las comprobaciones realizadas en la interfaz.
* **MySQL (base de datos):** permitirá almacenar y relacionar la información de clientes, artículos, usuarios y rentas. El uso de transacciones y mecanismos adecuados de control de concurrencia ayudará a mantener la consistencia de los datos cuando se me registren operaciones simultáneas.

La combinación de estas tecnologías proporciona una base adecuada para construir la primera versión funcional de **RentFlow Systems**. La prioridad será implementar y comprobar los procesos esenciales del negocio, dejando las ampliaciones sujetas al tiempo disponible, a las necesidades identificadas y a los resultados de las pruebas.
## CAPÍTULO III. OBJETIVOS, ALCANCES, LIMITACIONES Y MVP[cite: 11]

### 3.1 Objetivos del proyecto[cite: 11]

#### 3.1.1 Objetivo general[cite: 11]

Desarrollar e implementar **RentFlow Systems**, un sistema web para la gestión de pequeños negocios dedicados al arrendamiento de mobiliario para eventos, utilizando Angular, Node.js, Express y MySQL[cite: 11]. La solución permitirá centralizar la información de clientes, inventario y rentas, validar la disponibilidad de artículos según las fechas y los horarios solicitados, y facilitar la organización de las actividades operativas mediante una interfaz accesible y controles de seguridad[cite: 11, 12].

#### 3.1.2 Objetivos específicos[cite: 12]

* **Diseñar e implementar una base de datos relacional:** estructurar la información de clientes, usuarios, artículos y rentas mediante tablas relacionadas que permitan mantener la integridad y consistencia de los datos[cite: 12].
* **Desarrollar una API REST:** implementar los servicios backend encargados de procesar las solicitudes, aplicar las reglas de negocio y administrar las operaciones sobre la base de datos[cite: 12].
* **Construir una interfaz web responsiva:** desarrollar vistas y formularios que me faciliten la gestión de clientes, el catálogo de mobiliario, las rentas y las actividades operativas desde computadoras y dispositivos móviles[cite: 12].
* **Implementar la validación de disponibilidad:** desarrollar una lógica que considere las cantidades de artículos y los intervalos de tiempo de las rentas para evitar que se comprometa una cantidad superior al inventario disponible[cite: 12].
* **Incorporar controles de seguridad y acceso:** proteger las funciones del sistema mediante autenticación, permisos por rol, validación de datos y registro de operaciones relevantes[cite: 12].
* **Facilitar el seguimiento operativo:** proporcionar una vista de las rentas y las actividades de entrega y recolección programadas, con el propósito de mejorar la organización diaria del negocio[cite: 12, 13].

---

### 3.2 Alcances del proyecto[cite: 13]

El proyecto comprende el análisis, diseño, desarrollo, integración y prueba de una primera versión funcional de **RentFlow Systems**[cite: 13]. Esta versión incluirá los siguientes módulos:

* **Autenticación y control de acceso:** permitirá iniciar sesión con credenciales y limitar las funciones disponibles según el perfil del usuario[cite: 13].
* **Gestión de clientes:** permitirá registrar y consultar la información necesaria para administrar las operaciones de renta[cite: 13].
* **Catálogo e inventario:** permitirá administrar los artículos disponibles, sus categorías, cantidades físicas y precios de renta[cite: 13].
* **Gestión de rentas y disponibilidad:** permitirá registrar solicitudes de renta con sus fechas, horarios, artículos y cantidades, así como verificar la disponibilidad antes de confirmar la operación[cite: 13].
* **Panel de control operativo:** mostrará información relevante de las rentas y las actividades de entrega y recolección programadas[cite: 13].
* **Seguridad y trazabilidad:** incorporará controles de acceso y registros de operaciones relevantes para facilitar la revisión de cambios dentro del sistema[cite: 13].
* **Interfaz responsiva:** permitirá utilizar las funciones principales desde computadoras, tabletas y teléfonos móviles mediante un navegador web[cite: 13].

El desarrollo priorizará las funciones esenciales para validar el funcionamiento del sistema en un negocio piloto[cite: 13, 14]. Las funcionalidades adicionales se evaluarán de acuerdo con el tiempo disponible y las necesidades identificadas durante las pruebas[cite: 14].

---

### 3.3 Limitaciones[cite: 14]

Para mantener un alcance viable y concentrar los esfuerzos en las funciones principales, se establecen las siguientes limitaciones para la primera versión:

* **Facturación fiscal:** el sistema no generará facturas electrónicas CFDI ni realizará la integración fiscal con el Servicio de Administración Tributaria (SAT)[cite: 14].
* **Pagos electrónicos:** no se integrarán pasarelas de pago ni procesamiento de cobros en línea[cite: 14]. Los pagos se gestionarán fuera del sistema[cite: 14].
* **Funcionamiento sin conexión:** la aplicación requerirá acceso al servidor mediante una conexión de red[cite: 14]. La primera versión no permitirá confirmar ni administrar rentas cuando el servidor no esté disponible[cite: 14].
* **Aplicaciones nativas:** no se desarrollarán aplicaciones independientes para Android o iOS; el acceso se realizará mediante una aplicación web responsiva[cite: 14].
* **Escalabilidad comercial:** la primera versión se enfocará en validar las operaciones de un negocio piloto[cite: 14]. La adaptación para ofrecer el sistema como servicio a múltiples negocios requerirá un análisis y desarrollo adicionales[cite: 14].
* **Funciones adicionales:** las integraciones externas y las herramientas avanzadas de administración se considerarán fuera del alcance inicial, salvo que el equipo determine que son indispensables y cuenta con tiempo suficiente para implementarlas y probarlas[cite: 14].

---

### 3.4 Producto mínimo viable (MVP)[cite: 15]

El Producto Mínimo Viable de **RentFlow Systems** estará compuesto por las funciones indispensables para demostrar que el sistema puede apoyar la administración cotidiana de un negocio de arrendamiento de mobiliario:[cite: 15]

1. **Inicio de sesión y permisos:** autenticación de usuarios y restricción de funciones según el rol asignado[cite: 15].
2. **Gestión de clientes:** registro y consulta de los datos básicos de los clientes[cite: 15].
3. **Catálogo de inventario:** consulta de artículos, agregar/dar de alta artículos, cantidades disponibles físicamente y precios de renta[cite: 15].
4. **Registro y validación de rentas:** captura del cliente, fecha, horario, artículos y cantidades solicitadas, con una validación de disponibilidad ejecutada en el servidor antes de confirmar la operación[cite: 15].
5. **Panel operativo:** consulta de las rentas y de las entregas y recolecciones programadas para el día[cite: 15].
6. **Controles básicos de seguridad:** validación de entradas, protección de rutas y permisos, almacenamiento seguro de contraseñas y manejo adecuado de errores[cite: 15].

El MVP se considerará funcional cuando permita completar estos procesos de manera integrada y superar pruebas que comprueben la consistencia del inventario, la correcta aplicación de permisos y la prevención de reservaciones que excedan las existencias disponibles[cite: 15].
## CAPÍTULO IV. REQUISITOS DEL SISTEMA Y LÓGICA DE NEGOCIO[cite: 16]

### 4.1 Requisitos funcionales (RF)[cite: 16]

Los requisitos funcionales describen las operaciones que **RentFlow Systems** deberá realizar para apoyar la administración de un negocio de arrendamiento de mobiliario para eventos[cite: 16]. Cada requisito establece una función verificable que servirá como referencia durante el desarrollo y las pruebas del sistema[cite: 16].

* **RF-01: Autenticación de usuarios.** El sistema deberá permitir que los usuarios registrados inicien sesión mediante sus credenciales[cite: 16]. El servidor validará la identidad del usuario y gestionará el acceso a las funciones protegidas[cite: 16].
* **RF-02: Control de acceso por roles.** El sistema deberá restringir las operaciones disponibles según los permisos asignados a cada usuario[cite: 16]. La autorización deberá comprobarse en el backend, además de adaptar la interfaz a los permisos correspondientes[cite: 16].
* **RF-03: Gestión de clientes.** El sistema deberá permitir registrar y consultar la información básica de los clientes necesaria para administrar las rentas[cite: 16].
* **RF-04: Gestión del catálogo e inventario.** El sistema deberá permitir a los usuarios autorizados registrar y actualizar artículos, categorías, precios de renta y cantidades físicas disponibles[cite: 16].
* **RF-05: Registro de rentas.** El sistema deberá permitir registrar una renta asociada a un cliente, incluyendo la fecha, las horas de inicio y fin, los artículos solicitados y las cantidades correspondientes[cite: 16, 17].
* **RF-06: Validación de intervalos de tiempo.** El sistema deberá comprobar que la hora de finalización sea posterior a la hora de inicio y que los intervalos registrados sean válidos para la operación solicitada[cite: 17].
* **RF-07: Validación de disponibilidad de inventario.** Antes de confirmar una renta, el servidor deberá calcular las cantidades comprometidas durante los intervalos que se traslapen con la nueva solicitud[cite: 17]. La operación deberá rechazarse cuando la cantidad solicitada supere el inventario disponible[cite: 17].
* **RF-08: Control de operaciones concurrentes.** El sistema deberá proteger la confirmación de rentas frente a solicitudes simultáneas que puedan comprometer las mismas existencias[cite: 17]. Para ello, se utilizarán transacciones y mecanismos de concurrencia adecuados en la base de datos[cite: 17].
* **RF-09: Panel operativo.** El sistema deberá mostrar las rentas y las actividades de entrega y recolección programadas para la fecha seleccionada, facilitando la organización de las operaciones diarias[cite: 17].
* **RF-10: Historial y trazabilidad.** El sistema deberá conservar información relevante de las operaciones realizadas, como el usuario responsable, la acción y la fecha y hora del registro, de acuerdo con los permisos y las necesidades de auditoría[cite: 17].

---

### 4.2 Requisitos no funcionales (RNF)[cite: 17]

Los requisitos no funcionales establecen las condiciones de calidad, seguridad, rendimiento y mantenimiento que deberá cumplir el sistema[cite: 17, 18].

* **RNF-01: Seguridad de las credenciales.** Las contraseñas deberán almacenarse mediante un algoritmo de hash diseñado para contraseñas, como bcrypt o Argon2, con parámetros de seguridad adecuados[cite: 18]. No deberán almacenarse en texto plano[cite: 18].
* **RNF-02: Validación de entradas.** El backend deberá validar los datos recibidos antes de procesarlos o almacenarlos[cite: 18]. Las validaciones del frontend tendrán una función complementaria y no sustituirán las comprobaciones del servidor[cite: 18].
* **RNF-03: Protección de la base de datos.** Las consultas deberán utilizar parámetros o mecanismos equivalentes que eviten la incorporación directa de datos del usuario en instrucciones SQL[cite: 18]. También se deberán aplicar controles apropiados para reducir riesgos de inyección y acceso no autorizado[cite: 18].
* **RNF-04: Integridad transaccional.** Las operaciones que modifiquen información relacionada con una renta deberán utilizar transacciones cuando corresponda[cite: 18]. MySQL utilizará InnoDB y mecanismos de control de concurrencia adecuados para mantener la consistencia de los datos[cite: 18].
* **RNF-05: Arquitectura desacoplada.** La aplicación deberá separar la interfaz desarrollada en Angular de la API desarrollada con Node.js y Express[cite: 18]. La comunicación entre ambas capas utilizará solicitudes HTTP y datos estructurados, principalmente en formato JSON[cite: 18].
* **RNF-06: Diseño responsivo.** La interfaz deberá adaptarse a diferentes tamaños de pantalla, permitiendo utilizar las funciones principales desde computadoras, tabletas y teléfonos móviles[cite: 18].
* **RNF-07: Gestión de errores.** El sistema deberá informar al usuario cuando una operación no pueda completarse y evitar que los mensajes de error expongan contraseñas, consultas SQL, credenciales u otros detalles internos[cite: 19].
* **RNF-08: Rendimiento verificable.** El sistema deberá responder oportunamente a las consultas de disponibilidad[cite: 19]. El tiempo de respuesta se medirá mediante pruebas bajo condiciones documentadas y se utilizará como referencia para identificar oportunidades de optimización[cite: 19].
* **RNF-09: Control de acceso y sesiones.** Las funciones protegidas deberán requerir una sesión válida y permisos suficientes[cite: 19]. La implementación deberá considerar la expiración de las sesiones, el cierre de sesión y el almacenamiento seguro de las credenciales de sesión[cite: 19].
* **RNF-10: Mantenibilidad.** El código deberá organizarse por módulos y responsabilidades, con nombres consistentes, control de versiones y documentación suficiente para facilitar su integración y mantenimiento[cite: 19].

---

### 4.3 Historias de usuario destacadas[cite: 19]

* **HU-01 (Empleado operativo):** Como empleado operativo, quiero consultar la disponibilidad de los artículos para una fecha y un intervalo horario determinados, con el fin de registrar rentas sin comprometer cantidades que el negocio no tiene disponibles[cite: 19].
* **HU-02 (Administrador):** Como administrador del negocio, quiero gestionar el catálogo de artículos, sus cantidades y sus precios de renta, para mantener actualizada la información utilizada en las operaciones[cite: 19].
* **HU-03 (Empleado operativo):** Como empleado operativo, quiero registrar los datos de un cliente y asociarlos con una renta, para mantener organizada la información de cada operación[cite: 20].
* **HU-04 (Administrador):** Como administrador, quiero consultar las rentas y las actividades de entrega y recolección programadas, para organizar el trabajo diario del negocio[cite: 20].
* **HU-05 (Usuario autorizado):** Como usuario autorizado, quiero que las operaciones importantes queden registradas con información de seguimiento, para facilitar la revisión del historial y la identificación de cambios relevantes[cite: 20].
* **HU-06 (Usuario del sistema):** Como usuario, quiero recibir mensajes claros cuando una solicitud no pueda completarse, para comprender el problema y corregir los datos cuando sea necesario[cite: 20].
## CAPÍTULO V. ANÁLISIS DE RIESGOS[cite: 21]

### 5.1 Matriz de Riesgos del Sistema[cite: 21]

Basado en la evaluación técnica, de equipo y externa del proyecto, tomando como referencia estándares de control de proyectos de software, se ha elaborado la siguiente matriz de riesgos (15 elementos críticos)[cite: 21]. Cada riesgo es evaluado en función de su Probabilidad (P) y su Impacto (I) en una escala del 1 al 5[cite: 21]. El Nivel de Riesgo final se obtiene multiplicando ambos factores (NIVEL = P × I)[cite: 21, 22].

| ID | RIESGO | P | I | NIVEL | CONSECUENCIA | SOLUCIÓN / RESPUESTA (MITIGACIÓN) |
| :---: | :--- | :---: | :---: | :---: | :--- | :--- |
| **R1** | Salida repentina de un integrante del equipo de desarrollo.[cite: 22] | 3 | 5 | **15** | Retraso general del proyecto por pérdida de conocimiento técnico y sobrecarga de trabajo.[cite: 22] | Documentar los avances, utilizar un repositorio compartido y distribuir el conocimiento de las funciones críticas.[cite: 22] |
| **R2** | Reservas simultáneas que excedan el inventario[cite: 22] | 3 | 5 | **15** | Compromiso de más artículos de los disponibles y posibles incumplimientos con clientes.[cite: 22] | Implementar validación en el servidor, transacciones y mecanismos de control de concurrencia en MySQL; realizar pruebas con solicitudes simultáneas.[cite: 22] |
| **R3** | Caída del servidor Node.js por sobrecarga o errores fatales (Crash).[cite: 22] | 2 | 4 | **8** | Interrupción temporal del registro y consulta de rentas.[cite: 22] | Implementar manejo centralizado de errores, registrar fallos relevantes y documentar el procedimiento para reiniciar y recuperar el servicio.[cite: 22] |
| **R4** | Vulnerabilidad de seguridad por robo del Token JWT.[cite: 22] | 2 | 5 | **10** | Acceso no autorizado a módulos críticos del Administrador o Super Administrador.[cite: 22] | Configurar el JWT con tiempo de expiración corto (8 horas) y almacenar en HttpOnly cookies protegidas.[cite: 22] |
| **R5** | Pérdida de conectividad o indisponibilidad del servidor[cite: 22, 23] | 4 | 3 | **12** | Imposibilidad temporal de consultar disponibilidad o confirmar rentas.[cite: 23] | Mostrar mensajes claros, evitar confirmar operaciones sin respuesta del servidor y establecer un procedimiento para recuperar la conectividad.[cite: 23] |
| **R6** | Errores en validación de fechas por cambios de zona horaria.[cite: 23] | 3 | 4 | **12** | Cálculos incorrectos de disponibilidad o aceptación de reservas incompatibles.[cite: 23] | Definir una convención consistente para almacenar y procesar fechas y horas, considerar la zona horaria del negocio y probar límites de intervalos.[cite: 23] |
| **R7** | Retraso en la integración Frontend/Backend por errores de CORS.[cite: 23] | 4 | 2 | **8** | Errores al consultar o registrar información desde la interfaz.[cite: 23] | Definir contratos de API, estandarizar las respuestas JSON y configurar CORS de forma explícita para los orígenes autorizados.[cite: 23] |
| **R8** | Pérdida o corrupción de la base de datos[cite: 23] | 1 | 5 | **5** | Pérdida de información de clientes, inventario e historial de rentas.[cite: 23] | Realizar respaldos periódicos, proteger su acceso y verificar mediante pruebas que puedan restaurarse correctamente.[cite: 23] |
| **R9** | Lentitud del algoritmo al crecer enormemente el historial de rentas.[cite: 23] | 4 | 3 | **12** | Mayor tiempo de respuesta en búsquedas y validaciones de disponibilidad.[cite: 23] | Medir las consultas, utilizar índices adecuados y optimizar las operaciones con base en los resultados de las pruebas.[cite: 23] |
| **R10** | Captura incorrecta de datos evadiendo validaciones.[cite: 24] | 3 | 3 | **9** | Dificultades de contacto, errores de captura o registros inconsistentes.[cite: 24] | Validar los datos en el frontend y el backend, establecer campos obligatorios justificados y mostrar mensajes comprensibles.[cite: 24] |
| **R11** | Desbordamiento del disco por exceso de Logs inmutables acumulados.[cite: 24] | 2 | 2 | **4** | Aumento del uso de almacenamiento y posible afectación del servicio.[cite: 24] | Registrar únicamente la información necesaria, definir políticas de conservación y revisar periódicamente el espacio disponible.[cite: 24] |
| **R12** | Mala adaptación de la interfaz al operar desde celulares.[cite: 24] | 3 | 3 | **9** | Dificultad para consultar información o registrar operaciones fuera del escritorio.[cite: 24] | Probar las vistas en diferentes tamaños de pantalla y priorizar la accesibilidad de las funciones principales.[cite: 24] |
| **R13** | Regresión funcional (romper algo que servía) tras una actualización.[cite: 24] | 3 | 4 | **12** | Fallos en funciones previamente operativas.[cite: 24] | Utilizar control de versiones, revisar cambios, mantener una versión funcional y ejecutar pruebas de regresión antes de integrar modificaciones.[cite: 24] |
| **R14** | Incompatibilidad de variables JSON entre Angular y Node.js.[cite: 24] | 3 | 3 | **9** | Errores de integración y retrasos en el desarrollo.[cite: 24] | Documentar los endpoints, definir estructuras de datos compartidas y realizar pruebas de integración entre frontend y backend.[cite: 24, 25] |
| **R15** | Sobrecarga de trabajo o distribución desigual de tareas[cite: 25] | 2 | 4 | **8** | Retrasos, disminución de la calidad y concentración de conocimiento en una sola persona.[cite: 25] | Asignar responsabilidades claras, revisar avances periódicamente y redistribuir tareas cuando se detecten bloqueos o cargas desiguales.[cite: 25] |

Los riesgos con niveles más altos deberán recibir atención prioritaria[cite: 25]. En particular, se consideran críticos los relacionados con la consistencia del inventario ante operaciones simultáneas, el acceso no autorizado y la ausencia de integrantes responsables de funciones esenciales[cite: 25].

Los riesgos relacionados con la integración, las fechas, la conectividad y las pruebas también deberán atenderse durante las primeras etapas, ya que pueden afectar varias funciones al mismo tiempo[cite: 25].

El equipo revisará la matriz periódicamente y actualizará la probabilidad, el impacto y las medidas de mitigación según los avances del proyecto[cite: 25]. Cuando ocurra un problema, se documentará su causa, la medida aplicada y el resultado obtenido, con el fin de reducir la posibilidad de que vuelva a presentarse[cite: 25].
## CAPÍTULO VI. METODOLOGÍA Y ROLES DEL EQUIPO[cite: 26]

### 6.1 Elección y Justificación de la Metodología de Desarrollo[cite: 26]

Para el desarrollo de **RentFlow Systems** se utilizará un enfoque ágil basado en Scrum, adaptado al tamaño del equipo, al alcance del proyecto y al tiempo disponible[cite: 26]. Esta metodología permitirá organizar el trabajo en iteraciones, revisar los avances de forma periódica y ajustar las prioridades cuando se identifiquen problemas o cambios en los requisitos[cite: 26].

La elección de este enfoque se fundamenta en los siguientes aspectos:[cite: 26]

* **Desarrollo incremental:** el sistema se construirá por etapas, priorizando las funciones esenciales del producto mínimo viable[cite: 26]. Esto permitirá disponer de versiones parciales que puedan probarse antes de completar todos los módulos[cite: 26].
* **Adaptación a los requisitos:** las reglas de disponibilidad, la gestión de rentas y los controles de seguridad podrán revisarse a partir de los resultados de las pruebas y de las necesidades identificadas durante el desarrollo[cite: 26].
* **Integración progresiva:** la interfaz Angular, la API de Node.js y la base de datos MySQL se integrarán desde las primeras etapas para detectar incompatibilidades antes de la fase final[cite: 26].
* **Seguimiento del trabajo:** las tareas se organizarán en un tablero compartido, con responsables, prioridades y criterios de aceptación[cite: 26]. El equipo revisará periódicamente el avance y los obstáculos[cite: 26].
* **Control de calidad:** cada incremento deberá probarse antes de integrarse con el resto del sistema, reduciendo el riesgo de acumular errores hasta las últimas semanas[cite: 26, 27].

Se propone trabajar en iteraciones de aproximadamente dos semanas[cite: 27]. La duración y las actividades de cada iteración podrán ajustarse según las fechas académicas y los avances reales del equipo[cite: 27]. Las reuniones de seguimiento serán breves y se realizarán con una frecuencia que resulte viable para todos los integrantes[cite: 27].

---

### 6.2 Roles, responsabilidades y plan de contingencia del equipo[cite: 27]

Las responsabilidades se distribuirán de acuerdo con las funciones principales de cada integrante[cite: 27]. Aunque cada persona tendrá un área prioritaria, el equipo compartirá la documentación, los estándares de desarrollo y el conocimiento necesario para facilitar la integración y responder ante posibles ausencias[cite: 27].

#### Melany Elena de los Angeles Landeros Fernández — *Líder de proyecto y coordinación*[cite: 27]

**Responsabilidades:**[cite: 27]

* Coordinar las actividades y dar seguimiento al avance general del proyecto[cite: 27].
* Organizar y priorizar las tareas pendientes junto con el equipo[cite: 27].
* Facilitar la comunicación entre las áreas de frontend, backend y base de datos[cite: 27].
* Supervisar que las funciones desarrolladas correspondan con los requisitos y los criterios de aceptación[cite: 27].
* Coordinar la documentación técnica y preparar las revisiones de avance[cite: 28].

**Plan de contingencia:** si se presenta una ausencia o sobrecarga de trabajo, las actividades de seguimiento y documentación se distribuirán entre los integrantes disponibles[cite: 28]. Las decisiones técnicas se revisarán de manera colaborativa para evitar que el proyecto dependa de una sola persona[cite: 28]. En caso de necesitar la presencia de la líder, Javier es el representante y voz[cite: 28].

#### Diego Casio — *Desarrollo frontend (Angular)*[cite: 28]

**Responsabilidades:**[cite: 28]

* Desarrollar las vistas y componentes de la interfaz mediante Angular y TypeScript[cite: 28].
* Implementar los formularios, las validaciones de entrada y la navegación entre módulos[cite: 28].
* Adaptar la interfaz a computadoras, tabletas y teléfonos móviles[cite: 28].
* Integrar los componentes con la API REST y presentar adecuadamente los resultados y errores[cite: 28].
* Aplicar los controles de navegación de la interfaz según los permisos del usuario, sin sustituir la autorización del backend[cite: 28].

**Plan de contingencia:** mantener el código actualizado en el repositorio compartido, documentar los componentes principales y definir convenciones de desarrollo que permitan a otro integrante corregir errores o realizar ajustes prioritarios[cite: 28].

#### Gabriel — *Desarrollo backend (Node.js y Express)*[cite: 28]

**Responsabilidades:**[cite: 28]

* Diseñar e implementar los endpoints de la API REST[cite: 29].
* Desarrollar las reglas de negocio para clientes, inventario y rentas[cite: 29].
* Implementar la autenticación, la autorización y las validaciones del servidor[cite: 29].
* Coordinar con el responsable de la base de datos las consultas y transacciones necesarias[cite: 29].
* Desarrollar y probar la validación de disponibilidad, incluyendo el comportamiento ante solicitudes simultáneas[cite: 29].

**Plan de contingencia:** organizar el código por módulos y documentar los endpoints, las estructuras de datos y las reglas de negocio[cite: 29]. Si se presenta una ausencia, otro integrante podrá continuar las tareas prioritarias con apoyo de esa documentación[cite: 29].

#### Javier Saucedo — *Diseño y administración de la base de datos (MySQL)*[cite: 29]

**Responsabilidades:**[cite: 29]

* Diseñar el modelo entidad-relación y la estructura de las tablas[cite: 29].
* Definir las relaciones, las restricciones de integridad y los índices necesarios[cite: 29].
* Preparar los scripts de creación y actualización de la base de datos[cite: 29].
* Colaborar en el diseño de las transacciones y los mecanismos de concurrencia para proteger la disponibilidad del inventario[cite: 29].
* Apoyar las pruebas de consistencia de datos, las consultas de disponibilidad y los procedimientos de respaldo[cite: 29].

**Plan de contingencia:** mantener los scripts, el modelo de datos y el diccionario de datos en el repositorio compartido[cite: 29]. Documentar las modificaciones del esquema para que otro integrante pueda consultarlas[cite: 29].

---

### 6.3 Coordinación e integración del equipo[cite: 30]

La integración se realizará de forma progresiva, utilizando un repositorio compartido y acuerdos comunes para el desarrollo[cite: 30].

Las actividades de coordinación incluirán:[cite: 30]

* Definir las estructuras de solicitudes y respuestas de la API antes de integrar las vistas[cite: 30].
* Establecer convenciones para nombres de variables, rutas, tablas y campos[cite: 30].
* Registrar las tareas pendientes, los bloqueos y las decisiones técnicas relevantes[cite: 30].
* Revisar los cambios antes de incorporarlos a la versión principal del proyecto[cite: 30].
* Ejecutar pruebas de integración después de modificar funciones que dependan de varias capas[cite: 30].
* Mantener una versión funcional del sistema durante el desarrollo, de manera que los errores puedan identificarse y corregirse oportunamente[cite: 30].
## CAPÍTULO VII. SEPARACIÓN DEL PROYECTO EN TAREAS (WBS), ESTIMACIÓN Y CRITERIOS DE TERMINADO[cite: 31]

Para asegurar la calidad y la integración de los componentes de **RentFlow Systems**, se establecen los siguientes criterios[cite: 31, 32]. Una tarea se considerará terminada cuando cumpla con las condiciones que le correspondan:[cite: 32]

* **Funcionalidad validada:** la implementación cumple con el requisito funcional o la historia de usuario asignada[cite: 32].
* **Revisión del código:** los cambios están guardados en el repositorio compartido y han sido revisados antes de integrarse a la rama principal[cite: 32].
* **Validación de datos:** las entradas se comprueban tanto en la interfaz como en el servidor cuando corresponda[cite: 32].
* **Seguridad:** las funciones protegidas comprueban los permisos necesarios y no exponen información sensible en respuestas o mensajes de error[cite: 32].
* **Integridad de datos:** las operaciones que lo requieran mantienen la consistencia de la base de datos y manejan correctamente los errores[cite: 32].
* **Pruebas:** se han ejecutado las pruebas pertinentes y se han corregido los errores críticos identificados[cite: 32].
* **Documentación:** se actualizan las instrucciones, los contratos de la API o el modelo de datos cuando la tarea introduce cambios relevantes[cite: 32].

---

### 7.2 Desglose de tareas, estimación y dependencias (WBS)[cite: 32]

El trabajo se divide en tareas concretas que permiten identificar responsables, estimar el esfuerzo, establecer dependencias y definir resultados verificables[cite: 32]. Las estimaciones se expresan en horas de trabajo del responsable principal y deberán ajustarse según el avance real del equipo[cite: 32].

| ID | Tarea / Descripción | RF / HU | Resp. | Esfuerzo | Dependencias | Criterio de Aceptación |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- |
| **T-01** | Entrega de Rúbrica y Arquitectura del Sistema (Documentación)[cite: 33] | Documentación[cite: 33] | Melany[cite: 33] | 15 HH[cite: 33] | Ninguna[cite: 33] | Requisitos, arquitectura, WBS y cronograma definidos y revisados por el equipo.[cite: 33] |
| **T-02** | Diseño del modelo entidad-relación y creación de la base de datos MySQL[cite: 33] | RF-03, RF-04, RF-05, RF-06, RF-10, RNF-04[cite: 33] | Javier[cite: 33] | 12 HH[cite: 33] | T-01[cite: 33] | Script SQL funcional con tablas, relaciones, llaves foráneas y tabla inmutable de Logs.[cite: 33] |
| **T-03** | Desarrollo de API REST con Node.js y Express[cite: 34, 35] | RF-01 a RF-10, RNF-03, RNF-04, RNF-05[cite: 34, 35] | Gabriel[cite: 34, 35] | 8 HH[cite: 34, 35] | T-02[cite: 34, 35] | La API conecta con MySQL y expone los endpoints requeridos con validaciones y manejo de errores.[cite: 34, 35] |
| **T-04** | Inicialización de Proyecto Angular 17+ y Ruteo Básico[cite: 34, 35] | RF-01, RF-02, RNF-05, RNF-06[cite: 34, 35] | Diego[cite: 34, 35] | 10 HH[cite: 34, 35] | T-01[cite: 34, 35] | Aplicación Angular estructurada, con navegación y comunicación HTTP preparadas.[cite: 34, 35, 36] |
| **T-05** | Implementación de autenticación y control de acceso[cite: 36] | RF-01, RF-02, RNF-02, RNF-03[cite: 36] | Gabriel[cite: 36] | 14 HH[cite: 36] | T-03, T-04[cite: 36] | El usuario puede iniciar sesión y solo me accede a las funciones autorizadas para su rol.[cite: 36] |
| **T-06** | Desarrollo de módulos de clientes e inventario[cite: 36] | RF-03, RF-04[cite: 36] | Gabriel, con apoyo de Diego y Javier[cite: 36] | 22 HH[cite: 36] | T-02, T-03, T-04[cite: 36] | Se pueden registrar, consultar, actualizar y administrar clientes y artículos del inventario.[cite: 36] |
| **T-07** | Desarrollo de rentas, disponibilidad y control de concurrencia[cite: 37] | RF-04, RF-07[cite: 37] | Gabriel y Javier[cite: 37] | 24 HH[cite: 37] | T-02, T-03, T-06[cite: 37] | El sistema valida la disponibilidad por intervalo y me evita confirmar reservas incompatibles mediante transacciones y controles en la base de datos.[cite: 37] |
| **T-08** | Desarrollo de formularios y vistas en Angular[cite: 37, 38] | HU-01, HU-03[cite: 37] | Diego y Melany[cite: 37] | 22 HH[cite: 37] | T-04, T-06, T-07[cite: 37] | Los formularios permiten capturar y consultar información, muestran errores de validación y me consumen correctamente la API.[cite: 38] |
| **T-09** | Desarrollo del tablero operativo[cite: 38] | — | Diego, con apoyo de Gabriel[cite: 38] | 12 HH[cite: 38] | T-07, T-08[cite: 38] | Se consulta la información de rentas y actividades de entrega y recolección programadas para el día.[cite: 38] |
| **T-10** | Integración y pruebas funcionales y de seguridad[cite: 38] | — | Todo el equipo[cite: 38] | 20 HH[cite: 38] | T-05, T-06, T-07, T-08, T-09[cite: 38] | Los módulos funcionan integrados y se me verifican los permisos, validaciones, disponibilidad y consistencia de los datos.[cite: 38, 39] |
| **T-11** | Corrección de errores, documentación y preparación de entrega[cite: 39] | — | Todo el equipo, coordinado por Melany[cite: 39] | 16 HH[cite: 39] | T-10[cite: 39] | Se me corrigen los errores prioritarios, se me actualiza la documentación y se me prepara la versión final.[cite: 39] |
## CAPÍTULO VIII. CRONOGRAMA DE TRABAJO Y PLANIFICACIÓN TEMPORAL[cite: 40]

### 8.1 Hitos Verificables y Secuencia Lógica[cite: 41]

Para asegurar que el proyecto se complete rigurosamente antes de la fecha límite (10 de diciembre de 2026), el ciclo de desarrollo se estructura en hitos verificables y sprints secuenciales[cite: 41]. La planificación comienza con la entrega oficial de este documento de rúbrica[cite: 41].

* **Hito 1: Entrega de Rúbrica y Documentación Técnica (13 de Octubre de 2026).** Entrega del diseño arquitectónico, WBS, wireframes y cronograma al docente[cite: 41].
* **Hito 2: Entrega de la Segunda Parte de la Rúbrica (29 de Octubre de 2026).** Documentación, maquetado y prototipado[cite: 41].
* **Hito 3: Núcleo Lógico y Seguridad (15 de Noviembre de 2026).** Autenticación JWT funcional y motor matemático de cruce de horarios operando en el Back-end[cite: 41].
* **Hito 4: Integración de Interfaz de Usuario (30 de Noviembre de 2026).** Front-end completamente maquetado, con formularios reactivos y consumiendo la API REST[cite: 41].
* **Hito 5: Pruebas de Estrés y Liberación Final (10 de Diciembre de 2026).** Pruebas de concurrencia (Overbooking) superadas y proyecto entregado[cite: 41].

---

### 8.2 Matriz Cronológica de Actividades y Fechas Realistas[cite: 41]

La siguiente tabla detalla el calendario estricto de ejecución, respetando la secuencia de dependencias lógicas del desarrollo:[cite: 41]

| Fase / Actividad | Responsable | Fecha de Inicio | Fecha de Finalización | Entregable del Hito |
| :--- | :---: | :---: | :---: | :--- |
| **Elaboración y Entrega de Rúbrica (Arquitectura)**[cite: 42] | Melany[cite: 42] | 05 / Oct / 2026[cite: 42] | **13 / Oct / 2026**[cite: 42] | Documentación Oficial Entregada (Hoy).[cite: 42] |
| **Diseño DDL de Base de Datos MySQL (3FN)**[cite: 42] | Javier[cite: 42] | 14 / Oct / 2026[cite: 42] | 29 / Oct / 2026[cite: 42] | Script SQL y Tablas creadas.[cite: 42] |
| **Maquetación de Catálogo y Formularios de Renta**[cite: 42] | Diego[cite: 42] | 10 / Oct / 2026[cite: 42] | 29 / Oct / 2026[cite: 42] | Vistas web interactivas (UI).[cite: 42] |
| **Setup Inicial Backend (Node) y Frontend (Angular)**[cite: 42] | Gabriel / Diego[cite: 42] | 21 / Oct / 2026[cite: 42] | 29 / Oct / 2026[cite: 42] | Repositorios funcionales en GitHub.[cite: 42] |
| **Programación del Motor de Solapamiento Horario**[cite: 42, 43] | Gabriel[cite: 42] | 03 / Nov / 2026[cite: 42] | 15 / Nov / 2026[cite: 42] | Algoritmo de disponibilidad operativo.[cite: 43] |
| **Integración API-Cliente, Dashboard y System Logs**[cite: 43] | Melany / Diego[cite: 43] | 23 / Nov / 2026[cite: 43] | 30 / Nov / 2026[cite: 43] | Sistema conectado y registrando datos.[cite: 43] |
| **Pruebas Integrales (E2E) y Corrección de Bugs**[cite: 43] | Melany / Javier[cite: 43] | 01 / Dic / 2026[cite: 43] | 07 / Dic / 2026[cite: 43] | Reporte de calidad de software (QA).[cite: 43] |
| **Entrega Final y Presentación del Proyecto**[cite: 43] | Todo el Equipo[cite: 43] | 08 / Dic / 2026[cite: 43] | **10 / Dic / 2026**[cite: 43] | Software Liberado Funcional (Deadline).[cite: 43] |
## CAPÍTULO IX. ESTRUCTURA WEB, ARQUITECTURA DEL SISTEMA Y TECNOLOGÍAS SELECCIONADAS[cite: 44]

### 9.1 Arquitectura del Sistema[cite: 44]

El sistema web "RentFlow Systems" está diseñado bajo un patrón arquitectónico desacoplado de tres capas principales (Presentación, Lógica de Negocio/API y Persistencia) siguiendo los principios del estilo REST (Representational State Transfer)[cite: 44]. Esta arquitectura promueve la escalabilidad, la mantenibilidad y la alta disponibilidad del software[cite: 44].

#### 9.1.1 Capa de Presentación (Frontend SPA)[cite: 44]

Desarrollada como una Aplicación de Página Única (Single Page Application - SPA) con Angular 17+[cite: 44]. La aplicación se ejecuta completamente en el navegador del cliente[cite: 44]. Al iniciar sesión, el cliente descarga el conjunto de componentes web estáticos e interactivos, realizando la navegación interna mediante el Angular Router sin necesidad de recargar la página completa en cada acción[cite: 44]. Toda la comunicación con el servidor de aplicaciones se realiza mediante peticiones HTTP/HTTPS asíncronas transmitiendo datos exclusivamente en formato JSON[cite: 44].

#### 9.1.2 Capa de Lógica de Negocio y API RESTful (Backend)[cite: 44]

Construida sobre Node.js y el framework Express.js[cite: 44]. Esta capa opera de forma totalmente desacoplada del diseño visual, funcionando como un servidor de API stateless (sin estado)[cite: 44, 45]. Sus responsabilidades incluyen:[cite: 45]

* Interceptar las peticiones de Angular mediante middlewares de seguridad (CORS, Helmet y verificación de JWT)[cite: 45].
* Ejecutar la autenticación y el control de acceso basado en roles (RBAC)[cite: 45].
* Procesar el motor matemático de validación horaria, evaluando la disponibilidad real de inventario mediante algoritmos de intersección de rangos de tiempo ([Hora_Inicio, Hora_Fin])[cite: 45].
* Garantizar el registro inmutable de movimientos en la bitácora de auditoría (System Logs)[cite: 45].

#### 9.1.3 Capa de Persistencia de Datos (Database Layer)[cite: 45]

Implementada en el sistema gestor de bases de datos relacionales MySQL utilizando el motor de almacenamiento transaccional InnoDB[cite: 45]. Garantiza el cumplimiento estricto de las propiedades ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)[cite: 45]. Esta capa gestiona la integridad referencial mediante llaves foráneas, optimiza la velocidad de búsqueda a través de índices compuestos y ejecuta transacciones pesimistas (bloqueo de filas mediante SELECT ... FOR UPDATE) para resolver problemas de concurrencia y overbooking en tiempo real[cite: 45].

#### 9.1.4 Patrón de Diseño Interno del Backend (Estructura N-Capas / MVC)[cite: 45]

Para mantener un código limpio y escalable, el servidor backend organiza su estructura interna bajo el patrón N-Capas:[cite: 45]

* **Capas de Rutas y Middlewares:** Mapean las URL de los endpoints y validan la autenticidad del token de sesión JWT y el rol del usuario antes de autorizar el paso[cite: 46].
* **Capa de Controladores (Controllers):** Capturan las solicitudes HTTP, sanitizan los parámetros de entrada y devuelven respuestas HTTP estandarizadas con sus respectivos códigos de estado (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 500 Internal Server Error)[cite: 46].
* **Capa de Servicios / Negocio (Services):** Contienen la lógica matemática pesada para el cálculo de disponibilidad de mobiliario y choque de horarios[cite: 46].
* **Capa de Acceso a Datos (DAOs / Repositories):** Ejecutan las consultas SQL preparadas (Prepared Statements) utilizando la alberca de conexiones (Connection Pool) de MySQL para evitar problemas de saturación o inyecciones SQL[cite: 46].

---

### 9.2 Estructura del Sitio y Mapa de Navegación (Site Structure)[cite: 46]

La arquitectura de información y flujo de navegación de RentFlow Systems está diseñada bajo una estructura jerárquica clara protegida por perfiles de usuario[cite: 46].

#### 9.2.1 Árbol de Rutas y Componentes (Angular SPA Routing)[cite: 46]

* **Zona Pública (Unauthenticated Zone):**[cite: 46]
  * `/login`: Pantalla de inicio de sesión[cite: 46]. Contiene el formulario reactivo de validación de credenciales[cite: 46]. Si el acceso es exitoso, almacena el JWT en sessionStorage y redirige automáticamente a la vista autorizada[cite: 46].
* **Zona Privada Común (Authenticated Zone):**[cite: 47]
  * `/dashboard`: Tablero principal operativo[cite: 47]. Renderiza tarjetas informativas con el resumen de inventario en almacén y una lista cronológica responsiva con las entregas y recolecciones programadas para el día actual[cite: 47].
* **Módulo Operativo de Rentas (Rol: Ayudante, Administrador, Super Administrador):**[cite: 47]
  * `/rentas/nueva`: Formulario dinámico de captura de reservas[cite: 47]. Incluye:
    * *Datos del Cliente:* Nombre completo, Teléfono (10 dígitos en formato RegEx), Correo y Dirección completa[cite: 47].
    * *Parámetros de Tiempo:* Selección de fecha (limitada dinámicamente a máximo 60 días desde el día actual), Hora de Inicio y Hora de Fin (validando Fin > Inicio)[cite: 47].
    * *Selección de Mobiliario:* Selector dinámico que consulta la disponibilidad en tiempo real a la API backend[cite: 47]. Si la cantidad solicitada excede la disponibilidad del bloque de horas, el sistema bloquea la confirmación y muestra una alerta indicando la restricción de stock[cite: 47].
  * `/rentas/historial`: Tabla responsiva con el listado de rentas activas, completadas o canceladas, con opciones de filtrado rápido por fecha y cliente[cite: 47].
* **Módulo de Gestión de Inventario (Rol: Administrador, Super Administrador):**[cite: 47]
  * `/catalogo`: Gestión del catálogo central de mobiliario[cite: 47]. Permite la visualización de tarjetas de artículos, filtro de búsqueda instantánea por nombre o categoría, y modal para dar de alta nuevo mobiliario o actualizar el stock físico total[cite: 47, 48].
* **Módulo de Auditoría y Seguridad (Rol exclusivo: Super Administrador):**[cite: 48]
  * `/admin/logs`: Vista exclusiva para la revisión de la bitácora inmutable de auditoría (System Logs)[cite: 48]. Presenta una tabla avanzada con paginación y búsqueda que detalla el ID de usuario, tipo de acción realizada, tabla afectada, marca de tiempo (Timestamp) e IP de origen[cite: 48].

#### 9.2.2 Mecanismos de Control de Navegación en Frontend[cite: 48]

* **Angular Route Guards (CanActivate):** Interceptores que evalúan la existencia y validez del JWT antes de permitir la activación de cualquier ruta privada[cite: 48]. Si un usuario no autenticado intenta escribir directamente la URL de una vista protegida, el Guard bloquea la navegación y lo redirige a /login[cite: 48].
* **Protección por Roles (RBAC Guard):** Evalúa el rol codificado dentro del JWT[cite: 48]. Si un usuario con rol "Ayudante" intenta acceder manualmente a /catalogo o /admin/logs, el sistema cancela el acceso, emite un mensaje de error y redirige al /dashboard[cite: 48].
* **HTTP Interceptor (AuthInterceptor):** Interceptor global que adjunta automáticamente el encabezado HTTP Authorization: Bearer \<token\> a cada solicitud enviada hacia la API REST[cite: 48].

---

### 9.3 Tecnologías Seleccionadas y Justificación Técnica según Requisitos del Proyecto[cite: 48, 49]

La elección de las herramientas tecnológicas responde directamente a los Requisitos Funcionales (RF) y No Funcionales (RNF) definidos en la arquitectura de la solución:[cite: 49]

1. **Angular 17+ (TypeScript) — Framework Frontend SPA:**[cite: 49]
   * *Requisitos Atendidos:* RF-04, RF-07, RNF-06, RNF-07[cite: 49].
   * *Justificación Técnica:* Angular provee un entorno robusto y fuertemente tipado mediante TypeScript[cite: 49]. Sus Formularios Reactivos (`ReactiveFormsModule`) permiten construir validadores dinámicos y rigurosos en tiempo real para verificar que el número telefónico contenga exactamente 10 dígitos numéricos y el correo cumpla con el estándar RFC 5322 antes de efectuar peticiones al servidor[cite: 49]. Asimismo, el módulo de calendario permite aplicar filtros para deshabilitar fechas posteriores a los 60 días naturales desde el cliente[cite: 49].
2. **Node.js y Express.js — Entorno de Ejecución y Framework Backend:**[cite: 49]
   * *Requisitos Atendidos:* RF-01, RF-06, RNF-01, RNF-05[cite: 49].
   * *Justificación Técnica:* El modelo de E/S no bloqueante y orientado a eventos de Node.js es idóneo para un sistema con múltiples peticiones concurrentes de verificación de disponibilidad[cite: 49]. Combinado con Express.js, permite construir una API RESTful liviana capaz de resolver las consultas matemáticas de cruce de horarios en tiempos de respuesta inferiores a los 400 ms (RNF-01)[cite: 49].
3. **MySQL (Motor InnoDB) — Base de Datos Relacional y Control de Concurrencia:**[cite: 49, 50]
   * *Requisitos Atendidos:* RF-03, RF-06, RF-09, RNF-04[cite: 50].
   * *Justificación Técnica:* Como motor de base de datos relacional, MySQL con InnoDB provee transacciones seguras bajo estándares ACID[cite: 50]. Para prevenir el overbooking cuando dos ayudantes intentan reservar el mismo mobiliario exactamente en el mismo segundo, el sistema ejecuta bloqueos de fila pesimistas (`SELECT ... FOR UPDATE`), encolando las peticiones y garantizando que la disponibilidad calculada sea 100% precisa[cite: 50].
4. **JSON Web Tokens (JWT) y Bcrypt — Autenticación y Seguridad:**[cite: 50]
   * *Requisitos Atendidos:* RF-01, RF-02, RNF-02[cite: 50].
   * *Justificación Técnica:* Bcrypt aplica un algoritmo de encriptación unidireccional con un costo de salado (salt cost) de 10, asegurando la protección de las contraseñas contra ataques de fuerza bruta o diccionarios[cite: 50]. JWT habilita una autenticación stateless (sin sesión en servidor), lo que aligera la carga en la base de datos ya que el token contiene los datos firmados de identidad y rol del usuario[cite: 50].
5. **Tailwind CSS y HTML5/CSS3 — Maquetación y Diseño Responsivo:**[cite: 50]
   * *Requisitos Atendidos:* RNF-06[cite: 50].
   * *Justificación Técnica:* Permite diseñar una interfaz de usuario completamente limpia, moderna y responsiva[cite: 50]. Garantiza que el personal operativo pueda usar la plataforma cómodamente desde dispositivos móviles de pantalla pequeña (celulares/tablets) durante las entregas en campo o desde monitores de escritorio en mostrador[cite: 50].
6. **Git, GitHub y Gestor de Procesos PM2 — Control de Versiones y Disponibilidad:**[cite: 51]
   * *Requisitos Atendidos:* RNF-01, Mitigación de Riesgos R1, R3, R13[cite: 51].
   * *Justificación Técnica:* Git y GitHub posibilitan el desarrollo colaborativo distribuido por ramas, garantizando la preservación del código y evitando regresiones operativas[cite: 51]. PM2 me asegura que el servidor Node.js se mantenga activo en producción 24/7, reiniciando el servicio automáticamente en caso de errores fatales no contemplados[cite: 51].
## CAPÍTULO X. SELECCIÓN Y JUSTIFICACIÓN DE PATRONES DE DISEÑO[cite: 52]

### 10.1 Introducción a los Patrones de Diseño en la Arquitectura[cite: 52]

En la ingeniería de software, los patrones de diseño representan soluciones probadas, estandarizadas y reutilizables a problemas recurrentes en el diseño orientado a objetos y la arquitectura de sistemas[cite: 52]. Para el proyecto "RentFlow Systems", la selección de patrones no responde únicamente a criterios de estructuración limpia del código, sino a la necesidad de garantizar la mantenibilidad, escalabilidad, seguridad transaccional y el correcto manejo de la concurrencia en la gestión de inventarios por bloques de tiempo[cite: 52]. A continuación, se justifican los patrones seleccionados divididos en sus tres categorías fundamentales: Creacionales, Estructurales y de Comportamiento[cite: 52].

---

### 10.2 Patrones Creacionales (Creational Patterns)[cite: 52]

Los patrones creacionales abstraen el proceso de instanciación de objetos, asegurando que la creación de entidades en el sistema se realice de forma controlada, desacoplada y eficiente en el uso de recursos[cite: 53].

#### 10.2.1 Patrón Singleton (Instancia Única)[cite: 53]

* **Aplicación en el Sistema:** Gestión del Pool de Conexiones a MySQL (`database.js`) y Módulo de Configuración de Variables de Entorno en Node.js/Express[cite: 53].
* **Justificación basada en Necesidades de Creación y Manejo:** El acceso a la base de datos mediante un pool de conexiones requiere una única instancia compartida globalmente a nivel de servidor[cite: 53]. Si cada petición HTTP creara una nueva instancia de conexión a MySQL, el servidor agotaría rápidamente los puertos sockets y colapsaría por saturación de memoria[cite: 53]. Al implementar Singleton, se garantiza un punto centralizado de acceso a la base de datos que administra eficientemente la reutilización de conexiones, optimizando el rendimiento y evitando fugas de recursos[cite: 53].

#### 10.2.2 Patrón Factory Method (Método Fábrica)[cite: 53]

* **Aplicación en el Sistema:** Construcción estandarizada de Respuestas HTTP (`HttpResponseFactory`) y formateo de Data Transfer Objects (DTOs) en la API REST[cite: 53].
* **Justificación basada en Necesidades de Creación:** La API backend necesita enviar respuestas estandarizadas al cliente Angular bajo un formato unificado (código de estado, mensaje, payload de datos y timestamp)[cite: 53]. El patrón Factory Method encapsula la lógica de instanciación de respuestas exitosas (200 OK, 201 Created) y respuestas de error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 500 Internal Server Error)[cite: 53, 54]. Esto evita la duplicación de estructuras JSON a lo largo de todos los controladores y facilita la adición de nuevos tipos de respuesta sin modificar el código cliente[cite: 54].

---

### 10.3 Patrones Estructurales (Structural Patterns)[cite: 54]

Los patrones estructurales abordan la composición de clases y objetos para formar estructuras más complejas y flexibles, facilitando la integración de módulos heterogéneos[cite: 54].

#### 10.3.1 Patrón Facade (Fachada)[cite: 54]

* **Aplicación en el Sistema:** Servicio Centralizado de Procesamiento de Rentas (`RentaFacade` / `RentaService`) en el backend[cite: 54].
* **Justificación basada en Necesidades de Manejo y Complejidad:** El proceso de registrar una renta implica coordinar múltiples subsistemas complejos: verificación de identidad del cliente, ejecución del algoritmo matemático de solapamiento horario en MySQL, bloqueo de filas con transacciones pesimistas (`SELECT ... FOR UPDATE`), confirmación de reserva y generación silenciosa de la traza de auditoría en la bitácora de logs[cite: 54]. El patrón Facade ofrece una interfaz única y simplificada (`crearRenta()`) hacia los controladores, ocultando toda la complejidad subyacente y asegurando que las reglas de negocio se ejecuten en la secuencia correcta[cite: 54].

#### 10.3.2 Patrón Decorator (Decorador)[cite: 55]

* **Aplicación en el Sistema:** Tubería de Middlewares en Express.js y HTTP Interceptors en Angular[cite: 55].
* **Justificación basada en Necesidades de Comportamiento Dinámico:** Este patrón permite adjuntar responsabilidades y comportamientos adicionales a las peticiones HTTP sin alterar la lógica interna de los métodos controladores de negocio[cite: 55]. En el backend, los middlewares decoran la solicitud verificando tokens JWT, aplicando encabezados de seguridad con Helmet o validando el rol de usuario (RBAC)[cite: 55]. En el frontend, el `AuthInterceptor` decora cada petición saliente añadiendo dinámicamente el encabezado `Authorization: Bearer `, garantizando una separación limpia entre la lógica de presentación y la infraestructura de seguridad[cite: 55].

#### 10.3.3 Patrón Adapter (Adaptador)[cite: 55]

* **Aplicación en el Sistema:** Módulo de Normalización y Gestión de Fechas/Zonas Horarias (`DateAdapter`)[cite: 55].
* **Justificación basada en Necesidades de Manejo:** El motor de validación temporal requiere procesar e interpretar fechas strictly en estándar UTC para prevenir desfasamientos por cambios de zona horaria entre el cliente (Angular) y el servidor (MySQL)[cite: 55]. El patrón Adapter convierte las entradas heterogéneas de selectores de fecha en la interfaz unificada que requiere la base de datos, desacoplando el núcleo matemático de cualquier librería de utilidades de fecha externa (como Luxon o Day.js)[cite: 55].

---

### 10.4 Patrones de Comportamiento (Behavioral Patterns)[cite: 56]

Los patrones de comportamiento se centran en los algoritmos y la asignación de responsabilidades entre objetos, caracterizando el flujo de control y la comunicación en tiempo de ejecución[cite: 56].

#### 10.4.1 Patrón Strategy (Estrategia)[cite: 56]

* **Aplicación en el Sistema:** Motor Intercambiable de Algoritmos de Disponibilidad de Inventario (`DisponibilidadStrategy`)[cite: 56].
* **Justificación basada en Necesidades de Comportamiento:** El sistema puede evaluar la disponibilidad del mobiliario bajo diferentes contextos operativos: validación estándar por intersección de rangos de horas ([Hora_Inicio, Hora_Fin]), validación restrictiva por mantenimiento preventivo o validaciones especiales para eventos de larga duración[cite: 56]. Al aplicar Strategy, cada algoritmo se encapsula en una clase independiente que implementa una interfaz común, permitiendo al sistema seleccionar e intercambiar la estrategia de cálculo adecuada dinámicamente en tiempo de ejecución sin modificar el flujo principal[cite: 56].

#### 10.4.2 Patrón Observer (Observador / Pub-Sub)[cite: 56]

* **Aplicación en el Sistema:** Programación Reactiva mediante RxJS (`Observables`, `BehaviorSubject`) en Angular 17+[cite: 56].
* **Justificación basada en Necesidades de Comportamiento en la Interfaz:** La capa de usuario requiere actualizar componentes visuales en tiempo real cuando ocurre un cambio de estado en la aplicación[cite: 56]. Mediante Observer, el servicio de autenticación mantiene un `BehaviorSubject` con el estado del usuario activo[cite: 56, 57]. Componentes desacoplados como la barra de navegación, la tabla de disponibilidad y las alertas del Dashboard actúan como observadores que reaccionan de manera automática e instantánea ante el inicio/cierre de sesión o la actualización del catálogo, eliminando la necesidad de refrescar manualmente la vista[cite: 57].

#### 10.4.3 Patrón Chain of Responsibility (Cadena de Responsabilidad)[cite: 57]

* **Aplicación en el Sistema:** Tubería de Ejecución de Peticiones en el Servidor Express.js[cite: 57].
* **Justificación basada en Necesidades de Manejo y Seguridad:** La recepción de una solicitud en la API REST debe someterse a una secuencia rigurosa de validaciones antes de llegar al controlador final[cite: 57]. Con este patrón, la petición pasa a través de una cadena de eslabones independientes:[cite: 57]
  * Middleware CORS (Verificación de origen)[cite: 57].
  * Middleware de Autenticación (Validación del Token JWT)[cite: 57].
  * Middleware RBAC (Verificación de permisos según el rol)[cite: 57].
  * Middleware de Sanitización de Datos (Prevención de SQLi/XSS)[cite: 57].

Cada eslabón procesa la solicitud y decide si la aprueba y la pasa al siguiente nodo o si interrumpe la ejecución retornando un código de error inmediato (401 Unauthorized / 403 Forbidden)[cite: 57]. Esto garantiza un flujo seguro, modular y fácilmente extensible[cite: 57].
## CAPÍTULO XI. ARQUITECTURA DE INTERFAZ DE USUARIO Y DESCRIPCIÓN DE PANTALLAS PRINCIPALES[cite: 58]

### 11.1 Orden Lógico de Navegación y Flujo de Usuario (User Flow)[cite: 58]

La arquitectura de interacción de "RentFlow Systems" se fundamenta en un mapa de navegación jerárquico y optimizado para la eficiencia operativa en mostrador y campo[cite: 58]. El flujo de usuario se organiza de acuerdo a la siguiente secuencia lógica:[cite: 58]

* **Autenticación y Control de Entrada (/login):** El usuario ingresa sus credenciales[cite: 58]. La API valida el rol y genera el JWT[cite: 58]. El sistema redirige automáticamente al usuario según sus privilegios (Super Administrador, Administrador o Empleado)[cite: 58].
* **Tablero Principal de Operaciones (/dashboard):** Constituye el punto de partida operativo[cite: 58]. Muestra la lista cronológica de entregas y recolecciones programadas para la jornada de la semana pero destacando las de ese día[cite: 58].
* **Flujo de Registro de Renta y Validación Temporal (/rentas/nueva):** Accesible directamente desde el menú principal o el Dashboard[cite: 58]. El operador selecciona los productos a rentar y su cantidad, después captura los datos del cliente, selecciona fecha/horario del evento y valida la disponibilidad real de inventario antes de confirmar[cite: 58].
* **Gestión de Inventario y Catálogo (/catalogo):** Exclusivo para Administrador y Super Administrador[cite: 58]. Permite revisar tarjetas de productos, buscar existencias y dar de alta nuevo mobiliario[cite: 58].
* **Historial y Estado de Reservas (/rentas/historial):** Permite consultar rentas pasadas, activas o canceladas, filtrando por cliente o intervalo de fechas[cite: 58, 59]. Exclusivo para Administrador y super Administrador[cite: 59].
* **Módulo de Auditoría de Seguridad (/admin/logs):** Exclusivo para Super Administrador[cite: 59]. Registra cada transacción de forma inmutable para auditorías internas[cite: 59].

---

### 11.2 Descripción Textual ESTRUCTURADA de Pantallas Principales[cite: 59]

A continuación se presenta la descripción puramente narrativa y técnica de la composición, secciones y elementos de cada una de las pantallas principales del sistema:[cite: 59]

#### 11.2.1 Pantalla 1: Inicio de Sesión (Login - /login)[cite: 59]

Esta pantalla sirve como la única puerta de acceso interna al sistema para los empleados[cite: 59]. Su diseño es minimalista y centrado en la usabilidad, respetando estrictamente el Safe Area superior en dispositivos móviles para no interferir con la Isla Dinámica o el Notch[cite: 59].

* **Encabezado Superior:** Presenta el logotipo y título institucional del sistema "RentFlow", acompañado de la etiqueta de acceso exclusivo[cite: 59].
* **Formulario Central de Autenticación:** Incluye un campo de gran tamaño para la captura del usuario o correo electrónico, un campo protegido para la contraseña y un botón de acción principal destacado para el inicio de sesión[cite: 59].
* **Restricciones de Negocio:** Al ser de uso operativo interno exclusivo, se omite deliberadamente cualquier opción, texto o enlace para "Registrarse" o "Crear cuenta"[cite: 59].

#### 11.2.2 Pantalla 2: Tablero Operativo Diario (Dashboard - /dashboard)[cite: 59]

Es la pantalla principal que visualizan los empleados tras autenticarse[cite: 59]. Está diseñada para ofrecer una vista inmediata de las tareas del día sin necesidad de navegación adicional[cite: 59].

* **Tareas de Hoy:** En primer plano y destacadas visualmente, se muestran las "Entregas de hoy" y "Recolecciones de hoy"[cite: 59]. Cada tarea detalla gráficamente la hora, el domicilio y un resumen del equipo a mover (ej. 40 sillas Tiffany)[cite: 59].
* **Agenda Semanal:** Un carrusel o lista desplazable inferior donde se pueden consultar los eventos programados para el resto de los días de la semana, clasificados por Entregas y Devoluciones[cite: 59].
* **Botón de Acción Principal:** Un botón flotante o superior destacado en color de acento verde para inicializar una "+ Nueva renta"[cite: 59].

#### 11.2.3 Pantalla 3: Catálogo y Selección de Mobiliario (Nueva Renta)[cite: 59]

Esta interfaz facilita la visualización del inventario y la agregación de productos a un nuevo pedido, integrando algoritmos de búsqueda predictiva[cite: 59].

* **Búsqueda Inteligente e Inclusiva:** Barra de búsqueda en tiempo real tolerante a errores ortográficos[cite: 59, 60]. Es case-insensitive (ignora mayúsculas/minúsculas), agnóstica a acentos (ej. "sillón" encuentra "sillon"), y funciona por subcadenas desde los primeros caracteres tecleados[cite: 60].
* **Filtros de Categorías (Chips):** Píldoras interactivas ubicadas debajo del buscador para filtrar instantáneamente por familias: [Todos], [Sillas], [Mesas], [Toldos], [Mantelería][cite: 60].
* **Catálogo Visual:** Cuadrículas de gran tamaño con la fotografía del mobiliario, nombre descriptivo y stock disponible, con acceso a la vista de detalle para seleccionar la cantidad y agregar al pedido[cite: 60].
* **Gestión de Inventario:** Exclusivamente para los perfiles de Administrador y Superadministrador, se habilita el botón y formulario para agregar nuevos productos al catálogo[cite: 60].

#### 11.2.4 Pantalla 4: Formulario de Pedido (Checkout)[cite: 60]

Vista encargada de capturar los datos logísticos y de contacto necesarios para formalizar la renta del equipo seleccionado[cite: 60].

* **Selectores de Fechas y Horarios:** Campos dinámicos para definir la "Fecha y Hora de Entrega" y "Fecha y Hora de Devolución", soportando la validación para rentas de un solo día (entrega y devolución en la misma fecha)[cite: 60].
* **Datos Obligatorios del Cliente:** Campos estrictos que solicitan "A nombre de quién está la renta", un número de Teléfono a 10 dígitos y la Dirección exacta de entrega[cite: 60].
* **Datos Opcionales y Resumen:** Un campo no obligatorio para el correo electrónico, acompañado de un panel lateral o inferior con el resumen total de la orden y el botón de confirmación[cite: 60].

#### 11.2.5 Pantalla 5: Sistema de Alertas y Conflicto de Horarios[cite: 60]

Módulo crítico de validación que se dispara al intentar confirmar una renta con horarios logísticos comprometidos[cite: 60].

* **Detección de Empalmes:** El sistema evalúa la agenda y lanza una alerta visual emergente (color naranja) si detecta un evento programado a la misma hora o una entrega a menos de 1 hora de diferencia[cite: 60].
* **Comportamiento No Bloqueante:** La alerta informa detalladamente del conflicto (ej. "Hay otra entrega a las 12:00 PM"), pero cede la decisión final al criterio humano del empleado, ofreciendo las opciones de "Cancelar / Modificar" o "Aceptar de todos modos"[cite: 60].

#### 11.2.6 Pantalla 6: Historial de Rentas (Vista Administrador)[cite: 60]

Vista dedicada a la consulta y seguimiento de las operaciones concluidas o pasadas, diseñada específicamente para el perfil de Administrador[cite: 60].

* **Registro de Rentas Pasadas:** Visualización estructurada de todo el historial de rentas realizadas[cite: 60].
* **Restricción de Privacidad:** El administrador tiene acceso a los datos generales de la operación, pero el sistema oculta deliberadamente qué empleado en específico realizó el registro de la renta[cite: 60, 61].

#### 11.2.7 Pantalla 7: Auditoría de Rentas y Logs (Vista Superadministrador)[cite: 61]

Módulo de control de máxima jerarquía que funciona como una herramienta de auditoría estricta, accesible únicamente para el Superadministrador[cite: 61].

* **Desglose Temporal Avanzado:** Visualización de todo el historial de rentas pasadas separadas y organizadas detalladamente por meses y días[cite: 61].
* **Trazabilidad y Auditoría Completa:** A diferencia del administrador regular, el Superadministrador puede visualizar la traza completa de la operación: el empleado exacto que registró la renta, el nombre completo a quien se realizó la reserva, la fecha exacta de captura y el número de teléfono del cliente[cite: 61].

---

### 11.3 Consideraciones de Diseño Responsivo (Desktop vs. Mobile)[cite: 61]

La interfaz de "RentFlow Systems" se adhiere al enfoque de maquetación adaptativa mediante breakpoints de Tailwind CSS, garantizando usabilidad en PC y movilidad en smartphones:[cite: 61]

#### 11.3.1 Versión para Computadora de Escritorio (Desktop 1080p+)[cite: 61]

* **Disposición Multicolumna:** Aprovecha el ancho de pantalla para desplegar la barra de navegación superior horizontal fija, paneles laterales de resumen y tablas con múltiples columnas de datos simultáneos[cite: 61].
* **Interacción por Teclado y Puntero:** Formularios optimizados para navegación fluida mediante la tecla Tab, botones de confirmación de alto contraste y modales flotantes emergentes[cite: 61].

#### 11.3.2 Versión para Dispositivos Móviles (Smartphones y Tablets)[cite: 61]

* **Menú Hamburguesa y Navegación Colapsable:** La barra superior se repliega en un botón de menú lateral (Drawer) para optimizar el espacio útil en pantalla[cite: 62].
* **Apilamiento Vertical (Stacking Layout):** Las tarjetas de resumen e inventario pasan de arreglos grid de 3 columnas a una sola columna vertical con scroll suave[cite: 62].
* **Tablas Responsivas con Tarjetas Desplegables:** En pantallas menores a 768px, las tablas complejas del Dashboard e Historial se transforman automáticamente en tarjetas individuales apiladas para evitar el desplazamiento horizontal incómodo[cite: 62].
* **Elementos Táctiles Amigables (Touch-Friendly):** Botones y selectores con un área de contacto mínima de 48x48 píxeles para facilitar la interacción con los dedos en campo[cite: 62].

---

### 11.4 Anotaciones Técnicas, Componentes e Interacciones[cite: 62]

Cada interfaz integra componentes reactivos específicos diseñados para prevenir errores de captura y asegurar la integridad de la base de datos:[cite: 62]

#### 11.4.1 Anotaciones en la Pantalla de Captura de Renta (`/rentas/nueva`)[cite: 62]

* **Anotación 1 (Validación de Teléfono):** El campo exige exactamente 10 dígitos mediante expresión regular (`^[0-9]{10}$`)[cite: 62]. En caso contrario, el botón de guardado permanece deshabilitado[cite: 62].
* **Anotación 2 (Restricción de Calendario a 60 Días):** El selector de fechas bloquea dinámicamente cualquier día posterior a `Fecha_Actual + 60 días`, enviando una alerta si el usuario intenta forzar la fecha[cite: 62].
* **Anotación 3 (Consulta Asíncrona en Tiempo Real):** Al modificar las horas de inicio o fin, Angular dispara una petición `GET /api/disponibilidad` que evalúa el stock real[cite: 62, 63]. Si el cálculo supera el almacén, los artículos insuficientes se resaltan con un mensaje de alerta[cite: 63].

#### 11.4.2 Anotaciones en la Pantalla de Bitácora (`/admin/logs`)[cite: 63]

* **Anotación 1 (Inmutabilidad Estricta):** La interfaz no cuenta con botones de edición (`UPDATE`) ni borrado (`DELETE`), reflejando la restricción de la base de datos[cite: 63].
* **Anotación 2 (Protección por Guard de Rutas):** Si un Ayudante conoce la URL `/admin/logs` e intenta navegar a ella, el `RBAC Guard` cancela la petición y redirige a `/dashboard`[cite: 63].
## CAPÍTULO XII. ESPECIFICACIÓN DE BÚSQUEDAS Y FILTROS AVANZADOS DEL SISTEMA[cite: 64]

### 12.1 Introducción y Objetivos del Módulo de Búsqueda[cite: 64]

En empresas dedicadas al arrendamiento de eventos, el catálogo de inventario suele crecer significativamente abarcando cientos de artículos distribuidos en diversas categorías como sillería, mesas, brincolines, inflables, mantelería, vajillas y estructuras[cite: 64]. Permitir que el personal operativo (ayudantes y administradores) tenga que desplazarse manualmente (mediante un desplazamiento prolongado o *scrolling*) para localizar un artículo específico resulta ineficiente, lento y propenso a errores durante la atención al cliente[cite: 64].

El módulo de búsquedas y filtros avanzados de "RentFlow Systems" tiene como objetivo principal proporcionar mecanismos de localización instantánea de productos tanto en el catálogo general como en el flujo activo de creación de rentas[cite: 64, 65]. Este sistema de filtrado multicriterio optimiza la experiencia de usuario (UX), reduce los tiempos de captura de pedidos a segundos y asegura que la selección de artículos considere estrictamente la disponibilidad real calculada por bloque de tiempo[cite: 65].

---

### 12.2 Búsqueda Avanzada y Filtros en el Catálogo Central de Inventario (/catalogo)[cite: 65]

En el módulo de gestión de inventario, accesible para Administradores y Super Administradores, se implementa un panel de control y búsqueda avanzada estructurado bajo las siguientes herramientas:[cite: 65]

#### 12.2.1 Campo de Búsqueda Predictiva e Instantánea[cite: 65]

* **Búsqueda por Texto Libre:** Permite ingresar cualquier coincidencia de caracteres referente al nombre del artículo, código/ID interno o descripción (por ejemplo, escribir "silla", "brincolín", "mantel", "toldo")[cite: 65]. La búsqueda opera de manera reactiva e instantánea conforme el usuario escribe[cite: 65].
* **Búsqueda con Tolerancia a Acentos y Mayúsculas/Minúsculas:** El motor de búsqueda aplica normalización de cadenas (insensible a acentos, diacríticos y caja de texto), permitiendo encontrar "brincolin" aunque en la base de datos esté registrado como "Brincolín"[cite: 65].

#### 12.2.2 Filtros Avanzados por Categorías de Mobiliario[cite: 65]

Para acotar rápidamente el universo de productos, el catálogo integra un selector de categorías principales mediante pestañas (*tabs*) o menú desplegable jerárquico:[cite: 66]

* **Sillería:** Sillas plegables de plástico, sillas acojinadas, sillas infantiles, sillas ejecutivas, taburetes y periqueras[cite: 66].
* **Mesas y Tablones:** Mesas rectangulares (tablones), mesas redondas, mesas de madera, mesas infantiles y mesas altas de bar[cite: 66].
* **Inflables y Brincolines:** Brincolines acuáticos, castillos inflables, brincolines de escaladora y juegos mecánicos ligeros[cite: 66].
* **Mantelería y Blancos:** Manteles redondos, manteles rectangulares, caminos de mesa, cubresillas, servilletas de tela y bambalinas[cite: 66].
* **Toldos, Carpas y Estructuras:** Toldos 3x3, carpas estructuradas 6x6, sombrillas de jardín y arcos para decoración[cite: 66].
* **Cristalería, Loza y Cristalería de Eventos:** Platos, vasos, copas, hieleras, chafers y menaje de banquetes[cite: 66].

#### 12.2.3 Filtros por Estado de Inventario y Disponibilidad Global[cite: 66]

* **Filtro por Stock Físico:** Permite conmutar entre tres vistas: "*Ver Todo el Catálogo*", "*Solo Artículos con Stock Disponible (>0)*" y "*Artículos Agotados / En Mantenimiento*"[cite: 66].
* **Filtro por Rango de Precios de Renta:** Permite establecer un límite mínimo y máximo de precio de arrendamiento por unidad/día para filtrar rápidamente productos que se adecúen al presupuesto del cliente[cite: 66].

#### 12.2.4 Ordenamiento Dinámico de Resultados[cite: 67]

El usuario puede reordenar la lista o grilla de resultados según los siguientes criterios:[cite: 67]

* Orden Alfabético (A - Z / Z - A)[cite: 67].
* Precio de Renta (Menor a Mayor / Mayor a Menor)[cite: 67].
* Mayor Stock Físico Disponible[cite: 67].
* Popularidad o Frecuencia de Renta[cite: 67].

---

### 12.3 Búsqueda Directa y Seleccionador Rápido en el Registro de Rentas (/rentas/nueva)[cite: 67]

El aspecto más crítico de la búsqueda se presenta durante el proceso de captura de un pedido en la vista `/rentas/nueva`[cite: 67]. Cuando el negocio cuenta con un catálogo extenso (brincolines, sillas, mesas, manteles, vajillas), el ayudante de mostrador necesita agregar múltiples elementos a la reserva de forma ágil sin perder tiempo deslizándose por toda la lista[cite: 67].

#### 12.3.1 Buscador Autocompletable con Selector Rápido (Combobox / Autocomplete Select)[cite: 67]

* **Mecanismo de Selección al Vuelo:** El formulario de captura incluye un componente de búsqueda con autocompletado en la cabecera del bloque de artículos[cite: 67]. Al escribir únicamente las primeras letras del producto (por ejemplo, "mante", "brinco" o "silla"), el sistema despliega de forma inmediata una lista emergente filtrada[cite: 67, 68].
* **Teclado y Selección Rápida:** El operador puede navegar por los resultados usando las flechas del teclado (Arriba/Abajo) y presionar la tecla *Enter* para seleccionar el artículo deseado al instante, sin necesidad de soltar el teclado o usar el ratón[cite: 68].

#### 12.3.2 Filtro por Categorías en Modal/Selector de Artículos[cite: 68]

* **Chips de Categoría de Acceso Rápido:** Si el usuario prefiere explorar por categoría dentro del modal de selección, se presentan botones o chips interactivos ("Sillas", "Mesas", "Brincolines", "Manteles")[cite: 68]. Al presionar un chip, la lista se reduce automáticamente a esa familia de productos[cite: 68].

#### 12.3.3 Indicador Dinámico de Disponibilidad Real por Bloque Horario[cite: 68]

Una característica fundamental de la búsqueda dentro del formulario de rentas es que cada resultado filtrado muestra en tiempo real su disponibilidad calculada para la fecha y bloque de horas especificado en el evento:[cite: 68]

* **Indicador Verde (Disponible):** Muestra la cantidad exactas de unidades disponibles para ese horario (por ejemplo: "*Brincolín Castillo — 2 unidades disponibles de 14:00 a 18:00 hrs*")[cite: 68].
* **Indicador Rojo / Deshabilitado (Agotado en ese Bloque):** Si el producto está agotado para el horario seleccionado por choque de rentas, el resultado aparece deshabilitado con la leyenda "*Sin stock en este horario*", evitando que el operador cometa el error de intentar reservarlo[cite: 68].

#### 12.3.4 Agregado Continuo y Ajuste de Cantidades[cite: 69]

* **Añadido Directo a la Renta:** Al seleccionar el producto buscado, se abre un pequeño control numérico (`+` / `-`) con foco automático para ingresar la cantidad deseada y un botón de "Añadir a la Reserva"[cite: 69].
* **Resumen Visual de Partidas:** Los productos agregados se van listando dinámicamente en una tabla inferior de cotización, permitiendo eliminar o modificar cantidades de forma individual antes de guardar la transacción[cite: 69].

---

### 12.4 Búsqueda y Filtros en el Historial de Rentas y Entregas (/rentas/historial y /dashboard)[cite: 69]

Para la gestión de seguimiento de pedidos, entregas y recolecciones, se integran filtros de localización operativa:[cite: 69]

1. **Búsqueda por Datos del Cliente:** Localización rápida de rentas ingresando el nombre del cliente, número de teléfono (10 dígitos) o correo electrónico[cite: 69].
2. **Filtro por Estado de la Renta:** Filtrado por estatus operativo: *Pendiente de Entrega*, *En Camino / En Evento*, *Recogido / Completado* y *Cancelado*[cite: 69].
3. **Filtro por Rango de Fechas:** Selector de fecha de evento o fecha de captura del contrato[cite: 69].

---

### 12.5 Anotaciones Técnicas de Implementación (Rendimiento y Optimización)[cite: 69]

Para garantizar que el motor de búsquedas opere con máxima fluidez y no ralentice el servidor ni el navegador, se aplican los siguientes patrones y técnicas de desarrollo:[cite: 69, 70]

#### 12.5.1 Control de Peticiones mediante Debounce Time (RxJS en Angular)[cite: 70]

En el campo de búsqueda de texto libre, se implementa el operador `debounceTime(300)` de RxJS[cite: 70]. Esto significa que el sistema espera 300 milisegundos después de que el usuario deja de teclear para emitir la solicitud de filtrado, evitando enviar peticiones HTTP innecesarias al servidor en cada pulsación de tecla[cite: 70].

#### 12.5.2 Indexación y Consultas Optimizadas en MySQL[cite: 70]

En la base de datos, las columnas `nombre`, `categoria` e `ID` de la tabla de productos cuentan con índices compuestos (`INDEX`)[cite: 70]. Las consultas de búsqueda utilizan sentencias preparadas con comodines optimizados (`LIKE ?%` o búsqueda de texto completo) para retornar respuestas en menos de 100 milisegundos[cite: 70].

#### 12.5.3 Filtrado Híbrido (Cliente / Servidor)[cite: 70]

Para el catálogo general cargado en la sesión de Angular, las búsquedas simples por texto libre y categoría se procesan localmente en la memoria del navegador usando transformaciones en tuberías de Angular (*Pipes*) para respuesta instantánea (0 ms)[cite: 70]. Las validaciones de disponibilidad temporal por horario se delegan al servidor Node.js mediante consultas asíncronas[cite: 70].
## CAPÍTULO XIII. MECANISMOS DE VALIDACIÓN DE INFORMACIÓN (FRONT-END Y BACK-END)[cite: 71, 72]

### 13.1 Introducción a la Estrategia de Doble Validación (Defense in Depth)[cite: 72]

En el desarrollo de aplicaciones web críticas como "RentFlow Systems", la integridad de los datos, la seguridad del sistema y la usabilidad dependen directamente de una estrategia de validación en dos capas (defensa en profundidad)[cite: 72]. La información capturada nunca debe ser procesada directamente sin antes someterse a controles estrictos tanto en el cliente (Front-end) como en el servidor (Back-end)[cite: 72].

La validación en el Front-end se enfoca en la experiencia de usuario (UX), ofreciendo retroalimentación inmediata, previniendo la captura de datos malformados y reduciendo el tráfico inútil hacia la red[cite: 72]. Por su parte, la validación en el Back-end constituye la barrera de seguridad infranqueable y no negociable; garantiza que, aunque un usuario malintencionado intente evadir la interfaz de usuario utilizando herramientas externas (como Postman, cURL o manipulación del DOM), el servidor rechace cualquier solicitud inconsistente, insegura o violatoria de las reglas de negocio[cite: 72].

---

### 13.2 Mecanismos de Validación en la Interfaz de Usuario (Front-End — Angular 17+)[cite: 72]

La capa de presentación implementa los módulos de Formularios Reactivos de Angular (`ReactiveFormsModule`), los cuales permiten un control riguroso, declarativo y en tiempo real del estado de cada campo antes de emitir cualquier petición HTTP[cite: 72].

#### 13.2.1 Campos y Datos Obligatorios (Required Fields)[cite: 73]

* **Implementación con Validadores de Angular:** Todos los campos esenciales en los formularios integran el validador estricto `Validators.required`[cite: 73].
* **Formulario de Registro de Renta (/rentas/nueva):** Se exige de manera obligatoria la captura de Nombre del Cliente, Teléfono a 10 dígitos, Correo Electrónico, Dirección completa del Evento, Fecha del Evento, Hora de Inicio, Hora de Fin y al menos un Artículo con cantidad mayor a cero[cite: 73].
* **Formulario de Catálogo (/catalogo):** Exige Nombre del Producto, Categoría, Precio de Renta Unitario y Stock Físico Inicial[cite: 73].
* **Retroalimentación Visual e Inhabilitación de Botones:** El botón de confirmación permanece deshabilitado (`[disabled]="form.invalid"`) mientras exista un solo campo obligatorio sin completar[cite: 73]. Si el usuario interactúa con un campo y lo deja vacío, se despliega un borde rojo y un mensaje de error explicativo (por ejemplo: "*El teléfono del cliente es un dato obligatorio*")[cite: 73].

#### 13.2.2 Controles de Formato de Entrada y Restricciones de Tipo[cite: 73]

* **Restricción por Atributos HTML5 y Angular Pipes:** Los campos de entrada restringen la captura de caracteres inválidos desde el teclado usando atributos como `type="tel"`, `type="email"`, `type="number"` y `min="1"`[cite: 73].
* **Restricción Dinámica de Calendario (Límite de 60 Días):** El selector de fechas (*Datepicker*) configura sus propiedades `[min]` y `[max]` dinámicamente[cite: 73]. La fecha mínima se fija en el día actual (`Fecha_Actual`) para evitar rentas en días pasados, y la fecha máxima se fija automáticamente en `Fecha_Actual` + 60 días naturales[cite: 73, 74]. Las fechas fuera de este rango aparecen inhabilitadas (grisadas) en el calendario visual[cite: 74].
* **Controles Numéricos para Existencias:** En la selección de productos, los campos numéricos impiden el ingreso de valores decimales, números negativos o letras, limitando el rango permitido entre 1 y la cantidad total en almacén[cite: 74].

#### 13.2.3 Validaciones Mediante Expresiones Regulares (RegEx Pattern Matching)[cite: 74]

Para asegurar que los datos coincidan exactamente con las estructuras de información requeridas, se aplican expresiones regulares mediante `Validators.pattern()`:[cite: 74]

* **Teléfono del Cliente:** Expresión Regular `^[0-9]{10}$`[cite: 74]. Exige estrictamente una secuencia de 10 dígitos numéricos continuos (formato estándar de telefonía en México), rechazando letras, espacios, guiones o códigos de extensión incompletos[cite: 74].
* **Correo Electrónico:** Expresión Regular `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`[cite: 74]. Revisa que la cadena cumpla con el estándar RFC 5322, requiriendo un usuario, el símbolo '@', un dominio y una extensión válida (.com, .net, .edu, etc.)[cite: 74].
* **Nombre de Cliente y Texto de Producto:** Expresión Regular `^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]{3,100}$`[cite: 74]. Permite únicamente letras (incluyendo acentos y la letra ñ) y espacios, previniendo caracteres especiales o inyecciones de código[cite: 74].

#### 13.2.4 Campos de Confirmación y Modales Interactivos de Seguridad[cite: 74]

* **Modales de Confirmación de Acciones Sensibles:** Antes de procesar una cancelación de renta, la baja de un producto del catálogo o el cierre de sesión, el sistema despliega una ventana modal interactiva que requiere una confirmación explícita del usuario mediante el botón "*Confirmar Acción*" o la tecla *Esc* para abortar[cite: 74, 75].
* **Confirmación de Credenciales de Usuario:** En los formularios de registro o modificación de contraseñas de personal, se agrega un campo secundario de "*Confirmar Contraseña*" que utiliza un validador personalizado (`Validators.mustMatch`) para garantizar que ambos campos sean idénticos antes de enviar el formulario[cite: 75].

---

### 13.3 Mecanismos de Validación en el Lado del Servidor (Back-End — Node.js/Express & MySQL)[cite: 75]

El servidor backend actúa como la autoridad definitiva de control de datos[cite: 75]. Cada petición recibida a través de la API RESTful es evaluada por capas de middlewares y controladores antes de ejecutar cualquier transacción en MySQL[cite: 75].

#### 13.3.1 Validación de Datos Únicos y Restricciones de Unicidad[cite: 75]

* **Unicidad a Nivel de Base de Datos (Constraints):** En el esquema relacional de MySQL, columnas como correo en la tabla de usuarios y `codigo_producto` en el catálogo cuentan con la restricción `UNIQUE`[cite: 75].
* **Manejo de Errores Transaccionales en Node.js:** Si se intenta registrar un usuario con un correo ya existente, el controlador de Express captura la excepción de clave duplicada de MySQL (código de error 1062 `ER_DUP_ENTRY`) y retorna de manera controlada un código de respuesta **HTTP 409 Conflict** con un mensaje descriptivo JSON, evitando colapsos no atrapados en el servidor[cite: 75].

#### 13.3.2 Validación de Coherencia Lógica de Negocio y Reglas Transaccionales[cite: 76]

* **Coherencia Temporal del Evento:** El servidor valida matemáticamente que la `Hora_Fin` sea mayor que la `Hora_Inicio` y que la duración total de la reserva sea de al menos 1 hora[cite: 76]. Si `Hora_Fin <= Hora_Inicio`, el servidor rechaza la petición con un código **HTTP 400 Bad Request**[cite: 76].
* **Validación Estricta del Límite de 60 Días en Servidor:** Aunque el calendario de Angular restrinja las fechas, el servidor calcula de forma independiente: `Días_Diferencia = (Fecha_Solicitada - Fecha_Actual)`[cite: 76]. Si los días superan 60, el servidor invalida la petición inmediatamente[cite: 76].
* **Verificación de Disponibilidad Real y Prevención de Overbooking:** Es la regla de negocio más crítica[cite: 76]. Antes de insertar la renta, Express inicia una transacción atómica en MySQL con bloqueo pesimista de fila (`SELECT ... FOR UPDATE`)[cite: 76]. Calcula el inventario ya comprometido en rentas activas que chocan con el bloque de horas solicitado (`[Hora_Inicio, Hora_Fin]`)[cite: 76]. Si `Stock_Total - Stock_Rentado < Cantidad_Solicitada`, la transacción realiza un `ROLLBACK` y responde con **HTTP 400 Bad Request** detallando qué artículo no tiene existencias suficientes[cite: 76].

#### 13.3.3 Validación de Formato, Sanitización y Prevención de Vulnerabilidades[cite: 76]

* **Middlewares de Validación con express-validator:** Cada ruta de la API integra esquemas de validación previa (por ejemplo, `body('telefono').isLength({ min: 10, max: 10 })`, `body('email').isEmail()`)[cite: 76]. Si algún dato no cumple el esquema, la petición es rechazada antes de tocar la base de datos[cite: 76].
* **Sanitización y Prevención de Cross-Site Scripting (XSS):** Toda entrada de texto ingresada por los usuarios (nombres, direcciones, notas) pasa por filtros de sanitización (como `xss-clean` o `validator.escape()`) para eliminar cualquier etiqueta HTML o script ejecutable (`<script>`) antes de persistirla[cite: 77].
* **Consultas Preparadas contra Inyección SQL (SQL Injection):** Todas las consultas ejecutadas desde Node.js hacia MySQL utilizan sentencias preparadas con parámetros vinculados (*Prepared Statements / Parameterized Queries*)[cite: 77]. Ninguna variable enviada por el usuario se concatena directamente en la cadena SQL, garantizando inmunidad total contra ataques de inyección SQL[cite: 77].

---

### 13.4 Matriz Comparativa de Validaciones (Front-End vs. Back-End)[cite: 77]

A continuación se resume la distribución de responsabilidades de validación entre ambas capas del sistema:[cite: 77]

* **Datos Obligatorios:**[cite: 77]
  * *Front-end:* Habilita/Deshabilita botones en formularios reactivos y muestra mensajes de advertencia visuales[cite: 77].
  * *Back-end:* Rechaza peticiones incompletas retornando HTTP 400 Bad Request[cite: 77].
* **Formato RegEx (Teléfono 10 dígitos, Correo):**[cite: 77]
  * *Front-end:* Valida patrón en tiempo real mientras el usuario escribe en el campo[cite: 77].
  * *Back-end:* Evalúa el formato con `express-validator` rechazando datos malformados[cite: 77].
* **Restricción Calendario (Máximo 60 Días):**[cite: 77]
  * *Front-end:* Deshabilita fechas lejanas en el selector visual (Datepicker)[cite: 77].
  * *Back-end:* Calcula diferencia de fechas en días y aborta el proceso si excede 60 días[cite: 78].
* **Disponibilidad de Inventario (Overbooking):**[cite: 78]
  * *Front-end:* Consulta asíncrona mediante `GET /api/disponibilidad` para mostrar indicadores de stock visuales[cite: 78].
  * *Back-end:* Ejecuta consulta transaccional pesimista con `SELECT ... FOR UPDATE` en MySQL y bloquea registros duplicados[cite: 78].
* **Seguridad (XSS / SQL Injection / Unicidad):**[cite: 78]
  * *Front-end:* Escapa valores en plantillas HTML de Angular[cite: 78].
  * *Back-end:* Sanitización de entradas, Prepared Statements SQL y restricciones `UNIQUE` en MySQL[cite: 78].
## CAPÍTULO XIV. INVENTARIO DE CONTENIDO, TONO DE COMUNICACIÓN Y LICENCIAS DE RECURSOS[cite: 79]

### 14.1 Inventario de Contenido Digital del Sistema[cite: 79]

El inventario de contenido comprende la totalidad de los elementos textuales, gráficos, tipográficos e iconográficos que componen la interfaz de usuario y la arquitectura de información de "RentFlow Systems"[cite: 79]. La correcta clasificación de estos recursos garantiza la homogeneidad visual, la mantenibilidad del código y el cumplimiento legal en materia de propiedad intelectual[cite: 79].

#### 14.1.1 Inventario de Textos y Copywriting (UI Copy)[cite: 79]

* **Textos de Interfaz Principal:** Encabezados de módulo, nombres de botones de acción ("Confirmar Renta", "Guardar Cambios", "Cancelar", "Buscar"), etiquetas de campos en formularios (Labels), textos de ayuda (Placeholders) e indicadores de estado[cite: 80].
* **Mensajes de Sistema y Feedback:** Alertas de éxito ("Renta registrada exitosamente con Folio #1024"), mensajes de advertencia ("El stock seleccionado excede la disponibilidad del bloque de horas"), errores de autenticación ("Credenciales incorrectas o sesión expirada") y textos de confirmación modal[cite: 80].
* **Contenido Informativo del Catálogo:** Descripciones cortas de productos, especificaciones técnicas de mobiliario (dimensiones de brincolines, capacidad de sillas/mesas, material de manteles), categorías y desgloses de precios de arrendamiento[cite: 80].

#### 14.1.2 Inventario de Imágenes y Recursos Gráficos[cite: 80]

* **Fotografías del Catálogo de Mobiliario:** Imágenes promocionales y técnicas en formato WebP de alta resolución para la grilla del catálogo (sillas plegables, sillas acojinadas, mesas rectangulares, brincolines acuáticos, castillos inflables, mantelería y toldos)[cite: 80].
* **Identidad Visual y Logotipos:** Isotipo y logotipo oficial de "RentFlow Systems" en formatos vectoriales SVG y PNG transparente (versiones para fondo claro, fondo oscuro y favicon de navegador de 32x32 px)[cite: 80].
* **Ilustraciones de Estado de Interfaz:** Gráficos vectoriales ligeros en formato SVG para estados vacíos de pantalla (Empty States), como "No se encontraron resultados de búsqueda" o "Sin entregas pendientes para el día de hoy"[cite: 80].

#### 14.1.3 Inventario de Tipografías (Fuentes Web)[cite: 81]

* **Tipografía de Interfaz de Usuario (UI Font):** Familia tipográfica *Inter / Roboto* (Google Fonts) en sus variantes Regular (400), Medium (500), SemiBold (600) y Bold (700), utilizada para todos los textos, tablas y botones del sistema web[cite: 81].
* **Tipografía de Documentación Oficial:** Familia *Times New Roman* (12 pt, interlineado 2.0), reservada para los reportes técnicos, contratos impresos de arrendamiento y la presente documentación de arquitectura[cite: 81].

#### 14.1.4 Inventario de Iconografía Vectorial[cite: 81]

* **Paquete de Iconos de Sistema (Heroicons / Lucide Icons):** Iconos vectoriales en formato SVG optimizados para navegación (inicio, catálogo, calendario, historial, logs, salir), acciones de edición (lápiz, papelera, filtro, lupa de búsqueda) e indicadores de estado operativo (check verde, alerta amarilla, cruz roja de bloqueo)[cite: 81].

---

### 14.2 Tono de Comunicación y Guías de Redacción (UI Copywriting)[cite: 81]

El tono de comunicación del sistema debe responder a las necesidades de un entorno operativo de ritmo acelerado en mostrador o campo, donde la claridad, la precisión y la rapidez de interpretación son fundamentales[cite: 81, 82].

#### 14.2.1 Principios de Tono de Comunicación[cite: 82]

* **Profesional y Neutro:** El lenguaje utilizado en menús, etiquetas y tablas debe ser formal, sobrio y directo, empleando el español neutro estándar (sin regionalismos ambiguos ni modismos)[cite: 82].
* **Claro y Conciso:** Los textos en pantalla deben transmitir la instrucción o el estado de la manera más breve posible, evitando oraciones largas que entorpezcan la lectura del ayudante de mostrador[cite: 82].
* **Orientado a la Acción (Action-Oriented):** Los botones de comando deben iniciar con verbos infinitivos o imperativos claros que indiquen exactamente el resultado de la interacción ("Registrar Renta", "Filtrar Catálogo", "Confirmar")[cite: 82].
* **Constructivo e Informativo en Errores:** Ante un fallo del usuario o una restricción de sistema, el tono debe ser respetuoso e indicar de inmediato la causa y la solución, evitando culpabilizar al operador[cite: 82].

#### 14.2.2 Guías de Redacción para Mensajes de Interfaz[cite: 82]

* **Ejemplo de Mensaje de Error Correcto:** "*Stock insuficiente: Solo quedan 15 sillas plegables disponibles para el horario de 14:00 a 18:00 hrs. Por favor ajusta la cantidad.*" (En lugar de: "Error fatal #400: Entrada inválida")[cite: 82].
* **Ejemplo de Mensaje de Confirmación Correcto:** "*¿Deseas cancelar la reserva #108? Esta acción liberará el inventario bloqueado en la base de datos.*"[cite: 82]
* **Ejemplo de Etiqueta de Campo Correcta:** "*Teléfono del Cliente (10 dígitos):*" con placeholder descriptivo "*Ej. 8711234567*"[cite: 82].

---

### 14.3 Criterios de Selección y Políticas de Licenciamiento de Recursos[cite: 82]

Para asegurar el cumplimiento normativo en materia de derecho de autor y garantizar un producto software libre de contingencias legales, todos los recursos tecnológicos, gráficos y tipográficos seleccionados se someten a criterios estrictos de licenciamiento[cite: 82, 83].

#### 14.3.1 Licencias de Software y Frameworks Tecnológicos[cite: 83]

* **Angular 17+, Node.js y Express.js:** Licencia de Software **MIT** (Permite el uso, modificación, distribución y comercialización libre sin costo de regalías, con la única obligación de mantener el aviso de copyright original)[cite: 83].
* **MySQL Community Server (Engine InnoDB):** Licencia **GNU General Public License (GPL v2)** / Licencia Comercial Estándar para conectores de BD[cite: 83].
* **Tailwind CSS y Bibliotecas Auxiliares (Bcrypt, JWT, RxJS):** Licencia **MIT**[cite: 83].

#### 14.3.2 Licencias Tipográficas y de Iconografía[cite: 83]

* **Fuentes Google Fonts (Inter / Roboto):** Licencia **SIL Open Font License (OFL v1.1)**, la cual autoriza su uso libre comercial, incrustación en aplicaciones web e imitación sin pago de licencias[cite: 83].
* **Paquete de Iconos (Heroicons / Lucide Icons):** Licencia **MIT / CC0 (Creative Commons Zero)**, permitiendo el uso e integración vectorial ilimitada en la interfaz web[cite: 83].

#### 14.3.3 Licencias y Criterios para Recursos Fotográficos e Imágenes[cite: 83]

5. **Fotografías del Catálogo:** Fotografías de stock de libre uso bajo licencia **Unsplash / Pexels License** (que permiten uso comercial sin requerir atribución obligatoria) combinadas con fotografía propia de activos de la empresa[cite: 83].
6. **Criterios de Selección Técnica de Imágenes:**[cite: 83]
   * *Formato y Compresión:* Uso exclusivo del formato WebP con compresión adaptativa, garantizando que ninguna imagen de catálogo supere los 100 KB de peso para optimizar los tiempos de carga en dispositivos móviles (RNF-01)[cite: 84].
   * *Relación de Aspecto y Dimensiones:* Estandarización de tarjetas de catálogo en proporción 4:3 (800x600 px) con fondo neutro o transparente para mantener la uniformidad estética[cite: 84].
   * *Accesibilidad (WCAG 2.1):* Todas las imágenes del sistema incluyen obligatoriamente el atributo alternativo `alt` descriptivo para lectores de pantalla[cite: 84].

# Manual de Control de Versiones y Flujo de Trabajo en Git/GitHub
# 1. Maquetado y Prototipado Completo y Estructurado[cite: 85]

## 1.1 Vistas de General[cite: 85]

Aquí se muestran las vistas que se ven y se comportan igual en todos los usuarios[cite: 85].

### 1.1.1 Módulo: Inicio de Sesión[cite: 85]
<img width="877" height="841" alt="image" src="https://github.com/user-attachments/assets/23236938-941f-4eff-bbdc-8214852b4ac8" />

* **Descripción General:** La interfaz de autenticación se presenta en un diseño minimalista, limpio y estructurado sobre una tarjeta central de superficie blanca (`#ffffff`) dispuesta en un lienzo general de tono neutro (`#f6f8f7`)[cite: 85]. Su propósito es restringir el acceso a las funciones globales del sistema, garantizando la seguridad mediante un entorno visual libre de distracciones y con controles de alta accesibilidad (*Senior-First*)[cite: 85].
* **Elementos de la Interfaz:**[cite: 85]
* **Logotipo Institucional:** Ubicado en la parte superior izquierda de la tarjeta, muestra el isotipo corporativo de RentFlow consistente en un círculo sólido de color verde primario (`#087f5b`) con la letra "R" en mayúscula, acompañado a su derecha por el nombre del sistema en tipografía *DM Sans* en negrita[cite: 85].
* **Iconografía de Seguridad:** Presenta un distintivo gráfico en forma de candado dentro de un contenedor suave, reforzando visualmente que se trata de una sección protegida y de acceso restringido[cite: 86].
* **Campos del Formulario (Inputs de Credenciales):**[cite: 86]
  * **Usuario o correo electrónico:** Campo de texto interactivo con icono de usuario, pre-llenado de manera predeterminada con la cuenta institucional de control[cite: 86].
  * **Contraseña:** Campo de enmascaramiento con icono de candado y un botón de visibilidad (icono de ojo) para alternar la ocultación de caracteres, pre-llenado con datos de acceso rápido (`••••••••`)[cite: 86].
* **Botón de Acción Principal:** Un botón de llamada a la acción (*Call to Action*) de ancho completo (100%), diseñado en color verde primario (`#087f5b`), con texto en color blanco y una flecha indicativa, rotulado como "*Iniciar sesión*"[cite: 86].
* **Elementos de Pie de Tarjeta:**[cite: 86]
  * Indicador de seguridad con texto: "*Acceso protegido · Tu sesión está cifrada y monitoreada.*"[cite: 86]
  * Nota al pie con aviso legal interno: *© 2026 RentFlow System - Uso interno autorizado.*[cite: 86]
* **Comportamiento y Reglas de Negocio:**[cite: 86]
  * El diseño omite cualquier enlace externo de recuperación de contraseña o registro de cuentas nuevas, previniendo puntos vulnerables de entrada pública[cite: 86].
  * Al hacer clic en el botón "*Iniciar sesión*", el sistema valida las credenciales y ejecuta una transición directa hacia el Panel Principal (*Dashboard*) del Super Administrador[cite: 86].

---

## 1.2 Vistas de Super administrador[cite: 87]

https://www.figma.com/make/yczyXQHkMQ5DBh8myFn67D/RentFlow-Super-Admin?fullscreen=1&t=ajoPcQ0346oKUCja-1&code-node-id=0-6

### 1.2.1 Módulo: Panel Principal / Dashboard[cite: 87]
<img width="1872" height="825" alt="image" src="https://github.com/user-attachments/assets/26305eae-0319-4fc1-a75a-366961117bc1" />
<img width="1862" height="821" alt="image" src="https://github.com/user-attachments/assets/babe2ec1-1f2e-4f8d-8636-c5fe590ff406" />
* **Descripción General:** Es la interfaz central de control y supervisión que se presenta inmediatamente después de autenticarse exitosamente en el sistema[cite: 87]. Combina la operación logística diaria de campo con métricas gerenciales y de infraestructura en tiempo real, manteniendo la línea gráfica limpia, minimalista y de alto contraste característica del RentFlow Design System[cite: 87, 88].

1. **Elementos de la Interfaz: Barra de Navegación Superior (Top Navbar):**[cite: 88]
   * **Logotipo y Marca:** Isotipo corporativo con la "R" blanca sobre fondo verde (`#087f5b`) y el nombre RentFlow a la izquierda[cite: 88].
   * **Menú de Módulos (Central):** Enlaces interactivos de navegación rápida que estructuran la plataforma: Inicio (activo con indicador visual inferior), Gestión de Usuarios, Catálogo, Historial y Auditoría (Logs)[cite: 88].
   * **Perfil de Usuario y Sesión (Derecha):** Tarjeta compacta que muestra las iniciales del rol (SA), la etiqueta "Super Admin", el indicador de permisos "Acceso total" y el botón operativo de "Cerrar sesión"[cite: 88].

2. **Encabezado de Bienvenida y Control:**[cite: 88]
   * Muestra la fecha actual (Jueves, 29 de octubre), un saludo personalizado ("Buenos días, Super Administrador"), una descripción operativa breve y el botón de acción rápida destacado en color verde primario rotulado como `+ Nuevo Usuario`[cite: 88].

3. **Panel de Métricas Globales (Tarjetas de Resumen Superior):**[cite: 88]
   * **Entregas de hoy:** Muestra el volumen numérico de salidas programadas (ej. 04) con indicador de variación comparativa[cite: 88].
   * **Recolecciones de hoy:** Detalla el volumen de equipos que deben regresar del campo (ej. 02)[cite: 88].
   * **Usuarios activos:** Muestra la cantidad total de cuentas con acceso a la plataforma (ej. 18) junto con los avatares circulares de los operadores conectados en tiempo real[cite: 88].
   * **Estado del sistema:** Panel gerencial en color verde sólido que indica de forma explícita "Operando" con la leyenda "Sin incidencias" y hora de última sincronización[cite: 89].

4. **Tablero Operativo (Movimientos del Día):**[cite: 89]
   * Contenedor con subtítulo "Movimientos programados para hoy" acompañado de un botón superior de acceso rápido a la "Ver agenda completa"[cite: 89].
   * **Tarjetas de Tareas Logísticas:** Despliega de forma cronológica los eventos del día (ej. Eventos Camelia, Boda Méndez & Lara, Corporativo Altura, Casa Aurora) indicando explícitamente el tipo de movimiento (Entrega o Recolección), la hora exacta en formato de 24 horas (09:30 HRS), el desglose de mobiliario contratado (sillas y mesas) y la dirección física del evento[cite: 89].
   * Cuenta con el botón de acción rápida interactivo "Marcar lista" para la actualización de estatus logístico en un solo clic[cite: 89].

5. **Módulo de Agenda Semanal:**[cite: 89]
   * Un carrusel o barra de navegación horizontal que abarca el rango de la semana en curso (ej. 26 de octubre – 1 de noviembre, 2026), desglosando los días de la semana (Lunes a Domingo) con conteo de movimientos asociados por fecha y un indicador visual de selección para el día actual (HOY - 29 de octubre)[cite: 89].

### 1.2.2 Módulo: Gestión de Usuarios[cite: 90]
<img width="1871" height="837" alt="image" src="https://github.com/user-attachments/assets/3a87140d-975f-42d8-a097-4889188ac0ce" />

* **Descripción General:** Es la interfaz administrativa exclusiva del Super Administrador destinada al control de perfiles, permisos y accesos corporativos al sistema[cite: 90]. Permite supervisar la distribución del personal, otorgar credenciales y administrar el ciclo de vida de las cuentas de usuario bajo un esquema jerárquico y seguro[cite: 90].
* **Elementos de la Interfaz:**[cite: 90]
  1. **Encabezado y Acciones Principales:**[cite: 90]
     * Muestra la etiqueta de categoría "ADMINISTRACIÓN", el título principal "Gestión de usuarios" y una descripción de apoyo: "Administra perfiles, permisos y accesos al sistema"[cite: 90].
     * **Botón de Alta:** Un botón principal prominente en color verde corporativo (`#087f5b`) con icono de suma, rotulado como `+ Nuevo Usuario`, diseñado para el registro de nuevas cuentas[cite: 90].
  2. **Panel de Métricas Globales de Personal (Tarjetas Superiores):**[cite: 90]
     * **Usuarios totales:** Muestra la cantidad global de cuentas registradas en la plataforma (ej. 6)[cite: 90].
     * **Administradores:** Detalla el número de cuentas con privilegios de gestión de inventario y catálogos (ej. 2)[cite: 91].
     * **Operadores:** Conteo de personal asignado a la ejecución de tareas logísticas y de campo (ej. 4)[cite: 91].
     * **Activos:** Indicador del total de cuentas con estatus operativo vigente dentro de la empresa (ej. 5)[cite: 91].
  3. **Barra de Herramientas y Filtros:**[cite: 91]
     * **Buscador Dinámico:** Campo de texto con icono de lupa y marcador de posición "Buscar por nombre o correo..." para localización rápida de perfiles[cite: 91].
     * **Filtros de Estado (Pestañas de selección rápida):** Opciones interactivas de filtrado por categoría de cuenta ("Todos", "Activos" e "Inactivos")[cite: 91].
     * **Botón de Filtrado Avanzado:** Control lateral complementario con icono de embudo rotulado como "Filtrar"[cite: 91].
  4. **Tabla de Listado de Usuarios:**[cite: 91]
     * **Estructura de Columnas:** Organizada formalmente mediante las cabeceras Nombre completo, Correo electrónico, Rol asignado, Estado y Acciones[cite: 91].
     * **Fichas de Perfil:** Cada fila muestra un avatar circular con las iniciales del empleado (ej. JP, AM, LC), nombre completo, dirección de correo electrónico institucional, una etiqueta distintiva de rol mediante pastillas o badges (ej. "Administrador" en tono púrpura o "Operador/Ayudante"), un indicador visual de estatus con punto de color (ej. verde para "Activo"), y botones operativos de control para la edición de perfil (icono de lápiz) y eliminación o baja (icono de papelera)[cite: 91, 92].

#### 1.2.2.1 Módulo: Modal / Ventana Emergente de Creación de Cuenta[cite: 92]
<img width="1840" height="817" alt="image" src="https://github.com/user-attachments/assets/79529304-1357-4ba2-9d5d-84f6a05fbe7b" />

* **Descripción General:** Es un contenedor flotante de tipo modal superpuesto sobre la interfaz de gestión, diseñado exclusivamente para que el Super Administrador realice el alta de nuevas cuentas de personal en el sistema[cite: 92]. Implementa controles estructurados para la asignación segura de credenciales corporativas y la restricción de privilegios según el rol operativo[cite: 92].
* **Elementos de la Interfaz:**[cite: 92]
  1. **Cabecera del Modal:**[cite: 92]
     * **Iconografía e Indicador:** Muestra un icono gráfico de usuario dentro de un contenedor circular verde suave acompañado de la etiqueta superior en minúsculas: "NUEVO PERFIL"[cite: 92].
     * **Título y Subtítulo:** Presenta el encabezado principal "Crear cuenta de usuario" seguido de la descripción de apoyo: "Asigna sus credenciales y nivel de acceso."[cite: 92]
     * **Control de Cierre:** Un botón superior derecho en forma de círculo con un icono de aspa (`×`) para cancelar o cerrar el contenedor flotante[cite: 93].
  2. **Campos del Formulario de Registro:**[cite: 93]
     * **Nombre completo (*):** Campo de texto obligatorio con icono de usuario y marcador de posición de ejemplo ("Ej. Alejandra Torres")[cite: 93].
     * **Correo electrónico (*):** Campo de entrada de correo con icono de arroba (`@`) y terminación predeterminada orientada al dominio corporativo ("nombre@rentflow.mx")[cite: 93].
     * **Contraseña temporal (*):** Campo de enmascaramiento seguro con icono de candado y botón interactivo de visibilidad (icono de ojo)[cite: 93]. Incluye un texto de advertencia obligatorio: "El usuario deberá cambiarla en su primer acceso."[cite: 93]
     * **Rol asignado (*):** Menú desplegable (*dropdown*) con indicador gráfico de selección, rotulado inicialmente como "Selecciona un rol" para definir el nivel de privilegios (Administrador u Operador/Ayudante)[cite: 93].
     * **Nota Informativa de Permisos:** Un recuadro inferior con icono de escudo que especifica: "Permisos por rol · El acceso del usuario se limitará automáticamente a las funciones de su perfil."[cite: 93]
  3. **Botones de Acción Inferiores:**[cite: 93]
     * **Cancelar:** Botón secundario con borde sutil para descartar el registro y cerrar la ventana[cite: 93].
     * **Crear cuenta:** Botón de llamada a la acción primario y destacado en color verde corporativo (`#087f5b`) con icono de suma (`+`), encargado de procesar y guardar el nuevo perfil en la base de datos[cite: 93].
### 1.2.3 Módulo: Catálogo de Mobiliario[cite: 94]
<img width="1867" height="848" alt="image" src="https://github.com/user-attachments/assets/fd4c316a-5e5a-46e1-92fb-10fa8fdbdc43" />
<img width="1842" height="822" alt="image" src="https://github.com/user-attachments/assets/de53fc35-f9e2-4c13-977b-2aa423dab5d1" />

* **Descripción General:** Es la interfaz de consulta y supervisión del inventario general de la empresa, adaptada con privilegios de solo lectura para el rol de Super Administrador[cite: 94]. Su propósito principal no es la modificación de precios o productos, sino la auditoría de existencias y la trazabilidad del historial de interacciones por cada artículo disponible para eventos[cite: 94].
* **Elementos de la Interfaz:**[cite: 94]
  1. **Encabezado y Alerta de Privilegios:**[cite: 94]
     * Muestra el título principal "Catálogo de mobiliario" y una descripción de apoyo orientada a la supervisión: "Consulta existencias y audita el historial de cada artículo."[cite: 94]
     * **Insignia de Restricción:** Una etiqueta distintiva en color verde suave situada en la esquina superior derecha que indica explícitamente "VISTA DE SOLO LECTURA" (reforzando que las acciones de alta o edición están reservadas al rol de Administrador)[cite: 94].
  2. **Barra de Herramientas y Filtros Avanzados:**[cite: 94]
     * **Buscador Inteligente:** Un campo de entrada amplio con icono de lupa y texto de apoyo: "Busca por nombre o clave, incluso con errores...", diseñado para admitir consultas tolerantes a fallos tipográficos[cite: 95].
     * **Filtros de Stock:** Menú desplegable lateral rotulado como "Todo el stock"[cite: 95].
     * **Botón de Exportación:** Control operativo para descargar reportes del inventario con la etiqueta "Exportar"[cite: 95].
     * **Selector de Visualización:** Botones de alternancia rápida a la extrema derecha para cambiar entre formato de cuadrícula (Grid) o listado de filas[cite: 95].
  3. **Cuadrícula de Artículos (Tarjetas de Mobiliario):**[cite: 95]
     * **Contenedor Visual:** Cada ficha de producto cuenta con una fotografía real e ilustrativa del mobiliario (ej. Silla Tiffany, Mesa Redonda, Silla Crossback), identificando su clave interna en la esquina superior izquierda (ej. SL-001)[cite: 95].
     * **Información de Stock:** Desglosa el nombre comercial del artículo, la categoría a la que pertenece (ej. SILLAS, MESAS), y una barra de progreso porcentual junto con la relación numérica de disponibilidad física en almacén (ej. 148 / 180 disponibles)[cite: 95].
     * **Acceso a Auditoría (Logs de Producto):** En la esquina inferior derecha de cada tarjeta, se incluye un botón interactivo rotulado como "Ver historial" acompañado de un icono de reloj/auditoría, el cual permite abrir el modal con el registro detallado de quién creó o modificó el producto previamente[cite: 95].

#### 1.2.3.1 Módulo: Panel / Modal de Auditoría de Producto[cite: 96]
<img width="1908" height="846" alt="image" src="https://github.com/user-attachments/assets/0603a11f-c10d-4ff3-bf93-f2f34809aaf6" />

* **Descripción General:** Es un contenedor flotante de tipo panel lateral (*drawer*) que se despliega de forma dinámica al seleccionar cualquier artículo dentro del catálogo en modo de solo lectura[cite: 96]. Su propósito fundamental es garantizar la trazabilidad forense e inmutable del inventario, mostrando de manera cronológica todas las modificaciones, creaciones y actualizaciones de stock asociadas a un producto específico[cite: 96].
* **Elementos de la Interfaz:**[cite: 96]
  1. **Cabecera Visual del Artículo:**[cite: 96]
     * Muestra una vista previa con la fotografía real del mobiliario seleccionado (ej. Silla Tiffany), su clave interna superpuesta (ej. SL-001) y un botón superior derecho con icono de aspa (`×`) para cerrar el panel y regresar al catálogo general[cite: 96].
  2. **Encabezado de la Sección:**[cite: 96]
     * Contiene la etiqueta de categoría en color verde corporativo: "AUDITORÍA DE PRODUCTO", seguida del título "Historial de Cambios del Artículo" y la descripción de apoyo: "Registro cronológico e inmutable de todas las acciones realizadas sobre este producto."[cite: 96, 97]
  3. **Línea de Tiempo de Auditoría (Logs de Interacción):**[cite: 97]
     * **Tarjetas de Registro Individuales:** Cada evento de modificación se despliega como una tarjeta independiente conectada por una línea de flujo vertical con iconos distintivos (ej. símbolo de suma para creación, lápiz para edición y caja para inventario)[cite: 97].
     * **Metadatos Detallados por Registro:**[cite: 97]
       * **Usuario responsable:** Identificación del perfil (ej. Admin_Jose o Admin_Maria)[cite: 97].
       * **Acción ejecutada:** Descripción textual clara de la operación (ej. "Creó el producto", "Editó el nombre de 'Silla moderna' a 'Silla Tiffany'", o "Actualizó el stock disponible a 148 unidades")[cite: 97].
       * **Información de Origen y Sello Temporal:** Metadatos técnicos que especifican el entorno de hardware/sistema operativo (ej. Windows, Computadora Linux) acompañados de la fecha y hora exacta del movimiento (ej. 27 de Julio 2026 - 02:04 PM / 8 de Agosto 2026 - 01:57 AM)[cite: 97].

---

### 1.2.4 Módulo: Historial de Operaciones[cite: 98]
<img width="1895" height="852" alt="image" src="https://github.com/user-attachments/assets/b76543ab-cd3f-4e8d-b571-52ebd67c1e22" />

* **Descripción General:** Es la interfaz gerencial y de consulta global destinada a auditar todas las entregas y recolecciones de mobiliario registradas en la plataforma[cite: 98]. Permite filtrar, rastrear y supervisar el flujo operativo histórico de la empresa bajo criterios temporales y de estado[cite: 98].
* **Elementos de la Interfaz:**[cite: 98]
  1. **Encabezado y Acciones Generales:**[cite: 98]
     * Muestra la etiqueta de categoría superior en color verde: "OPERACIONES", el título principal "Historial de operaciones" y la descripción de apoyo: "Consulta todas las entregas y recolecciones registradas."[cite: 98]
     * **Botón de Exportación:** Un control operativo en la esquina superior derecha rotulado como "Exportar reporte" con icono de descarga[cite: 98].
  2. **Barra de Filtros y Temporalidad:**[cite: 98]
     * **Selector de Periodo (Pestañas de Vista Rápida):** Controles interactivos para alternar la visualización del historial entre "Por Día", "Por Semana" (activo) y "Por Mes"[cite: 98].
     * **Fecha de Consulta y Selector Dinámico:** Un campo de calendario interactivo configurado con la fecha actual (ej. 29/10/2026) y un menú desplegable complementario rotulado como "Filtrar por: Fecha de Entrega", el cual permite alternar dinámicamente el criterio de la columna temporal entre la fecha de entrega o la fecha de devolución[cite: 99].
  3. **Panel de Metadatos de Búsqueda Activa:**[cite: 99]
     * Desglosa de manera transparente los parámetros actuales de la consulta: Periodo seleccionado (ej. 26 oct — 1 nov, 2026), Movimientos visibles (ej. 4) y Filtro activo (ej. Fecha de Entrega)[cite: 99].
  4. **Tabla de Datos Históricos:**[cite: 99]
     * **Estructura de Columnas:** Organizada formalmente mediante las cabeceras Folio, Cliente, Movimiento, Fecha de Entrega (o devolución según el filtro), Total y Estado[cite: 99].
     * **Fichas de Operación:** Cada fila detalla de forma clara el folio de la renta (ej. RNT-2948 en enlace verde corporativo), el nombre del cliente y el volumen de artículos (ej. Eventos Camelia con 132 artículos), el tipo de movimiento operativo con icono distintivo (Entrega o Recolección), la fecha exacta del evento, el costo total de la transacción (ej. $18,450), el estatus logístico mediante etiquetas en formato de pastilla (ej. verde para "Completada" o amarillo suave para "En proceso") y un botón de navegación lateral con flecha para consultar el detalle completo de la orden[cite: 99].

---

### 1.2.5 Módulo: Bitácora de Auditoría del Sistema / System Logs[cite: 100]
<img width="1903" height="832" alt="image" src="https://github.com/user-attachments/assets/c5aa072e-dea2-4ef9-a6fb-15d7714ff5c2" />

* **Descripción General:** Es el módulo gerencial y de seguridad más avanzado de la plataforma, destinado a garantizar la trazabilidad forense global y el registro inmutable de todas las acciones sensibles realizadas por cualquier perfil dentro del sistema[cite: 100]. Su propósito es proteger la integridad operativa y ofrecer un monitoreo transparente de los eventos críticos[cite: 100].
* **Elementos de la Interfaz:**[cite: 100]
  1. **Encabezado y Alerta de Seguridad:**[cite: 100]
     * Muestra la etiqueta de categoría en color verde corporativo: "SEGURIDAD Y TRAZABILIDAD", el título principal "Bitácora de Auditoría del Sistema" y la descripción de apoyo: "Registro global de seguridad y trazabilidad de acciones sensibles en la plataforma."[cite: 100]
     * **Insignias de Estado (Derecha):** Un distintivo que indica "LOGS INMUTABLES" junto con una barra de estado gerencial en color verde suave que confirma de forma explícita "MONITOREO ACTIVO"[cite: 100].
  2. **Banner Informativo de Integridad:**[cite: 100]
     * Un contenedor de seguridad con icono de escudo que notifica: "Integridad de registros protegida — Los movimientos de esta bitácora no pueden ser editados ni eliminados por ningún perfil."[cite: 101]
  3. **Barra de Herramientas y Filtros Forenses:**[cite: 101]
     * **Buscador por Usuario:** Campo de texto con icono de lupa y marcador de posición "Buscar por nombre de usuario..."[cite: 101].
     * **Rango Forense (Selector Temporal):** Controles de fecha duales para establecer un periodo de auditoría específica (ej. 01/10/2026 — 29/10/2026)[cite: 101].
     * **Botones Operativos:** El control de aplicación "Aplicar filtros" y el botón de exportación de registros rotulado como "Exportar"[cite: 101].
  4. **Tabla de Registros Inmutables (Logs):**[cite: 101]
     * **Estructura de Columnas:** Organizada formalmente mediante las cabeceras Folio / ID de log, Usuario / Perfil, Dispositivo / IP de origen, Acción realizada y Fecha y hora exacta[cite: 101].
     * **Fichas de Auditoría:** Cada registro muestra un identificador único (ej. LOG-9842), el nombre del usuario y su rol asociado (ej. `admin_juan` / Administrador), los datos técnicos del dispositivo y su dirección IP (ej. Windows PC — 192.168.1.45), la descripción detallada de la acción ejecutada con un icono representativo (ej. "Modificación de stock en Catálogo: Mesa Redonda") y la estampa temporal exacta del evento (ej. 29/Oct/2026 — 02:15:30 PM)[cite: 101].

---

## 1.3 Diagrama de Arquitectura y Flujo de Navegación[cite: 102]

### 1.3.1 Diagrama de Arquitectura y Flujo de Navegación[cite: 102]
<img width="1422" height="617" alt="image" src="https://github.com/user-attachments/assets/09e109ea-bf20-41c7-bac8-daa2fd9e2ad0" />

* **Descripción General del Flujo:** La navegación del Super Administrador se rige bajo un modelo jerárquico y centralizado[cite: 102]. Tras el proceso de autenticación segura, el sistema despliega una barra de navegación superior persistente (Top Navbar) que permite el acceso transversal a los cinco módulos gerenciales y operativos de la plataforma, garantizando un control total de usuarios, inventarios, trazabilidad histórica y auditoría de seguridad[cite: 102].
* **Mapa de Conexión de Vistas (Estructura de Transiciones):**[cite: 102]
  1. **Módulo de Autenticación (Punto de Entrada):**[cite: 102]
     * **Pantalla:** Login (Portal de Super Administrador)[cite: 102].
     * **Acción de Transición:** El usuario ingresa las credenciales autorizadas (pre-llenadas por defecto) y presiona el botón "Iniciar sesión"[cite: 102].
     * **Destino:** Redirección directa al Panel Principal / Dashboard[cite: 102].
  2. **Panel Central de Control:**[cite: 102]
     * **Pantalla:** Dashboard[cite: 102].
     * **Interconexiones y Accesos Directos:**[cite: 102]
       * Desde el botón superior `+ Nuevo Usuario` $\rightarrow$ Abre de forma flotante el Modal de Creación de Cuentas[cite: 103].
       * Desde el botón operativo "Ver agenda completa" $\rightarrow$ Despliega la planificación semanal[cite: 103].
       * Mediante la Top Navbar, el usuario puede trasladarse libremente a cualquiera de los siguientes módulos:[cite: 103]
  3. **Módulos de Gestión Transversal (Navegación Superior):**[cite: 103]
     * **Gestión de Usuarios:** Permite visualizar el listado de personal y enlaza directamente con el Modal de Alta de Nuevos Usuarios (`+ Nuevo Usuario`)[cite: 103].
     * **Catálogo (Solo Lectura):** Permite auditar el inventario general y, al seleccionar cualquier artículo, despliega el Panel / Drawer de Auditoría de Producto (Historial de Cambios del Artículo con los logs de creación y edición por usuario)[cite: 103].
     * **Historial de Operaciones:** Muestra la trazabilidad de entregas y recolecciones con filtros dinámicos por temporalidad (Día, Semana, Mes) y tipo de fecha (Entrega o Devolución)[cite: 103].
     * **Auditoría (Logs del Sistema):** Panel inmutable de seguridad global que registra los movimientos de todo el personal con metadatos forenses (Usuario, IP, Dispositivo, Acción y Estampa Temporal)[cite: 103].
  4. **Punto de Salida del Sistema:**[cite: 103]
     * **Acción de Cierre:** En cualquier momento, al hacer clic en el botón "Cerrar sesión" ubicado en el extremo derecho de la barra de navegación superior, el sistema destruye el token de acceso activo y redirige de retorno al usuario hacia la Pantalla de Login[cite: 103].
    

## 1.3 Vistas de Administrador[cite: 104]
https://www.figma.com/make/1RHFgAkr4vqkgf1hQLKGFp/RentFlow-Admin-Dashboard?fullscreen=1&t=W9eTleBX2u7xx6FP-1&code-node-id=0-6

### 1.3.1 Módulo: Panel Operativo / Dashboard[cite: 104]
<img width="1876" height="837" alt="image" src="https://github.com/user-attachments/assets/2a8a90a7-3218-4287-9018-4f313cbf3b3d" />

* **Descripción General:** Es la pantalla principal que se despliega tras la autenticación del rol de Administrador[cite: 104]. Está diseñada como un centro de control operativo y logístico en tiempo real que permite supervisar el estado diario de las entregas, recolecciones e inventario en tránsito, así como iniciar el proceso de creación de nuevas rentas de forma directa[cite: 104].
* **Elementos de la Interfaz:**[cite: 104]
  1. **Barra de Navegación Superior (Top Navbar):**[cite: 104]
     * **Identidad de Marca:** Isotipo e imagotipo de RentFlow con el texto secundario "ADMINISTRACIÓN" para identificar el nivel de privilegio activo[cite: 104].
     * **Navegación Central:** Pestañas directas a los tres módulos principales del rol: Inicio (activo con indicador visual), Catálogo y Historial[cite: 104].
     * **Perfil de Usuario:** Tarjeta en el extremo derecho con avatar circular (AM), la etiqueta "Admin Mode / Administrador" y el botón "Cerrar sesión"[cite: 105].
  2. **Encabezado y Acción Principal:**[cite: 105]
     * Muestra la etiqueta "PANEL OPERATIVO", el saludo personalizado ("Buenos días, Administrador"), la fecha del día ("20 de junio") y el botón de llamada a la acción primario `+ Nueva renta` en color verde corporativo (`#087f5b`)[cite: 105].
  3. **Tarjetas de Métricas de Operación (Resumen Superior):**[cite: 105]
     * **Entregas programadas:** Muestra el número total de salidas de equipo agendadas para el día (ej. 3) con etiqueta indicadora "Hoy"[cite: 105].
     * **Recolecciones pendientes:** Indica el total de retornos de mobiliario pendientes (ej. 2) con etiqueta de estado en tono naranja suave[cite: 105].
     * **Rentas activas:** Conteo global de contratos en curso dentro del sistema (ej. 8) con etiqueta de estatus "En curso"[cite: 105].
  4. **Sección Operativa Diaria (Tablero de Control):**[cite: 105]
     * **Organizado en un layout de dos columnas independientes:**[cite: 105]
       * **Columna Izquierda (Entregas de hoy):** Muestra el contador de tareas pendientes (ej. 3 pendientes)[cite: 105]. Cada tarjeta contiene icono de transporte, hora exacta de entrega (ej. 10:30, 12:00), nombre del cliente (ej. Grupo Nativa, Sofía Herrera), resumen del mobiliario solicitado junto con la colonia/ubicación (ej. 2 salas lounge · Col. Centro), y el botón operativo de un solo clic "Marcar lista"[cite: 105].
       * **Columna Derecha (Recolecciones de hoy):** Muestra el contador de retornos programados (ej. 2 pendientes)[cite: 106]. Cada tarjeta incluye icono de retorno, hora de recolección (ej. 14:00, 19:30), cliente (ej. Eventos Aurora, Fernanda Ruiz), mobiliario a recuperar y el botón "Marcar lista"[cite: 106].
* **Reglas de Negocio:**[cite: 106]
  * Al hacer clic en el botón `+ Nueva renta`, el sistema redirige al usuario a la vista del Catálogo para iniciar la selección interactiva de productos[cite: 106].
  * La acción sobre el botón "Marcar lista" actualiza inmediatamente el estado logístico de la entrega o recolección[cite: 106].

---

### 1.3.2 Módulo: Catálogo Unificado de Mobiliario[cite: 106]
<img width="1901" height="852" alt="image" src="https://github.com/user-attachments/assets/2dd9b1d1-cb00-4611-a6f9-83573561447c" />
<img width="1891" height="837" alt="image" src="https://github.com/user-attachments/assets/ffd52f24-05af-40e8-8685-57fc80a7c20d" />

* **Descripción General:** Es la interfaz central unificada del Administrador que combina las capacidades de gestión de inventario corporativo con la selección interactiva de mobiliario para el registro de nuevas rentas[cite: 106]. Permite al usuario supervisar la disponibilidad global, dar de alta nuevos productos, editar especificaciones existentes y añadir artículos al pedido en curso[cite: 106].
* **Elementos de la Interfaz:**[cite: 106]
  1. **Encabezado y Control de Inventario:**[cite: 107]
     * **Título y Subtítulo:** Encabezado principal "Mobiliario para tu renta" acompañado de la descripción operativa: "Selecciona productos y administra el inventario desde un mismo lugar."[cite: 107]
     * **Botón de Alta:** Control destacado en color verde corporativo (`#087f5b`) situado en la esquina superior derecha, rotulado como `+ Nuevo mobiliario`[cite: 107].
  2. **Barra de Búsqueda y Filtros de Categoría:**[cite: 107]
     * **Buscador Dinámico:** Campo de entrada amplio con icono de lupa y marcador de posición "Buscar mobiliario..."[cite: 107].
     * **Selector de Categorías (Píldoras/Chips):** Botones de filtrado rápido para segmentar el catálogo en "Todos" (activo por defecto en verde sólido), "Sillas", "Mesas" y "Salas Lounge"[cite: 107].
  3. **Barra de Estatus de Navegación:**[cite: 107]
     * Leyenda indicadora que muestra el conteo de coincidencias y la instrucción de uso: "6 productos disponibles · Haz clic en una tarjeta para ver detalles"[cite: 107].
  4. **Cuadrícula de Productos (Grid de Inventario):**[cite: 107]
     * **Contenedor de Tarjeta:** Cada artículo exhibe una fotografía real sobre fondo limpio[cite: 107].
     * **Metadatos del Producto:** Desglosa la categoría superior (ej. SILLAS, MESAS), una etiqueta de estatus con el stock físico (ej. 120 DISPONIBLES, 86 DISPONIBLES, 24 DISPONIBLES), el nombre comercial del mueble (ej. Silla Tiffany, Silla Plegable, Mesa redonda) y el costo por jornada (ej. $85, $55, $240 con la leyenda "renta por día")[cite: 107, 108].
     * **Control de Edición Directa:** Un botón secundario en la parte inferior derecha de cada tarjeta rotulado como Editar con icono de lápiz[cite: 108].
* **Comportamiento y Reglas de Negocio:**[cite: 108]
  * **Alta de Mobiliario:** Al presionar `+ Nuevo mobiliario`, se despliega un panel lateral/modal para capturar la fotografía del producto (mediante carga o arrastre de archivo), nombre, categoría, precio diario, unidades en stock y descripción[cite: 108].
  * **Edición de Producto:** Al hacer clic en el botón Editar, abre el formulario de modificación permitiendo actualizar la información y reemplazar la imagen del producto seleccionado[cite: 108].
  * **Selección para Renta:** Al hacer clic sobre cualquier área de la tarjeta (fuera del botón Editar), el sistema abre la vista detallada del mobiliario para definir la cantidad requerida e integrarla al carrito de la renta activa[cite: 108].

#### 1.3.2.1 Módulo: Modal / Ventana de Detalle de Producto y Selección[cite: 108]
<img width="1866" height="822" alt="image" src="https://github.com/user-attachments/assets/8c76ce04-3823-44ca-b85d-97c333dee440" />

* **Descripción General:** Es un contenedor flotante de tipo modal que se despliega al hacer clic sobre la superficie de cualquier tarjeta de producto dentro del Catálogo Unificado[cite: 108, 109]. Su propósito exclusivo es mostrar la ficha técnica y la descripción detallada del mobiliario, permitiendo al Administrador seleccionar la cantidad requerida e integrarla al pedido de la renta activa sin modificar los datos del inventario[cite: 109].
* **Elementos de la Interfaz:**[cite: 109]
  1. **Vista Previa Visual (Sección Izquierda):** Muestra la imagen fotográfica en alta resolución y tamaño ampliado del mueble seleccionado (ej. Silla Tiffany)[cite: 109].
  2. **Ficha Informativa (Sección Derecha):**[cite: 109]
     * **Categoría:** Etiqueta superior en verde corporativo que identifica el grupo al que pertenece el producto (ej. Sillas)[cite: 109].
     * **Nombre del Producto:** Encabezado principal en tipografía destacada (ej. Silla Tiffany)[cite: 109].
     * **Descripción Comercial y Técnica:** Bloque de texto descriptivo que detalla las características de diseño, resistencia y eventos recomendados para el mobiliario ("Una pieza elegante y resistente, ideal para bodas, cenas, celebraciones...")[cite: 109].
     * **Indicadores Métricos:** Muestra en recuadros divididos la tarifa diaria de alquiler (Renta por día: $85) y el volumen físico disponible en almacén (Stock disponible: 120 unidades)[cite: 109].
  3. **Controles de Selección y Agregar:**[cite: 109]
     * **Selector Numérico de Cantidad:** Control interactivo de tipo Stepper con botones de incremento y decremento (`-` / `+`) e indicador central con la leyenda de apoyo "Selecciona las unidades"[cite: 109].
     * **Botón Principal de Acción:** Botón destacado de ancho completo en verde corporativo (`#087f5b`) rotulado como `+ Agregar a pedido · $85`, el cual actualiza el importe dinámicamente según las unidades elegidas[cite: 109, 110].
     * **Control de Cierre:** Botón circular con icono de aspa (`×`) en la esquina superior derecha para descartar la vista sin añadir elementos al pedido[cite: 110].
* **Comportamiento y Reglas de Negocio:**[cite: 110]
  * **Separación de Responsabilidades:** Esta ventana es estrictamente para la consulta de detalles y adición a la renta; no permite modificar precios, descripciones ni existencias[cite: 110]. Para alterar esos parámetros, el usuario debe utilizar la opción independiente de Editar accesible directamente en la tarjeta del Catálogo[cite: 110].
  * **Retorno Automático:** Al presionar el botón `+ Agregar a pedido`, el sistema acumula los artículos en la barra flotante del pedido activo, cierra inmediatamente el modal y conserva al usuario en la vista general del Catálogo para permitirle elegir más mobiliario de forma continua[cite: 110].

#### 1.3.2.2 Módulo: Panel / Drawer de Edición de Mobiliario[cite: 110]
<img width="1878" height="832" alt="image" src="https://github.com/user-attachments/assets/da13bc46-c751-42bb-b22a-fcff5805e8f8" />

* **Descripción General:** Es un contenedor flotante de tipo panel lateral (*drawer*) que se despliega desde el margen derecho de la pantalla al hacer clic en el botón Editar de cualquier tarjeta del Catálogo Unificado[cite: 110, 111]. Su propósito exclusivo es permitir al Administrador actualizar las especificaciones, fotografías, precios diarios, descripciones y existencias físicas de un artículo previamente registrado en el sistema[cite: 111].
* **Elementos de la Interfaz:**[cite: 111]
  1. **Cabecera del Panel:**[cite: 111]
     * **Etiqueta Superior:** Categoría organizativa "INVENTARIO" en color verde corporativo (`#087f5b`)[cite: 111].
     * **Título:** Encabezado principal "Editar mobiliario"[cite: 111].
     * **Control de Cierre:** Botón circular con icono de aspa (`×`) en la esquina superior derecha para descartar la edición y cerrar el contenedor sin guardar cambios[cite: 111].
  2. **Área de Gestión de Fotografía:**[cite: 111]
     * **Contenedor superior con la vista previa de la imagen actual del producto (ej. Silla Tiffany)[cite: 111].**
     * **Botón de Reemplazo:** Control interactivo superpuesto rotulado como Cambiar foto del producto con icono de lápiz, que permite explorar el equipo o arrastrar un nuevo archivo de imagen para actualizar la fotografía principal del inventario[cite: 111].
  3. **Campos del Formulario de Edición (Pre-llenados):**[cite: 111]
     * **Nombre del mobiliario:** Campo de texto editable que muestra el nombre comercial vigente (ej. "Silla Tiffany")[cite: 111].
     * **Categoría:** Menú desplegable (*dropdown*) para reasignar la clasificación del producto entre las opciones disponibles (ej. "Sillas")[cite: 111].
     * **Precio por día ($):** Campo de entrada numérico pre-llenado con la tarifa diaria actual de alquiler (ej. "85")[cite: 111].
     * **Stock disponible:** Campo numérico que especifica el volumen total de unidades físicas registradas en almacén (ej. "120")[cite: 112].
     * **Descripción:** Área de texto multilínea (*textarea*) con el detalle técnico o comercial del mueble (ej. "Silla Tiffany para eventos sociales y corporativos.")[cite: 112].
  4. **Botones de Acción Inferiores:**[cite: 112]
     * **Cancelar:** Botón secundario con borde sutil para desestimar la edición y regresar al Catálogo[cite: 112].
     * **Guardar cambios:** Botón de llamada a la acción primario y destacado en color verde corporativo (`#087f5b`) con icono de verificación (`✓`), encargado de aplicar la actualización de datos e imagen en la base de datos y refrescar la tarjeta del Catálogo en tiempo real[cite: 112].
* **Comportamiento y Reglas de Negocio:**[cite: 112]
  * **Acceso Exclusivo de Gestión:** A diferencia del modal de detalle para rentas, este panel activa la edición de los campos del objeto en el sistema[cite: 112].
  * **Persistencia Inmediata:** Al presionar Guardar cambios, el sistema actualiza el registro del inventario y refleja de inmediato los nuevos valores tanto en la vista del Administrador como en la disponibilidad para futuras rentas[cite: 112].

#### 1.3.2.3 Módulo: Barra Flotante de Resumen de Pedido y Cierre[cite: 112]
<img width="1207" height="135" alt="image" src="https://github.com/user-attachments/assets/8f400255-8721-4dad-bd62-6f900add15ce" />

* **Descripción General:** Es un componente visual flotante y persistente que se despliega automáticamente en el margen inferior de la vista del Catálogo Unificado inmediatamente después de confirmar la adición de uno o más artículos al pedido desde el modal de detalle[cite: 112, 113]. Su función principal es mostrar el cálculo acumulado en tiempo real de las unidades seleccionadas y el costo diario total, proporcionando un punto de acceso directo hacia la pantalla final de captura de datos y confirmación de la renta[cite: 113].
* **Elementos de la Interfaz:**[cite: 113]
  1. **Contenedor Flotante (Floating Dock):**[cite: 113]
     * Un panel horizontal superpuesto sobre el grid del catálogo, diseñado en color verde corporativo (`#087f5b`) con bordes curvados y sombra sutil de elevación[cite: 113].
  2. **Panel de Información Acumulada (Extremo Izquierdo):**[cite: 113]
     * **Contador de Unidades:** Texto secundario en color blanco que especifica el número total de muebles o piezas agregadas a la orden activa (ej. "5 artículos seleccionados")[cite: 113].
     * **Monto Subtotal Calculado:** Importe numérico en tipografía destacada y negrita que suma la tarifa por jornada de todos los elementos añadidos (ej. "$425 por día")[cite: 113].
  3. **Botón de Cierre de Pedido (Extremo Derecho):**[cite: 113]
     * Un botón interactivo con formato de píldora en fondo blanco brillante, rotulado en texto verde corporativo como Finalizar pedido y acompañado de un icono de flecha hacia la derecha ($\rightarrow$)[cite: 113].
* **Comportamiento y Reglas de Negocio:**[cite: 113]
  * **Retorno Fluido:** Permite que el usuario permanezca en la pantalla principal del Catálogo para seguir eligiendo más mobiliario (mesas, salas lounge, toldos) sin interrumpir su navegación ni forzarlo a salir de la vista[cite: 113].
* **Transición al Checkout:** Al hacer clic en Finalizar pedido, la plataforma despliega el formulario final para la captura obligatoria del nombre del cliente, teléfono a 10 dígitos, dirección de entrega, fechas/horas exactas y la comprobación de alertas de empalme logístico[cite: 111].

#### 1.3.2.4 Módulo: Panel / Drawer de Alta de Nuevo Mobiliario[cite: 111]
<img width="1901" height="833" alt="image" src="https://github.com/user-attachments/assets/31d4c4e5-b0cd-40a6-9a17-d37fa6b08356" />

* **Descripción General:** Es un contenedor flotante de tipo panel lateral (*drawer*) que se despliega desde el margen derecho de la pantalla al hacer clic en el botón `+ Nuevo mobiliario` ubicado en el encabezado del Catálogo Unificado[cite: 111]. Su objetivo principal es permitir al Administrador registrar nuevos elementos en el inventario corporativo, definiendo sus especificaciones técnicas, tarifa diaria de alquiler, stock inicial disponible y la fotografía correspondiente[cite: 111].
* **Elementos de la Interfaz:**[cite: 111]
  1. **Cabecera del Panel:**[cite: 111]
     * **Etiqueta Superior:** Categoría organizativa "INVENTARIO" redactada en verde corporativo (`#087f5b`)[cite: 111].
     * **Título:** Encabezado principal "Nuevo mobiliario"[cite: 111].
     * **Control de Cierre:** Botón circular con icono de aspa ($\times$) situado en la esquina superior derecha para cancelar el proceso y cerrar el panel[cite: 112].
  2. **Área de Carga de Fotografía (Dropzone):**[cite: 112]
     * **Contenedor de Arrastre:** Recuadro delimitado por un borde punteado destinado a la carga de la imagen del producto[cite: 112].
     * **Instrucción de Carga:** Texto principal en verde corporativo "Subir foto del producto" acompañado de la nota de especificación técnica: "PNG o JPG · Máximo 5 MB"[cite: 112].
  3. **Campos del Formulario de Registro:**[cite: 112]
     * **Nombre del mobiliario:** Campo de entrada de texto para capturar el nombre comercial con marcador de posición (*placeholder*) de ejemplo: "Ej. Mesa imperial"[cite: 112].
     * **Categoría:** Menú desplegable (*dropdown*) para clasificar el tipo de mueble (ej. "Sillas", "Mesas", "Salas Lounge")[cite: 112].
     * **Precio por día ($):** Campo numérico para definir la tarifa diaria por unidad[cite: 112].
     * **Stock disponible:** Campo numérico para ingresar la cantidad de unidades físicas iniciales en almacén[cite: 112].
     * **Descripción:** Área de texto libre (*textarea*) para redactar las especificaciones y características del mobiliario[cite: 112].
  4. **Botones de Acción Inferiores:**[cite: 112]
     * **Cancelar:** Botón secundario con borde neutral para descartar la información ingresada y cerrar la ventana[cite: 112].
     * **Guardar cambios:** Botón de llamada a la acción primario en verde corporativo (`#087f5b`) con icono de verificación ($\checkmark$), encargado de dar de alta el objeto en la base de datos[cite: 113].
* **Comportamiento y Reglas de Negocio:**[cite: 113]
  * **Validación de Formularios:** Todos los campos principales (Nombre, Categoría, Precio, Stock e Imagen) son obligatorios para garantizar la integridad de los datos en las búsquedas y cálculos de rentas[cite: 113].
  * **Actualización en Tiempo Real:** Al presionar Guardar cambios, el sistema procesa el alta, cierra el panel lateral y actualiza la cuadrícula del Catálogo en tiempo real, agregando la nueva tarjeta con su respectiva fotografía e indicando las existencias creadas[cite: 113].

---

### 1.3.3 Módulo: Historial de Rentas[cite: 113]
<img width="1906" height="822" alt="image" src="https://github.com/user-attachments/assets/b5e1838b-bb9c-4f5a-ba6d-e9599bf3ccf6" />

* **Descripción General:** Es la interfaz de consulta y trazabilidad histórica que permite al Administrador auditar, filtrar y supervisar todos los movimientos de entregas y devoluciones de mobiliario registrados en el sistema[cite: 113]. Ofrece controles temporales dinámicos para organizar la información por periodos específicos y estados logísticos[cite: 113].
* **Elementos de la Interfaz:**[cite: 113]
  1. **Encabezado de la Sección:**[cite: 114]
     * **Título y Subtítulo:** Encabezado principal "Historial de rentas" acompañado de la descripción de apoyo "Consulta y filtra todos los movimientos registrados."[cite: 114]
  2. **Barra de Herramientas y Filtros Temporales:**[cite: 114]
     * **Selector de Periodo (Pestañas de Agregación):** Botones de alternancia para estructurar la vista en "Por Día", "Por Semana" y "Por Mes" (destacado activo en verde corporativo `#087f5b`)[cite: 114].
     * **Campo de Fecha de Consulta:** Input interactivo con icono de calendario para establecer el punto de corte o fecha de referencia (ej. 20/06/2026)[cite: 114].
     * **Selector de Criterio Operativo (Dropdown):** Menú desplegable para alternar la visualización de la tabla entre "Filtrar por: Fecha de Entrega" y "Filtrar por: Fecha de Devolución"[cite: 114].
  3. **Cabecera del Listado Activo:**[cite: 114]
     * Muestra el título correspondiente a la vista filtrada (ej. "Entregas programadas"), el conteo numérico de coincidencias ("3 operaciones para el periodo seleccionado") y una insignia identificadora con la pastilla del rango seleccionado (ej. Por Mes)[cite: 114].
  4. **Tabla de Datos de Operaciones:**[cite: 114]
     * **Estructura de Columnas:** Cabeceras organizadas por FOLIO, CLIENTE, FECHA DE ENTREGA (o devolución según el filtro activo), ARTÍCULOS y ESTADO[cite: 114].
     * **Filas de Registro:**[cite: 114]
       * **Folio:** Identificador único del contrato en negrita (ej. RF-2047, RF-2046, RF-2045)[cite: 115].
       * **Cliente:** Nombre completo o razón social del titular del evento (ej. Sofía Herrera, Grupo Nativa, Ricardo Salas)[cite: 115].
       * **Fecha de Entrega:** Estampa de fecha abreviada y hora asignada (ej. 20 Jun · 12:00, 19 Jun · 10:30, 18 Jun · 16:00)[cite: 115].
       * **Artículos:** Síntesis del mobiliario asignado a la orden (ej. 40 sillas, 5 mesas; 2 salas lounge; 60 sillas Tiffany)[cite: 115].
       * **Estado (Badges de Estatus):** Pastillas de color diferenciadas para identificar la etapa logística del pedido:[cite: 115]
         * Por entregar (Pastilla en tono durazno/naranja)[cite: 115].
         * En renta (Pastilla en tono azul)[cite: 115].
         * Completada (Pastilla en tono verde suave)[cite: 115].
* **Comportamiento y Reglas de Negocio:**[cite: 115]
  * **Filtrado Dinámico:** Al cambiar la opción del selector "Filtrar por", la tabla actualiza inmediatamente sus filas para mostrar de forma exclusiva las operaciones de Entrega o las de Devolución, modificando también la cabecera correspondiente[cite: 115].
  * **Consistencia de Selección:** El rango temporal activo (Por Día, Por Semana, Por Mes) recalcula automáticamente la cantidad total de operaciones mostradas y actualiza la pastilla de filtro[cite: 115].

---

### 1.3.4 Módulo: Finalizar Pedido / Datos de la Renta[cite: 116]
<img width="1896" height="827" alt="image" src="https://github.com/user-attachments/assets/15fa8307-55b6-450c-aa2b-937392245e1f" />
<img width="1863" height="848" alt="image" src="https://github.com/user-attachments/assets/c555ca6d-c35c-44f7-9c31-572ba4963249" />


* **Descripción General:** Es la interfaz de cierre y checkout que recopila la información del cliente, la ubicación del evento y el rango temporal exacto de la operación (entrega y devolución)[cite: 116]. Permite validar en tiempo real la disponibilidad física en almacén antes de emitir la orden final[cite: 116].
* **Elementos de la Interfaz:**[cite: 116]
  1. **Encabezado y Control de Retorno:**[cite: 116]
     * **Etiqueta y Título:** Muestra la categoría superior "FINALIZAR PEDIDO", el título principal "Datos de la renta" y el botón de acción en la esquina superior derecha $\times$ Volver al catálogo para regresar a la selección de inventario[cite: 116, 117].
  2. **Bloque 1: Datos del Cliente (Formulario Superior):**[cite: 117]
     * **Cabecera de Módulo:** Icono de usuario en verde corporativo (`#087f5b`), título "Datos del cliente" y subtítulo "Información de contacto y entrega."[cite: 117]
     * **Nombre del cliente (*):** Campo de entrada obligatorio para el titular del contrato (ej. "Laura Méndez")[cite: 117].
     * **Teléfono (*):** Campo numérico obligatorio a 10 dígitos (ej. "5512345678")[cite: 117].
     * **Correo electrónico:** Campo de entrada opcional (ej. "correo@ejemplo.com")[cite: 117].
     * **Dirección de entrega (*):** Campo amplio con icono de ubicación (pin) para el domicilio del evento (ej. "Av. Jardines 420, Col. Del Valle, Monterrey, N.L.")[cite: 117].
  3. **Bloque 2: Fechas y Horas (Formulario Inferior):**[cite: 117]
     * **Cabecera de Módulo:** Icono de calendario en contenedor circular verde (`#087f5b`), título "Fechas y horas" y la leyenda explicativa "Ambos horarios son obligatorios."[cite: 117]
     * **Fecha y hora de entrega (*):** Selector dinámico con calendario/reloj integrado para definir el momento exacto en que el equipo debe llegar a la ubicación (ej. 20/06/2026 12:30 p.m.)[cite: 117].
     * **Fecha y hora de devolución (*):** Selector dinámico con calendario/reloj integrado para programar la recolección del mobiliario (ej. 20/06/2026 08:00 p.m.)[cite: 117].
  4. **Botón Principal de Acción (Procesamiento de Orden):**[cite: 118]
     * **Confirmar Renta:** Botón primario de ancho completo destacado en verde corporativo (`#087f5b`) con icono de verificación ($\checkmark$), rotulado como $\checkmark$ Confirmar renta[cite: 118].
  5. **Panel Lateral de Resumen del Pedido (Persistente):**[cite: 118]
     * **Resumen de Contenido:** Título "Resumen del pedido", miniatura fotográfica del producto, costo unitario (ej. Silla Tiffany $85 c/u) y control numérico (Stepper) para ajustar piezas (ej. 4)[cite: 118].
     * **Total Acumulado:** Muestra el costo total por jornada (ej. Total por día: $340)[cite: 118].
     * **Insignia de Validación:** Pastilla informativa en verde suave que ratifica: $\checkmark$ Inventario disponible para estas fechas[cite: 118].
* **Comportamiento y Reglas de Negocio:**[cite: 118]
  * **Doble Validación Temporal (Entrega y Devolución):** El sistema requiere obligatoriamente ambas fechas y horas para calcular el tiempo de ocupación del inventario y verificar que los productos no se traslapen con otros eventos programados[cite: 118].
  * **Control de Empalmes y Confirmación:** Al presionar el botón $\checkmark$ Confirmar renta, la plataforma valida las horas ingresadas contra la agenda global[cite: 118]. Si existe un conflicto de horarios con otra entrega o recolección en un rango menor a 1 hora, despliega la alerta de advertencia ("ATENCIÓN: POSIBLE EMPALME"), permitiendo al Administrador modificar el horario o autorizar la operación de todos modos[cite: 118].
  * **Registro Exitoso:** Una vez autorizada la confirmación, se genera el folio del contrato (ej. RF-2048) y la tarea se distribuye automáticamente en la agenda del Dashboard y en el Historial[cite: 119].

#### 1.3.4.1 Módulo: Modal de Advertencia de Empalme Logístico[cite: 119]
<img width="1252" height="793" alt="image" src="https://github.com/user-attachments/assets/59aebdfa-1f81-46e5-9155-8c792b5908e8" />

* **Descripción General:** Es un contenedor flotante de tipo modal de alta prioridad que se superpone dinámicamente sobre la pantalla de Finalizar Pedido en caso de que el algoritmo de disponibilidad detecte un conflicto o proximidad de horario (menor o igual a 1 hora, antes o después) con otra entrega o recolección previamente agendada[cite: 119]. Su objetivo es prevenir colapsos en la ruta de trabajo sin bloquear de forma rígida la libertad operativa del Administrador[cite: 119].
* **Elementos de la Interfaz:**[cite: 119]
  1. **Cabecera e Iconografía de Alerta:**[cite: 119]
     * **Icono de Advertencia:** Símbolo gráfico de triángulo de precaución sobre un contenedor circular amarillo suave (`#fffbe6`)[cite: 119].
     * **Etiqueta Categórica:** Texto superior en negrita de color naranja de alerta (`#d86b00`): "ATENCIÓN: POSIBLE EMPALME"[cite: 119].
     * **Título Principal:** Encabezado descriptivo en tipografía destacada "Hay otra entrega cercana"[cite: 119].
  2. **Cuerpo Informativo y Ficha de Conflicto:**[cite: 119]
     * **Texto de Diagnóstico:** Mensaje explicativo que calcula y notifica el margen de tiempo exacto entre ambas operaciones (ej. "Ya existe una entrega programada a las 12:00 PM, solo 30 minutos antes de esta renta.")[cite: 119].
     * **Ficha de Evento Existente (Tarjeta de Empalme):** Recuadro destacado sobre fondo amarillo cálido que incluye un icono de reloj, el título "Entrega existente" y la síntesis con la hora y ubicación del compromiso previo (ej. 12:00 PM · Col. Jardines)[cite: 119].
     * **Instrucción Operativa:** Leyenda guía inferior que orienta las acciones del usuario: "Puedes modificar el horario o continuar si el equipo puede realizar ambas entregas."[cite: 119].
  3. **Botones de Decisión Operativa:**[cite: 119]
     * **Cancelar / Modificar:** Botón secundario con borde neutral que cierra la advertencia y conserva al Administrador en el formulario para realizar ajustes[cite: 119].

---

### 1.3.4.2 Módulo: Pantalla de Confirmación de Renta / Pedido Registrado[cite: 121]
<img width="1898" height="836" alt="image" src="https://github.com/user-attachments/assets/88bdef70-b85f-40a0-9a96-154b394db008" />

* **Descripción General:** Es la pantalla de cierre y retroalimentación visual positiva que se despliega inmediatamente después de procesar la creación de una orden, ya sea autorizada directamente o tras confirmar la exención en el modal de empalme logístico[cite: 121]. Su función es certificar la asignación del número de contrato (folio), validar la actualización en tiempo real de las existencias en almacén y proporcionar un acceso directo de retorno al centro de control operativo[cite: 121].
* **Elementos de la Interfaz:**[cite: 121]
  1. **Barra de Navegación Superior (Persistente):**[cite: 121]
     * Conserva la Top Navbar corporativa con el logotipo de RentFlow, el módulo activo (Catálogo), el identificador "ADMINISTRACIÓN" y el perfil de usuario "Admin Mode"[cite: 121].
  2. **Bloque Gráfico de Estatus Exitoso:**[cite: 121]
     * **Insignia Central de Verificación:** Círculo verde de gran dimensión sobre un contenedor claro, con un icono de marca de verificación blanca (v) centrado[cite: 121].
     * **Etiqueta Categórica:** Texto superior en mayúsculas de color verde corporativo (`#087f5b`): "RENTA CONFIRMADA"[cite: 122].
     * **Título Principal:** Encabezado descriptivo en tipografía limpia y destacada "PEDIDO REGISTRADO"[cite: 122].
  3. **Identificador de Contrato y Confirmación Operativa:**[cite: 122]
     * **Folio Único Asignado:** Resaltado tipográfico en negrita y verde corporativo con la clave única de la transacción (ej. Folio RF-2048)[cite: 122].
     * **Texto de Diagnóstico:** Mensaje informativo que certifica las acciones automáticas ejecutadas por el sistema: "La renta fue agregada al calendario operativo y el inventario quedó actualizado."[cite: 122]
  4. **Fichas de Metadatos del Registro (Pastillas de Resumen):**[cite: 122]
     * **Fecha de Evento Agendado:** Recuadro blanco con icono de calendario que muestra la fecha y hora de entrega confirmada (ej. 20 de junio · 12:30 p.m.)[cite: 122].
     * **Estatus Operativo:** Recuadro blanco con icono de paquete que certifica el estatus actual del pedido (ej. Pedido confirmado)[cite: 122].
  5. **Control Único de Navegación:**[cite: 122]
     * **Volver al Inicio:** Botón de llamada a la acción primario y centrado en verde corporativo (`#087f5b`) con icono de flecha hacia la derecha (->), encargado de redirigir al Administrador hacia el Dashboard principal[cite: 122].
* **Comportamiento y Reglas de Negocio:**[cite: 122]
  * **Generación de Folio Correlativo:** El sistema calcula y asigna automáticamente una clave alfanumérica única (ej. RF-2048) que vinculará los datos del cliente, la dirección, las fechas de entrega/devolución y el listado de mobiliario retenido[cite: 122].
  * **Reserva de Inventario en Tiempo Real:** Las unidades físicas seleccionadas en la orden son descontadas o bloqueadas del stock disponible para la ventana de fechas del evento, actualizando de inmediato la disponibilidad en las tarjetas del Catálogo[cite: 123].
  * **Distribución Logística:** La nueva tarea se inserta de forma automática en la columna de "Entregas de hoy" (o en la agenda semanal correspondiente) del Dashboard, así como en el módulo de Historial de Rentas[cite: 123].
  * **Restablecimiento del Estado:** Al hacer clic en Volver al inicio ->, la aplicación limpia el estado temporal del carrito de compras/pedido, cierra el flujo de creación de renta y regresa al Administrador al panel de control operativo[cite: 123].

---

### 1.3.5 Mapa de Conexión de Vistas (Estructura de Transiciones)[cite: 123]
<img width="2175" height="1244" alt="image" src="https://github.com/user-attachments/assets/ec670e87-7a69-4f99-b454-383d4a7447d1" />

* **Portal de Acceso (Login Empleado)**[cite: 123]
  * **Pantalla:** Login (Solo para Empleados)[cite: 123]
  * **Acción:** Ingreso de credenciales autorizadas (ej. `jose@rentflow.mx`)[cite: 123].
  * **Destino:** Redirección automática al Inicio / Dashboard Operativo[cite: 124].
* **Dashboard Operativo (Inicio)**[cite: 124]
  * **Pantalla:** Buenos días, [Nombre][cite: 124]
  * **Métricas:** Resumen rápido de entregas, recolecciones y tareas completadas[cite: 124].
  * **Tablero Diario:** Tarjetas de "Entregas de hoy" y "Recolecciones de hoy" con botón directo "Marcar lista" de 1 solo clic[cite: 124].
  * **Agenda Semanal:** Desplazamiento horizontal para consultar el "Resto de la semana"[cite: 124].
  * **Acción Principal:** Al presionar `+ Nueva renta` -> Traslada al Catálogo de Selección de Mobiliario[cite: 124].
* **Flujo de Nueva Renta (Proceso Integrado de 3 Pasos)**[cite: 124]
  * **Paso 1: Selección de Mobiliario (Productos)**[cite: 124]
    * Muestra el grid de productos con buscador y filtros (Sillas, Mesas, Toldos, Salas Lounge)[cite: 124].
    * Clic en tarjeta de producto -> Abre el modal de Detalle del Producto (Foto ampliada, descripción, precio por día, stock disponible y stepper de cantidad)[cite: 124].
    * Al dar clic en `+ Agregar al pedido` -> Cierra el modal y regresa al Catálogo, activando la Barra Flotante Inferior con el total acumulado y el botón Continuar al pedido[cite: 124].
  * **Paso 2: Datos del Pedido (Datos)**[cite: 124]
    * **Formulario de captura:** Fechas/Horas obligatorias (Entrega Y Devolución), Nombre del cliente, Teléfono (10 dígitos), Correo (opcional) y Dirección de entrega[cite: 124].
    * Clic en Verificar y confirmar renta -> Dispara la comprobación de disponibilidad y agenda[cite: 125].
  * **Paso 3: Confirmación y Alerta (Confirmar)**[cite: 125]
    * Si existe proximidad temporal (<= 1 hora) -> Despliega el modal de advertencia "ATENCIÓN: POSIBLE EMPALME"[cite: 125].
    * Al presionar Aceptar de todos modos -> Genera el folio (ej. RF-2048) y muestra la pantalla de Pedido Registrado[cite: 125].
    * Clic en Volver al inicio -> Regresa al Dashboard limpiando el carrito[cite: 125].
* **Punto de Salida**[cite: 125]
  * En la barra superior, al hacer clic en "Cerrar sesión", finaliza la sesión activa y redirige al Login[cite: 125].

---

## 1.4 Vistas de Empleado/Ayudante[cite: 125]

https://www.figma.com/make/kexZmmhWIxSB7MvojqXDBh/RentFlow-empleados?fullscreen=1&t=q5bVyQ9KtfOK369N-1&code-node-id=0-6

### 1.4.1 Módulo: Panel Operativo / Inicio[cite: 125]
<img width="1873" height="838" alt="image" src="https://github.com/user-attachments/assets/9a717a9d-4452-4154-b38e-b4ae551e16c8" />
<img width="1887" height="846" alt="image" src="https://github.com/user-attachments/assets/8e1033f4-50f3-4010-8f9c-864517a818c8" />


* **Descripción General:** Es el centro de control logístico e informativo para el rol de Empleado, diseñado para gestionar tanto las tareas inmediatas de la jornada activa como para consultar la planificación temporal del resto de la semana a través de un carrusel dinámico de desplazamiento horizontal[cite: 127].
* **Elementos de la Interfaz:**[cite: 127]
  1. **Barra de Navegación Superior (Top Navbar — Persistente):**[cite: 127]
     * **Identidad de Rol:** Isotipo e imagotipo de RentFlow con el distintivo inferior "EMPLEADOS"[cite: 127].
     * **Navegación Central:** Pestaña Inicio (activa con fondo blanco e icono de casa), acceso `+ Nueva renta` y el acceso directo Pedido con icono de carrito[cite: 127].
     * **Perfil Operativo:** Extremo derecho con avatar (JM), nombre del empleado (José M.) y el botón "CERRAR SESIÓN"[cite: 127].
  2. **Encabezado y Resumen Diario (Bloque Superior):**[cite: 127]
     * **Fecha y Carga de Trabajo:** Texto en verde corporativo (`#087f5b`) "MIÉRCOLES, 17 DE JUNIO", saludo "Buenos días, José" y el recordatorio "Tienes 4 tareas programadas para hoy."[cite: 127]
     * **Acción Primaria:** Botón destacado en verde sólido `+ Nueva renta`[cite: 127].
     * **Barra de KPIs Diarios:** Ficha horizontal limpia con el desglose del día: 2 entregas, 2 recolecciones y 0 completadas[cite: 127].
     * **Tablero de Trabajo Diario:** Organizado en dos columnas con tarjetas independientes:[cite: 127]
       * **Entregas de hoy (Fondo azul suave):** Evento agendado a las 9:00 AM (Boda — Salón Primavera) con su detalle de mobiliario, ubicación y botón v Marcar lista[cite: 127].
       * **Recolecciones de hoy (Fondo morado suave):** Evento agendado a las 4:00 PM (Convención — Grupo Origen) con su detalle y botón v Marcar lista[cite: 127].
  3. **Sección Inferior: Agenda Semanal ("Resto de la semana"):**[cite: 127]
     * **Cabecera de Sección:**[cite: 127]
       * **Etiqueta Categórica:** Texto superior en verde corporativo "AGENDA SEMANAL"[cite: 127].
       * **Título y Guía:** Encabezado principal "Resto de la semana" y la instrucción "Desliza para consultar los próximos días."[cite: 127]
       * **Indicador de Ubicación Operativa:** Pastilla informativa a la derecha con la etiqueta "HOY Mié 17" y el texto "4 tareas arriba", que vincula visualmente esta sección con el tablero superior del día en curso[cite: 127].
     * **Carrusel de Tarjetas Diarias (Desplazamiento Horizontal):**[cite: 127]
       * **Lunes (15 JUN):** Indicador de estatus Completado en verde. Muestra evento concluido de ENTREGA a las 10:00 AM en Salón Magnolia, Centro (50 sillas, 6 mesas)[cite: 127].
       * **Martes (16 JUN):** Indicador de estatus Completado en verde. Muestra evento concluido de DEVOLUCIÓN a las 6:30 PM en Av. Universidad 320 (1 toldo, 40 sillas)[cite: 129].
       * **Jueves (18 JUN):** Indicador de estatus Mañana en verde. Contiene dos compromisos agendados:[cite: 129]
         * **Entrega (tarjeta azul):** 8:30 AM · Club Campestre, Sur (80 sillas Tiffany, 10 mesas)[cite: 129].
         * **Devolución (tarjeta morada):** 5:00 PM · Calle Fresno 90 (2 salas lounge)[cite: 129].
       * **Viernes (19 JUN):** Indicador con la etiqueta 2 tareas. Muestra evento de ENTREGA a las 11:00 AM en Hotel Central, Reforma (12 mesas, 100 sillas)[cite: 129].
       * **Sábado (20 JUN):** Tarjeta en vista previa con bloques de entrega y devolución agendados para el fin de semana[cite: 129].
* **Comportamiento y Reglas de Negocio:**[cite: 129]
  * **Visualización Dinámica de Tareas:** La acción sobre el botón v Marcar lista en el tablero superior incrementa automáticamente el contador de "completadas" y actualiza el estado de la tarea sin recargar la página[cite: 129].
  * **Navegación Temporal Preventiva:** El carrusel horizontal de la agenda semanal permite al empleado anticipar requerimientos de transporte e inventario para los días posteriores (Mañana, 2 tareas) y revisar el historial reciente (Completado)[cite: 129].
  * **Código Semántico de Colores Logísticos:** Se mantiene una estricta codificación visual en toda la aplicación: azul para eventos de ENTREGA (salida de equipo) y morado para eventos de DEVOLUCIÓN (retorno de equipo a almacén)[cite: 129].

---

### 1.4.2 Módulo: Selección de Mobiliario / Catálogo de Nueva Renta[cite: 129]

<img width="1873" height="837" alt="image" src="https://github.com/user-attachments/assets/47f40916-b618-4e00-a83b-badcd62cf2bf" />
<img width="1853" height="833" alt="image" src="https://github.com/user-attachments/assets/12ce0893-a64f-4fe4-9cfa-3088fc1191ab" />


* **Descripción General:** Es la interfaz de exploración y selección de inventario diseñada para el rol de Empleado[cite: 129]. Permite consultar la disponibilidad física de mobiliario en almacén, aplicar filtros dinámicos por categoría o texto, y seleccionar los artículos requeridos para estructurar una nueva renta de forma ágil y sin acceso a funciones administrativas[cite: 129].
funciones de edición de catálogo.

* **Elementos de la Interfaz:**
  1. **Navegación y Contexto de Operación:**
     * **Enlace de Retorno:** Control superior `< Inicio` para cancelar el proceso de captura y regresar directamente al Dashboard principal.
     * **Barra de Navegación Superior (Top Navbar):** Mantiene activa la pestaña `+ Nueva renta` (destacada en contenedor blanco) para indicar el estado del flujo.
  2. **Encabezado y Barra de Filtros:**
     * **Título y Subtítulo:** Etiqueta superior categórica *"NUEVA RENTA"*, encabezado principal *"Elige el mobiliario"* e instrucción de uso *"Busca por nombre o selecciona una categoría."*
     * **Buscador Dinámico e Indulgente:** Campo de entrada amplio con icono de lupa (`Buscar sillas, mesas, toldos...`) e indicativo de regla de usabilidad: *"✓ Encuentra productos aunque escribas sin acentos, con mayúsculas o solo una parte."*
     * **Selector por Categorías (Píldoras/Chips):** Botones de filtrado rápido para segmentar el catálogo en *"Todos"* (activo en verde sólido `#087f5b`), *"Sillas"*, *"Mesas"*, *"Toldos"* y *"Salas Lounge"*.
  3. **Cuadrícula de Productos (Grid de Selección):**
     * **Indicador de Resultados:** Leyenda superior que contabiliza los ítems visibles (ej. *"6 productos encontrados"*).
     * **Tarjetas de Mobiliario:** Disposición de productos en tres columnas conteniendo:
       * *Fotografía del Producto:* Imagen del artículo.
       * *Nombre Comercial:* Denominación del mueble en negrita (ej. *Silla Tiffany, Mesa redonda, Toldo blanco*).
       * *Insignia de Existencias (Stock):* Badge en verde corporativo que refleja el total de unidades físicas disponibles en tiempo real (ej. `120 disponibles`, `32 disponibles`, `8 disponibles`).

* **Comportamiento y Reglas de Negocio:**
  * **Restricción de Privilegios Operativos (Vista de Selección):** A diferencia de la interfaz de Administrador, el perfil de Empleado no muestra botones de `+ Nuevo mobiliario` ni la opción `Editar` en las tarjetas. La pantalla está acotada estrictamente a la consulta y agregación de productos a la orden activa.
  * **Búsqueda Insensible a Formato (Fuzzy Search):** El algoritmo de filtrado procesa entradas de texto en tiempo real omitiendo diferencias entre mayúsculas, minúsculas, tildes o términos parciales para agilizar la atención en mostrador.
  * **Interacción para Selección:** Al hacer clic sobre cualquier área de la tarjeta de producto, la plataforma despliega la ventana flotante de *Detalle del Producto*, donde el empleado especifica la cantidad deseada y la añade al carrito de la renta.

---

#### 1.4.3.1 Módulo: Detalle y Selección de Producto
<img width="1863" height="821" alt="image" src="https://github.com/user-attachments/assets/e2d610ba-9c47-4148-833b-e6c8465fe927" />


* **Descripción General:** Es la interfaz detallada de ficha técnica y especificación de cantidad que se despliega al seleccionar un artículo dentro del Catálogo de Renta. Permite al empleado revisar la descripción comercial, verificar las tarifas y el volumen disponible en almacén, y configurar el número de unidades que se integrarán al pedido activo.
* **Elementos de la Interfaz:**
  1. **Navegación Superior (Top Navbar — Persistente):**
     * Mantiene visible la identidad de rol (RentFlow EMPLEADOS), el perfil activo (José M.) y el indicador de flujo en la pestaña `+ Nueva renta`.
  2. **Visualizador Gráfico (Sección Izquierda):**
     * Contenedor de alta resolución que exhibe la fotografía en plano general del mobiliario seleccionado (ej. Silla Tiffany) sobre fondo neutral.
  3. **Ficha Informativa del Mobiliario (Sección Derecha):**
     * **Categoría Superior:** Etiqueta en verde corporativo (`#087f5b`) que clasifica el tipo de producto (ej. SILLAS).
     * **Nombre del Producto:** Encabezado principal en tipografía destacada (ej. Silla Tiffany).
     * **Descripción Técnica y Comercial:** Bloque de texto descriptivo que especifica las características estéticas y funcionales del ítem ("Silla blanca y elegante para bodas, cenas y celebraciones. Ligera y fácil de transportar.").
     * **Métricas Operativas:** Recuadros pareados con indicadores clave:
       * Renta por día: Tarifa unitaria fija por jornada (ej. $85).
       * Stock disponible: Volumen físico real en almacén libre de compromisos para la fecha (ej. 120 unidades).
  4. **Controles de Configuración de Pedido:**
     * **Selector Numérico (Stepper):** Control interactivo compuesto por un botón decremental (-), un campo de visualización/entrada de cantidad (predeterminado en 1) y un botón incremental (+).
     * **Botón de Acción Primario:** Botón de ancho completo en verde corporativo (`#087f5b`) rotulado como `+ Agregar al pedido`.

* **Comportamiento y Reglas de Negocio:**
  * **Límite de Selección por Existencias:** El valor máximo permitido en el stepper de cantidad está condicionado por la métrica de Stock disponible, evitando la captura de unidades excedentes a la capacidad física del almacén.
  * **Retorno Automático al Catálogo:** Al presionar `+ Agregar al pedido`, el sistema guarda las unidades seleccionadas en la memoria temporal de la orden, cierra la vista de detalle y retorna automáticamente al empleado a la pantalla principal del Catálogo.
  * **Navegación Fluida No Interruptiva:** El cierre de la ficha técnica no redirige al formulario de finalización, lo que permite al personal operativo continuar seleccionando mobiliario complementario (mesas, mantelería, salas lounge) dentro de una misma sesión de captura.

---

#### 1.4.3.2 Módulo: Barra Flotante de Resumen de Pedido
<img width="967" height="112" alt="image" src="https://github.com/user-attachments/assets/832c941b-ccd3-4317-b33b-805625c654a5" />


* **Descripción General:** Es un componente de interfaz persistente de tipo contenedor flotante (*floating dock*) que se despliega dinámicamente en el margen inferior de la vista de Catálogo inmediatamente después de incorporar un producto a la orden. Su objetivo es ofrecer visibilidad constante del volumen total de piezas seleccionadas y el importe acumulado por jornada, sirviendo como control de avance hacia la captura de datos del pedido sin interrumpir la exploración del inventario.
* **Elementos de la Interfaz:**
  1. **Contenedor Flotante (Floating Card):**
     * Panel horizontal elevado sobre el fondo del catálogo con estructura de bordes suavemente redondeados en color blanco brillante y sombra sutil de elevación.
  2. **Bloque Informativo de Carrito (Sección Izquierda):**
     * **Icono Categórico:** Símbolo gráfico de carrito de compras.
     * **Conteo de Unidades:** Encabezado numérico en negrita que especifica el volumen total de muebles añadidos al pedido activo (ej. `4 artículos`).
     * **Monto Diario Subtotal:** Subtítulo informativo en tono gris que refleja la suma calculada de las tarifas unitarias por jornada (ej. `$340 por día`).
  3. **Control de Avance Operativo (Sección Derecha):**
     * **Botón de Acción Primario:** Botón interactivo en fondo verde corporativo (`#087f5b`) con bordes redondeados, rotulado con el texto de avance `Continuar al pedido`.

* **Comportamiento y Reglas de Negocio:**
  * **Persistencia y Reactividad:** La barra permanece fija en la parte inferior de la pantalla mientras exista al menos una unidad retenida en la sesión temporal del pedido. Cada adición o reajuste de piezas desde la ficha técnica de un producto actualiza el contador de artículos y el subtotal monetario en tiempo real.
  * **Exploración Continua:** No bloquea la navegación ni fuerza el cierre inmediato de la transacción, permitiendo al personal operativo cambiar de categoría (ej. pasar de sillas a mesas o salas lounge) para sumar más mobiliario antes de finalizar.
  * **Transición al Formulario de Datos:** Al hacer clic en el botón `Continuar al pedido`, el sistema redirige automáticamente a la pantalla de captura de los datos del cliente, dirección de entrega y validación obligatoria del rango de fechas/horas de entrega y devolución.

---

### 1.4.3 Módulo: Captura de Datos del Pedido / Checkout
<img width="1875" height="838" alt="image" src="https://github.com/user-attachments/assets/32ee9a84-9ca0-4eba-83ea-20c3dd77a3ae" />
<img width="1902" height="811" alt="image" src="https://github.com/user-attachments/assets/d7eed55f-949e-4a42-a877-23e37b8cc666" />

* **Descripción General:** Es la interfaz de registro y cierre de *checkout* que se despliega al seleccionar el botón de avance desde la barra flotante o el menú de navegación. Su función es estructurar la captura de información mediante una secuencia numerada de dos pasos (Fechas/Horas y Datos del Cliente), coordinando la logística de entrega y calculando el importe final de la renta antes de ejecutar la validación de inventario en servidor.
* **Elementos de la Interfaz:**
  1. **Navegación y Contexto Operativo:**
     * **Enlace de Retorno:** Control superior `< Catálogo` para regresar a la selección de mobiliario sin perder los productos agregados al carrito.
     * **Indicador de Carrito en Navbar:** Mantiene seleccionada la pestaña `Pedido` incorporando una pastilla con el número de ítems acumulados (ej. 4).
  2. **Encabezado del Módulo:**
     * **Etiqueta Categórica:** Texto superior *"NUEVA RENTA"*.
     * **Título y Guía:** Encabezado principal *"Datos del pedido"* y la instrucción *"Completa la información para confirmar la renta."*
  3. **Formulario Principal de Captura (Sección Izquierda):**
     * **Sección 1: Fechas y horas (Bloque Superior Indicado con Nivel 1):**
       * *Instrucción de Negocio:* Subtítulo descriptivo *"Pueden ser el mismo día."*
       * *Fecha y hora de entrega (*):* Campo obligatorio con selector de calendario/reloj integrado para programar la recepción del equipo (ej. `20/06/2026 12:30 p.m.`).
       * *Fecha y hora de devolución (*):* Campo obligatorio con selector de calendario/reloj para definir el retorno del mobiliario a almacén (ej. `20/06/2026 08:00 p.m.`).
     * **Sección 2: Datos del cliente (Bloque Inferior Indicado con Nivel 2):**
       * *Instrucción de Negocio:* Subtítulo descriptivo *"Información para coordinar la entrega."*
       * *A nombre de quién está la renta (*):* Campo de entrada de texto obligatorio para identificar al cliente o titular (ej. *"Laura Méndez"*).
       * *Teléfono (*):* Campo de entrada de datos de contacto obligatorio (ej. *"55 1234 5678"*).
       * *Correo electrónico:* Campo de entrada secundario distinguido con la etiqueta `Opcional`.
       * *Dirección de entrega (*):* Área amplia de entrada de texto obligatoria para registrar la ubicación geográfica del evento (ej. *"Calle Robles 44, Col. Jardines"*).
  4. **Panel Lateral de Resumen y Procesamiento (Sección Derecha):**
     * **Encabezado de Panel:** Título principal *"Resumen del pedido"*.
     * **Ficha de Contenido Ajustable:** Muestra la miniatura fotográfica del producto, nombre (ej. *Silla Tiffany*), costo unitario diario (ej. *$85 c/u*) y un control de tipo Stepper (`- 4 +`) para reajustar piezas en tiempo real.
     * **Subtotal Calculado:** Muestra el monto total por jornada de alquiler (ej. *Total por día $340*).
     * **Botón de Confirmación:** Botón primario de acción en color verde corporativo (`#087f5b`) rotulado como `✓ Verificar y confirmar renta`.
* **Nota Informativa de Sistema:** Leyenda en pie de panel que indica *"Revisaremos disponibilidad y horarios."*

* **Comportamiento y Reglas de Negocio:**
  * **Estructuración Guiada por Pasos (Pasos 1 y 2):** La interfaz divide la entrada de datos en dos bloques secuenciales para reducir la carga cognitiva del personal operativo y evitar omisiones en los datos de contacto o tiempos[cite: 140].
  * **Validación Formativa de Campos Requeridos:** Los campos marcados con asterisco (*) son indispensables para habilitar el procesamiento[cite: 140]. El sistema restringe la confirmación hasta que exista un nombre, teléfono, dirección válida y ambas estampas de tiempo (entrega y devolución)[cite: 140].
  * **Reajuste Dinámico de Unidades:** Modificar el número de piezas desde el *Stepper* del panel lateral recalcula automáticamente el valor de *Total por día* sin necesidad de recargar la página o volver al catálogo[cite: 140].
  * **Disparo del Algoritmo de Disponibilidad y Proximidad:** Al hacer clic en `✓ Verificar y confirmar renta`, el sistema valida la existencia física en almacén para el rango configurado y evalúa si existe un empalme de horarios ($\le 1$ hora) con otras tareas registradas[cite: 140]. En caso de detectar proximidad logística, despliega el modal de advertencia (*"ATENCIÓN: POSIBLE EMPALME"*) previo a emitir el comprobante de confirmación[cite: 140, 141].

---

#### 1.4.3.1 Módulo: Modal de Advertencia de Empalme Logístico[cite: 141]

<img width="1827" height="813" alt="image" src="https://github.com/user-attachments/assets/b4213be6-e179-4580-9475-c9a5063549ec" />


* **Descripción General:** Es una interfaz emergente de validación y control de riesgo que se activa de forma automática sobre el formulario de *Datos del pedido* al momento de presionar el botón de confirmación[cite: 141]. Su propósito es alertar al personal operativo cuando la hora de entrega o devolución programada coincide o se encuentra dentro de un margen crítico de proximidad ($\le 1$ hora, antes o después) con otra tarea existente en la agenda, evitando la saturación de las rutas de trabajo sin bloquear arbitrariamente la operación[cite: 141].
* **Elementos de la Interfaz:**[cite: 141]
  1. **Cabecera e Iconografía de Alerta:**[cite: 141]
     * **Icono de Advertencia:** Símbolo gráfico de triángulo de precaución sobre un contenedor circular amarillo claro (`#fffbe6`)[cite: 141].
     * **Etiqueta Categórica:** Texto superior en negrita de color naranja de alerta (`#d86b00`): *"ATENCIÓN: POSIBLE EMPALME"*[cite: 142].
     * **Título Principal:** Encabezado descriptivo *"Hay otra entrega cercana"*[cite: 142].
  2. **Cuerpo Informativo y Tarjeta de Conflicto:**[cite: 142]
     * **Texto Diagnóstico:** Mensaje explicativo que calcula dinámicamente la diferencia en minutos entre la nueva orden y el compromiso previo (ej. *"Ya existe una entrega programada a las 12:00 PM, solo 30 minutos antes de esta renta."*)[cite: 142].
     * **Ficha de Tarea Existente:** Recuadro destacado sobre fondo amarillo cálido que incluye un icono de reloj, la etiqueta *"Entrega existente"* y la síntesis con la hora y colonia del evento previo (ej. `12:00 PM · Col. Jardines`)[cite: 142].
     * **Guía Operativa:** Texto de ayuda al usuario: *"Puedes modificar el horario o continuar si el equipo puede realizar ambas entregas."*[cite: 142]
  3. **Botones de Decisión Operativa:**[cite: 142]
     * **Cancelar / Modificar:** Botón secundario con borde neutral que cierra la advertencia y mantiene al empleado en el formulario para reajustar los campos de fecha u hora[cite: 142].
     * **Aceptar de todos modos:** Botón primario destacado en color naranja sólido (`#d86b00`), diseñado para forzar la creación de la renta bajo la responsabilidad del usuario[cite: 143].

* **Comportamiento y Reglas de Negocio:**[cite: 143]
  * **Algoritmo de Validación Temporizada ($\pm 1$ Hora):** Durante la verificación, el sistema contrasta la `Fecha y hora de entrega` y `Fecha y hora de devolución` ingresadas contra la base de datos de eventos activos[cite: 143]. Si se identifica cualquier salida o retorno de equipo dentro de una ventana de 60 minutos previos o posteriores, el sistema interrumpe el guardado directo y despliega este modal[cite: 143].
  * **Confirmación Manual de Excepción (*Override* Operativo):** Al seleccionar `Aceptar de todos modos`, el sistema ignora la advertencia, asigna el folio correspondiente (ej. `RF-2048`), descuenta el stock del almacén y agrega la nueva tarea al Dashboard del día[cite: 143].
  * **Retorno Preventivo:** Si el empleado decide presionar `Cancelar / Modificar`, la alerta se cierra sin modificar los datos ni registrar la renta, permitiendo seleccionar una nueva estampa de tiempo que se adecue a la disponibilidad real del transporte[cite: 143].

---

#### 1.4.4 Módulo: Pantalla de Confirmación de Renta / Pedido Registrado[cite: 144]
<img width="1876" height="821" alt="image" src="https://github.com/user-attachments/assets/2cc79d9f-7183-4477-aa27-7a4a314afa37" />

* **Descripción General:** Es la interfaz de cierre y retroalimentación visual positiva que se despliega inmediatamente después de completar el proceso de checkout (ya sea por confirmación directa o tras autorizar la excepción en el modal de empalme logístico)[cite: 144]. Su función principal es notificar al personal operativo el registro exitoso de la orden, desplegar el número de folio correlativo generado por el sistema y proporcionar una acción directa para restablecer la sesión y regresar al panel de control[cite: 144].
* **Elementos de la Interfaz:**[cite: 144]
  1. **Navegación Superior (Top Navbar — Persistente):**[cite: 144]
     * Mantiene la barra corporativa con la identidad de rol (RentFlow EMPLEADOS), el menú de accesos directos (Inicio, `+ Nueva renta`, Pedido) y la identificación del usuario activo (José M.)[cite: 144].
  2. **Contenedor Central de Retroalimentación:**[cite: 144]
     * Tarjeta blanca flotante y centrada sobre el lienzo principal que agrupa la validación del sistema[cite: 144]:
       * **Insignia Gráfica de Verificación:** Círculo destacado en verde corporativo (`#087f5b`) con un icono de marca de verificación blanca (✓) centrado[cite: 145].
       * **Etiqueta Categórica:** Texto superior en mayúsculas y verde corporativo: "RENTA CONFIRMADA"[cite: 145].
       * **Título Principal:** Encabezado descriptivo en tipografía destacada "Pedido registrado"[cite: 145].
       * **Texto Diagnóstico de Confirmación:** Mensaje informativo que ratifica la sincronización de datos: "La renta se guardó correctamente y ya aparece en las tareas del equipo."[cite: 145]
       * **Ficha de Folio de Orden:** Recuadro horizontal en fondo gris claro que contrasta la etiqueta de campo "Folio" con la clave alfanumérica única asignada (ej. RF-2048)[cite: 145].
  3. **Control Único de Navegación:**[cite: 145]
     * **Volver al Inicio:** Botón primario de acción de ancho completo en verde corporativo (`#087f5b`), rotulado claramente como Volver al inicio[cite: 145].

* **Comportamiento y Reglas de Negocio:**[cite: 145]
  * **Generación e Integridad de Folio:** El sistema asigna automáticamente un identificador único (ej. RF-2048) que vincula de manera permanente el registro del cliente, el domicilio de entrega, la estampa de tiempo dual (entrega/devolución) y la relación de ítems retenidos[cite: 145].
  * **Sincronización Logística en Tiempo Real:** Las existencias físicas seleccionadas en el pedido quedan oficialmente bloqueadas en el almacén para las fechas estipuladas, y la orden se inserta dinámicamente en el tablero de trabajo (Entregas de hoy o dentro del carrusel de la agenda semanal según la fecha programada)[cite: 145, 146].
  * **Restablecimiento del Estado de Captura:** Al hacer clic en el botón Volver al inicio, la plataforma vacía la memoria temporal del carrito de compras, destruye la sesión activa del formulario de captura y redirige al empleado al Dashboard principal con el conteo de tareas del día actualizado[cite: 146].

---

### 1.4.5 Arquitectura de Navegación y Diagrama de Flujo[cite: 147]
<img width="885" height="1149" alt="image" src="https://github.com/user-attachments/assets/e9ffeaeb-25a3-4be4-bc0c-eae81d8bc9c0" />

El flujo operativo del rol **Empleado** en **RentFlow** está estructurado como un sistema guiado y desacoplado de las capacidades administrativas[cite: 148]. Su arquitectura prioriza el cumplimiento de tareas logísticas en campo/mostrador y la captura ágil de pedidos sin alterar el inventario global ni gestionar usuarios[cite: 148].

#### Especificación Técnica de Transiciones y Reglas de Estado[cite: 148]

1. **Dashboard Operativo (Pantalla de Inicio)**[cite: 148]
   * **Gestión Diaria:** Permite marcar entregas/recolecciones como completadas con un solo clic sobre `✓ Marcar lista`, actualizando en tiempo real el contador de métricas diarias (Entregas, Recolecciones, Completadas)[cite: 148].
   * **Planificación Semanal:** Ofrece consulta preventiva mediante el carrusel horizontal *"Resto de la semana"* para evaluar eventos futuros (Mañana, 2 tareas)[cite: 148].
   * **Disparo del Flujo:** Al seleccionar `+ Nueva renta` (desde el encabezado o la barra superior), se inicializa una sesión temporal de pedido y se redirige a la selección de mobiliario[cite: 148].
2. **Selección de Mobiliario (Catálogo de Nueva Renta)**[cite: 148]
   * **Filtros e Invariabilidad:** Búsqueda difusa (*Fuzzy Search*) e insensible a formato, junto con filtrado por categorías[cite: 148]. No expone botones de alta (`+ Nuevo mobiliario`) ni edición (`Editar`)[cite: 148].
   * **Interacción:** El clic en una tarjeta despliega el módulo de Detalle y Selección de Producto[cite: 148].
3. **Ficha de Detalle y Módulo de Carrito**[cite: 148]
   * **Validación de Límite:** El control numérico (*Stepper*) valida el tope máximo contra la métrica de Stock disponible[cite: 148].
   * **Proceso de Agregación:** Presionar `+ Agregar al pedido` almacena el ítem en la memoria de sesión, cierra la ficha y retorna al usuario al catálogo, desplegando la Barra Flotante de Resumen (X artículos, $X por día)[cite: 148].
4. **Checkout y Validación de Reglas de Negocio (Datos del Pedido)**[cite: 148]
   * **Captura Secuencial:** Paso 1 (Fechas y Horas obligatorias de entrega Y devolución) y Paso 2 (Nombre del cliente, Teléfono a 10 dígitos, Dirección de entrega y Correo opcional)[cite: 148].
   * **Evaluación de Algoritmo:** Al presionar `✓ Verificar y confirmar renta`, el backend ejecuta dos comprobaciones[cite: 148]:
     1. *Existencia de Inventario:* Verifica disponibilidad física en las fechas seleccionadas[cite: 148].
     2. *Ventana de Empalme ($\le 1$ Hora):* Evalúa la proximidad horaria con otras entregas o recolecciones registradas[cite: 148].
5. **Manejo de Excepciones (Modal de Empalme Logístico)**[cite: 148]
   * **Rama de Modificación:** `Cancelar / Modificar` destruye la alerta y retiene los datos en el formulario para reajustar horarios[cite: 148].
   * **Rama de Autorización (*Override*):** `Aceptar de todos modos` fuerza la creación del registro, descuenta el stock y asigna el folio correlativo[cite: 149].
6. **Cierre de Transacción (Pedido Registrado)**[cite: 149]
   * Despliega la confirmación con el folio único generado (ej. `RF-2048`)[cite: 149].
   * Al hacer clic en `Volver al inicio`, restablece la memoria del carrito, refresca el Dashboard con las nuevas tareas y retorna al inicio[cite: 149].
## 2. Configuración y Parámetros del Entorno de Versiones

Esta sección detalla cómo preparar nuestra computadora antes de empezar a programar, para evitar errores de compatibilidad y proteger nuestros datos.

### 2.1 Configuración Inicial (.gitconfig)

Cada integrante del equipo debe abrir su terminal y ejecutar estos comandos básicos. Esto sirve para que GitHub sepa exactamente quién hizo cada cambio:

* `git config --global user.name "Tu Nombre Completo"`
* `git config --global user.email "tu_correo@uttcampus.edu.mx"`
* `git config --global init.defaultBranch main` (Para que nuestra rama principal siempre se llame 'main').
* `git config --global core.autocrlf true` (Muy importante: Evita errores de saltos de línea, todos usamos windows pero si alguien cambia de computadora se toma en cuenta.).

### 2.2 Archivos de Exclusión (.gitignore)

El archivo `.gitignore` le dice a Git qué archivos NO debe subir a GitHub. Subir cosas innecesarias hace el proyecto pesado y puede exponer contraseñas. En nuestro proyecto ignoraremos:

* **En Angular (Frontend):** Las carpetas `/node_modules` (pesa mucho) y `/dist` (código compilado).
* **En Node.js (Backend):** La carpeta `/node_modules` y el archivo `.env` (donde están las contraseñas).
* **En MySQL (Base de datos):** Cualquier archivo `.sql` que tenga datos reales de clientes o respaldos locales.

### 2.3 Control de Accesos y Seguridad

El repositorio en GitHub será **Privado**. Los permisos se dividen así para proteger el proyecto:

* **Melany (Administradora):** Tiene control total. Es la única que puede aceptar los cambios finales y unirlos a la rama principal (`main`).
* **Diego, Gabriel y Javier (Desarrolladores):** Pueden clonar el proyecto, crear sus propias ramas de trabajo y subir su código, pero NO pueden modificar la rama `main` directamente.

**Protección de la rama principal:**

Nadie puede hacer un `git push` directo a `main`. Todo el código nuevo debe pasar por una revisión obligatoria (Pull Request).

### 2.4 Llaves y Credenciales de Seguridad

Por seguridad de la empresa ficticia (y nuestra calificación), **nunca** subiremos contraseñas a GitHub.

* **Autenticación:** Para conectarnos a GitHub desde la terminal, usaremos un Token de Acceso Personal (PAT) o llaves SSH.
* **Manejo de Contraseñas:** El archivo `.env` que tiene la clave de la base de datos o el secreto del JWT NO se sube. En su lugar, crearemos un archivo llamado `.env.example` con datos falsos (ej. `DB_PASS=tu_contraseña_aqui`) para que cada quien sepa qué variables crear en su propia computadora.

---

## 3. Definición y Diseño del Flujo de Trabajo (Workflow)

### 3.1 Nuestro Modelo: GitHub Flow

Para no complicarnos con sistemas enredados, usaremos **GitHub Flow**. Es un flujo de trabajo sencillo, ideal para equipos ágiles.

Funciona en 3 pasos simples:

1. Creas una rama nueva basada en `main`.
2. Haces tu código y tus *commits* en esa rama.
3. Abres un *Pull Request* para que la Líder revise el código y lo una a `main`.

### 3.2 Nomenclatura de Ramas (¿Cómo nombrar tu rama?)

Para mantener el orden, siempre nombraremos nuestras ramas siguiendo esta regla:

`tipo/nombre-corto`

* `main`: Es la rama principal con el código limpio y funcional. **No se toca directamente.**
* `feature/tu-modulo`: Úsala cuando vas a crear algo nuevo.
  * *Ejemplo Diego:* `feature/login-frontend`
  * *Ejemplo Gabo:* `feature/api-rentas`
* `fix/el-error`: Úsala cuando vas a reparar un bug o error.
  * *Ejemplo:* `fix/error-calculo-horas`

### 3.3 ¿Qué hace cada quién? (Flujo por integrante)

* **Diego:** Solo trabaja en ramas `feature/frontend-...` (Vistas, Angular).
* **Gabriel:** Solo trabaja en ramas `feature/backend-...` (Node.js, Express, rutas).
* **Javier:** Solo trabaja en ramas `feature/db-...` (Tablas MySQL, consultas de stock).
* **Melany:** Revisa que el código de los tres se conecte bien, aprueba los Pull Requests y arma el proyecto final en `main`.

### 3.4 Reglas para hacer Commits

Nuestros mensajes de commit deben ser cortos, claros y decir exactamente qué se hizo.

Usaremos un formato estándar: `tipo: descripción breve`.

* `feat: crea pantalla de inventario` (Para cosas nuevas).
* `fix: corrige validacion de fechas` (Para errores solucionados).
* `docs: actualiza el manual` (Para documentación).
* `chore: instala libreria de angular` (Para configuraciones o instalaciones).

### 3.5 Políticas de Combinación (Gestión de Pull Requests)

Cuando terminas tu tarea, no la unes tú mismo. Haces esto:

1. Subes tu rama a GitHub (`git push origin feature/tu-rama`).
2. Vas a GitHub y le das al botón verde **"Compare & pull request"**.
3. **Checklist antes de avisarle a Melany:**
   * ¿Mi código corre bien en mi compu sin marcar error?
   * ¿Revisé no haber subido el `.env` con contraseñas?
4. Melany revisa el código. Si todo está bien, ella hace el **Merge** (Combinación) usando la opción *Squash and merge* para que el historial quede limpio como un solo cambio. Si hay errores, te dejará comentarios para que lo corrijas.

---

## 4. Diagramas del sistema (Arquitectura / Casos de uso / DER)

### 4.1 Diagrama de Casos de Uso (UML)

Este diagrama representa el comportamiento del sistema RentFlow desde la perspectiva de los actores interactuantes, definiendo los límites del sistema, las jerarquías de acceso y las relaciones formales de inclusión (`<<include>>`) y extensión (`<<extend>>`).

#### 1. Especificación de Actores

* **Administrador:** Usuario con privilegios globales dentro del sistema. Supervisa el inventario corporativo, da de alta y edita mobiliario, consulta métricas de negocio, registra nuevas rentas, autoriza excepciones por empalme logístico y audita el historial operativo por periodos temporales (Día, Semana, Mes).
* **Empleado:** Usuario operativo enfocado en la atención en mostrador/campo y logística diaria. Gestiona la lista de tareas del día (Entregas y Recolecciones), marca estados completados en un solo clic, consulta la agenda semanal y ejecuta el flujo guiado de creación de rentas sin permisos de alteración de inventario.

#### 2. Matriz de Casos de Uso vs. Actores

| Código | Caso de Uso | Administrador | Empleado | Descripción / Regla de Negocio |
| :--- | :--- | :---: | :---: | :--- |
| **CU-01** | Autenticarse en el Sistema | X | X | Acceso mediado por credenciales con redirección según rol asignado. |
| **CU-02** | Consultar Dashboard Operativo | X | X | Muestra entregas/recolecciones del día y agenda de la semana. |
| **CU-03** | Actualizar Estatus de Tarea (Marcar Lista) | X | X | Cambio de estado de la tarea a "Completada" en un solo clic. |
| **CU-04** | Consultar Catálogo y Existencias | X | X | Búsqueda dinámicamente filtrada por texto (*fuzzy search*) y categorías. |
| **CU-05** | Dar de Alta Nuevo Mobiliario | X | — | Registro de imagen, nombre, categoría, tarifa diaria y stock. |
| **CU-06** | Editar Especificaciones y Stock | X | — | Actualización de datos e imágenes en el panel Drawer. |
| **CU-07** | Registrar Nueva Renta | X | X | Proceso de selección de artículos, cantidades y configuración de orden. |
| **CU-08** | Capturar Datos de Cliente y Domicilio | X | X | Recopilación obligatoria de Nombre, Teléfono a 10 dígitos y Dirección. |
| **CU-09** | Validar Disponibilidad y Horarios | X | X | Subproceso automático para verificar existencias y cruce de agenda. |
| **CU-10** | Autorizar Excepción de Empalme ($\le 1$ h) | X | X | Confirmación manual cuando existe proximidad logística en $\le 60$ min. |
| **CU-11** | Consultar Historial y Operaciones | X | — | Auditoría por rango temporal (Día/Semana/Mes) y criterio de entrega/devolución. |

---

### 4.2 Diagrama Entidad-Relación (DER / Modelo Relacional)

Este diagrama define la estructura de persistencia de datos para el sistema RentFlow, normalizado en Tercera Forma Normal (3FN) para garantizar la integridad referencial, eliminar la redundancia de datos y aislar conceptualmente las entidades de catálogo, usuarios, clientes y transacciones logísticas.

#### 1. Diccionario de Entidades y Atributos

##### A. Roles

Almacena diferentes perfiles de acceso al sistema y define los privilegios que tendrán los usuarios según sus responsabilidades.

* `id_rol INT AUTO_INCREMENT [PK]`: Identificador único de rol.
* `nombre VARCHAR(50) [NOT NULL UNIQUE]`: Nombre del rol.
* `descripcion varchar(150) [NULL]`: Descripción de las funciones de rol.
* `status TINYINT(1) [NOT NULL DEFAULT 1]`: Estado de rol.

##### B. usuarios

Almacena las cuentas de acceso al sistema y define el nivel de privilegios mediante roles.

* `id_usuario INT AUTO_INCREMENT [PK]`: Identificador único del usuario.
* `nombre VARCHAR(100) [NOT NULL]`: Nombre completo del usuario.
* `email VARCHAR(100) [NOT NULL, UNIQUE]`: Correo electrónico para autenticación.
* `password_hash VARCHAR(255) [NOT NULL]`: Hash de contraseña cifrada.
* `id_rol INT [FK -> roles.id_rol] [NOT NULL]`: Rol de usuario.
* `estatus TINYINT(1) [DEFAULT 1]`: Estado de la cuenta (1 = Activo, 0 = Inactivo).
* `fecha_creacion DATETIME [NOT NULL, DEFAULT CURRENT_TIMESTAMP]`: Fecha y hora de creación de la cuenta.
* `fecha_actualizacion DATETIME [NULL]`: Fecha y hora de la última modificación.

##### C. categorias

Clasifica el catálogo de mobiliario para optimizar búsquedas y filtrados.

* `id_categoria INT AUTO_INCREMENT [PK]`: Identificador de la categoría.
* `nombre VARCHAR(50) [NOT NULL, UNIQUE]`: Nombre de la categoría (Sillas, Mesas, Toldos, Salas Lounge).
* `estatus TINYINT(1) [NOT NULL, DEFAULT 1]`: Estado de la categoría.

##### D. mobiliario

Registra el inventario corporativo de muebles, sus tarifas por día y el stock físico disponible.

* `id_mobiliario INT AUTO_INCREMENT [PK]`: Identificador único del mueble.
* `id_categoria INT [FK -> categorias.id_categoria]`: Categoría a la que pertenece.
* `nombre VARCHAR(100) [NOT NULL]`: Denominación comercial del producto.
* `descripcion TEXT [NULL]`: Especificaciones técnicas y de uso.
* `precio_dia DECIMAL(10,2) [NOT NULL]`: Tarifa diaria de alquiler.
* `stock_total INT [NOT NULL, CHECK (stock_total >= 0)]`: Cantidad física total en almacén.
* `imagen_url VARCHAR(255) [NULL]`: Ruta o URL de la imagen del artículo.
* `estatus TINYINT(1) [NOT NULL, DEFAULT 1]`: Estado del artículo.
* `fecha_creacion DATETIME [NOT NULL, DEFAULT CURRENT_TIMESTAMP]`: Fecha y hora de registro del artículo.
* `fecha_actualizacion DATETIME [NULL]`: Fecha y hora de la última modificación.

##### E. clientes

Almacena el directorio de personas o empresas que contratan los servicios de arrendamiento.

* `id_cliente INT AUTO_INCREMENT [PK]`: Identificador único del cliente.
* `nombre_completo VARCHAR(150) [NOT NULL]`: Nombre o razón social del titular.
* `telefono VARCHAR(10) [NOT NULL]`: Número telefónico de contacto a 10 dígitos.
* `email VARCHAR(100) [NULL]`: Correo electrónico opcional de contacto.
* `estatus TINYINT(1) [NOT NULL, DEFAULT 1]`: Estado del cliente.
* `fecha_registro DATETIME [NOT NULL, DEFAULT CURRENT_TIMESTAMP]`: Fecha y hora de registro de cliente.

##### F. rentas

Entidad transaccional principal que encabeza cada contrato de arrendamiento, rango de fechas y estatus operativo.

* `id_renta INT AUTO_INCREMENT [PK]`: Identificador primario de la transacción.
* `folio VARCHAR(20) [NOT NULL, UNIQUE]`: Clave correlativa única del contrato (ej. RF-2048).
* `id_cliente INT [FK -> clientes.id_cliente]`: Cliente asignado a la renta.
* `id_usuario INT [FK -> usuarios.id_usuario]`: Empleado o Administrador que capturó la renta.
* `fecha_hora_entrega DATETIME [NOT NULL]`: Momento programado para la entrega.
* `fecha_hora_devolucion DATETIME [NOT NULL]`: Momento programado para la recolección.
* `fecha_entrega_real DATETIME [NULL]`: Fecha y hora al momento de entrega.
* `fecha_devolucion_real DATETIME [NULL]`: Fecha y hora cuando se devuelve el inmobiliario.
* `direccion_entrega TEXT [NOT NULL]`: Domicilio exacto del evento.
* `total_por_dia DECIMAL(10,2) [NOT NULL]`: Suma acumulada del costo por día.
* `total_renta DECIMAL(10,2) [NOT NULL]`: Importe total calculado para el periodo de arrendamiento.
* `observaciones TEXT NULL`: Notas adicionales relacionadas con la renta.
* `estatus ENUM('POR_ENTREGAR', 'EN_RENTA', 'COMPLETADA', 'CANCELADA') [DEFAULT 'POR_ENTREGAR']`: Etapa logística del pedido.
* `fecha_registro DATETIME [DEFAULT CURRENT_TIMESTAMP]`: Estampa de tiempo del alta del pedido.
* `fecha_actualizacion DATETIME [NULL]`: Fecha y hora de la última actualización.

##### G. detalle_renta

Entidad débil / tabla intermedia que rompe la relación N:M entre rentas y mobiliario, congelando precios históricos.

* `id_detalle INT AUTO_INCREMENT [PK]`: Identificador del renglón de detalle.
* `id_renta INT [FK -> rentas.id_renta]`: Contrato de renta asociado.
* `id_mobiliario INT [FK -> mobiliario.id_mobiliario]`: Mueble asignado.
* `cantidad INT [NOT NULL, CHECK (cantidad > 0)]`: Unidades rentadas de este producto.[cite: 159]
* `precio_unitario_dia DECIMAL(10,2) [NOT NULL]`: Fotografía histórica del precio al momento de rentar (evita inconsistencias si cambia el catálogo).[cite: 159]
* `subtotal_dia DECIMAL(10,2) [NOT NULL]`: Resultado de `cantidad` * `precio_unitario_dia`.[cite: 159]

---

### 2. Mapeo de relaciones y cardinalidades[cite: 159]

Las entidades se relacionan mediante claves primarias y foráneas para garantizar la integridad referencial de la base de datos.[cite: 159]

| Relación | Cardinalidad | Descripción |
| :--- | :---: | :--- |
| `roles — usuarios` | `1 : N` | Un rol puede estar asignado a múltiples usuarios; cada usuario tiene un único rol. |
| `categorias — mobiliario` | `1 : N` | Una categoría puede contener varios artículos; cada artículo pertenece a una categoría. |
| `clientes — rentas` | `1 : N` | Un cliente puede solicitar múltiples rentas; cada renta pertenece a un solo cliente. |
| `usuarios — rentas` | `1 : N` | Un usuario puede registrar múltiples rentas; cada renta es registrada por un único usuario. |
| `rentas — detalle_renta` | `1 : N` | Una renta contiene uno o varios renglones de detalle; cada detalle pertenece a una renta. |
| `mobiliario — detalle_renta` | `1 : N` | Un artículo puede aparecer en múltiples detalles de renta; cada detalle referencia un único artículo. |

---

### 3. Consideraciones de integridad y funcionamiento[cite: 160]

Para mantener la consistencia de la información, se establecen las siguientes consideraciones:[cite: 160]

1. **Integridad referencial:** Las claves foráneas deben impedir que se registren rentas con clientes o usuarios inexistentes, o detalles asociados a artículos o rentas inexistentes.[cite: 160]
2. **Validación de cantidades:** El stock total no puede ser negativo y la cantidad incluida en un detalle de renta debe ser mayor que cero.[cite: 160]
3. **Validación temporal:** La fecha de devolución debe ser posterior a la fecha de entrega.[cite: 160]
4. **Control de disponibilidad:** El sistema calculará las unidades comprometidas en rentas cuyos intervalos se superpongan con el periodo solicitado.[cite: 160]
5. **Concurrencia:** El registro y la confirmación de una renta deberán realizarse mediante transacciones de MySQL para evitar que dos operaciones simultáneas comprometan las mismas unidades.[cite: 160]
6. **Historial:** Los registros históricos no deben eliminarse físicamente cuando puedan afectar la trazabilidad de las operaciones. Se utilizará desactivación lógica cuando corresponda.[cite: 160]
7. **Seguridad:** Las contraseñas se almacenarán mediante funciones de hash y las operaciones sensibles deberán registrarse en la bitácora del sistema.[cite: 160]

> **Nota:** La disponibilidad de mobiliario no se almacenará en una entidad independiente. Se calculará a partir del inventario total y de los detalles de las rentas que se encuentren vigentes para el intervalo consultado.[cite: 160]

---
<img width="835" height="554" alt="image" src="https://github.com/user-attachments/assets/d16b94a7-3535-4926-a3f2-bb8673b7e87f" />

### 4.3 Arquitectura de Software y Capas del Sistema (Cliente-Servidor / REST API)[cite: 161]

Este diagrama documenta la arquitectura de software del sistema RentFlow, organizada en un patrón en capas desacoplado (*Multi-tier Architecture*) mediante una arquitectura de servicios web RESTful.[cite: 161] Permite aislar la lógica de presentación del cliente de la lógica de negocio en el servidor y de la persistencia de datos.[cite: 161]

#### 1. Desglose Tecnológico y Responsabilidades por Capa[cite: 161]

##### A. Capa de Presentación (Frontend — Angular Standalone)[cite: 161]

* **Tecnologías:** Angular, TypeScript, RxJS, CSS3 / Tailwind.[cite: 161]
* **Componentes Clave:**[cite: 161]
  * *Views & Standalone Components:* Interfaz gráfica reactiva dividida por roles (Admin Dashboard, Catalog View, Checkout Component, Employee Panel).[cite: 161]
  * *Services & State Management:* Manejo de estado en sesión (carrito de renta activo, token JWT, listado de mobiliario).[cite: 162]
  * *HTTP Client & Interceptors:* Inyección automática de encabezados de autorización (`Authorization: Bearer <token>`) y captura centralizada de errores HTTP.[cite: 162]

##### B. Capa de Aplicación y Servicios (Backend — Node.js + Express)[cite: 162]

* **Tecnologías:** Node.js, Express.js, JavaScript/TypeScript.[cite: 162]
* **Módulos Clave:**[cite: 162]
  * *Router / Endpoints REST:* Definición de rutas (`/api/auth`, `/api/mobiliario`, `/api/rentas`, `/api/historial`).[cite: 162]
  * *Middlewares de Control:*[cite: 162]
    * *Auth Middleware:* Validación de tokens JWT y restricción por roles (`ADMINISTRADOR` / `EMPLEADO`).[cite: 162]
    * *Logistics Validator:* Algoritmo de comprobación de inventario y detección de proximidad/empalme de horarios ($\le 1$ hora).[cite: 162]
  * *Controllers & Business Logic:* Procesamiento de reglas de negocio, cálculo de subtotales por día, generación de folios correlativos (`RF-XXXX`) y manejo de transacciones.[cite: 162]
  * *Data Access Layer (DAL):* Gestor de pool de conexiones optimizado para consultas relacionales hacia el SGBD.[cite: 162]

##### C. Capa de Persistencia y Almacenamiento (Database — MySQL)[cite: 162]

* **Tecnologías:** MySQL 8.0 (Motor InnoDB).[cite: 162]
* **Módulos Clave:**[cite: 162]
  * *Base de Datos Relacional (3FN):* Tablas normalizadas con claves primarias (PK), claves foráneas (FK), restricciones CHECK y claves únicas (UNIQUE).[cite: 163]
  * *Motor de Transacciones (ACID):* Manejo de confirmaciones (`COMMIT`) y reversiones (`ROLLBACK`) para garantizar que al confirmar una renta se actualice simultáneamente el historial y se bloquee el stock sin inconsistencias.[cite: 163]

#### 2. Flujo de Datos y Protocolo de Comunicación[cite: 163]

1. **Petición del Cliente:** La interfaz Angular emite una solicitud asíncrona mediante `HttpClient` en formato JSON sobre protocolo HTTPS.[cite: 163]
2. **Filtrado y Autenticación:** El servidor Express recibe el payload, ejecuta el middleware JWT para validar los permisos del usuario activo y comprueba los tipos de datos recibidos.[cite: 163]
3. **Lógica de Negocio y Algoritmo Logístico:** El controlador ejecuta la regla de negocio solicitada (ej. verificación de disponibilidad de 40 Sillas Tiffany para una fecha específica).[cite: 163]
4. **Persistencia Transaccional:** La capa DAL consulta la base de datos MySQL; si el stock es suficiente y se autoriza el pedido, registra la cabecera de la renta y sus renglones de detalle en una misma transacción.[cite: 163]
5. **Respuesta Estructurada:** El servidor retorna una respuesta con código de estado HTTP estándar (`200 OK`, `201 Created`, `400 Bad Request`, `409 Conflict`) y el payload JSON de confirmación.[cite: 163]
6. **Renderizado en Cliente:** Angular actualiza la vista en tiempo real (ej. despliega la pantalla de Pedido Registrado o el modal de Empalme Logístico).[cite: 163]
<img width="741" height="1075" alt="image" src="https://github.com/user-attachments/assets/154401b9-32fe-45d0-ba9a-f3ab66158f26" />

---

### 4.4 Diagrama de Secuencia (UML) — Procesamiento de Renta y Validación de Empalme Logístico[cite: 164]

Este diagrama de secuencia detalla la interacción cronológica y el intercambio de mensajes entre los componentes de la arquitectura (Usuario, Interfaz Angular Frontend, Servidor Express Backend y Base de Datos MySQL) durante el flujo crítico de registro de una nueva renta y la evaluación del algoritmo de detección de empalmes temporales ($\le 1$ hora).[cite: 164, 165]

#### 1. Flujo de Ejecución y Lógica Temporal[cite: 165]

1. **Captura y Envío (Frontend):** El usuario completa los datos requeridos (fechas, cliente, ubicación) y presiona `✓ Verificar y confirmar renta`. Angular construye el objeto JSON y emite un `POST /api/rentas` con el token JWT de sesión.[cite: 165]
2. **Autenticación e Inspección (Backend):** El middleware de autenticación valida la firma del token JWT y comprueba la integridad de la estructura de datos enviada.[cite: 165]
3. **Comprobación de Stock:** El controlador ejecuta una consulta SQL a `mobiliario` para validar que el `stock_disponible` cubre la cantidad solicitada en las fechas configuradas.[cite: 165]
4. **Algoritmo de Validación Logística (Evaluación de Proximidad):**[cite: 165]
   * El backend realiza una consulta sobre `rentas` buscando entregas o recolecciones agendadas dentro de la ventana crítica: $[T_{entrega} - 60\text{min}, T_{entrega} + 60\text{min}]$.[cite: 165]
   * *Escenario de Alerta (Empalme Detectado):* Si se encuentra un evento previo en ese rango y la petición no incluye la bandera `confirmar_empalme: true`, el backend retorna una respuesta `409 Conflict` con los metadatos del conflicto. El frontend despliega el modal *"ATENCIÓN: POSIBLE EMPALME"*.[cite: 165]
   * *Excepción Confirmada (Override):* Si el usuario selecciona `Aceptar de todos modos`, el frontend re-emite la petición incluyendo `confirmar_empalme: true`.[cite: 165]
5. **Transacción Persistente (ACID):**[cite: 165]
   * El controlador inicia un bloque de transacción SQL (`START TRANSACTION`).[cite: 165]
   * Inserta la cabecera en la tabla `rentas` generando el folio alfanumérico correlativo (ej. `RF-2048`).[cite: 166]
   * Inserta cada producto seleccionado en la tabla `detalle_renta` congelando el precio histórico por día.[cite: 166]
   * Confirma la transacción con un `COMMIT`.[cite: 166]
6. **Respuesta y Cierre:** El servidor responde con `201 Created` y el objeto de la renta confirmada. Angular vacía la memoria temporal del pedido y redirige a la vista de Pedido Registrado.[cite: 166]
<img width="1808" height="1476" alt="image" src="https://github.com/user-attachments/assets/66df3cc7-0281-4703-8296-05ca0be40341" />

---

### 5. Diccionario de Datos — Sistema RentFlow (MySQL 8.0 / InnoDB)[cite: 166]

El presente diccionario de datos documenta detalladamente la estructura de persistencia relacional del sistema RentFlow.[cite: 166] Define los atributos, tipos de datos, restricciones de integridad referencial, llaves primarias, llaves foráneas y descripciones funcionales para cada una de las entidades del esquema en Tercera Forma Normal (3FN).[cite: 166, 167]

# Modelo de Base de Datos - RentFlow Systems

## 1. Tabla: `roles`

| Campo         | Tipo de dato | Restricciones                | Descripción                               |
| ------------- | ------------ | ---------------------------- | ----------------------------------------- |
| `id_rol`      | INT          | PK, AUTO_INCREMENT, NOT NULL | Identificador del rol                     |
| `nombre`      | VARCHAR(50)  | UNIQUE, NOT NULL             | Nombre del rol                            |
| `descripcion` | VARCHAR(150) | NULL                         | Descripción del rol                       |
| `estatus`     | TINYINT(1)   | NOT NULL, DEFAULT 1          | Estado del rol (1 = activo, 0 = inactivo) |

## 2. Tabla: `usuarios`

| Campo                 | Tipo de dato | Restricciones                       | Descripción                                   |
| --------------------- | ------------ | ----------------------------------- | --------------------------------------------- |
| `id_usuario`          | INT          | PK, AUTO_INCREMENT, NOT NULL        | Identificador del usuario                     |
| `nombre`              | VARCHAR(100) | NOT NULL                            | Nombre del usuario                            |
| `email`               | VARCHAR(100) | UNIQUE, NOT NULL                    | Correo electrónico                            |
| `password_hash`       | VARCHAR(255) | NOT NULL                            | Contraseña almacenada mediante hash           |
| `id_rol`              | INT          | FK, NOT NULL                        | Referencia al rol del usuario                 |
| `estatus`             | TINYINT(1)   | NOT NULL, DEFAULT 1                 | Estado del usuario (1 = activo, 0 = inactivo) |
| `fecha_creacion`      | DATETIME     | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Fecha de creación                             |
| `fecha_actualizacion` | DATETIME     | NULL                                | Fecha de última actualización                 |

**Relación:** `id_rol` → `roles.id_rol`

## 3. Tabla: `categorias`

| Campo          | Tipo de dato | Restricciones                | Descripción                                       |
| -------------- | ------------ | ---------------------------- | ------------------------------------------------- |
| `id_categoria` | INT          | PK, AUTO_INCREMENT, NOT NULL | Identificador de la categoría                     |
| `nombre`       | VARCHAR(50)  | UNIQUE, NOT NULL             | Nombre de la categoría                            |
| `estatus`      | TINYINT(1)   | NOT NULL, DEFAULT 1          | Estado de la categoría (1 = activa, 0 = inactiva) |

## 4. Tabla: `mobiliario`

| Campo                 | Tipo de dato  | Restricciones                       | Descripción                                      |
| --------------------- | ------------- | ----------------------------------- | ------------------------------------------------ |
| `id_mobiliario`       | INT           | PK, AUTO_INCREMENT, NOT NULL        | Identificador del mobiliario                     |
| `id_categoria`        | INT           | FK, NOT NULL                        | Referencia a la categoría                        |
| `nombre`              | VARCHAR(100)  | NOT NULL                            | Nombre del mobiliario                            |
| `descripcion`         | TEXT          | NULL                                | Descripción del mobiliario                       |
| `precio_dia`          | DECIMAL(10,2) | NOT NULL, CHECK (precio_dia >= 0)   | Precio de renta por día                          |
| `stock_total`         | INT           | NOT NULL, CHECK (stock_total >= 0)  | Cantidad total de mobiliario                     |
| `imagen_url`          | VARCHAR(255)  | NULL                                | Ruta o URL de la imagen                          |
| `estatus`             | TINYINT(1)    | NOT NULL, DEFAULT 1                 | Estado del mobiliario (1 = activo, 0 = inactivo) |
| `fecha_creacion`      | DATETIME      | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Fecha de creación                                |
| `fecha_actualizacion` | DATETIME      | NULL                                | Fecha de última actualización                    |

**Relación:** `id_categoria` → `categorias.id_categoria`

## 5. Tabla: `clientes`

| Campo             | Tipo de dato | Restricciones                       | Descripción                                   |
| ----------------- | ------------ | ----------------------------------- | --------------------------------------------- |
| `id_cliente`      | INT          | PK, AUTO_INCREMENT, NOT NULL        | Identificador del cliente                     |
| `nombre_completo` | VARCHAR(150) | NOT NULL                            | Nombre completo del cliente                   |
| `telefono`        | VARCHAR(10)  | NOT NULL                            | Número telefónico del cliente                 |
| `email`           | VARCHAR(100) | NULL                                | Correo electrónico del cliente                |
| `estatus`         | TINYINT(1)   | NOT NULL, DEFAULT 1                 | Estado del cliente (1 = activo, 0 = inactivo) |
| `fecha_registro`  | DATETIME     | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Fecha de registro                             |

## 6. Tabla: `rentas`

| Campo                    | Tipo de dato                                             | Restricciones                        | Descripción                                   |
| ------------------------ | -------------------------------------------------------- | ------------------------------------ | --------------------------------------------- |
| `id_renta`               | INT                                                      | PK, AUTO_INCREMENT, NOT NULL         | Identificador de la renta                     |
| `folio`                  | VARCHAR(20)                                              | UNIQUE, NOT NULL                     | Folio único de la renta                       |
| `id_cliente`             | INT                                                      | FK, NOT NULL                         | Referencia al cliente                         |
| `id_usuario`             | INT                                                      | FK, NOT NULL                         | Usuario que registró la renta                 |
| `fecha_hora_entrega`     | DATETIME                                                 | NOT NULL                             | Fecha y hora programada para la entrega       |
| `fecha_hora_devolucion`  | DATETIME                                                 | NOT NULL                             | Fecha y hora programada para la recolección   |
| `fecha_entrega_real`     | DATETIME                                                 | NULL                                 | Fecha y hora en que se realizó la entrega     |
| `fecha_devolucion_real`  | DATETIME                                                 | NULL                                 | Fecha y hora en que se realizó la recolección |
| `id_usuario_entrega`     | INT                                                      | FK, NULL                             | Usuario que confirmó la entrega               |
| `id_usuario_recoleccion` | INT                                                      | FK, NULL                             | Usuario que confirmó la recolección           |
| `direccion_entrega`      | TEXT                                                     | NOT NULL                             | Dirección donde se entregará el mobiliario    |
| `total_por_dia`          | DECIMAL(10,2)                                            | NOT NULL, CHECK (total_por_dia >= 0) | Importe total diario de la renta              |
| `total_renta`            | DECIMAL(10,2)                                            | NOT NULL, CHECK (total_renta >= 0)   | Importe total de la renta                     |
| `observaciones`          | TEXT                                                     | NULL                                 | Observaciones adicionales                     |
| `estatus`                | ENUM('POR_ENTREGAR','EN_RENTA','COMPLETADA','CANCELADA') | NOT NULL, DEFAULT 'POR_ENTREGAR'     | Estado actual de la renta                     |
| `fecha_registro`         | DATETIME                                                 | NOT NULL, DEFAULT CURRENT_TIMESTAMP  | Fecha de registro                             |
| `fecha_actualizacion`    | DATETIME                                                 | NULL                                 | Fecha de última actualización                 |

**Relaciones:**

- `id_cliente` → `clientes.id_cliente`
- `id_usuario` → `usuarios.id_usuario`
- `id_usuario_entrega` → `usuarios.id_usuario`
- `id_usuario_recoleccion` → `usuarios.id_usuario`

## 7. Tabla: `detalle_renta`

| Campo                 | Tipo de dato  | Restricciones                              | Descripción                                     |
| --------------------- | ------------- | ------------------------------------------ | ----------------------------------------------- |
| `id_detalle`          | INT           | PK, AUTO_INCREMENT, NOT NULL               | Identificador del detalle                       |
| `id_renta`            | INT           | FK, NOT NULL                               | Referencia a la renta                           |
| `id_mobiliario`       | INT           | FK, NOT NULL                               | Referencia al mobiliario                        |
| `cantidad`            | INT           | NOT NULL, CHECK (cantidad > 0)             | Cantidad de mobiliario rentado                  |
| `precio_unitario_dia` | DECIMAL(10,2) | NOT NULL, CHECK (precio_unitario_dia >= 0) | Precio diario por unidad al momento de la renta |
| `subtotal_dia`        | DECIMAL(10,2) | NOT NULL, CHECK (subtotal_dia >= 0)        | Subtotal diario del mobiliario                  |

**Relaciones:**

- `id_renta` → `rentas.id_renta`
- `id_mobiliario` → `mobiliario.id_mobiliario`


## 8. Tabla: `asignaciones_renta`

| Campo              | Tipo de dato                  | Restricciones                       | Descripción                                      |
| ------------------ | ----------------------------- | ----------------------------------- | ------------------------------------------------ |
| `id_asignacion`    | INT                           | PK, AUTO_INCREMENT, NOT NULL        | Identificador de la asignación                   |
| `id_renta`         | INT                           | FK, NOT NULL                        | Referencia a la renta                            |
| `id_usuario`       | INT                           | FK, NOT NULL                        | Usuario asignado a la operación                  |
| `tipo_operacion`   | ENUM('ENTREGA','RECOLECCION') | NOT NULL                            | Tipo de operación asignada                       |
| `es_responsable`   | TINYINT(1)                    | NOT NULL, DEFAULT 0                 | Indica si el usuario es el responsable principal |
| `fecha_asignacion` | DATETIME                      | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Fecha en que se realizó la asignación            |
| `observaciones`    | TEXT                          | NULL                                | Observaciones de la asignación                   |

**Relaciones:**

- `id_renta` → `rentas.id_renta`
- `id_usuario` → `usuarios.id_usuario`


---


## 5. Guía de Instalación, Configuración e Integración del Entorno (.env)

Esta sección establece los pasos secuenciales necesarios para clonar, configurar y desplegar el sistema **RentFlow** en un entorno de desarrollo local, junto con las políticas obligatorias de seguridad para el manejo de credenciales y variables de entorno.

---

### 5.1 Requisitos Previos del Sistema

Asegúrate de tener instaladas las siguientes herramientas en tu equipo de cómputo antes de iniciar el proceso:

* **Node.js**: v18.0.0 o superior (LTS recomendado).
* **npm**: v9.0.0 o superior.
* **Angular CLI**: v16.0.0 o superior (`npm install -g @angular/cli`).
* **MySQL Server**: v8.0 o superior (gestor local o herramientas como XAMPP / MySQL Workbench).
* **Git**: v2.30.0 o superior.

---

### 5.2 Clonado del Repositorio

Abre la terminal de tu sistema operativo y ejecuta el comando de clonado:

```bash
git clone [https://github.com/Melany190619/RentFlow-Systems.git](https://github.com/Melany190619/RentFlow-Systems.git)
cd RentFlow-Systems
```

---

### 5.3 Reglas y Políticas de Seguridad del Archivo de Entorno (.env)

Para proteger las credenciales del sistema y evitar filtraciones de seguridad en el repositorio de GitHub, se deben acatar las siguientes normas de desarrollo:

#### Reglas Obligatorias de Proyecto:

1. **Exclusión de Git Incondicional**: El archivo `.env` real **NUNCA** se sube a GitHub. Debe estar estrictamente registrado dentro del archivo `.gitignore` raíz y del directorio del backend.
2. **Mantenimiento de Plantilla (.env.example)**: Si durante el desarrollo se crea una nueva variable de entorno (ej. un nuevo parámetro o clave de servicio), es obligatorio agregarla al archivo `.env.example` con un valor genérico o falso.
3. **Prohibición de Credenciales Quemadas (Hardcoding)**: Ningún archivo `.ts` o `.js` del código fuente debe contener contraseñas, URLs de base de datos o secretos de tokens explícitos. Todo valor sensible debe consumirse a través de `process.env.NOMBRE_VARIABLE`.
4. **Protección de Firmas JWT**: La clave secreta de autenticación (`JWT_SECRET`) debe ser una cadena extensa de caracteres aleatorios en entornos de desarrollo y mantenerse completamente aislada de repositorios públicos.

#### Estructura del Archivo .env (Backend)

Crea un archivo llamado `.env` dentro del directorio `/backend` basándote en la plantilla de ejemplo:

```env
# ===================================================
# CONFIGURACIÓN DEL SERVIDOR HTTP (Node.js / Express)
# ===================================================
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:4200

# ===================================================
# BASE DE DATOS RELACIONAL (MySQL 8.0 / InnoDB)
# ===================================================
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_contraseña_mysql_aqui
DB_NAME=rentflow_db

# ===================================================
# AUTENTICACIÓN Y SEGURIDAD (JWT - JSON Web Tokens)
# ===================================================
JWT_SECRET=rentflow_secret_key_2026_super_secure_key
JWT_EXPIRES_IN=8h
```

---

### 5.4 Instalación y Configuración del Backend (Node.js + Express)

1. Ingresa a la carpeta del servidor:
   ```bash
   cd backend
   ```

2. Instala las dependencias y paquetes de Node.js:
   ```bash
   npm install
   ```

3. Genera tu archivo `.env` a partir del archivo de ejemplo:
   * **En Windows (PowerShell / CMD):**
     ```cmd
     copy .env.example .env
     ```
   * **En Linux / macOS / Git Bash:**
     ```bash
     cp .env.example .env
     ```

4. Abre el archivo `.env` recién generado y actualiza los valores de `DB_USER` y `DB_PASSWORD` con tus credenciales locales de MySQL.

---

### 5.5 Configuración e Importación de la Base de Datos (MySQL 8.0)

1. Asegúrate de que el servicio de MySQL Server esté iniciado en tu equipo.
2. Abre tu cliente SQL (Workbench, DBeaver o la CLI de MySQL) y crea la base de datos vacía:
   ```sql
   CREATE DATABASE IF NOT EXISTS rentflow_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```
3. Ejecuta los scripts de arquitectura (Tablas en 3FN y Registros Iniciales) desde la terminal:
   ```bash
   # Importación del esquema DDL
   mysql -u root -p rentflow_db < database/schema.sql
   
   # Importación de catálogos y datos iniciales DML
   mysql -u root -p rentflow_db < database/seeds.sql
   ```

---

### 5.6 Instalación y Configuración del Frontend (Angular Standalone)

1. Regresa a la carpeta raíz e ingresa al directorio del cliente web:
   ```bash
   cd ../frontend
   ```

2. Instala los paquetes de Angular, RxJS y Tailwind CSS:
   ```bash
   npm install
   ```

---

### 5.7 Despliegue y Ejecución Local del Sistema

Para levantar la aplicación completa en modo de desarrollo local, se deben iniciar ambos componentes simultáneamente en terminales independientes:

#### Terminal 1: Servidor Backend (API REST)
```bash
cd backend
npm run dev
```
*El backend se ejecutará en `http://localhost:3000` y confirmará la conexión exitosa a la base de datos MySQL.*

#### Terminal 2: Cliente Frontend (Angular Web App)
```bash
cd frontend
ng serve
```
*La interfaz interactiva se compilará y estará disponible en tu navegador en `http://localhost:4200`.*
## 6. Justificación del Control de Versiones y Flujo de Trabajo (Git / GitHub)

La administración del código fuente de **RentFlow** no se realiza de forma empírica. Hemos establecido una estrategia estructurada de control de versiones basada en estándares de la industria para garantizar que el trabajo simultáneo de los 4 integrantes (Frontend, Backend, Base de Datos y Líder Técnica) no genere conflictos irreversibles. 

A continuación, se detalla la justificación técnica de las decisiones metodológicas adoptadas sobre Git y GitHub.

---

### 6.1 Elección del Modelo de Trabajo: GitHub Flow vs. GitFlow

Para este proyecto, se descartó el uso de metodologías complejas como *GitFlow* (que requiere múltiples ramas permanentes como `develop`, `release` y `hotfix`). En su lugar, adoptamos **GitHub Flow** por las siguientes razones:

* **Agilidad y Simplicidad:** Al ser un equipo ágil de 4 personas enfocado en entregas continuas para evaluación académica, necesitamos un flujo rápido y sin fricciones.
* **Única Fuente de Verdad:** Mantenemos una única rama permanente (`main`). Todo lo que está en `main` se considera código estable, funcional y listo para despliegue (producción).
* **Integración Continua:** Promueve ciclos de desarrollo cortos. Las características se desarrollan, se revisan y se fusionan rápidamente, evitando el "infierno de integración" al final del proyecto.

---

### 6.2 Protección Estricta de la Rama Principal (`main`)

Se configuró una regla de protección en GitHub que bloquea los empujes directos (`git push origin main`). 

* **Justificación de Seguridad:** Nadie en el equipo (ni siquiera la administradora) puede sobreescribir el código estable accidentalmente.
* **Garantía de Estabilidad:** Esto asegura que si el sistema RentFlow necesita ser evaluado o presentado en cualquier momento, el código en la rama principal nunca estará "roto" por un trabajo a medias.

---

### 6.3 Aislamiento Funcional (Ramas `feature/` y `fix/`)

Cada integrante (Diego en Frontend, Gabriel en Backend, Javier en Base de datos) debe crear una rama derivada de `main` para cada tarea específica (ej. `feature/login-frontend`).

* **Justificación Arquitectónica:** Permite el desarrollo en paralelo (Multithreading humano). Diego puede estar rompiendo y arreglando las vistas en Angular en su rama, mientras Gabriel ajusta la API en Node.js en la suya, sin que los errores de uno afecten el entorno local del otro.

---

### 6.4 Control de Calidad Obligatorio (Pull Requests)

El flujo exige que todo código nuevo pase por un **Pull Request (PR)** antes de unirse a `main`.

* **Justificación de Integración:** Funciona como un filtro de calidad (QA). Como líder del proyecto (Melany), los PRs me permiten inspeccionar el código, verificar que el Frontend de Diego consuma correctamente la API de Gabriel y que las consultas a la DB de Javier no tengan cuellos de botella, *antes* de que el código ensucie el proyecto final.
* **Prevención de Fugas de Seguridad:** Es el último punto de control para revisar que ningún desarrollador haya subido accidentalmente el archivo `.env` con credenciales reales al repositorio remoto.

---

### 6.5 Trazabilidad del Proyecto (Conventional Commits y Squash & Merge)

No permitimos mensajes de commit informales (como *"cambios"*, *"ya funciona"*, *"wip"*). Exigimos **Conventional Commits** (`feat:`, `fix:`, `docs:`) y utilizamos la estrategia **Squash and Merge** en GitHub.

* **Justificación del Historial Limpio (*Squash*):** Un desarrollador puede hacer 20 commits en su rama local mientras resuelve un problema. Al hacer *Squash and Merge*, GitHub comprime esos 20 intentos en **1 solo commit perfecto** dentro de `main`. 
* **Justificación de Nomenclatura:** Al usar prefijos como `feat:` (nueva característica) o `fix:` (corrección), el historial de `main` se vuelve autodescriptivo. Esto facilita rastrear exactamente cuándo y quién introdujo el módulo de *Empalme Logístico* o cuándo se configuró la *Arquitectura REST*, algo fundamental para la evaluación y auditoría del proyecto.
