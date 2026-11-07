# Órbita 2: sistema visual de Planificador (tareas de un piso compartido)

> Resumen de la entrega de la Órbita 2. Se irá completando a medida que avancen los pasos.
> **Estado: en curso — Pasos 1, 2 y 3 completados.**

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
| Sistema de color (escalas, tokens y contraste) | Página `Orbita 2 :p` → frame «Sistema de color · Paso 3» (debajo de las secciones de wireframes): escalas 50–900, tabla de tokens semánticos en los dos modos, tabla de contraste y comprobación en escala de grises |
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
Completado en dos secciones (móvil y desktop, 5 pantallas del happy path en cada una), cada pantalla con su nota de cambios y motivo. Cambios globales: un único botón primario relleno por pantalla y el secundario a botón de texto; «X» de las tarjetas (menú de opciones) a «⋮», y el icono de cabecera que no llevaba a ninguna parte eliminado; metadatos (responsable · categoría · hora) en las tarjetas; información que no dependa solo del color («2 de 5 completadas», «HOY» escrito); objetivos táctiles de 44 × 44 en celdas y flechas del calendario; agrupación de Fecha y Hora en Nueva tarea (en desktop además se añadieron, no existían); y navegación completa de **4 pestañas —Tareas, Calendario, Chat y Grupo, las del wireframe original— con la pestaña activa resaltada en negrita** (menú inferior en móvil, barra lateral en desktop). La decisión de la Órbita 1 de dejar el chat fuera de las funciones prioritarias del MVP no cambia: se recupera la pestaña porque el prototipo original sí tiene la pantalla de Chat y por ella pasa el flujo «Error de envío».

### Color
Principal **verde azulado (teal)** porque transmite el orden y la calma que Álex pide para «evitar discusiones» y es el eje azul-verde el que mejor se distingue con la deuteranopía de Samuel; secundario **índigo**, elegido fuera de la familia rojo-verde-ámbar para que una insignia de categoría no se confunda con un estado; neutros con tono frío para acompañar al teal. Escalas del 50 al 900 para principal, secundario y neutros (más rojo, verde y ámbar de estado) y 12 tokens semánticos con su valor en modo claro y oscuro. La pareja de texto con el contraste más bajo del sistema es **5,05:1 en claro** (`color/on-success` sobre `color/success`, el chip «✓ Hecho») y **7,12:1 en oscuro** (`color/warning` sobre `color/surface-container`, el aviso «Vence hoy» sobre la tarjeta); las 19 parejas de la tabla están por encima del mínimo (4,5:1 texto, 3:1 bordes e iconos) en los dos modos, y en la comprobación en escala de grises ningún estado depende solo del color.

### Tipografía
Pendiente (Paso 4). Los niveles propuestos en el inventario son `type/display`, `type/heading-1`, `type/heading-2`, `type/heading-3`, `type/body`, `type/caption` y `type/label`.

### Espaciado y retícula
Pendiente (Paso 5). Escala propuesta con base de 4 px (`space/2` = 8 px, `space/3` = 12 px, `space/4` = 16 px, `space/6` = 24 px), radios `radius/sm`, `radius/md`, `radius/full` y elevaciones `elevation/1`, `elevation/2`.

### Componentes
Pendiente (Paso 6).

### Responsive y modo oscuro
Pendiente (Paso 8).

## Uso de IA
He usado la IA en modo plan para el Paso 1: leer el enunciado, inventariar qué hay en el archivo y redactar el inventario de 33 decisiones con su token semántico a partir del wireframe «Panel de tareas». Tras mi indicación de no tocar nada fuera de la pestaña de Órbita 2, revirtió los cambios de estructura y dejó el inventario dentro de esa pestaña. Para el Paso 2 le pedí que duplicara el happy path (móvil y desktop) en secciones nuevas y le pasé mis propuestas de rediseño; aplicando las cinco completas en ambos viewports, cada cambio quedó anotado en su nota con el motivo (persona o principio) para poder defenderlo en la auditoría. Al terminar le pedí restaurar las 4 pestañas de navegación del wireframe original (con «Chat») y aplicar los cambios de lógica que considerara oportunos —pestaña activa resaltada y control muerto de cabecera fuera—, y antes de preguntarle qué entendía por «pestañas» me confirmó la opción elegida. Para el Paso 3 le pregunté el color principal (elegí verde azulado entre las opciones propuestas) y construyó la sección con escalas, tokens semánticos y tabla de contraste; tras la primera comprobación, en la que 6 parejas bajaban del mínimo, corregimos los tonos hasta dejar 19/19. El detalle está en el [CHANGELOG.md](CHANGELOG.md).

## Lo que ha quedado pendiente
Organización del archivo en las cinco páginas del enunciado, tipografía (Paso 4), espaciado y retícula (Paso 5), iconos y componentes (Paso 6 y 7), variables y estilos en Figma (Paso 7), mockups, prototipo y guía de estilo (Paso 8). Pendiente menor del Paso 3: repasar la tabla de contraste con el plugin Stark a mano antes de entregar (los ratios están calculados con la misma fórmula WCAG 2.2).
