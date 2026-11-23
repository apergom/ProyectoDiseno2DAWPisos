# Planificador — organizar las tareas de un piso compartido

Proyecto de la **Órbita 1** del módulo de **Diseño de Interfaces Web**: *Diseñar para que funcione*.

Aplicación para que las personas que comparten piso repartan y den seguimiento a las tareas del hogar
sin discutir por quién toca cada cosa.

## Entregables

| Documento | Enlace |
| --- | --- |
| Brief del proyecto | [BRIEF.md](BRIEF.md) |
| Tablero de FigJam (hipótesis, referentes, entrevistas, personas, MVP, sitemap y user flows) | [Planificador Proyecto](https://www.figma.com/board/WoBiXXPG4DqxmQclQJ7Yhi/Planificador-Proyecto?node-id=0-1) |
| Archivo de Figma Design (wireframes) | [Plantilla · página Wireframes](https://www.figma.com/design/QX5iyAm2XAjWIZJy5VUftF/Plantilla-para-iniciar-proyectos--Community-?node-id=4-6) |
| Prototipo en modo presentación | [Flujo "Happy path"](https://www.figma.com/design/QX5iyAm2XAjWIZJy5VUftF/Plantilla-para-iniciar-proyectos--Community-?node-id=537-43) —8 flujos en total: happy path, piso nuevo (estado vacío), error de envío y alta de cuenta y grupo, en móvil y desktop |
| Registro de uso de IA | [CHANGELOG.md](CHANGELOG.md) |

## Backlog

Lista de funcionalidades partida en piezas pequeñas, ordenadas por prioridad.
Cada pieza se puede hacer en pocos días y probar por separado.

| # | Pieza | Estado |
| --- | --- | --- |
| 1 | Menú de navegación con todas las secciones enlazadas | Hecho (Hito 1) |
| 2 | Listado de tareas generado desde los datos | Hecho (Hito 1) |
| 3 | Detalle de tarea al pulsar una tarjeta | Hecho (Hito 1) |
| 4 | Buscar tareas por categoría y por persona | Hecho (Hito 1) |
| 5 | Alta de tarea con validación de campos | Pendiente |
| 6 | Marcar tarea como hecha y actualizar el % semanal | Pendiente |
| 7 | Calendario de la semana (7 días con sus tareas) | Pendiente |
| 8 | Vista de grupo: lista de miembros y ficha individual | Pendiente |
| 9 | Inicio de sesión, alta de cuenta e invitaciones | Pendiente |
| 10 | Guardar los datos en `localStorage` | Pendiente |
| 11 | Convertir las páginas normales en SPA con router (hash) | Pendiente |
| 12 | Modo oscuro (mismos tokens en la colección oscura) | Pendiente |

## Mapa de pantallas

Qué vistas tiene la app y qué datos muestra cada una. Todas están enlazadas desde el menú,
aunque algunas sigan vacías de momento.

| Vista | Ruta | Datos que muestra |
| --- | --- | --- |
| Panel de tareas | `index.html` | Lista de tareas de la semana con estado, responsable y hora; barra de progreso «n de m completadas»; buscador por categoría y persona |
| Detalle de tarea | `detalle.html?id=N` | Ficha completa: título, descripción, categoría, responsable, día, hora y estado |
| Nueva tarea | `nueva-tarea.html` | Vacía — alta de tarea con validación (Hito 2) |
| Calendario | `calendario.html` | Vacía — los 7 días de la semana con sus tareas (Hito 3) |
| Grupo | `grupo.html` | Vacía — miembros del piso y sus perfiles (Hito 3) |
| Chat | `chat.html` | Vacía — avisos y mensajes del piso (Hito 4) |
| Landing | `landing.html` | Portada pública: hero, qué hace la app, cómo funciona y llamada a la acción |

## Estructura del repositorio

- `BRIEF.md` — brief del proyecto (los cinco elementos del Paso 8).
- `CHANGELOG.md` — registro de cada uso de IA durante la órbita (criterio C8).
