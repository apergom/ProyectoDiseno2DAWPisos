# Brief del proyecto — Planificador de tareas del piso compartido

**Órbita 1 de «Diseño de Interfaces Web» — proyecto «Diseñar para que funcione».**
**Estado:** cerrado el 18/10/2026, después de las entrevistas y del affinity mapping.

**Dónde está el proyecto:** [tablero de FigJam](https://www.figma.com/board/WoBiXXPG4DqxmQclQJ7Yhi/Planificador-Proyecto?node-id=0-1) (investigación, personas, MVP, user flow, sitemap y decisiones) · [archivo de Figma Design](https://www.figma.com/design/QX5iyAm2XAjWIZJy5VUftF/Plantilla-para-iniciar-proyectos--Community-?node-id=4-6) (wireframes y prototipo navegable) · [CHANGELOG.md](CHANGELOG.md) (cada uso de la IA).

## 1. Problema, respaldado por datos

### La hipótesis con la que empecé

> Creo que las personas que comparten piso con compañeros y tienen horarios distintos
> necesitan repartir y hacer seguimiento de las tareas del hogar sin discutir, pero hoy
> el reparto vive en la memoria de unos pocos y en mensajes sueltos del grupo de WhatsApp,
> de modo que las tareas sin asignar quedan pendientes y acaban recayendo siempre en la
> misma persona.

### Qué ha cambiado tras investigarla

- **Se confirma:** el reparto vive en la memoria. P1 hace las tareas «cuando me acuerdo»
  y las procrastina «hasta que son estrictamente urgentes»; P2 olvida las compartidas
  «si no hay un registro claro en mi calendario». P1 pide expresamente «evitar
  discusiones» con una «buena organización visual».
- **Se matiza:** el chat no es la solución. La hipótesis apuntaba a mensajes sueltos de
  WhatsApp como problema, y las entrevistas muestran que lo que falta es un registro
  visible, no más conversación: el chat se queda fuera del MVP y se sustituye por avisos
  automáticos del sistema.
- **Aparece y no estaba:** dos datos que la hipótesis no preveía y que hoy condicionan el
  diseño — la semana de ambos gira en torno a las clases universitarias (de ahí un
  calendario semanal con días concretos) y P2 tiene deuteranopía, por lo que ningún estado
  puede depender solo del color.

### Los datos en los que se apoya

- **Referentes** (webs oficiales, OCU, reseñas y comparativas; consulta el 18/10/2026):
  Flatify, 3,9 ★ con solo 12 valoraciones y puntos gamificados que se sienten infantiles;
  OurHome, 3,1–3,2 ★ con ~240 reseñas, cuya crítica común es que el sistema colapsa si un
  compañero no entra; Tody no resuelve la asignación social ni el chat. **Hallazgo clave:**
  el competidor real es el grupo de WhatsApp —fácil, pero no asigna ni hace seguimiento—
  y ninguna app responde de un vistazo a «¿a quién le toca hoy?».
- **Entrevistas:** dos personas reales, P1 y P2, en texto y anonimizadas. Sus respuestas
  están en el tablero y las agrupa el [affinity mapping de la zona de evidencia](https://www.figma.com/board/WoBiXXPG4DqxmQclQJ7Yhi?node-id=84-170),
  donde cada grupo de citas cierra con la decisión de producto que justifica.

## 2. Alcance: el MVP

([Paso 5 · MVP](https://www.figma.com/board/WoBiXXPG4DqxmQclQJ7Yhi?node-id=65-31)) —
seis funciones dentro, cada una con su motivo:

1. **Entrar con nombre de usuario y contraseña** — la cuenta se crea eligiendo un nombre
   de usuario, que es el identificador con el que cualquier compañero puede invitarle.
   Quien no tiene piso pasa por «Invitaciones»: acepta la suya o crea el grupo invitando a
   cada persona por su nombre de usuario. Motivo: sin identidad no hay reparto con nombre,
   y un código compartido en el grupo de WhatsApp no identifica a nadie.
2. **Crear y asignar tareas**, con turno para las tareas del grupo. Motivo: es la tarea
   principal de Álex, la persona principal.
3. **Panel «¿qué me toca hoy?»** con estados y porcentaje semanal. Motivo: responde de un
   vistazo la pregunta que ninguna referente resuelve.
4. **Avisos automáticos de vencimiento** —sustituyen al chat en el MVP—. Motivo: P1
   procrastina hasta que urge y P2 olvida las tareas compartidas; el sistema recuerda por
   las dos.
5. **Calendario de la semana** (próximos 7 días, empezando en lunes y con el día
   concreto). Motivo: ambas personas estructuran su semana en torno a las clases.
6. **Ver perfiles del grupo**: lista de miembros y ficha individual desde la pestaña
   «Grupo». Motivo: en un piso de tres, ver quién es quién sostiene el reparto con nombre
   y turno.

**Fuera del MVP, con motivo:** chat grupal —WhatsApp ya lo hace y las entrevistas piden
registro, no conversación—; calendario mensual con rejilla —iteración 2—; gamificación y
gestión de gastos —las referentes lo tienen y se siente infantil—; control parental y
familias —segmento no elegido—. Cada función que no entra también es contenido, código y
datos que la aplicación no va a gastar.

## 3. Personas

- **Álex Martínez** — persona **principal**, 22 años, estudiante, comparte piso con dos
  compañeros en Cádiz. Usa el móvil por las tardes al salir de clase, con datos 4G
  inestables y la wifi del piso. Quiere evitar discusiones y que el reparto no dependa de
  su memoria; frustración principal: la desorganización del hogar cuando la agenda se llena.
  [Ficha](https://www.figma.com/board/WoBiXXPG4DqxmQclQJ7Yhi?node-id=39-46).
- **Samuel Ríos** — persona **secundaria**, 24 años, estudiante, piso compartido con otros
  universitarios. Móvil de gama de entrada y portátil, con datos móviles fuera del piso:
  es la persona con **la peor conexión**. Tiene **deuteranopía**, por eso todo estado de
  tarea lleva icono y texto además de color. Quiere ver las tareas domésticas integradas en
  su rutina académica; frustración principal: que las apps sean lentas o dependan solo del
  color. [Ficha](https://www.figma.com/board/WoBiXXPG4DqxmQclQJ7Yhi?node-id=39-56).

Las dos nacen del affinity mapping de las entrevistas P1 y P2: cada rasgo de cada ficha
remite a una cita de sus respuestas.

## 4. Criterios de éxito (comprobables sobre estas personas)

1. Prueba con 4–5 personas parecidas a Álex (Lyssna, tarea concreta y sin explicaciones):
   **≥4 de 5** entran, ven qué les toca hoy y marcan una tarea como hecha en **menos de
   1 minuto**.
2. En esa misma prueba, **≥4 de 5** crean y asignan una tarea nueva sin ayuda.
3. Una semana de piso en uso: **≥80 %** de las tareas del panel se marcan el día que les
   toca (lo mide la barra de porcentaje semanal).
4. Samuel localiza su tarea del día y su aviso en **2 toques o menos**.
5. Cualquier persona nueva entra al piso en **menos de 1 minuto** sin ayuda, ya sea
   aceptando su invitación o creando el grupo e invitando por nombre de usuario.

## 5. Restricciones del proyecto

- **Ambiental** — criterio 2.4 de las *Web Sustainability Guidelines* del W3C: **peso
  máximo de 450 KB por página**, pensado para la persona con la peor conexión (Samuel, con
  datos móviles). Sin imágenes pesadas, fuentes alojadas en el propio sitio y nada de
  reproducción automática de vídeo.
- **Técnicas:** móvil primero (360 × 800, el dispositivo de ambas personas) con variante
  desktop (1280 × 800) porque Samuel usa también el portátil; wireframes en negro, blanco
  y gris medio; en esta órbita no hay backend real: el entregable es el prototipo
  navegable de Figma Design.
- **De alcance:** solo las seis funciones del MVP; todo lo que entra también es
  contenido, código y datos que la aplicación no va a gastar.
- **De cumplimiento:** consentimiento en las entrevistas, datos anonimizados desde el
  principio (P1, P2…) y cada uso de la IA registrado en [CHANGELOG.md](CHANGELOG.md).
- **Temporales:** Órbita 1 de la ruta «Diseñar para que funcione» — investigar antes de
  diseñar; las entrevistas se hicieron antes de cerrar este brief.
