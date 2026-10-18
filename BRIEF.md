# Brief del proyecto — Planificador de tareas del piso compartido

> **Estado:** borrador de trabajo (Paso 8). Se cierra cuando las entrevistas reales
> del Paso 3 estén transcritas en el tablero. Cada dato enlaza a su zona del
> [tablero de FigJam](https://www.figma.com/board/WoBiXXPG4DqxmQclQJ7Yhi/Planificador-Proyecto?node-id=0-1).

## 1. Problema, respaldado por datos

**Hipótesis de partida** ([Paso 1 · Hipótesis](https://www.figma.com/board/WoBiXXPG4DqxmQclQJ7Yhi?node-id=52-37)),
que se mantiene hasta el final para ver cuánto ha cambiado:

> Creo que las personas que comparten piso con compañeros y tienen horarios distintos
> necesitan repartir y hacer seguimiento de las tareas del hogar sin discutir, pero hoy
> el reparto vive en la memoria de unos pocos y en mensajes sueltos del grupo de WhatsApp,
> de modo que las tareas sin asignar quedan pendientes y acaban recayendo siempre en la
> misma persona.

**Datos** ([Paso 2 · Referentes](https://www.figma.com/board/WoBiXXPG4DqxmQclQJ7Yhi?node-id=54-40);
fuentes: webs oficiales, OCU, reseñas y comparativas, consulta el 18/10/2026):

- **Flatify:** 3,9 ★ con solo 12 valoraciones y solo en iPhone; sus puntos gamificados se
  sienten infantiles para adultos.
- **OurHome:** 3,1–3,2 ★ con ~240 reseñas; la crítica común es que, si un compañero no entra,
  el sistema colapsa.
- **Tody:** no resuelve la asignación social ni el chat; su vocabulario técnico cuesta en castellano.
- **Hallazgo clave:** el competidor real es el grupo de WhatsApp —fácil, pero no asigna ni
  hace seguimiento—. Ninguna app responde de un vistazo a «¿a quién le toca hoy?».

*Pendiente hasta el Paso 3:* contrastar estas afirmaciones con las transcripciones reales
(P1, P2…) — ver [zona de evidencia](https://www.figma.com/board/WoBiXXPG4DqxmQclQJ7Yhi?node-id=84-170).

## 2. Alcance: el MVP

([Paso 5 · MVP](https://www.figma.com/board/WoBiXXPG4DqxmQclQJ7Yhi?node-id=65-31)) —
6 funciones dentro, cada una con su motivo:

1. **Entrar o darse de alta en el piso**: con nombre y código del grupo, o creando cuenta y
   grupo para el primer piso (quien crea la cuenta queda como fundador y recibe el código
   para compartir).
2. **Crear y asignar tareas**, con turno para las tareas del grupo.
3. **Panel «¿qué me toca hoy?»** con estados y porcentaje semanal.
4. **Avisos automáticos de vencimiento** —sustituyen al chat en el MVP—.
5. **Calendario de la semana** (próximos 7 días).
6. **Ver perfiles del grupo**: lista de miembros y ficha individual desde la pestaña «Grupo».

**Fuera, con motivo:** chat grupal (WhatsApp ya lo hace; se reevalúa tras las entrevistas),
calendario mensual con rejilla (iteración 2), gamificación y gestión de gastos, control
parental y familias (pendiente de decidir el segmento).

## 3. Personas

- **Álex Martínez** — persona **primaria**,22 años, estudiante, piso con2 compañeros en Cádiz;
  móvil Android gama media, datos4G y wifi del piso.
  [Ficha](https://www.figma.com/board/WoBiXXPG4DqxmQclQJ7Yhi?node-id=39-46).
- **Samuel Ríos** — persona **secundaria**,24 años, estudiante; móvil de gama de entrada y
  portátil, con datos móviles fuera del piso: es la persona con **la peor conexión**.
  [Ficha](https://www.figma.com/board/WoBiXXPG4DqxmQclQJ7Yhi?node-id=39-56).

## 4. Criterios de éxito (comprobables sobre estas personas)

1. Prueba con4–5 personas parecidas a Álex (Lyssna, tarea concreta y sin explicaciones):
   **≥4 de5** entran, ven qué les toca hoy y marcan una tarea como hecha en **menos de1 minuto**.
2. En esa misma prueba, **≥4 de5** crean y asignan una tarea nueva sin ayuda.
3. Una semana de piso en uso: **≥80 %** de las tareas del panel se marcan el día que les toca
   (lo mide la barra de porcentaje semanal).
4. Samuel localiza su tarea del día y su aviso en **2 toques o menos**.
5. Cualquier persona nueva entra al piso (nombre + código) en **menos de1 minuto** sin ayuda.

## 5. Restricciones del proyecto

- **Ambiental** — criterio 2.4 de las *Web Sustainability Guidelines* del W3C:
  **peso máximo de450 KB por página**, pensado para la persona con la peor conexión (Samuel,
  con datos móviles). Sin imágenes pesadas, fuentes alojadas en el propio sitio y nada de
  reproducción automática de vídeo.
- **Técnicas:** móvil primero (360 × 800, el dispositivo de ambas personas) con variante
  desktop (1280 × 800) porque Samuel usa también el portátil; wireframes en negro, blanco y
  gris medio; en esta órbita no hay backend real: el entregable es el
  prototipo navegable de [Figma Design](https://www.figma.com/design/QX5iyAm2XAjWIZJy5VUftF/Plantilla-para-iniciar-proyectos--Community-?node-id=4-6).
- **De alcance:** solo las6 funciones del MVP; todo lo que entra también es contenido, código
  y datos que la aplicación no va a gastar.
- **De cumplimiento:** consentimiento en las entrevistas, datos anonimizados desde el
  principio (P1, P2…) y cada uso de la IA registrado en [CHANGELOG.md](CHANGELOG.md).
- **Temporales:** Órbita1 de la ruta «Diseñar para que funcione» — investigar antes de diseñar;
  las entrevistas reales se hacen antes de cerrar este brief.
