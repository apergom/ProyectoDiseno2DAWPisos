# CHANGELOG de uso de IA — Órbita 1: "Diseñar para que funcione"

Registro de cada uso de IA durante el proyecto, según exige el criterio C8 de la rúbrica.

**Modo de uso: IA en modo plan.** A la IA no se le encargó el proyecto: en cada paso le pedí un plan —qué cambiar, dónde y cómo— y fui siguiendo sus indicaciones sobre el tablero de FigJam y el archivo de Figma Design, revisando cada resultado antes de dar el siguiente paso. Las decisiones son mías y las justifico con los datos de la investigación (referentes, entrevistas P1 y P2, personas). Por eso cada entrada recoge **qué le pedí**, **qué plan propuso**, **qué decidí con el plan delante**, **qué conservé** y **qué cambié y por qué**.

---

# CHANGELOG de uso de IA — Órbita 2: "Diseñar para que se entienda"

## 2026-11-07 · Paso 4: tipografía (Inter, dos pesos y escala de 6 niveles)

- **Qué le pedí:** montar el sistema tipográfico del Paso 4. Antes le pregunté las dos decisiones que eran mías y elegí entre sus opciones: la familia (**Inter**, se mantiene) y los pesos (**solo Regular 400 y Bold 700**, de entre dos y tres pesos posibles).
- **Plan que propuso (apuntes del apartado 4):** elegir pensando en legibilidad en pantalla y en las personas; construir la escala modular desde 16 px con razón 1,25 redondeada a múltiplos de 4; que tenga entre 6 y 8 niveles con nombre, tamaño, altura de línea y peso; probarla con un texto real asignando un nivel a cada línea; simular la letra al 200 % duplicando los tamaños; y recoger la correspondencia con las etiquetas de HTML en una tabla de tres columnas, teniendo en cuenta que **la etiqueta la decide el significado y el nivel el aspecto**.
- **Qué decidí yo (con el plan delante):**
  - *Familia: Inter* — palo seco pensada para pantalla, con altura de la x generosa y cifras claras, que importa porque aquí se leen horas y fechas a diario («Hoy 18:00», «Semana del 13 al 19»); neutra para un piso compartido donde no manda el gusto de una sola persona; licencia libre en Google Fonts; y ya es la de los wireframes, así que no hay que repasar lo hecho. Atkinson Hyperlegible, la alternativa de los apuntes para baja visión, se descarta por continuidad, no por defectos.
  - *Dos pesos: Regular (400) y Bold (700)* — cada peso es un archivo que el navegador descarga (WSG 2.18) y Samuel se conecta por datos móviles; la jerarquía fina la dan el tamaño y el color del Paso 3, no meter más pesos. Con eso, `label` y `caption` comparten tamaño y se distinguen por el peso, igual que en el ejemplo oficial.
  - *Seis niveles:* `heading-1` 32/40, `heading-2` 24/32, `heading-3` 20/28 (los tres Bold), `body` 16/24 Regular, `label` 14/20 Bold y `caption` 14/20 Regular. **Sin nivel `display`**: Planificador no tiene pantalla de inicio con título grande y, si un nivel no se usa, sobra.
- **Qué construí en Figma:** el frame «Tipografía · Paso 4», debajo del de color en la pestaña `Orbita 2 :p`, con cinco bloques: cabecera con el motivo de cada elección; **01** la escala con especimen de texto real por nivel; **02** la tabla nivel → etiqueta HTML → uso (`h1`, `h2`, `h3`, `p`, `label`/`button`/`a`, `small`/`time`/`a`); **03** la pantalla «Detalle de tarea» línea a línea con el nivel que le toca en cada una; **04** la simulación al 200 %; y **05** las reglas de legibilidad con la muestra de cifras (0/O, 1/l/I y horas).
- **Qué destapó la prueba del 200 %:** (a) la pantalla crece hasta 1680 px y hace scroll sin que nada se corte ni se solape, que es lo que exige WCAG 1.4.4; (b) **la barra inferior de 4 pestañas no cabe al doble**: con etiquetas a 28 px necesita unos 600 px dentro de 360 —se anota la solución: desplazamiento horizontal dentro de la propia barra (`overflow-x`), permitido por WCAG y para maquetar en la Órbita 3—; y (c) el texto provisional de los wireframes (metadatos a 10 px, «HOY» a 8 px) se queda por debajo del mínimo de 14 px que piden los apuntes, así que al construir los mockups del Paso 8 todo texto baja a su nivel de escala.
- **Qué conservé:** los wireframes y las secciones de los Pasos 1 a 3 intactos (el texto provisional de esos wireframes no se toca: son de baja fidelidad y la escala se aplica al maquetar), y nada fuera de la pestaña.
- **Herramientas:** no usé Fontjoy ni comparé parejas porque aquí solo hay una familia (las parejas se resuelven con una sola tipografía bien escalonada); la comparación de licencias y de cifras quedó anotada en la cabecera de la sección.
- **Incidencias:** un error de sintaxis por unas comillas dobles dentro de un string, que se corrigió antes de ejecutar nada; comprobación final de la pestaña sin nodos huérfanos y sin solapes entre frames.

---

## 2026-11-07 · Paso 3: sistema de color (escalas, tokens y contraste)

- **Qué le pedí:** construir el sistema de color siguiendo el orden del Paso 3. Antes de empezar le pregunté dos cosas y decidí yo: el **color principal** (elegí el verde azulado entre las tres opciones planteadas desde el brief: azul, verde azulado y naranja) y confirmar que **tengo el plan de Educación de Figma** activo, que es el que permite los modos de variables que exige el Paso 7.
- **Plan que propuso (apuntes del apartado 3):** partir del brief y de las personas; convertir principal, secundario y neutros en escalas del 50 al 900 manteniendo el tono en HSL y moviendo solo saturación y luminosidad; añadir los colores de estado solo con los pasos que hacen falta; decidir los tokens semánticos apuntando, en cada modo, al tono que mejor funciona; medir todas las parejas de fondo y texto en los dos modos (4,5:1 en texto y 3:1 en bordes e iconos); y convertir una captura a escala de grises para ver qué información depende solo del color.
- **Qué decidí yo (con el plan delante):**
  - *Principal: verde azulado (teal)* — transmite orden y calma, que es justo lo que Álex pide para «evitar discusiones», y es el eje azul-verde el que mejor se distingue con la deuteranopía de Samuel.
  - *Secundario: índigo* — elegido a propósito fuera de la familia rojo-verde-ámbar para que una insignia de categoría no se confunda nunca con un error, un éxito o un aviso.
  - *Neutros con tono frío (190°)* para acompañar al teal sin competir con él, y *estados convencionales* (rojo error, verde éxito, ámbar aviso): ir en contra de una convención obliga a la persona a aprender algo nuevo, y la deuteranopía se cubre con icono y texto en cada estado, como ya decía el brief.
  - *Tono de cada modo:* en claro `color/primary` = teal-700 (el primero que llega a 4,5:1 con texto blanco y sobre el fondo) y en oscuro teal-300 con texto oscuro; `color/warning` = amber-700 en claro y amber-400 en oscuro.
- **Qué construí en Figma:** el frame «Sistema de color · Paso 3» dentro de la pestaña `Orbita 2 :p`, debajo de las secciones de wireframes, con cinco bloques: cabecera con el motivo de cada elección; **01** escalas primitivas (teal, indigo y neutral del 50 al 900, más rojo, verde y ámbar de estado); **02** tabla de 12 tokens semánticos con su valor en modo claro y oscuro; **03** tabla de contraste con las 19 parejas medidas en los dos modos; **04** la comprobación en escala de grises —el Panel del Paso 2 colado con la paleta, su gemelo convertido a gris por luminancia (mismo criterio que un editor de imágenes) y la demo de estados—; y **05** las frases «por qué este tono» para la auditoría oral.
- **Qué cambió tras comprobar (antes de dibujar nada):** la primera pasada de contrastes salió con **6 parejas por debajo del mínimo** y corregí el sistema: el teal-600 no daba para texto (3,44:1) → `primary` apunta al teal-700; el ámbar de aviso no llegaba a 3:1 como icono sobre la tarjeta (1,72:1) → token de aviso = amber-700 en claro; y el fondo suave de la insignia de categoría no llegaba a 3:1 (1,26:1) → se comprueba su borde/etiqueta (10,11:1) y su texto (13,49:1), dejando el fondo como elemento decorativo. Resultado final: **19/19 parejas cumplen** su mínimo en los dos modos.
- **Qué conservé:** el borrador de tokens escrito a mano en la pestaña (recogido en el inventario del Paso 1), todo el rediseño de los Pasos 1 y 2 y, por supuesto, la página 💡 Wireframes intacta.
- **Nota sobre la medición:** los ratios están calculados con la fórmula de contraste WCAG 2.2 —la misma que usa el plugin Stark— mediante código, porque el plugin no se puede ejecutar de forma automática; conviene repasar la tabla con Stark a mano antes de entregar.
- **Incidencias:** un error de sintaxis en la primera ejecución (una clave mal escrita en la escala neutra) y un fallo transitorio «Invalid fileKey» del servidor Figma que se resolvió reintentando. Nada tocado fuera de la pestaña.

---

## 2026-11-07 · Paso 2 (final): vuelven las 4 pestañas y ajustes de lógica

- **Qué le pedí:** «¿puedes añadirme todas las pestañas que aparecen en el primer wireframe y hacer cambios de lógica que consideres oportunos?». Como la frase admitía dos lecturas (restaurar las 4 pestañas originales, con Chat, o unificar las que ya estaban sin Chat), pregunté antes de tocar nada; **elegí restaurar las 4 originales, con Chat**, y dejar a la IA los cambios de lógica que considerara oportunos.
- **Qué comprobé antes de cambiar nada:** leí las reacciones del prototipo original para no inventar destinos. En el menú inferior: x0 → Panel de tareas, x90 → Calendario, x180 → Chat del grupo, x270 → Ver perfiles (la etiqueta de esa pestaña dice «Grupo»). En la barra lateral desktop: y148 → Calendario, y196 → Chat del grupo, y244 → Ver perfiles. Y el icono de la cabecera de Panel y Calendario (móvil) no tenía hotspot: era un control muerto.
- **Qué cambié (en las 10 pantallas rediseñadas):**
  - *Navegación*: vuelven las 4 pestañas —Tareas, Calendario, Chat y Grupo— en su hueco original (4 slots de 90 px en móvil; y = 120/160/200/240 en desktop), y los hotspots recuperan sus destinos originales.
  - *Pestaña activa*: se resalta con peso (Inter Semi Bold) y tono oscuro, y las inactivas se atenúan al 45 %. El estado no depende solo del color: además cambia la tipografía. Activa = Tareas en Panel, Nueva tarea y Detalle; Calendario en Calendario.
  - *Cabecera móvil*: se ocultan la caja y el «☰» de Panel y Calendario, que no llevaban a ninguna parte. La navegación real es el menú inferior.
  - *Notas*: las 8 notas de las dos secciones se reescriben para reflejar el menú de 4 pestañas, la activa resaltada y el icono de cabecera quitado.
- **Qué conservé:** el resto del rediseño (primario relleno / secundario texto, «X» → «⋮», metadatos en tarjetas, «2 de 5 completadas», «HOY», objetivos de 44 × 44, Fecha+Hora), la página 💡 Wireframes intacta y el inventario del Paso 1. La decisión de la Órbita 1 de dejar el chat **fuera de las funciones prioritarias del MVP** sigue tal cual documentada en el tablero: lo que se restaura aquí es la pestaña, porque los wireframes y el prototipo original sí tienen pantalla de «Chat del grupo» y el flujo «Error de envío» pasa por ella — así la navegación de las copias cuadra con la del prototipo en vez de contradecirla.
- **Incidencias:** al clonar la etiqueta «Chat» dentro de cada menú, los 8 clones (4 móviles y 4 desktop) acabaron sueltos en la página en vez de dentro de su frame; lo detecté en la primera validación visual, donde el menú seguía mostrando solo 3 pestañas. Los recolqué con `appendChild` explícito dentro de cada menú/sidebar y comprobé después que no queda ningún nodo huérfano en la pestaña.
- **Validación:** capturas de Panel de tareas y Calendario en móvil y desktop con las 4 pestañas, la activa resaltada y el icono de cabecera fuera; y comprobación de que la página 💡 Wireframes sigue con sus 23 elementos y 8 flujos.

---

## 2026-11-07 · Paso 2 (desktop): sección «Wireframes rediseñados · desktop»

- **Qué le pedí:** que hiciera también el wireframe de desktop: misma sección nueva en la pestaña `Orbita 2 :p`, con las 5 pantallas del happy path desktop (1280 × 800) duplicadas y sus notas.
- **Plan que propuso:** leer primero las pantallas desktop del flujo «Desktop · Happy path» (Inicio de sesión, Panel de tareas, Nueva tarea, Detalle de tarea y Calendario), clonarlas en una segunda sección sin tocar los originales, y aplicar en desktop los mismos criterios que en móvil adaptados a su patrón de navegación (la navegación es la **barra lateral**, no el menú inferior).
- **Qué cambié (por pantalla):**
  - *Barra lateral (las 4 pantallas de contenido)*: se quita «Chat» y «Grupo» sube a su hueco → Tareas, Calendario y Grupo; los hotspots se recolocan y el de Chat se oculta (misma decisión del MVP que en móvil).
  - *Inicio de sesión*: «Crear una cuenta nueva» queda justo bajo «Entrar» sin el separador que lo empujaba al fondo, y «Entrar» pasa a botón relleno. El bloque centrado se mantiene: aquí ya estaba equilibrado (en móvil subió porque había un hueco vacío).
  - *Panel de tareas*: la barra de progreso pasa a texto «2 de 5 completadas»; «X» de las tarjetas → «⋮»; metadatos (responsable · categoría · hora) en las 4 tarjetas; «+ Nueva tarea» relleno como única primaria.
  - *Nueva tarea*: **gana los campos «Fecha» y «Hora» en fila, que no existían en desktop** (una tarea sin fecha no puede entrarse en el calendario); «▾» en el campo Responsable; «Guardar tarea» baja hasta después de los campos nuevos y se rellena.
  - *Detalle de tarea*: «Marcar como hecha» primario y «Editar» a botón de texto secundario (antes idénticos); «X» del bloque → «⋮».
  - *Calendario*: flechas ← → con botones de 44 × 44 (antes iconos sueltos de 20 px); «HOY» escrito en la celda de hoy junto al «15»; «⋮» y metadatos en las 2 tarjetas. Las celdas ya medían 120 × 72, por encima del mínimo.
- **Qué conservé:** la página 💡 Wireframes intacta (23 elementos, mismos 8 flujos, sin clones sueltos), los componentes maestros y todo el rediseño móvil anterior. Las notas desktop explican los mismos motivos que las de móvil, con sus diferencias.
- **Incidencia:** un error de sintaxis en el primer intento de rediseñar el calendario (una línea sobrante); se reejecutó el script corregido sin efectos secundarios.

---

## 2026-11-07 · Paso 2: sección «Wireframes rediseñados» y rediseño del happy path

- **Qué le pedí:** crear dentro de la pestaña `Orbita 2 :p` una sección de wireframes rediseñados, duplicar ahí las pantallas del happy path móvil (Inicio de sesión, Panel de tareas, Nueva tarea, Detalle de tarea y Calendario) sin tocar nada de la página 💡 Wireframes, y aplicar el rediseño. Le pasé por escrito mis cinco propuestas de cambios y **elegí aplicar las cinco propuestas completas**.
- **Plan que propuso:** clonar las 5 pantallas del flujo «Happy path» dentro de la sección (los clones se desenchufan de las reacciones para que el prototipo original no se mueva), dejar bajo cada una una nota «Qué cambia y por qué», y responder en cada pantalla a las preguntas del Paso 2: jerarquía, agrupación, patrones confusos, elementos pulsables e información que no dependa solo del color.
- **Qué cambié (por pantalla):**
  - *Inicio de sesión*: el formulario sube a la parte alta (lo primero que se veía era un hueco vacío), «Crear una cuenta nueva» queda agrupado justo bajo el único botón y «Entrar» pasa a botón relleno como acción primaria.
  - *Panel de tareas*: la «X» de cada tarjeta era el menú de opciones y se leía como borrar → pasa a «⋮», y la «X» de la cabecera pasa a «☰»; «+ Nueva tarea» es la única acción primaria rellena y sigue abajo, al alcance del pulgar; cada tarjeta añade responsable · categoría · hora límite para saber «quién toca qué» sin abrirla; la barra de progreso pasa a texto «2 de 5 completadas»; el menú inferior se queda en Tareas, Calendario y Grupo, **sin «Chat»** (decisión de la Órbita 1: el chat queda fuera del MVP porque competiría con WhatsApp).
  - *Nueva tarea*: «Fecha» y «Hora» comparten fila (se rellenan juntas y ahorran una fila), el campo «Responsable» gana «▾» para que se lea como desplegable, se quita la «X» de la cabecera (ya está «←») y «Guardar tarea» pasa a primaria rellena.
  - *Detalle de tarea*: «Marcar como hecha» queda como primaria rellena y «Editar» baja a botón de texto secundario (los dos se veían iguales, el patrón engañoso que avisa el enunciado), la «X» del bloque pasa a «⋮» y la cabecera se queda sin «X».
  - *Calendario*: las flechas ← → ganan botones de 44 × 44, las celdas de día pasan de 40 × 40 a 44 × 44, la celda de hoy muestra «HOY» escrito además del número (el «15» salía cortado y solo se distinguía por el relleno oscuro, o sea, solo por el color), más «⋮» en las tarjetas y menú sin «Chat».
- **Qué conservé:** la página 💡 Wireframes intacta (23 elementos, mismo contenido y los mismos 8 flujos de inicio), los componentes maestros, los dos mockups previos y el inventario del Paso 1. Todo el rediseño vive solo en las copias de la pestaña `Orbita 2 :p`.
- **Cómo lo justifico (auditoría oral):** cada nota de la sección enumera el cambio y su motivo anclado en persona o principio: P1 «procrastino hasta que son estrictamente urgentes», P2 «si no hay un registro claro en mi calendario, se me pasan», el objetivo táctil de 44 × 44 y el «nada de información solo por color o forma».
- **Incidencias:** el filtro para reubicar los números del calendario no los detectó y quedaron desalineados con sus celdas (se corrigieron por id); el glifo «⋮» salía casi invisible en el gris claro de plantilla (se oscureció en las 7 tarjetas).
- **Pendiente:** sistema de color (Paso 3), tipografía (Paso 4), espaciado y retícula (Paso 5), iconos y componentes (Paso 6 y 7) y mockups (Paso 8).

---

## 2026-11-07 · Paso 1: inventario de decisiones y límites de trabajo en el archivo

- **Qué le pedí:** que leyera el enunciado de la Órbita 2 y el archivo de Figma, y que empezara por el Paso 1 avanzando por orden; más adelante le pedí explícitamente que **no cambiara nada de lo que ya hay en el archivo** y que solo trabajara dentro de la pestaña `Orbita 2 :p`.
- **Qué propuso / devolvió:** primero propuso reorganizar el archivo en las cinco páginas del enunciado (portada, guía de estilo, componentes, wireframes, mockups) —renombró dos páginas, creó dos y las reordenó—; después elaboró un **inventario de 33 decisiones visuales** con su token semántico en inglés (bloques de color, tipografía, espaciado, radio y elevación) a partir del wireframe «Panel de tareas» (móvil, 360 × 800).
- **Qué conservé:** el inventario de decisiones, que es justo lo que pide el Paso 1, y el borrador de tokens que yo tenía escrito en la pestaña (ahora está dentro del propio inventario). Los dos mockups previos y el borrador se quedaron **en su posición exacta**.
- **Qué cambié y por qué:** a mi petición, revirtió todo lo que había tocado fuera de la pestaña (nombres y orden de páginas, las dos páginas creadas y las secciones), de modo que el archivo vuelve a tener las mismas 8 páginas que al empezar; el inventario se quedó dentro de la pestaña `Orbita 2 :p`, junto a los mockups, en lugar de la página de wireframes. Motivo: quiero decidir yo la organización global del archivo.
- **Pendiente:** la organización en las cinco páginas que pide el enunciado (la dejo yo); rediseño de wireframes (Paso 2), sistema de color (Paso 3) y el resto de pasos.

---

## 2026-10-18 · Affinity mapping de las entrevistas y cierre de las decisiones del Paso 5

- **Qué le pedí:** que partiera de las entrevistas reales P1 y P2 que ya teníamos pegadas en el tablero, montara el affinity mapping con ellas y nos quitáramos de encima las cuestiones pendientes del Paso 5.
- **Plan que propuso:** agrupar las citas en seis bloques (amarillo = P1, azul = P2), añadiendo a cada uno su implicación de producto en verde; cambiar la nota de «PENDIENTE: transcribir» a «HECHO» apuntando a las fichas con las respuestas; y resolver las cuatro dudas del flujo citando la frase literal que las respalda, dejándolas en verde y limpiando la palabra «pendientes» del título de la zona.
- **Qué decidí:** cerrar que el aviso de vencimiento va dentro de la app (nada de notificaciones push de momento), que la semana del calendario empieza en lunes enseñando el día concreto, y que el chat se queda fuera del MVP. Anoté las cuatro decisiones en la zona de «Decisiones tomadas al recorrer el flujo».
- **Qué conservé:** las fichas de las personas y las transcripciones de las entrevistas, que no se tocaron para nada.
- **Qué cambié y por qué:** teniendo las respuestas reales ya no tenía sentido dejar decisiones «pendientes hasta las entrevistas»: cada una se cerró con su cita respaldada —P1 «procrastino hasta que son estrictamente urgentes», P2 «si no hay un registro claro en mi calendario, se me pasan», P1 «una buena organización visual me evitaría discusiones», P2 «fácil de consultar en conexiones lentas»—. El brief pasó de borrador a cerrado con ese mismo enfoque.
- **Pendiente:** anotar en las fichas el consentimiento y el formato de cada entrevista; hacer el test en Lyssna con 4–5 personas (para subir el C5 a 10); y crear el repo de GitHub.

---

## 2026-10-18 · Alta por invitación: se quita el código del piso

- **Qué le pedí:** ajustar el inicio de sesión para que no te metiera directamente en un grupo por defecto, y meter una pantalla de creación de grupo para invitar a la gente por su nombre de usuario (el ID). Como dudaba entre invitación directa o con confirmación, me preguntó y **elegí invitación con aceptación**.
- **Plan que propuso:** «Inicio de sesión» pasa a pedir usuario y contraseña; «Creación de cuenta» gana el campo de username; «Creación de grupo» cambia el bloque del código por un campo «Invitar por nombre de usuario» con su botón y una lista de invitados pendientes; pantalla nueva de «Invitaciones» en móvil (360 × 800) y en desktop (1280 × 800) para aceptar o rechazar; reenchufar las conexiones del prototipo (56 reacciones en total, sin dejar endpoints rotos); y actualizar en FigJam el user flow, el sitemap, el MVP (reescribiendo la función 1) y los recorridos por persona.
- **Qué decidí:** que la pantalla de «Invitaciones» fuera paso obligatorio si no tienes piso (y sin menú inferior, como el resto del onboarding); que el creador del piso actúe como fundador; y que la lista de invitados pendientes se vea directamente en «Creación de grupo».
- **Qué conservé:** las personas, los referentes, las entrevistas, las demás funciones del MVP, el presupuesto de carga de 450 KB, los 8 flujos de inicio y el resto de decisiones tomadas.
- **Qué cambié y por qué:** cambiamos el alta por código de piso a un sistema de cuenta e invitación. El motivo es técnico y de UX: un código suelto por WhatsApp lo puede usar cualquiera y no identifica al usuario, que es justo lo que requiere el panel de reparto; con el username como ID, el fundador controla a quién invita y el usuario decide si acepta.
- **Incidencia resuelta:** un par de clones de componentes cayeron fuera de su frame (se fueron a la página «Cover» y a la raíz de wireframes) y los recolqué en sus pantallas en ambos viewports; volvimos a validar que el prototipo no tuviera saltos rotos.

---

## 2026-10-18 · Wireframes desktop, pantallas de alta y perfiles, y tablero sincronizado

- **Qué le pedí:** primero, rematar el wireframe desktop (1280 × 800) que faltaba; después, meter en el user flow las pantallas de creación de cuenta, creación de grupo y la vista de perfiles de miembros; y por último, sincronizar el tablero de FigJam para que cuadrara todo.
- **Plan que propuso:** completar las 8 pantallas desktop en la sección de Samuel y arreglar un solape con el snackbar de error en móvil; crear 4 pantallas nuevas en móvil y 4 en desktop («Creación de cuenta», «Creación de grupo», «Ver perfiles», «Perfil de miembro») respetando la nomenclatura del sitemap; devolver la pestaña «Grupo» al menú inferior y a la sidebar; recolocar los hotspots a 4 slots; el prototipo subió a 110 interacciones y 8 flujos de inicio. En FigJam: añadir las ramas de alta y perfiles al user flow, 4 nodos nuevos con sus colores al sitemap, y actualizar el MVP a 6 funciones.
- **Qué decidí:** que «Ver perfiles» sea una vista de lista y «Perfil de miembro» una ficha individual genérica reutilizable; que el alta vaya sin menú de navegación (igual que el login); y que el bloque «6. Chat grupal» que estaba a medias en el MVP se sustituyera por «6. Ver perfiles» (dejando fuera el chat).
- **Qué conservé:** las personas, las entrevistas, los referentes y los temas de privacidad; los textos de las funciones 2 a 5 del MVP se quedaron tal cual.
- **Qué cambié y por qué:** forcé a que el flujo cubriera el alta completa y la gestión de perfiles; como la rúbrica exige la trazabilidad flujo → sitemap → wireframes, propagué los cambios a todos los entregables y al brief para no dejar nada descolgado.
- **Nota sobre la decisión «quién crea el piso»:** la propuso la IA para cerrar un deadlock del flujo y la acepté porque soluciona un problema real de lógica: si no hay un rol fundador que inicialice el grupo, la primera tarea se queda sin asignar.

---

## 2026-10-18 · Auditoría frente al enunciado y correcciones en ambos archivos

- **Qué le pedí:** revisar los 8 pasos de la práctica punto por punto y proponerme lo necesario en FigJam y Figma Design para cumplir la rúbrica al 100%.
- **Plan que propuso:** en Figma Design, auditar las 31 interacciones (comprobando que todas tuvieran un target válido), quitar la pestaña «Grupo» del menú inferior (era un callejón sin salida sin screen asociada) y reajustar los hotspots a 3 ranuras; rehacer el Calendario como vista semanal (del 13 al 19). En FigJam: ordenar el diagrama «User flow principal (MVP completo)» marcando entrada, happy path y 2 edge cases; crear zona de «Decisiones pendientes» (4 stickies); zona de «Evidencia» con plantilla; dibujar el sitemap como un árbol de 3 niveles con leyenda de colores; y reordenar las zonas del tablero por número de paso. En el repo: reestructurar el `BRIEF.md` con los 5 puntos clave y la restricción de peso de 450 KB (criterio 2.4 WSG).
- **Qué decidí:** aplicar los cambios en todo lo que chocaba con el enunciado (menú sin deadlocks, calendario semanal y árbol del sitemap) y mantener el resto intacto.
- **Qué conservé:** el contenido del tablero (fichas, cuestionarios, zonas del Paso 1, textos del sitemap), salvo los ajustes de estructura indispensables.
- **Qué cambió y por qué:** el scope de pantallas (se quitó «Grupo» del menú y el Calendario pasó de vista mensual a semanal) y la disposición de las zonas en el canvas. El motivo es que las especificaciones piden un único user flow con edge cases y decisiones documentadas, un sitemap de máximo 3 niveles, un prototipo navegable sin puntos ciegos y un `BRIEF.md` bien estructurado.
- **Pendiente (ya resuelto):** crear el repositorio de GitHub y subir los archivos; las entrevistas del Paso 3 ya están subidas y transcritas en el tablero desde el 18/10.

---

## 2026-10-18 · Recorte del MVP y user flows de las personas

- **Qué le pedí:** recortar el alcance del MVP y dejar dibujados dentro del tablero el happy path general y los user flows específicos para Álex y Samuel.
- **Plan que propuso:** pasar de 7 bloques a 5 funcionalidades clave (login, crear/asignar tarea, dashboard con % semanal, alertas del sistema y calendario semanal), justificando cada una y añadiendo 5 descartes argumentados; meter una nota en el sitemap indicando las rutas prioritarias; y crear dos diagramas —«User flow · Álex (happy path)» y «User flow · Samuel (happy path)»— marcando el camino principal con línea continua y las ramas alternativas con discontinua.
- **Qué decidí:** aceptar el tijeretazo del MVP, pero dejando visible el MVP original de 7 bloques y la tabla DENTRO/FUERA como histórico de decisiones, anotando que si las entrevistas pedían chat a gritos, se daría marcha atrás.
- **Qué conservé:** la tabla DENTRO/FUERA y el MVP inicial de 7 bloques; wireframes y prototipo se quedaron como estaban.
- **Qué cambió y por qué:** el chat pasa a ser "notificaciones automáticas del sistema" y el calendario mensual se mueve al backlog de la iteración 2. La razón viene del Paso 2: meter un chat es competir contra WhatsApp (donde ya están los grupos del piso) y estas apps mueren si la gente no entra a hablar; analizando las necesidades del tablero, ni el chat ni la vista mensual son bloqueantes para el objetivo principal de Álex y Samuel. **Confirmado el 18/10:** las entrevistas respaldaron la decisión —P1 busca «evitar discusiones» y P2 pide «un registro claro», no otra app de mensajería.
- **Incidencia resuelta:** corregí un typo que se metió en el subtítulo de la zona del MVP recortado.

---

## 2026-10-18 · Opinión crítica sobre el tablero de FigJam existente

- **Qué le pedí:** un Code Review / UX Review del tablero «Planificador Proyecto» analizando la hipótesis, las personas y la definición del MVP.
- **Plan que propuso:** un desglose con pros (buen hilo conductor idea → problema → personas → MVP; buena priorización con la matriz DENTRO/FUERA) y contras: MVP de 7 bloques con riesgo de sesgo de confirmación; ambigüedad en el target (¿estudiantes en piso compartido o familias?); falta de entrevistas, métricas y refactorización del canvas (connectors sueltos, un text box gigante de 4.128 px y las personas pegadas como imagen sin formatear).
- **Qué decidí:** congelar las propuestas por el momento y dejarlas anotadas como backlog pendiente para cuando tuviéramos los datos de las entrevistas.
- **Qué conservé:** el análisis de la IA guardado como referencia, sobre todo el recorte del MVP y la focalización en un único user persona (estudiantes).
- **Qué cambié y por me dio por cambiar:** nada en esta sesión. La razón: de cara a la defensa del proyecto, cada decisión tiene que estar respaldada por investigación con usuarios; aplicar sugerencias a ciegas nos dejaba sin justificación metodológica. La decisión se tomó más adelante, en el Paso 5, con los datos reales.

---

## 2026-10-18 · Lectura del enunciado y planificación de la órbita

- **Qué le pedí:** analizar el enunciado del proyecto (los 8 pasos, los deliverables y la rúbrica de evaluación) y trazar la hoja de ruta.
- **Plan que propuso:** una planificación por fases alineada con los 8 pasos del enunciado y orientada a cubrir los criterios C1 a C8.
- **Qué decidí:** seguir el flujo de trabajo propuesto (hipótesis → referentes → entrevistas → personas → MVP y user flow → sitemap → wireframes y prototipo → brief) y crear este `CHANGELOG.md` para documentar el proceso desde el día 1.
- **Qué conservó del enunciado:** la estructura estricta, no se tocó ninguna especificación.
- **Qué cambié y por qué:** nada del enunciado original; solo adaptamos el material que ya teníamos en el tablero al orden lógico que pide la guía (ya que habíamos empezado la casa por el tejado con personas y MVP, saltándonos los Pasos 1 y 2). El motivo: las instrucciones dejan claro que hay que respetar la secuencia porque cada fase consume los inputs de la anterior.

---

## 2026-10-18 · Pasos 6 y 7: sitemap, wireframes y prototipo

- **Qué le pedí:** maquetar los wireframes de baja fidelidad por pantalla (happy path + estados límite) y montar el prototipo interactivo en la plantilla de Figma Design, abstrayendo los elementos recurrentes en componentes.
- **Plan que propuso:** trabajar sobre la página «💡 Wireframes» —crear 4 componentes reutilizables (Header, Bottom Nav, Task Card y Primary Button); una pantalla base / frame layout (360 × 800, el viewport de Álex); 8 frames de wireframe utilizando escala de grises con el naming exacto del sitemap; 31 interacciones `ON_CLICK` y 3 flows de entrada (Happy path, Piso nuevo y Error de envío); y sincronizar la zona «Paso 6 · Sitemap» en FigJam.
- **Qué decidí:** estructurar primero el sitemap para tener clara la arquitectura de información y el naming de las pantallas antes de tirar un solo frame en Figma, usando la plantilla compartida solo como workspace.
- **Qué conservó:** la plantilla base como contenedor; todos los componentes, layouts y pantallas se diseñaron desde cero para el proyecto.
- **Qué cambió y por qué:** no se modificó nada de los requisitos. Motivo: el criterio exige que cada frame coincida 1:1 con el nodo del sitemap y que la UI use componentes para mantener el principio DRY (si cambias el componente master, se actualiza en todo el prototipo).
- **Incidencias resueltas:** al clonar una pantalla se fue a otra página del archivo (se volvió a mover a Wireframes); además, la API del motor de prototipos de Figma requería pasar un array en la propiedad `actions` de las reacciones.
- **Pendiente:** lanzar test de usabilidad en Lyssna con 4–5 usuarios con perfil similar a Álex, planteando una task directa sin guiarlos para detectar puntos de fricción (necesario para rascar la nota máxima en el C5).