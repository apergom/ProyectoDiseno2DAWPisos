# CHANGELOG de uso de IA — Órbita 1: "Diseñar para que funcione"

Registro de cada uso de IA durante el proyecto, según exige el criterio C8 de la rúbrica.
Cada entrada indica: **qué se le pidió**, **qué devolvió**, **qué se conservó**, **qué se cambió** y **por qué**.

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

- **Qué le pedí:** mi opinión sobre el tablero "Planificador Proyecto" de FigJam con la hipótesis, las personas y el MVP del proyecto.
- **Qué devolvió:** un análisis con puntos fuertes (historia idea → problema → personas → MVP coherente; priorización con tabla DENTRO/FUERA) y puntos débiles: (1) el MVP de 7 bloques funcionales es demasiado grande y las 3 preguntas responden "NO" a "¿hay otra forma?" en los 7 casos, señal de sesgo de confirmación; (2) hay una decisión de público sin resolver —el piso compartido de jóvenes frente a la familia con menores y el "control parental" que aparece en las stickies pero no en la tabla DENTRO/FUERA—; (3) faltan las entrevistas y su evidencia; (4) faltan métricas, roadmap y flujos; (5) defectos de higiene del tablero (dos conectores que apuntan al vacío, un bloque de texto de 4.128 px, las personas pegadas como imágenes en vez de contenido nativo).
- **Qué se conservó:** el diagnóstico completo, especialmente el recorte del MVP y la decisión de un único segmento de público.
- **Qué se cambió /decidió:** *pendiente de decisión del estudiante* — aún no se ha modificado el tablero a raíz de este análisis; el recorte del MVP y el segmento se decidirán tras las entrevistas (Paso 3), para que sean decisiones respaldadas por datos y no por la sugerencia de una IA.
- **Motivo del cambio:** el criterio de auditoría oral exige que cada decisión remita a la investigación; adoptar sugerencias sin datos la dejaría sin justificar.

---

## 2026-10-18 · Lectura del enunciado y planificación de la órbita

- **Qué le pedí:** que leyera el enunciado del proyecto (8 pasos, entregables y rúbrica) y trabajara a partir de él.
- **Qué devolvió:** un plan de trabajo alineado con los 8 pasos del enunciado y con los criterios C1–C8.
- **Qué se conservó:** el orden de los pasos (hipótesis → referentes → entrevistas → personas → MVP y user flow → sitemap → wireframes y prototipo → brief) y el requisito de documentar cada uso de IA en este archivo.
- **Qué se cambió:** nada del enunciado; se adaptó el contenido existente en el tablero al orden que pide la ruta de trabajo (el tablero empezó por personas y MVP, y faltan los pasos 2 y 3).
- **Motivo del cambio:** el enunciado indica explícitamente "respeta el orden, porque cada paso utiliza lo que has obtenido en el anterior".

---

## 2026-10-18 · Trabajo sobre el tablero de FigJam (zonas por pasos)

- **Qué le pedí:** que trabajara a partir del enunciado, avanzando el proyecto directamente en el tablero.
- **Qué devolvió:** nuevas zonas y estructura en el tablero:
  - Zona **Paso 1 · Hipótesis** con un borrador de hipótesis (redactado a partir de la idea principal y de las preguntas de partida) y una sticky rosa con la decisión pendiente de segmento.
  - Zona **Paso 2 · Referentes** con el análisis de Flatify, Tody y OurHome (organización, vocabulario y puntos de bloqueo) más los hallazgos comunes. Fuentes: webs oficiales de las apps, OCU, reseñas de tiendas y comparativas; consulta el 18/10/2026.
  - Zona **Paso 3 · Entrevistas** con guion de 9 preguntas abiertas, plantilla de consentimiento, plantilla de transcripción anonimizada y sticky de pendientes.
  - Renombrado de las zonas existentes con su número de paso (Idea principal, Preguntas de partida, Personas, MVP).
  - Reconexión de los dos conectores que apuntaban al lienzo vacío (Personas → MVP y respuestas → Personas).
  - Sticky rosa en Personas: "revisar tras las entrevistas", porque las fichas son anteriores a la investigación.
- **Qué se conservó:** todo el contenido previo del tablero (ideas, stickies, personas, tabla DENTRO/FUERA del MVP); solo se renombraron las zonas y se repararon los conectores. Las personas no se modificaron.
- **Qué se cambió:** la estructura del tablero, para cumplir el criterio C7 (zonas ordenadas según los pasos del proyecto, cada una con su título).
- **Motivo del cambio:** el tablero estaba ordenado por bloques temáticos y le faltaban los pasos 2 y 3; sin ellos, personas y MVP no tienen evidencia que los respalde.
- **Nota de trazabilidad:** el borrador de la hipótesis y el análisis de referentes son propuestas de IA con sus fuentes indicadas; el estudiante debe contrastarlos con sus entrevistas y reformularlos antes de cerrar el brief.
- **Pendiente de la persona estudiante:** realizar las entrevistas (Paso 3) con personas reales y darles consentimiento; a partir de ahí, affinity mapping, personas trazables, recorte del MVP, user flow, sitemap, wireframes y brief.

---

## 2026-10-18 · Pasos 6 y 7: sitemap, wireframes y prototipo

- **Qué le pedí:** dibujar los wireframes de baja fidelidad por pantalla (happy path + estados importantes) y montar el prototipo navegable en la plantilla de Figma Design compartida, con los elementos repetidos convertidos en componentes.
- **Qué devolvió:** en la página "💡 Wireframes" de la plantilla:
  - 4 componentes reutilizables: **Cabecera**, **Menú inferior**, **Tarjeta de tarea** y **Botón primario**.
  - Una **Plantilla de pantalla** (360 × 800, el móvil de Álex) con cabecera y menú como instancias.
  - 8 frames de wireframe en blanco, negro y gris medio, con líneas en lugar de textos largos y rectángulos con X en lugar de imágenes: *Inicio de sesión, Panel de tareas, Panel de tareas (vacío), Nueva tarea, Detalle de tarea, Calendario, Chat del grupo* y *Chat del grupo (error de envío)*. Los nombres coinciden con el sitemap.
  - **31 interacciones** ON_CLICK (menú inferior en todas las pantallas, botones, tarjetas, celda del día, reintentar) y **3 flujos de inicio**: Happy path, Piso nuevo (estado vacío) y Error de envío.
  - La zona **Paso 6 · Sitemap** en el tablero de FigJam, con los mismos nombres de pantalla que los frames.
- **Qué se conservó:** la plantilla de la comunidad solo se usó como contenedor; todos los componentes y pantallas son capas editables creadas para este proyecto.
- **Qué se cambió:** nada del enunciado; se definió primero el sitemap para poder nombrar los frames exactamente igual, como pide el paso.
- **Motivo del cambio:** el enunciado exige que cada frame se llame igual que su pantalla en el sitemap y que los elementos repetidos sean componentes, para que un cambio afecte a todas las pantallas.
- **Incidencias resueltas:** una pantalla clonada cayó en otra página del archivo (se movió a Wireframes); la API de prototipos exige el campo `actions` (lista) en las reacciones.
- **Pendiente de la persona estudiante:** prueba del prototipo con 4-5 personas parecidas a Álex en Lyssna (optativo; es lo que lleva el C5 al 10), dándoles una tarea concreta sin explicaciones y anotando dónde se atascan. La pestaña "Grupo" del menú queda sin pantalla por ahora (siguiente iteración).
