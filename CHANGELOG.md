# CHANGELOG de uso de IA — Órbita 1: "Diseñar para que funcione"

Registro de cada uso de IA durante el proyecto, según exige el criterio C8 de la rúbrica.

**Modo de uso: IA en modo plan.** A la IA no se le encargó el proyecto: en cada paso le
pedí un plan —qué cambiar, dónde y cómo— y seguí sus indicaciones sobre el tablero de
FigJam y el archivo de Figma Design, revisando cada resultado antes de dar el siguiente.
Las decisiones son mías y se justifican con datos de la investigación (referentes,
entrevistas P1 y P2, personas). Por eso cada entrada recoge **qué le pedí**, **qué plan
propuso**, **qué decidí con el plan delante**, **qué conservé** y **qué cambié y por qué**.

---

## 2026-10-18 · Affinity mapping de las entrevistas y cierre de las decisiones del Paso 5

- **Qué le pedí:** que partiera de las entrevistas reales P1 y P2 que ya estaban en el
  tablero, hiciera el affinity mapping con ellas y cerrara y eliminara las cuestiones
  pendientes del Paso 5.
- **Plan que propuso:** seis grupos de citas literales (amarillo = P1, azul = P2), cada uno
  con su implicación de producto en verde; la nota «PENDIENTE: transcribir» pasaba a
  «HECHO» apuntando a las fichas donde están las respuestas; y las cuatro cuestiones del
  flujo se resolvían citando la frase de la entrevista que las respalda, dejándolas en
  verde y quitando la palabra «pendientes» del título de la zona.
- **Qué decidí:** resolver que el aviso de vencimiento vive dentro de la app (no como
  notificación push), que la semana del calendario empieza en lunes y se enseña el día
  concreto, y que el chat sigue fuera del MVP; las cuatro decisiones quedan anotadas en la
  zona «Decisiones tomadas al recorrer el flujo».
- **Qué conservé:** las fichas de personas y las transcripciones de las entrevistas (no se
  tocaron), el resto de zonas del tablero, los wireframes, el prototipo y el brief.
- **Qué cambié y por qué:** con las respuestas reales ya no procedía dejar decisiones
  «pendientes hasta las entrevistas»: cada una se cerró con la cita literal que la
  respalda —P1 «procrastino hasta que son estrictamente urgentes», P2 «si no hay un
  registro claro en mi calendario, se me pasan», P1 «una buena organización visual me
  evitaría discusiones», P2 «fácil de consultar en conexiones lentas»—. El brief pasó de
  borrador a cerrado con el mismo contraste.
- **Pendiente:** anotar en las fichas el consentimiento y el formato de cada entrevista;
  prueba en Lyssna con 4–5 personas (sube el C5 a 10); crear el repositorio de GitHub.

---

## 2026-10-18 · Alta por invitación: se quita el código del piso

- **Qué le pedí:** que el inicio de sesión ya no metiera a la persona dentro de un grupo,
  y que hubiera una pantalla de creación de grupo desde la que invitar a los demás por su
  nombre de usuario (el identificador). Ante la duda entre invitación directa o con
  aceptación, preguntó por las dos opciones y **elegí invitación con aceptación**.
- **Plan que propuso:** «Inicio de sesión» pasa a pedir nombre de usuario y contraseña;
  «Creación de cuenta» gana el campo de nombre de usuario; «Creación de grupo» sustituye
  el bloque del código por un campo «Invitar por nombre de usuario» con su botón y una
  lista de invitados pendientes; pantalla nueva «Invitaciones» en móvil (360 × 800) y en
  desktop (1280 × 800) con la invitación pendiente de aceptar o rechazar; reenchufes del
  prototipo (56 reacciones, sin destinos inválidos); y en FigJam el user flow, el sitemap,
  el MVP (función 1 reescrita) y los recorridos por persona actualizados.
- **Qué decidí:** que «Invitaciones» sea el punto de paso obligatorio de quien no tiene
  piso y vaya sin menú, como el resto del alta; que el fundador siga siendo quien crea la
  cuenta; y que la lista de invitados pendientes se vea en la propia «Creación de grupo».
- **Qué conservé:** las personas, los referentes, las entrevistas, las demás funciones del
  MVP, la restricción ambiental de 450 KB, los 8 flujos de inicio y el resto de decisiones.
- **Qué cambié y por qué:** el alta dejó de ser por código de piso para ser por cuenta e
  invitación. El motivo es que un código compartido en el grupo de WhatsApp permite entrar
  a cualquiera que lo vea y no identifica a cada persona, justo lo que el panel de reparto
  necesita; con el nombre de usuario como identificador, el fundador elige a quién invita
  y la persona invitada acepta o rechaza.
- **Incidencia resuelta:** varios clones de elementos cayeron fuera de su frame (en la
  página «Cover» o en la raíz de la página de wireframes) y se recolocaron dentro de sus
  pantallas en ambos tamaños; el prototipo se volvió a validar.

---

## 2026-10-18 · Wireframes desktop, pantallas de alta y perfiles, y tablero sincronizado

- **Qué le pedí:** primero, completar el wireframe desktop (1280 × 800) que faltaba;
  después, añadir al user flow una pantalla de creación de cuenta, una de creación de
  grupo y la posibilidad de ver los perfiles de cada miembro; y por último, editar el
  tablero de FigJam para que reflejara los cambios.
- **Plan que propuso:** completar las 8 pantallas desktop en la sección de Samuel y
  corregir un solape del chat de error en móvil; crear 4 pantallas nuevas en móvil y 4 en
  desktop («Creación de cuenta», «Creación de grupo», «Ver perfiles», «Perfil de miembro»)
  con los mismos nombres que el sitemap; devolver la pestaña «Grupo» al menú inferior y a
  la barra lateral; recolocar los hotspots a 4 ranuras; el prototipo pasó a 110
  interacciones y 8 flujos de inicio. En FigJam: rama de alta y rama de perfiles en el user
  flow,4 nodos nuevos en el sitemap con sus colores, y el MVP a6 funcionalidades.
- **Qué decidí:** que «Ver perfiles» sea una pantalla de lista y «Perfil de miembro» una
  ficha individual reutilizada para cualquier miembro; que las pantallas de alta vayan sin
  menú, como el inicio de sesión; y que el «6. Chat grupal» que había quedado a medio
  escribir en el MVP se completara como «6. Ver perfiles» (el chat se queda fuera).
- **Qué conservé:** las personas, las entrevistas, los referentes y la privacidad; los
  textos de las funciones 2 a 5 del MVP se dejaron literales.
- **Qué cambié y por qué:** pedí expresamente que el flujo incluyera alta y perfiles;
  como el enunciado encadena flujo → sitemap → wireframes, los cambios se propagaron a las
  tres piezas y al brief para que la rúbrica no quede huérfana.
- **Nota sobre la decisión «quién crea el piso»:** la propuso la IA como cierre de un
  callejón del flujo y la adopté porque responde a un hueco real: sin un fundador
  definido, nadie reparte la primera tarea.

---

## 2026-10-18 · Auditoría frente al enunciado y correcciones en ambos archivos

- **Qué le pedí:** que revisara los8 pasos del enunciado y proponga lo necesario en el
  tablero y en Figma Design para cumplir los criterios de la rúbrica.
- **Plan que propuso:** en Figma Design, comprobación de las 31 interacciones (todas con
  destino válido), quitar la pestaña «Grupo» del menú inferior —no tenía pantalla ni
  hotspot: era un callejón sin salida— y recolocar los hotspots a 3 ranuras; reconstruir
  el Calendario como vista de semana (del 13 al 19). En FigJam: diagrama «User flow
  principal (MVP completo)» con punto de entrada, happy path y 2 casos límite; zona de
  «Decisiones pendientes» (4 stickies); zona de «Evidencia» con plantilla; sitemap
  dibujado como árbol de 3 niveles con colores y leyenda; zonas reordenadas por número de
  paso. En el repo: BRIEF.md reestructurado con los 5 elementos y la restricción
  ambiental de 450 KB (criterio 2.4 WSG).
- **Qué decidí:** aplicarlo tal cual en lo que chocaba con el enunciado (menú sin
  callejones, calendario semanal, árbol del sitemap) y conservar todo lo demás.
- **Qué conservé:** todo el contenido propio del tablero (fichas, cuestionario, zonas del
  Paso 1, textos del sitemap), salvo los ajustes estrictamente necesarios.
- **Qué cambió y por qué:** alcance de pantallas («Grupo» fuera del menú; Calendario de
  mensual a semanal) y orden espacial de las zonas. El motivo es que el enunciado exige un
  único user flow con casos límite y decisiones anotadas, un sitemap de hasta 3 niveles,
  un prototipo sin callejones y un BRIEF con 5 elementos.
- **Pendiente (ya resuelto):** crear el repositorio de GitHub y subir los tres archivos;
  las entrevistas del Paso 3 —se hicieron el 18/10 y están en el tablero—.

---

## 2026-10-18 · Recorte del MVP y user flows de las personas

- **Qué le pedí:** que recortara el MVP y dibujara el happy path y el user flow de Álex y
  de Samuel dentro del tablero.
- **Plan que propuso:** de7 bloques a5 funcionalidades (entrar, crear y asignar, panel con
  % semanal, avisos automáticos, calendario de la semana), cada una con su motivo, más 5
  descartes con motivo; nota en la zona del sitemap sobre los caminos que se construyen
  primero; y dos diagramas —«User flow · Álex (happy path)» y «User flow · Samuel (happy
  path)»— con flecha gruesa en el camino feliz y discontinua en las ramas.
- **Qué decidí:** aprobar el recorte, pero dejando el MVP original y la tabla DENTRO/FUERA
  visibles como decisión previa, y anotar que si las entrevistas aportaban evidencia de
  que el chat es imprescindible se revierte.
- **Qué conservé:** el MVP de 7 bloques y la tabla originales; los wireframes y el
  prototipo no se tocaron.
- **Qué cambió y por qué:** el chat pasa a ser «avisos automáticos del sistema» y el
  calendario mensual a iteración 2. El motivo sale del Paso 2: el chat compite con
  WhatsApp y las apps de este tipo se caen si un compañero no entra; con las preguntas del
  tablero, chat y calendario mensual no son imprescindibles para la tarea más importante
  de Álex y Samuel. **Resuelto el 18/10:** las entrevistas confirmaron la decisión —P1
  quiere «evitar discusiones» y P2 echa en falta «un registro claro», no conversación—.
- **Incidencia resuelta:** se corrigió un carácter erróneo introducido en el subtítulo de
  la zona MVP recortado.

---

## 2026-10-18 · Opinión crítica sobre el tablero de FigJam existente

- **Qué le pedí:** su opinión sobre el tablero «Planificador Proyecto» con la hipótesis,
  las personas y el MVP.
- **Plan que propuso:** un análisis con puntos fuertes (historia idea → problema →
  personas → MVP coherente; priorización con tabla DENTRO/FUERA) y puntos débiles: MVP de
  7 bloques con posible sesgo de confirmación; una decisión de público sin resolver (piso
  de jóvenes frente a familias); faltaban entrevistas, métricas, flujos y higiene del
  tablero (conectores sueltos, bloque de texto de 4.128 px, personas pegadas como imagen).
- **Qué decidí:** no aplicar nada de ese análisis todavía. Lo dejé anotado como propuesta
  pendiente de decisión mía tras las entrevistas.
- **Qué conservé:** el diagnóstico completo, especialmente el recorte del MVP y la
  decisión de un solo segmento de público.
- **Qué cambié y por qué:** nada en esa sesión. El motivo: el criterio de auditoría oral
  exige que cada decisión remita a la investigación; adoptar sugerencias sin datos la
  dejaría sin justificar. La decisión se tomó después, en el Paso 5, con los datos en la
  mano.

---

## 2026-10-18 · Lectura del enunciado y planificación de la órbita

- **Qué le pedí:** que leyera el enunciado del proyecto (8 pasos, entregables y rúbrica)
  y propusiera un plan de trabajo.
- **Plan que propuso:** un plan alineado con los 8 pasos y con los criterios C1–C8.
- **Qué decidí:** seguir ese orden de pasos (hipótesis → referentes → entrevistas →
  personas → MVP y user flow → sitemap → wireframes y prototipo → brief) y crear el
  CHANGELOG para anotar desde el primer día.
- **Qué conservó del enunciado:** todo; no se modificó nada de lo pedido.
- **Qué cambié y por qué:** nada del enunciado; solo se adaptó el contenido existente del
  tablero al orden que pide la ruta (empezaba por personas y MVP, y faltaban los Pasos 1 y
  2). El motivo: el enunciado indica «respeta el orden, porque cada paso utiliza lo que has
  obtenido en el anterior».

---

## 2026-10-18 · Trabajo sobre el tablero de FigJam (zonas por pasos)

- **Qué le pedí:** que trabajara a partir del enunciado, avanzando el proyecto en el
  tablero, organizándolo por pasos.
- **Plan que propuso:** nuevas zonas y estructura —zona «Paso 1 · Hipótesis» con borrador y
  sticky rosa de la decisión de segmento; zona «Paso 2 · Referentes» con el análisis de
  Flatify, Tody y OurHome y los hallazgos comunes (fuentes: webs oficiales, OCU, reseñas y
  comparativas, consulta el 18/10/2026); zona «Paso 3 · Entrevistas» con guion de 9
  preguntas abiertas, plantilla de consentimiento y plantilla de transcripción anonimizada;
  renombrado de las zonas con su número de paso; reconexión de dos conectores que apuntaban
  al vacío; y una sticky rosa «revisar tras las entrevistas» en Personas.
- **Qué decidí:** mantener las fichas de personas como estaban hasta tener entrevistas, y
  usar la plantilla de consentimiento y de transcripción para las conversaciones.
- **Qué conservé:** todo el contenido previo del tablero (ideas, stickies, personas, tabla
  DENTRO/FUERA); solo se renombraron zonas y se repararon conectores. Las personas no se
  modificaron.
- **Qué cambió y por qué:** la estructura del tablero, para cumplir el criterio C7 (zonas
  ordenadas según los pasos del proyecto, cada una con su título); sin los Pasos 2 y 3,
  personas y MVP no tenían evidencia que los respaldara.
- **Nota de trazabilidad:** el borrador de la hipótesis y el análisis de referentes eran
  propuestas de IA con sus fuentes indicadas; los contrasté con las entrevistas y el
  borrador se cerró en el brief el 18/10.
- **Pendiente (ya resuelto):** realizar las entrevistas con personas reales —se hicieron
  el 18/10—.

---

## 2026-10-18 · Pasos 6 y 7: sitemap, wireframes y prototipo

- **Qué le pedí:** dibujar los wireframes de baja fidelidad por pantalla (happy path +
  estados importantes) y montar el prototipo navegable en la plantilla de Figma Design
  compartida, con los elementos repetidos convertidos en componentes.
- **Plan que propuso:** en la página «💡 Wireframes» de la plantilla —4 componentes
  reutilizables (Cabecera, Menú inferior, Tarjeta de tarea, Botón primario); una Plantilla
  de pantalla (360 × 800, el móvil de Álex);8 frames de wireframe en blanco, negro y gris
  medio con los nombres del sitemap;31 interacciones ON_CLICK y3 flujos de inicio (Happy
  path, Piso nuevo, Error de envío); y la zona «Paso 6 · Sitemap» en el tablero con los
  mismos nombres.
- **Qué decidí:** definir primero el sitemap para poder nombrar los frames exactamente
  igual, y usar la plantilla de la comunidad solo como contenedor.
- **Qué conservé:** la plantilla de la comunidad como contenedor; todos los componentes y
  pantallas son capas editables creadas para este proyecto.
- **Qué cambió y por qué:** nada del enunciado. El motivo: el paso exige que cada frame se
  llame igual que su pantalla en el sitemap y que los elementos repetidos sean componentes,
  para que un cambio afecte a todas las pantallas a la vez.
- **Incidencias resueltas:** una pantalla clonada cayó en otra página del archivo (se movió
  a Wireframes); la API de prototipos exige el campo `actions` (lista) en las reacciones.
- **Pendiente:** prueba del prototipo en Lyssna con 4–5 personas parecidas a Álex, dándoles
  una tarea concreta sin explicaciones y anotando dónde se atascan (es lo que lleva el C5
  al 10).
