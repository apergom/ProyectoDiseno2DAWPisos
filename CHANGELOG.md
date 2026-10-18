# CHANGELOG de uso de IA — Órbita 1: "Diseñar para que funcione"

Registro de cada uso de IA durante el proyecto, según exige el criterio C8 de la rúbrica.

**Modo de uso: IA en modo plan.** A la IA no se le encargó el proyecto: en cada paso le pedí un plan —qué cambiar, dónde y cómo— y fui siguiendo sus indicaciones sobre el tablero de FigJam y el archivo de Figma Design, revisando cada resultado antes de dar el siguiente paso. Las decisiones son mías y las justifico con los datos de la investigación (referentes, entrevistas P1 y P2, personas). Por eso cada entrada recoge **qué le pedí**, **qué plan propuso**, **qué decidí con el plan delante**, **qué conservé** y **qué cambié y por qué**.

---

## 2026-10-18 · Affinity mapping de las entrevistas y cierre de las decisiones del Paso 5

- **Qué le pedí:** que partiera de las entrevistas reales P1 y P2 que ya teníamos pegadas en el tablero, montara el affinity mapping con ellas y nos quitáramos de encima las cuestiones pendientes del Paso 5.
- **Plan que propuso:** agrupar las citas en seis bloques (amarillo = P1, azul = P2), añadiendo a cada uno su implicación de producto en verde; cambiar la nota de «PENDIENTE: transcribir» a «HECHO» apuntando a las fichas con las respuestas; y resolver las cuatro dudas del flujo citando la frase literal que las respalda, dejándolas en verde y limpiando la palabra «pendientes» del título de la zona.
- **Qué decidí:** cerrar que el aviso de vencimiento va dentro de la app (nada de notificaciones push de momento), que la semana del calendario empieza en lunes enseñando el día concreto, y que el chat se queda fuera del MVP. Anoté las cuatro decisiones en la zona de «Decisiones tomadas al recorrer el flujo».
- **Qué conservé:** las fichas de las personas y las transcripciones de las entrevistas, que no se tocaron para nada.
- **Qué cambié y por qué:** teniendo las respuestas reales ya no tenía sentido dejar decisiones «pendientes hasta las entrevistas»: cada una se cerró con su cita respaldada —P1 «procrastino hasta que son strictly urgentes», P2 «si no hay un registro claro en mi calendario, se me pasan», P1 «una buena organización visual me evitaría discusiones», P2 «fácil de consultar en conexiones lentas»—. El brief pasó de borrador a cerrado con ese mismo enfoque.
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