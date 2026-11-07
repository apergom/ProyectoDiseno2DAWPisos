# Órbita 2: sistema visual de Planificador (tareas de un piso compartido)

> Resumen de la entrega de la Órbita 2. Se irá completando a medida que avancen los pasos.
> **Estado: en curso — Pasos 1, 2, 3, 4 y 5 completados.**

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
| Sistema tipográfico (escala y correspondencia HTML) | Página `Orbita 2 :p` → frame «Tipografía · Paso 4» (debajo del de color): escala de 6 niveles con especimen, tabla nivel → etiqueta HTML → uso, prueba del texto real línea a línea y simulación de letra al 200 % |
| Espaciado, retícula, radios y elevación | Página `Orbita 2 :p` → frame «Espaciado, retícula y composición · Paso 5» (debajo del de tipografía): escala de espaciado sobre 4 px, retículas de móvil y desktop, escala de radios, 4 niveles de elevación, la retícula colocada sobre el Calendario con sus tablas de alineación y separaciones, y la medición de objetivos táctiles 44 × 44 |
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
Una sola familia, **Inter** (Google Fonts, licencia SIL OFL), elegida por legibilidad en pantalla —altura de la x generosa y cifras claras para leer horas como «Hoy 18:00»—, por ser neutra para un piso compartido y por ya estar en los wireframes; Atkinson Hyperlegible se descarta por continuidad, no por defectos. **Solo dos pesos, Regular (400) y Bold (700)**: cada peso es un archivo (WSG 2.18) y la jerarquía fina la dan el tamaño y el color, no más grosor. Escala modular de **6 niveles** (base 16, razón 1,25, redondeada a múltiplos de 4): `heading-1` 32/40 Bold, `heading-2` 24/32 Bold, `heading-3` 20/28 Bold, `body` 16/24 Regular, `label` 14/20 Bold y `caption` 14/20 Regular —`label` y `caption` comparten tamaño y se distinguen por el peso—. Sin `display`, a diferencia del borrador del inventario: Planificador no tiene pantalla de inicio con título grande y un nivel que no se usa sobra. Nada por debajo de 14 px; cada nivel tiene su etiqueta HTML (`h1`, `h2`, `h3`, `p`, `label`/`button`/`a`, `small`/`time`) decidida por el significado, no por el aspecto. La simulación al 200 % confirmó que la pantalla aguanta (crece y hace scroll, WCAG 1.4.4) y destapó que la barra inferior de 4 pestañas necesita desplazamiento horizontal al doble de tamaño, anotado para maquetar en la Órbita 3.

### Espaciado, retícula y composición
Cuadrícula de **4 px** (y no de 8, porque la pantalla es densa y hace falta un paso intermedio) con 8 espacios: 4, 8, 12, 16, 24, 32, 48 y 64, y regla de proximidad —dentro de un bloque el espacio es menor que entre bloques—; donde hay borde propio (tarjetas), el empate de 16 con el padding no crea ambigüedad. **Retícula: móvil, 4 columnas de 76 px con medianil 8 y margen 16** (las tarjetas de 328 ocupan las 4 columnas exactas) **y desktop, 12 columnas de la misma columna de 76 con margen 20** desde la barra lateral, para que un componente no se recalcule al cambiar de tamaño. **Radios en cinco pasos (0, 4, 8, 16 y completo)** con la regla radio interior = radio exterior − relleno: se normalizaron 60 elementos que tenían radios sueltos de 2, 5 y 6 px. **Elevación en 4 niveles** resueltos con sombras reales y nunca con bordes grises: 0 (fondo), 1 (tarjetas), 2 (barra inferior y menús), 3 (diálogos); en modo oscuro la profundidad se marca subiendo escalón de superficie, porque una sombra oscura sobre fondo oscuro no se ve. La retícula se colocó sobre el Calendario, el wireframe más complejo: todo alineado a 16 tras corregir la fila de días (estaba en x=14) y las flechas del mes (estaban pegadas, ahora con 8 px), con la única excepción documentada del medianil de 3,33 px de la fila de días —7 celdas de 44 px no caben en 328 px con medianiles múltiplos de 4—, y se midieron los elementos pulsables: cuatro no llegaban a 44 × 44 en móvil (el checkbox y el «⋮» de las tarjetas, el enlace de registro y el botón «Editar») y se resolvieron con hotspots transparentes de 44 × 44 sin inflar los iconos.

### Componentes
Pendiente (Paso 6).

### Responsive y modo oscuro
Pendiente (Paso 8).

## Uso de IA
He usado la IA en modo plan para el Paso 1: leer el enunciado, inventariar qué hay en el archivo y redactar el inventario de 33 decisiones con su token semántico a partir del wireframe «Panel de tareas». Tras mi indicación de no tocar nada fuera de la pestaña de Órbita 2, revirtió los cambios de estructura y dejó el inventario dentro de esa pestaña. Para el Paso 2 le pedí que duplicara el happy path (móvil y desktop) en secciones nuevas y le pasé mis propuestas de rediseño; aplicando las cinco completas en ambos viewports, cada cambio quedó anotado en su nota con el motivo (persona o principio) para poder defenderlo en la auditoría. Al terminar le pedí restaurar las 4 pestañas de navegación del wireframe original (con «Chat») y aplicar los cambios de lógica que considerara oportunos —pestaña activa resaltada y control muerto de cabecera fuera—, y antes de preguntarle qué entendía por «pestañas» me confirmó la opción elegida. Para el Paso 3 le pregunté el color principal (elegí verde azulado entre las opciones propuestas) y construyó la sección con escalas, tokens semánticos y tabla de contraste; tras la primera comprobación, en la que 6 parejas bajaban del mínimo, corregimos los tonos hasta dejar 19/19. Para el Paso 4 le pregunté las dos decisiones que eran mías —familia y pesos— y elegí entre sus opciones Inter con solo Regular y Bold; a partir de ahí construyó la escala de 6 niveles, la tabla de correspondencia con HTML y la simulación al 200 %, que destapó que la barra inferior no cabe al doble y hay que maquetarla con desplazamiento horizontal. Para el Paso 5 le pregunté la cuadrícula (elegí 4 px entre 4 y 8) y sobre qué wireframe colocar la retícula (elegí el Calendario, el más complejo); construyó la escala de espaciado, las retículas, los radios y la elevación, y de la medición salieron las correcciones que aplicó en los wireframes: fila de días alineada, flechas separadas y hotspots de 44 × 44 en los cuatro elementos que no llegaban. El detalle está en el [CHANGELOG.md](CHANGELOG.md).

## Lo que ha quedado pendiente
Organización del archivo en las cinco páginas del enunciado, iconos y componentes (Paso 6 y 7), variables y estilos en Figma (Paso 7), mockups, prototipo y guía de estilo (Paso 8). Además de los pendientes de los anteriores pasos, quedan anotados para el Paso 8: reajustar el desktop a su retícula (el contenido arranca en x=280 y debería estar en 260; la segunda columna de tarjetas, en 780 y debería estar en 764) y resolver con desplazamiento horizontal la barra de 4 pestañas al 200 %. Pendientes menores: repasar la tabla de contraste del Paso 3 con el plugin Stark a mano antes de entregar (los ratios están calculados con la misma fórmula WCAG 2.2), y llevar el texto provisional de los wireframes —metadatos a 10 px, «HOY» a 8 px— a su nivel de escala (mínimo 14 px) al construir los mockups del Paso 8.
