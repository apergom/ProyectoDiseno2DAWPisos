# CHANGELOG de uso de IA — Órbita 1: "Diseñar para que funcione"

Registro de cada uso de IA durante el proyecto, según exige el criterio C8 de la rúbrica.
Cada entrada indica: **qué se le pidió**, **qué devolvió**, **qué se conservó**, **qué se cambió** y **por qué**.

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
