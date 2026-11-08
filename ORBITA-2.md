# Órbita 2: sistema visual de Planificador

## Enlaces

| Qué | Enlace |
|---|---|
| Archivo de Figma (versión "Entrega Órbita 2") | [Plantilla · Entrega Órbita 2](https://www.figma.com/design/QX5iyAm2XAjWIZJy5VUftF/Plantilla-para-iniciar-proyectos--Community-?node-id=831-9) |
| Prototipo (enlace que empieza por `figma.com/proto/`) | [Flujo "Happy path"](https://www.figma.com/proto/QX5iyAm2XAjWIZJy5VUftF/Plantilla-para-iniciar-proyectos--Community-?node-id=537-43&starting-point-node-id=537%3A43) |
| Proyecto de Google Stitch (solo si lo has usado) | No se ha usado Google Stitch |

## Dónde está cada cosa en Figma

| Entregable | Página y sección del archivo |
|---|---|
| Inventario de decisiones | Página **Wireframes** → frame «Inventario de decisiones · Paso 1», dentro de la sección «Wireframes de la Órbita 1 · sin modificar» |
| Wireframes rediseñados con sus notas | Página **Wireframes** → secciones «Wireframes rediseñados · Paso 2 (móvil)» y «Wireframes rediseñados · Paso 2 (desktop)»; cada pantalla lleva su nota «Qué cambia y por qué» |
| Componentes | Página **Componentes** → «03 · Inventario de componentes» y «04 · Estados del botón y del campo» (Paso 6); «01 · Variables y estilos» y «05 · Prueba de modo oscuro» (Paso 7) |
| Mockups del happy path | Página **Mockups** → secciones «Móvil · Componentes — Claro / Oscuro» (10 pantallas, 01 a 10) y «Escritorio · Claro / Oscuro» (7 pantallas) |
| Pantalla principal en el segundo ancho | Página **Mockups** → sección «Escritorio · Claro / Oscuro» → «Panel de tareas · Escritorio» (1280 × 800, variantes `Tema=Claro` y `Tema=Oscuro`) |
| Pantallas en modo oscuro | Página **Mockups** → variante `Tema=Oscuro` de cada frame en las secciones «Móvil · Componentes — Claro / Oscuro» y «Escritorio · Claro / Oscuro»; la cabecera «Móvil · Flujo original y accesibilidad» (Paso 8) explica qué incluye |
| Guía de estilo | Página **Guía de estilo** → «Sistema de color · Paso 3», «Tipografía · Paso 4», «Espaciado, retícula y composición · Paso 5» y «Guía de estilo · Paso 8» |

## Lista de comprobación de Figma

- [x] Variables en dos colecciones (primitivos y semánticos), con alias, modos claro y oscuro, ámbito, descripción y sintaxis de código.
  Colección **primitivos** (77 variables, un modo «valor», oculta al publicar) con las escalas del Paso 3, la espaciada del Paso 5, los radios y la escala tipográfica; colección **semánticos** (25 variables alias, modos claro y oscuro) con ámbito, descripción y sintaxis `var(--color-primary)`.
- [x] Estilos de texto, efecto y retícula vinculados a las variables.
  6 estilos de texto (h1 a caption, los 6 niveles del Paso 4), 4 estilos de efecto (elevación) y 2 de retícula (móvil y desktop).
- [x] Componentes con Auto layout, variables, propiedades y variantes de estado.
  15 componentes Atomic Design: el Botón, por ejemplo, es Jerarquía (Primario/Secundario) × Estado (normal, hover, foco, pulsado, desactivado; carga solo en primario) con propiedades de etiqueta e icono, altura mínima 48 y relleno, borde y anillo de foco sacados de variables.
- [x] Mockups construidos enteros con Auto layout y espacios sacados de variables.
  Todo lo que hay en los mockups está construido con las variables de las dos colecciones y los estilos: ningún color, espacio o radio está escrito a mano.
- [x] Pantalla principal en un segundo ancho, con los mismos componentes.
  «Panel de tareas · Escritorio» a 1280 × 800: mismos componentes, con la navegación inferior convertida en barra lateral de 240 px (`size-sidebar`) y retícula de 12 columnas.
- [x] Modo oscuro aplicado con el selector de modo.
  Modo fijado en un frame con `setExplicitVariableModeForCollection` («05 · Prueba de modo oscuro»): relleno, texto, borde, sombra y casilla cambian porque cada pintura está ligada a una variable.
- [x] Prototipo que recorre el happy path completo.
  Enlace `figma.com/proto/` de la tabla de arriba (el mismo flujo «Happy path» que en la Órbita 1).
- [x] Prueba 1 superada: al cambiar `color/primary`, cambian todas las pantallas a la vez.
  Los colores de las pantallas son tokens semánticos: cambiar `color/primary` actualiza todas las pantallas sin tocarlas una por una.
- [x] Prueba 2 superada: con todos los mockups en modo oscuro, nada desaparece contra el fondo.
  Los 17 mockups tienen su variante en oscuro y todos los pares de texto miden AA (≥ 4,5:1) en los dos modos: el más bajo es 5,05:1 en claro (`success` sobre `surface-container`) y 4,94:1 en oscuro (`secondary` sobre `surface-container`).

## Resumen de decisiones

### Rediseño de los wireframes
Rediseñé todas las pantallas del happy path con sus notas: 10 en móvil (inicio de sesión, creación de cuenta, invitaciones, creación de grupo, panel de tareas, nueva tarea, detalle de tarea, calendario, ver perfiles y perfil de miembro) y 7 en desktop, dejando los originales de la Órbita 1 intactos en su sección «sin modificar». El cambio más importante está en el **Panel de tareas**: la «X» de cada tarjeta —que se leía como borrar— pasa a «?»; se quita el icono de cabecera que era un control muerto; «+ Nueva tarea» es la única acción primaria y sigue abajo, al alcance del pulgar (44 px); cada tarjeta añade responsable, categoría y hora límite, así el panel responde «quién toca qué» sin abrir la tarea; y la barra de progreso pasa a texto «2 de 5 completadas». **Por qué:** P1 «procrastino hasta que son estrictamente urgentes» y P2 «si no hay un registro claro en mi calendario, se me pasan», y porque nada se comunica solo por color o forma (Samuel tiene deuteranopía; WCAG 1.4.1).

### Color
Primario **teal**: `#187577` en claro y `#8EE0E1` en oscuro. Secundario **índigo**: `#3521BA` en claro y `#A69CE2` en oscuro. El teal-700 es el primer tono de la escala que llega a 4,5:1 con texto blanco encima (5,45:1) y también sobre el fondo (5,25:1); el modo oscuro no se resuelve invirtiendo colores, sino apuntando cada alias al tono que mejor funciona en cada modo. Pareja con el contraste más bajo del sistema, en cada modo:

| Modo | Pareja (texto sobre fondo) | Contraste |
|---|---|---|
| Claro | `success` sobre `surface-container` (chip «✓ Hecho», icono/borde de éxito) | **5,05:1** ✓ AA |
| Oscuro | `secondary` sobre `surface-container` (borde/etiqueta de la insignia de categoría) | **4,94:1** ✓ AA |

Los únicos valores por debajo de 4,5:1 son los de `outline` (3,65:1 en claro y 4,29:1 en oscuro), que es un borde y solo exige 3:1 (WCAG 1.4.11).

### Tipografía
**Inter** (Google Fonts, licencia SIL Open Font) con dos pesos: **Regular 400** para el texto y **Bold 700** para lo que debe destacar, repartidos en seis niveles (h1 32/40, h2 25/32, h3 20/28, body 16/24, label 14/20, caption 14/20). Inter es una tipografía de palo seco pensada para pantalla, con altura de la x generosa y cifras claras —en esta app se leen horas y fechas todo el rato («Hoy 18:00», «Semana del 13 al 19») y hay que distinguir el 0 de la O y el 1 de la l—, es neutra (en un piso compartido no manda el gusto de una sola persona) y ya era la de los wireframes. Solo dos pesos porque cada peso es un archivo que el navegador descarga (criterio 2.18 WSG) y Samuel se conecta por datos móviles: la jerarquía fina la dan el tamaño y el color del Paso 3. Atkinson Hyperlegible, la alternativa para baja visión, se descarta por continuidad, no por defectos.

### Espaciado y retícula
Base de **4 px** (no 8: la pantalla es densa —calendario, tarjetas, metadatos y navegación— y con paso 4 hay punto intermedio para cada necesidad; además todos los tamaños tipográficos ya son múltiplos de 4). Escala `space-1…8` = 4, 8, 12, 16, 24, 32, 48, 64. Retícula del dispositivo de Álex (móvil, 360): **4 columnas × 76 px, medianil 8, margen 16 → 328 px útiles**. En desktop (1280): **12 columnas × 76 px**, margen 20 desde el borde de la barra lateral de 240 px → 1000 px útiles. Radios en cinco pasos (0, 4, 8, 16 y completo) y cuatro niveles de elevación con sombras reales.

### Componentes
15 componentes Atomic Design con sus estados:

- **Átomos:** Icono (sin estados, se recolorea desde `color/on-surface`) · Botón primario (normal, hover, foco, pulsado, desactivado, carga) · Botón secundario (normal, hover, foco, pulsado, desactivado) · Casilla (sin marcar, marcada, foco, pulsada, desactivada) · Icono-botón (normal, hover, foco, pulsado, desactivado; 44 × 44 con aria-label) · Enlace (normal, hover, foco, visitado).
- **Moléculas:** Chip de estado (pendiente, en curso, hecha —siempre icono + texto + color) · Campo de formulario (normal, foco, error, desactivado) · Desplegable (normal, foco, abierto, error, desactivado) · Fila de opción (sin marcar, marcada, foco) · Barra de progreso (vacía, parcial, completa).
- **Organismos:** Tarjeta de tarea (normal, hover, pulsada + estado de la tarea) · Cabecera (fija, sin estados) · Barra de navegación inferior (destino activo e inactivo) · Calendario/rejilla (día normal, hoy, seleccionado, fuera de mes, con tareas).

En todos los interactivos, foco visible de 2 px (WCAG 2.4.7) y ningún estado que se comunique solo con color.

### Responsive y modo oscuro
Al pasar el Panel de tareas al segundo ancho (1280 × 800) ajusté dos cosas: la navegación inferior pasa a **barra lateral vertical de 240 px** (`size-sidebar`) con las mismas 4 pestañas y el mismo criterio de activa (negrita + `primary`, nunca solo color), y el contenido pasa de 4 a 12 columnas manteniendo los mismos componentes y los mismos espacios (retícula del Paso 5); ninguna pieza se rehizo, solo se recompuso. Al pasar los mockups a modo oscuro no hubo que repintar nada —el modo explícito `setExplicitVariableModeForCollection` cambia relleno, texto, borde, sombra y casilla de golpe—, pero sí hubo que ajustar las variables: cada alias apunta a un **tono distinto en cada modo** (primary teal-700 → teal-300, warning amber-700 → amber-400, secondary índigo oscuro → índigo claro…) en lugar de usar un único valor o invertir colores, y la prueba «05 · Prueba de modo oscuro» existe precisamente para cazar cualquier valor que se haya quedado escrito a mano fuera del sistema.

## Uso de IA

He usado la IA en modo plan durante toda la órbita: en cada paso le pedí un plan —qué cambiar, dónde y cómo— y yo apliqué los cambios en Figma (y aquí en el repo) revisando cada resultado antes de dar el siguiente paso, así que las decisiones de color, tipografía, espaciado y componentes son mías y las justifico en este informe y en la guía de estilo. El detalle de cada uso, con qué le pedí, qué plan propuso, qué decidí, qué conservé y qué cambié y por qué, está en el [CHANGELOG.md](CHANGELOG.md).

## Lo que ha quedado pendiente

Está terminado lo que pide la plantilla: las nueve casillas de la lista de comprobación están superadas. Lo único que queda fuera es **Google Stitch**, que no se ha usado porque no hacía falta para esta entrega, y el enlace de prototipo es el del happy path; los demás flujos del archivo (piso nuevo, error de envío, alta de cuenta y grupo) siguen siendo los de la Órbita 1 y no se han retocado con los mockups nuevos.
