# CHANGELOG de uso de IA — Órbita 1: "Diseñar para que funcione" · Órbita 2: sistema visual

Registro de cada uso de IA durante el proyecto, según exige el criterio C8 de la rúbrica.

**Modo de uso: IA en modo plan.** A la IA no se le encargó el proyecto: en cada paso le pedí un plan —qué cambiar, dónde y cómo— y fui siguiendo sus indicaciones sobre el tablero de FigJam y el archivo de Figma Design, revisando cada resultado antes de dar el siguiente paso. Las decisiones son mías y las justifico con los datos de la investigación (referentes, entrevistas P1 y P2, personas). Por eso cada entrada recoge **qué le pedí**, **qué plan propuso**, **qué decidí con el plan delante**, **qué conservé** y **qué cambié y por qué**.

---

## 2026-11-08 · Órbita 2: informe del sistema visual rellenado desde el archivo de Figma

- **Qué le pedí:** rellenar la plantilla del informe «Órbita 2: sistema visual» con el contenido real del archivo de Figma de la entrega —tablas de tokens y de contraste, tipografía, espaciado y retícula, inventario de componentes, notas de rediseño, mockups y lista de comprobación— y subirlo al repo junto con este CHANGELOG actualizado.
- **Plan que propuso:** extraer de cada página del archivo los datos exactos (los 17 valores de contraste medidos en claro y en oscuro, la escala tipográfica de seis niveles, la retícula de 4 × 76 en móvil y 12 × 76 en desktop, los 15 componentes con sus estados y las 17 notas «qué cambia y por qué»), ubicar cada entregable por página y sección, marcar las nueve casillas de la comprobación con la evidencia de cada punto y redactar el resumen de decisiones, el uso de IA y el pendiente.
- **Qué decidí:** conservar la estructura exacta de la plantilla (enlaces, dónde está cada cosa, lista de comprobación, resumen de decisiones, uso de IA y pendiente), enlazar el prototipo del happy path con `figma.com/proto/` y declarar Google Stitch como no usado.
- **Qué conservé:** la plantilla tal cual venía, los nombres de páginas y secciones del archivo de Figma y las cifras tal y como están medidas en la guía de estilo (nada de redondear ni inventar valores).
- **Qué cambié y por qué:** el título lleva ahora el nombre de la aplicación («Órbita 2: sistema visual de Planificador») y se quitó la línea de instrucciones que traía la plantilla; el informe se guardó como `ORBITA-2.md` para que quede junto al `BRIEF.md` y al `CHANGELOG.md`. El motivo: la entrega tiene que poder leerse sin la plantilla delante y cada dato tiene que poderse comprobar contra el archivo de Figma.

---

## 2026-11-08 · Modo oscuro creado con ayuda de la IA

- **Qué le pedí:** cómo montar el modo oscuro del sistema visual para que todas las pantallas cambien de golpe sin pintarlas una por una, y cómo asegurarme de que no se escapa ningún color.
- **Plan que propuso:** dar a la colección semánticos dos modos (claro y oscuro) con alias a los primitivos; fijar el modo explícito en un frame de prueba con `setExplicitVariableModeForCollection` —un botón, una tarjeta y un campo— para ver de un vistazo qué no cambia; y medir el contraste de todos los pares de texto en los dos modos antes de dar por bueno el resultado.
- **Qué decidí:** que el modo oscuro no se resuelve invirtiendo colores: cada token apunta al tono de la escala que mejor funciona en cada modo (primary teal-700 en claro → teal-300 con texto oscuro en oscuro, warning amber-700 → amber-400, secondary índigo oscuro → índigo claro). También decidí que el estado nunca se distinga solo por el tono, porque Samuel tiene deuteranopía.
- **Qué conservé:** las escalas del Paso 3, la tipografía, el espaciado y todos los wireframes: el oscuro se montó encima del sistema ya existente, no hizo falta rehacerlo.
- **Qué cambié y por qué:** los valores de los alias modo a modo y cualquier pintura que no estuviera ligada a una variable (la prueba existe justo para cazarlas). El motivo: la app se consulta de día y de noche con la misma información, y todos los textos tienen que cumplir AA en los dos modos —el más bajo medido queda en 5,05:1 en claro y 4,94:1 en oscuro—.

---

## 2026-11-08 · Reorganización de los pasos de la práctica en el archivo de Figma

- **Qué le pedí:** reorganizar el archivo de Figma para que cada uno de los ocho pasos de la práctica tuviera su sitio claro y se pudiera recorrer la entrega sin que nadie la explicara.
- **Plan que propuso:** crear las cuatro páginas de la entrega —«Guía de estilo», «Componentes», «Wireframes» y «Mockups»— y encuadrar cada entregable con su número de paso (Paso 1 · Inventario de decisiones, Paso 2 · Wireframes rediseñados en móvil y desktop, Pasos 3 a 5 · color, tipografía y espaciado, Paso 6 · inventario de componentes, Paso 7 · variables y estilos, Paso 8 · guía de estilo y mockups), dejando los wireframes originales de la Órbita 1 en su propia sección «sin modificar».
- **Qué decidí:** separar lo nuevo de lo original: nada de la Órbita 1 se borra ni se mueve de su sección, y el inventario de decisiones del Paso 1 convive con los originales pero identificado con su número de paso.
- **Qué conservé:** todas las páginas y el contenido originales del archivo (Definition, wireframes originales, Design, Handoff y Graveyard), sin tocarlos.
- **Qué cambié y por qué:** la disposición de las entregas y los nombres de las secciones y frames, que ahora llevan el número de paso. El motivo: la rúbrica pide que el archivo se pueda recorrer solo; con el paso en el nombre se ve de un vistazo qué salió de cada fase y dónde busca el evaluador cada entregable.

---

## 2026-10-18 · Affinity mapping de las entrevistas y cierre de las decisiones del Paso 5

- **Qué le pedí:** que partiera de las entrevistas reales P1 y P2 que ya teníamos pegadas en el tablero, montara el affinity mapping con ellas y nos quitáramos de encima las cuestiones pendientes del Paso 5.
- **Plan que propuso:** agrupar las citas en seis bloques (amarillo = P1, azul = P2), añadiendo a cada uno su implicación de producto en verde; cambiar la nota de «PENDIENTE: transcribir» a «HECHO» apuntando a las fichas con las respuestas; y resolver las cuatro dudas del flujo citando la frase literal que las respalda, dejándolas en verde y limpiando la palabra «pendientes» del título de la zona.
- **Qué decidí:** cerrar que el aviso de vencimiento va dentro de la app (nada de notificaciones push de momento), que la semana del calendario empieza en lunes enseñando el día concreto, y que el chat se queda fuera del MVP. Anoté las cuatro decisiones en la zona de «Decisiones tomadas al recorrer el flujo».
- **Qué conservé:** las fichas de las personas y las transcripciones de las entrevistas, que no se tocaron para nada.
- **Qué cambié y por qué:** teniendo las respuestas reales ya no tenía sentido dejar decisiones «pendientes hasta las entrevistas»: cada una se cerró con su cita respaldada —P1 «procrastino hasta que son estrictamente urgentes», P2 «si no hay un registro claro en mi calendario, se me pasan», P1 «una buena organización visual me evitaría discusiones», P2 «fácil de consultar en conexiones lentas»—. El brief pasó de borrador a cerrado con ese mismo enfoque.

---

## 2026-10-18 · Alta por invitación: se quita el código del piso

- **Qué le pedí:** ajustar el inicio de sesión para que no te metiera directamente en un grupo por defecto, y meter una pantalla de creación de grupo para invitar a la gente por su nombre de usuario (el ID). Como dudaba entre invitación directa o con confirmación, me preguntó y **elegí invitación con aceptación**.
- **Plan que propuso:** «Inicio de sesión» pasa a pedir usuario y contraseña; «Creación de cuenta» gana el campo de username; «Creación de grupo» cambia el bloque del código por un campo «Invitar por nombre de usuario» con su botón y una lista de invitados pendientes; pantalla nueva de «Invitaciones» en móvil (360 × 800) y en desktop (1280 × 800) para aceptar o rechazar; reenchufar las conexiones del prototipo (sin dejar endpoints rotos); y actualizar en FigJam el user flow, el sitemap, el MVP y los recorridos por persona.
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

---

## 2026-10-18 · Alta por invitación: se quita el código del piso

- **Qué le pedí:** que el inicio de sesión ya no metiera a la persona dentro de un grupo, y que hubiera una pantalla de creación de grupo desde la que invitar a los demás por su nombre de usuario (el identificador). Preguntado sobre el modelo de invitación, el estudiante eligió **invitación con aceptación** (no alta directa).
- **Qué devolvió:**
  - **Figma Design:** la pantalla «Inicio de sesión» pasó a pedir nombre de usuario y contraseña (antes: nombre y código del piso); «Creación de cuenta» ganó el campo de nombre de usuario; «Creación de grupo» sustituyó el bloque del código por un campo «Invitar por nombre de usuario» con su botón «Invitar» y una lista de invitados pendientes (samuel_r y lucia.p); y se creó la pantalla nueva **«Invitaciones»** en móvil (360 × 800) y en desktop (1280 × 800, en la fila4 de la sección de Samuel), con la invitación pendiente de Álex (aceptar o rechazar), el botón «Crear un grupo» y el enlace «Cerrar sesión». El prototipo quedó en56 reacciones sin destinos inválidos: «Crear cuenta» y «Volver» de Crear grupo llevan ahora a «Invitaciones», y desde allí se acepta (→ Panel) o se crea el grupo.
  - **FigJam:** el user flow reescribió el nodo de entrada y el de inicio de sesión («nombre de usuario y contraseña»), el rombo pasó de «¿Código correcto?» a «¿Tiene piso?» y el caso límite de «código incorrecto» a «usuario o contraseña incorrectos»; el flujo ganó el nodo «Invitaciones» con sus ramas (aceptar la invitación → Panel; «Crear un grupo» → Creación de grupo). El sitemap añadió «Invitaciones» colgando de la raíz, con «Creación de grupo» debajo, y la nota explica el camino de quien no tiene piso. El MVP reescribió la función1 (entrar con nombre de usuario y contraseña, invitando por identificador) y el sticky «¿quién crea el piso?» se actualizó (quien crea la cuenta pasa por Invitaciones y funda el grupo invitando por nombre de usuario).
  - **Repo:** BRIEF.md (función1 y criterio de éxito5) ajustados al nuevo modelo.
- **Qué se conservó:** las personas, los referentes, las entrevistas, las demás funciones del MVP, la restricción ambiental de450 KB, los8 flujos de inicio y los stickies de decisiones que siguen abiertos.
- **Qué se cambió y por qué:** el alta dejó de ser por código de piso para ser por cuenta e invitación. El motivo es que un código compartido en el grupo de WhatsApp permite entrar a cualquiera que lo vea y no identifica a cada persona, justo lo que el panel de reparto necesita; con el nombre de usuario como identificador, el fundador elige a quién invita y la persona invitada acepta o rechaza.
- **Decisiones de diseño que tomó la IA (bajo supervisión del estudiante):** «Invitaciones» es el punto de paso obligatorio de quien no tiene piso (acepta una invitación o crea la suya propia) y va sin menú, como el resto del alta; el fundador sigue siendo quien crea la cuenta; y la lista de invitados pendientes se muestra en la propia «Creación de grupo» para que el fundador vea quién ha aceptado.
- **Incidencia resuelta:** varios clones de elementos cayeron fuera de su frame (en la página «Cover» o en la raíz de la página de wireframes) y se recolocaron dentro de «Creación de cuenta», «Creación de grupo» e «Invitaciones» en ambos tamaños; el prototipo se volvió a validar (sin destinos inválidos) y el texto de «Volver» de Crear grupo pasó a «Volver a Invitaciones».

---

## 2026-10-18 · Wireframes desktop, pantallas de alta y perfiles, y tablero sincronizado

- **Qué le pedí:** primero, completar el wireframe desktop (1280 × 800) que faltaba; después, añadir al user flow una pantalla de creación de cuenta, una de creación de grupo y la posibilidad de ver los perfiles de cada miembro del grupo; y por último, editar todo el tablero de FigJam para que reflejara los cambios de diseño del wireframe.
- **Qué devolvió:**
  - **Figma Design:** se completaron las8 pantallas desktop del sitemap en la sección «Wireframes desktop (1280x800) — Samuel» y se corrigió un solape del chat de error en móvil (el pie y el botón «Reintentar» pisaban el último mensaje). Después se crearon4 pantallas nuevas en móvil y4 en desktop («Creación de cuenta», «Creación de grupo», «Ver perfiles» y «Perfil de miembro») con los mismos nombres que el sitemap; la pestaña «Grupo» volvió al menú inferior y a la barra lateral (antes se había quitado por no tener pantalla detrás); los hotspots de la navegación se recolocaron a4 ranuras; el prototipo pasó a110 interacciones sin destinos inválidos y a8 flujos de inicio (los dos nuevos: «Alta de cuenta y grupo» móvil y «Desktop · Alta de cuenta y grupo»).
  - **FigJam:** el user flow ganó la rama de alta (Inicio de sesión → Creación de cuenta → Creación de grupo → Panel de tareas) y la rama de perfiles (Panel →(pestaña Grupo)→ Ver perfiles →(toque en un miembro)→ Perfil de miembro), con etiquetas en las flechas; el sitemap ganó esos4 nodos con sus flechas y colores (PRINCIPAL/SECUNDARIA) y la nota explica ahora las dos tamaños de frame y los8 flujos; el MVP pasó a6 funcionalidades —entran el alta y los perfiles; el chat sigue fuera—; y el sticky «¿quién crea el piso y reparte la primera tarea?» quedó marcado como resuelto.
  - **Repo:** BRIEF.md (alcance de6 funciones y variante desktop) y README (los8 flujos del prototipo) actualizados.
- **Qué se conservó:** las personas, las entrevistas, los referentes, los tres stickies de decisiones que siguen abiertos (notificación de avisos, calendario y chat) y la privacidad; los textos de las funciones2 a5 del MVP se dejaron literales.
- **Qué se cambió y por qué:** el usuario pidió expresamente que el flujo incluyera creación de cuenta, creación de grupo y perfiles; como el enunciado encadena flujo → sitemap → wireframes, los cambios se propagaron a las tres piezas y al brief para que la rúbrica no quede huérfana. El «6. Chat grupal:» que había quedado a medio escribir en la lista del MVP se completó como «6. Ver perfiles», siguiendo la decisión tomada en esa misma sesión (lista + ficha individual, con pestaña «Grupo» en el menú); el chat se mantiene en «FUERA».
- **Decisiones de diseño que tomó la IA (bajo supervisión del estudiante):** el fundador del piso es quien crea la cuenta y después el grupo (resuelve la decisión pendiente de «quién reparte la primera tarea»); «Ver perfiles» es una pantalla de lista y «Perfil de miembro» una ficha individual reutilizada para cualquier miembro (Álex, Samuel y Lucía); las pantallas de alta van sin menú, como el inicio de sesión, y los perfiles con el mismo menú que el resto; en el sitemap, «Creación de cuenta» y «Creación de grupo» cuelgan de la raíz y «Ver perfiles» es pestaña de primer nivel con «Perfil de miembro» debajo.

---

## 2026-10-18 · Auditoría frente al enunciado y correcciones en ambos archivos

- **Qué le pedí:** que revisara los8 pasos del enunciado y modificara lo necesario dentro del tablero de FigJam y del archivo de Figma Design para que se cumplan los criterios de la rúbrica.
- **Qué devolvió:**
  - En **Figma Design**: comprobación de las31 interacciones (todas con destino válido); se quitó la pestaña «Grupo» del componente Menú inferior (no tenía pantalla ni hotspot: era un callejón sin salida) y se recolocaron los hotspots a3 ranuras de120 px; el frame Calendario se reconstruyó como **vista de semana** (del13 al19, con las7 casillas fechadas y el día destacado), coherente con la función5 del MVP.
  - En **FigJam**: nuevo diagrama **«Paso5·User flow principal (MVP completo)»** con punto de entrada, happy path completo y2 casos límite (código de piso incorrecto y tarea vencida sin marcar → aviso); los dos flujos por persona pasaron a llamarse «Recorrido del flujo como Álex/Samuel»; nueva zona **«Paso5·Decisiones pendientes al recorrer el flujo»** (4 stickies); nueva zona **«Paso3y4·Evidencia: transcripciones y affinity mapping»** con la plantilla por persona y los pendientes; el sitemap se **dibujó como árbol** con raíz,3 niveles como máximo y colores para principal/secundaria/sistema, más leyenda; se añadió al inventario la función de avisos y se actualizó la nota del MVP; las zonas se reordenaron por número de paso.
  - En el **repositorio**: BRIEF.md reestructurado con los5 elementos exactos del Paso8 —problema con datos, alcance del MVP, personas con enlace a cada ficha, criterios de éxito comprobables y restricciones, incluida la **ambiental de450 KB por página (criterio2.4 WSG del W3C)**—.
- **Qué se conservó:** todo el contenido del estudiante (fichas de personas, cuestionario, zonas del Paso1, textos del sitemap) salvo los ajustes estrictamente necesarios; el menú y el calendario solo se tocaron donde chocaban con el MVP.
- **Qué se cambió:** alcance de pantallas («Grupo» fuera del menú; Calendario de mensual a semanal) y orden espacial de las zonas del tablero.
- **Motivo del cambio:** el enunciado exige un único user flow con casos límite y decisiones anotadas, un sitemap dibujado hasta3 niveles con los mismos nombres que los frames, prototipo sin callejones sin salida y un BRIEF con5 elementos y restricción ambiental.
- **Pendiente:** crear el repositorio de GitHub y subir README.md, CHANGELOG.md y BRIEF.md (esta máquina no tiene `gh` ni credenciales de GitHub, y el navegador no tiene sesión iniciada); y las entrevistas reales del Paso3, que solo el estudiante puede hacerlas.

---

## 2026-10-18 · Recorte del MVP y user flows de las personas

- **Qué le pedí:** que recortara el MVP y creara el happy path y el user flow de ambos usuarios (Álex y Samuel) dentro del tablero, con las entrevistas y personas ya incluidas.
- **Qué devolvió:**
  - Zona **Paso 5 · MVP recortado**: de 7 bloques a 5 funcionalidades (entrar al piso con nombre y código, crear y asignar tareas, panel «¿qué me toca hoy?» + % semanal, avisos automáticos de vencimiento, calendario de la semana), cada una con su motivo de inclusión, más 5 descartes con motivo (chat grupal, calendario mensual con rejilla, registro completo y perfiles, gamificación y gastos, control parental y familias).
  - Nota en la zona **Paso 6 · Sitemap**: los caminos que se construyen primero son Inicio de sesión → Panel de tareas → Nueva tarea → Detalle de tarea; Chat y Calendario mensual quedan para la iteración 2 (los wireframes ya están dibujados).
  - Dos diagramas en el tablero: **Paso 5 · User flow · Álex (happy path)** (entrar → panel → tarea del día → marcar hecha → % semanal, con la rama de repartir una tarea a Samuel) y **Paso 5 · User flow · Samuel (happy path)** (entrar → panel → olvido → aviso del sistema → hacer y marcar → % semanal), con flecha gruesa en el camino feliz y discontinua en las ramas alternativas, cada uno en su zona con título.
- **Qué se conservó:** el MVP de 7 bloques y la tabla DENTRO/FUERA originales siguen visibles como decisión previa; los wireframes y el prototipo del Paso 7 no se tocaron.
- **Qué se cambió:** el alcance de la primera versión: el chat del MVP pasa a ser "avisos automáticos del sistema" y el calendario mensual pasa a iteración 2.
- **Motivo del cambio:** el análisis de referentes (Paso 2) indica que el chat compite con WhatsApp y que las apps de este tipo se caen si un compañero no entra; con las 3 preguntas del tablero, el chat y el calendario mensual no son imprescindibles para la tarea más importante de Álex y Samuel.
- **Nota de trazabilidad:** el recorte es una propuesta de IA fundamentada en el Paso 2 y en las entrevistas del Paso 3; si las entrevistas aportan evidencia de que el chat es imprescindible, se revierte y se documenta aquí.
- **Incidencia resuelta:** se corrigió un carácter erróneo introducido por la IA en el subtítulo de la zona MVP recortado.

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
- **Plan que propuso:** trabajar sobre la página «Wireframes» —crear 4 componentes reutilizables (Header, Bottom Nav, Task Card y Primary Button); una pantalla base / frame layout (360 × 800, el viewport de Álex); 8 frames de wireframe utilizando escala de grises con el naming exacto del sitemap; 31 interacciones `ON_CLICK` y 3 flows de entrada (Happy path, Piso nuevo y Error de envío); y sincronizar la zona «Paso 6 · Sitemap» en FigJam.
- **Qué decidí:** estructurar primero el sitemap para tener clara la arquitectura de información y el naming de las pantallas antes de tirar un solo frame en Figma, usando la plantilla compartida solo como workspace.
- **Qué conservó:** la plantilla base como contenedor; todos los componentes, layouts y pantallas se diseñaron desde cero para el proyecto.
- **Qué cambió y por qué:** no se modificó nada de los requisitos. Motivo: el criterio exige que cada frame coincida 1:1 con el nodo del sitemap y que la UI use componentes para mantener el principio DRY (si cambias el componente master, se actualiza en todo el prototipo).
- **Incidencias resueltas:** al clonar una pantalla se fue a otra página del archivo (se volvió a mover a Wireframes); además, la API del motor de prototipos de Figma requería pasar un array en la propiedad `actions` de las reacciones.

---

## 2026-10-18 · Redacción del Brief y Changelog

- **Qué le pedí:** reestructurar la información que fui recopilando en sucio tanto como en la FigJam como en cuadernos y archivos de texto en el ordenador.
- **Plan que propuso:** añadir fecha de realización de la tarea, ordenar por apartados y dejarlo bien escrito.
- **Qué decidí:** aceptar la estructura que me otorgo la IA ya que es bastante práctica y ayuda al lector a orientarse de buena manera por la redacción, además de otorgar una información clara y concreta de cada decisión del proyecto.
- **Qué conservó:** toda la información que estaba plasmada en mis apuntes se encuentra en la documentación del proyecto en los diversos .md pedidos por las especificaciones de entrega.
- **Qué cambió y por qué:** la manera el la que esta expresada esta información y la estructura de la documentación por apartados.
   
