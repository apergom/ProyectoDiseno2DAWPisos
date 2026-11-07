# Órbita 2: sistema visual de Planificador (tareas de un piso compartido)

> Resumen de la entrega de la Órbita 2. Se irá completando a medida que avancen los pasos.
> **Estado: en curso — Pasos 1 y 2 completados.**

## Enlaces

| Qué | Enlace |
|---|---|
| Archivo de Figma (versión "Entrega Órbita 2") | [Plantilla para iniciar proyectos](https://www.figma.com/design/QX5iyAm2XAjWIZJy5VUftF/Plantilla-para-iniciar-proyectos--Community-?node-id=621-219) |
| Prototipo (enlace que empieza por `figma.com/proto/`) | Pendiente (Paso 8) |
| Proyecto de Google Stitch (solo si lo has usado) | No se ha usado |

## Dónde está cada cosa en Figma

| Entregable | Página y sección del archivo |
|---|---|
| Inventario de decisiones | Página `Orbita 2 :p` → frame «Inventario de decisiones · Paso 1» (a la derecha de los mockups) |
| Wireframes rediseñados con sus notas | Página `Orbita 2 :p` → secciones «Wireframes rediseñados» (móvil, 5 pantallas) y «Wireframes rediseñados · desktop» (1280 × 800, 5 pantallas), cada una con su nota «Qué cambia y por qué» |
| Componentes | Pendiente (Paso 6 y 7) |
| Mockups del happy path | Pendiente (Paso 8) |
| Pantalla principal en el segundo ancho | Pendiente (Paso 8) |
| Pantallas en modo oscuro | Pendiente (Paso 8) |
| Guía de estilo | Pendiente (Paso 8) |

En la misma página `Orbita 2 :p` están, sin modificar, el borrador de tokens y los dos mockups previos (desktop 1280 y móvil 390) que sirven de referencia visual.

## Lista de comprobación de Figma

- [ ] Variables en dos colecciones (primitivos y semánticos), con alias, modos claro y oscuro, ámbito, descripción y sintaxis de código.
- [ ] Estilos de texto, efecto y retícula vinculados a las variables.
- [ ] Componentes con Auto layout, variables, propiedades y variantes de estado.
- [ ] Mockups construidos enteros con Auto layout y espacios sacados de variables.
- [ ] Pantalla principal en un segundo ancho, con los mismos componentes.
- [ ] Modo oscuro aplicado con el selector de modo.
- [ ] Prototipo que recorre el happy path completo.
- [ ] Prueba 1 superada: al cambiar `color/primary`, cambian todas las pantallas a la vez.
- [ ] Prueba 2 superada: con todos los mockups en modo oscuro, nada desaparece contra el fondo.

## Resumen de decisiones

### Rediseño de los wireframes
Completado en dos secciones (móvil y desktop, 5 pantallas del happy path en cada una), cada pantalla con su nota de cambios y motivo. Cambios globales: un único botón primario relleno por pantalla y el secundario a botón de texto; iconos confusos («X» de opciones y de cabecera) a «⋮» y «☰»; metadatos (responsable · categoría · hora) en las tarjetas; información que no dependa solo del color («2 de 5 completadas», «HOY» escrito); objetivos táctiles de 44 × 44 en celdas y flechas del calendario; agrupación de Fecha y Hora en Nueva tarea (en desktop además se añadieron, no existían); y navegación sin «Chat» —menú inferior en móvil, barra lateral en desktop— (fuera del MVP, decisión de la Órbita 1).

### Color
Pendiente (Paso 3). El borrador de tokens de partida, escrito a mano en la pestaña, queda recogido y ampliado en el inventario: `color/primary`, `color/on-primary`, `color/surface`, `color/surface-container`, `color/on-surface`, `color/on-surface-variant`, `color/outline`, más los estados `success`, `error` y `warning`.

### Tipografía
Pendiente (Paso 4). Los niveles propuestos en el inventario son `type/display`, `type/heading-1`, `type/heading-2`, `type/heading-3`, `type/body`, `type/caption` y `type/label`.

### Espaciado y retícula
Pendiente (Paso 5). Escala propuesta con base de 4 px (`space/2` = 8 px, `space/3` = 12 px, `space/4` = 16 px, `space/6` = 24 px), radios `radius/sm`, `radius/md`, `radius/full` y elevaciones `elevation/1`, `elevation/2`.

### Componentes
Pendiente (Paso 6).

### Responsive y modo oscuro
Pendiente (Paso 8).

## Uso de IA
He usado la IA en modo plan para el Paso 1: leer el enunciado, inventariar qué hay en el archivo y redactar el inventario de 33 decisiones con su token semántico a partir del wireframe «Panel de tareas». Tras mi indicación de no tocar nada fuera de la pestaña de Órbita 2, revirtió los cambios de estructura y dejó el inventario dentro de esa pestaña. Para el Paso 2 le pedí que duplicara el happy path (móvil y después desktop) en secciones nuevas y le pasé mis propuestas de rediseño; aplicando las cinco completas en ambos viewports, cada cambio quedó anotado en su nota con el motivo (persona o principio) para poder defenderlo en la auditoría. El detalle está en el [CHANGELOG.md](CHANGELOG.md).

## Lo que ha quedado pendiente
Organización del archivo en las cinco páginas del enunciado, sistema de color con tabla de contraste (Paso 3), tipografía (Paso 4), espaciado y retícula (Paso 5), iconos y componentes (Paso 6 y 7), variables y estilos en Figma, mockups, prototipo y guía de estilo (Paso 8).
