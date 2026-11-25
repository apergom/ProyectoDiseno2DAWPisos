# Planificador — organizar las tareas de un piso compartido

Proyecto de las **Órbitas 1 y 2** y del **Hito 2** del módulo de **Diseño de Interfaces Web**:
*Diseñar para que funcione*, sistema visual y formularios con datos guardados en el navegador.

Aplicación para que las personas que comparten piso repartan y den seguimiento a las tareas del hogar
sin discutir por quién toca cada cosa.

## Entregables

| Documento | Enlace |
| --- | --- |
| Brief del proyecto | [BRIEF.md](BRIEF.md) |
| Tablero de FigJam (hipótesis, referentes, entrevistas, personas, MVP, sitemap y user flows) | [Planificador Proyecto](https://www.figma.com/board/WoBiXXPG4DqxmQclQJ7Yhi/Planificador-Proyecto?node-id=0-1) |
| Archivo de Figma Design (wireframes y mockups) | [Plantilla · página Mockups](https://www.figma.com/design/QX5iyAm2XAjWIZJy5VUftF/Plantilla-para-iniciar-proyectos--Community-?node-id=831-9) |
| Prototipo en modo presentación | [Flujo "Happy path"](https://www.figma.com/design/QX5iyAm2XAjWIZJy5VUftF/Plantilla-para-iniciar-proyectos--Community-?node-id=537-43) —8 flujos en total: happy path, piso nuevo (estado vacío), error de envío y alta de cuenta y grupo, en móvil y desktop |
| Registro de uso de IA | [CHANGELOG.md](CHANGELOG.md) |
| Informe de la Órbita 2 (sistema visual) | [ORBITA-2.md](ORBITA-2.md) |
| Entrega del Hito 2 | Rama `spa2`, etiqueta `h2` · [repositorio](https://github.com/apergom/ProyectoDiseno2DAWPisos) |

## Backlog

Lista de funcionalidades partida en piezas pequeñas, ordenadas por prioridad.
Cada pieza se puede hacer en pocos días y probar por separado.

| # | Pieza | Estado |
| --- | --- | --- |
| 1 | Menú de navegación con todas las secciones enlazadas | Hecho (Hito 1) |
| 2 | Listado de tareas generado desde los datos | Hecho (Hito 1) |
| 3 | Detalle de tarea al pulsar una tarjeta | Hecho (Hito 1) |
| 4 | Buscar tareas por categoría y por persona | Hecho (Hito 1) |
| 5 | Alta de tarea con validación de campos | Pendiente |
| 6 | Marcar tarea como hecha y actualizar el % semanal | Pendiente |
| 7 | Calendario de la semana (7 días con sus tareas) | Pendiente |
| 8 | Vista de grupo: lista de miembros y ficha individual | Pendiente |
| 9 | Inicio de sesión, alta de cuenta e invitaciones | Parcial (Hito 2: alta y edición de cuentas; faltan sesión e invitaciones) |
| 10 | Guardar los datos en `localStorage` | Hecho (Hito 2) |
| 11 | Convertir las páginas normales en SPA con router (hash) | Pendiente |
| 12 | Modo oscuro (mismos tokens en la colección oscura) | Pendiente |
| 13 | Formulario de registro con validación y contraseña no guardada | Hecho (Hito 2) |
| 14 | Vista «Usuarios» con edición y borrado | Hecho (Hito 2) |
| 15 | Formulario de contacto con motivos propios, cookie y validación entre campos | Hecho (Hito 2) |
| 16 | Vista «Mensajes enviados» con borrado | Hecho (Hito 2) |
| 17 | Diseño adaptado al mockup de Figma: barra lateral, iconos y formularios | Hecho (Hito 2) |

## Mapa de pantallas

Qué vistas tiene la app y qué datos muestra cada una. Todas están enlazadas desde el menú,
aunque algunas sigan vacías de momento.

| Vista | Ruta | Datos que muestra |
| --- | --- | --- |
| Panel de tareas | `index.html` | Lista de tareas de la semana con estado, responsable y hora; barra de progreso «n de m completadas»; buscador por categoría y persona |
| Detalle de tarea | `detalle.html?id=N` | Ficha completa: título, descripción, categoría, responsable, día, hora y estado |
| Nueva tarea | `nueva-tarea.html` | Vacía — alta de tarea con validación |
| Calendario | `calendario.html` | Vacía — los 7 días de la semana con sus tareas  |
| Grupo | `grupo.html` | Vacía — miembros del piso y sus perfiles  |
| Chat | `chat.html` | Vacía — avisos y mensajes del piso  |
| Registro | `registro.html` | Formulario de alta y edición de cuentas; listado de usuarios guardados con botones Editar y Borrar |
| Contacto | `contacto.html` | Formulario de contacto: nombre, correo, teléfono opcional, motivo, mensaje y preferencia de llamada; recuerda nombre y correo en una cookie |
| Mensajes enviados | `mensajes.html` | Mensajes guardados con motivo, datos de contacto, fecha y botón Borrar |
| Landing | `landing.html` | Portada pública: hero, qué hace la app, cómo funciona y llamada a la acción |

## Estructura del repositorio

- `BRIEF.md` — brief del proyecto (los cinco elementos del Paso 8).
- `CHANGELOG.md` — registro de cada uso de IA durante la órbita (criterio C8).
- `ORBITA-2.md` — informe de la Órbita 2: sistema visual (decisiones, lista de comprobación de Figma y enlaces).
- `index.html`, `detalle.html`, `nueva-tarea.html`, `calendario.html`, `grupo.html`, `chat.html`, `landing.html` — páginas del Hito 1.
- `registro.html`, `contacto.html`, `mensajes.html` — páginas nuevas del Hito 2.
- `js/datos.js` — datos de ejemplo que se copian a `localStorage` la primera vez.
- `js/almacen.js` — única capa de acceso a los datos (`obtenerTodos`, `obtenerPorId`, `crear`, `actualizar` y `borrar`).
- `js/validacion.js` — funciones de validación de los dos formularios.
- `js/formulario.js` — validación al salir del campo, al escribir y al enviar; errores accesibles.
- `js/usuarios.js`, `js/contacto.js`, `js/mensajes.js` — lógica de las páginas del Hito 2.
- `js/ui.js`, `js/main.js` — dibujo del listado, la ficha, el progreso y los filtros.
- `css/styles.css` — tokens y estilos de la app, alineados con el mockup de Figma.
- `assets/icons/` — iconos SVG descargados del archivo de Figma y de Lucide.

## Hito 2 — Formularios y datos

El Hito 2 añade dos formularios completos y una capa de datos propia. La app ya no lee los
datos de ejemplo directamente: todo pasa por `almacen.js`, que guarda en `localStorage` las
colecciones `tareas`, `categorias`, `usuarios` y `mensajes`.

### Qué incluye

- **Capa de datos** (`almacen.js`): `obtenerTodos`, `obtenerPorId`, `crear`, `actualizar` y `borrar`.
  Los datos de ejemplo se siembran la primera vez y después sobreviven a las recargas.
- **Validaciones** (`validacion.js`): cada función recibe el valor y devuelve el mensaje o `null`.
  Las reglas que están en el HTML (`required`, `minlength`, `maxlength`, `min`, `max`) se leen del
  propio campo, no se copian en JavaScript.
- **Registro** (`registro.html`): usuario, correo, contraseña, repetir contraseña, fecha de nacimiento
  y aceptación de condiciones. La contraseña no se guarda nunca.
- **Usuarios**: el mismo formulario crea y edita; al editar se rellena con los datos guardados
  (las contraseñas no se muestran porque no existen en el almacenamiento). El listado tiene
  Editar y Borrar, con delegación de eventos y confirmación previa.
- **Contacto** (`contacto.html`): nombre, correo, teléfono opcional, motivo propio del Planificador,
  mensaje con contador y casilla «Prefiero que me llaméis». Si se marca, el teléfono pasa a ser
  obligatorio. El nombre y el correo se recuerdan en una cookie de 30 días.
- **Mensajes enviados** (`mensajes.html`): listado de los mensajes guardados y borrado con confirmación.
- **Accesibilidad**: los formularios llevan `novalidate`; los errores aparecen junto al campo con
  `aria-invalid` y `aria-describedby`; al enviar con errores se muestran todos y el foco va al primero.
- **Diseño**: barra lateral en escritorio, navegación inferior con iconos en móvil, rejilla de
  tarjetas a dos columnas y formularios centrados, siguiendo el mockup de Figma.

### Mapa de validación

| Formulario | Campo | Regla | Mensaje de error |
| --- | --- | --- | --- |
| Registro | Usuario | Obligatorio | Elige un nombre de usuario. |
| Registro | Usuario | Entre 3 y 20 caracteres | El nombre de usuario debe tener al menos 3 caracteres. / El nombre de usuario no puede pasar de 20 caracteres. |
| Registro | Usuario | Solo letras, números, punto, guion o guion bajo | Usa solo letras, números, punto, guion o guion bajo, sin espacios. |
| Registro | Usuario | No puede repetirse | Ese nombre de usuario ya está en uso. |
| Registro | Correo | Obligatorio y con formato `nombre@dominio.com` | Escribe tu correo electrónico. / El correo no tiene un formato válido (ejemplo: nombre@dominio.com). |
| Registro | Correo | No puede repetirse | Ya hay una cuenta con ese correo. |
| Registro | Contraseña | Mínimo 8 caracteres | La contraseña debe tener al menos 8 caracteres. |
| Registro | Contraseña | Al menos una mayúscula | La contraseña debe incluir al menos una letra mayúscula. |
| Registro | Contraseña | Al menos un número | La contraseña debe incluir al menos un número. |
| Registro | Repetir contraseña | Obligatoria y tiene que coincidir | Repite la contraseña. / Las contraseñas no coinciden. |
| Registro | Fecha de nacimiento | Obligatoria y válida | Indica tu fecha de nacimiento. / Escribe una fecha de nacimiento válida. |
| Registro | Fecha de nacimiento | No puede ser futura | La fecha de nacimiento no puede ser futura. |
| Registro | Fecha de nacimiento | Edad mínima de 16 años y máxima de 120 | Tienes que tener al menos 16 años para usar el piso. / Revisa la fecha: no puede tener más de 120 años. |
| Registro | Condiciones | Casilla marcada | Tienes que aceptar las condiciones para continuar. |
| Contacto | Nombre | Obligatorio, entre 2 y 60 caracteres | Escribe tu nombre. / El nombre debe tener al menos 2 caracteres. / El nombre no puede pasar de 60 caracteres. |
| Contacto | Correo | Obligatorio y con formato válido | Escribe tu correo electrónico. / El correo no tiene un formato válido (ejemplo: nombre@dominio.com). |
| Contacto | Teléfono | Opcional; si se escribe, teléfono español válido | Escribe un teléfono válido, por ejemplo 612 345 678. |
| Contacto | Teléfono | Obligatorio si se marca «Prefiero que me llaméis» | Si prefieres que te llamemos, deja un teléfono de contacto. |
| Contacto | Motivo | Obligatorio y de la lista | Elige el motivo del mensaje. / Elige uno de los motivos de la lista. |
| Contacto | Mensaje | Obligatorio, entre 20 y 500 caracteres (contador visible) | Escribe tu mensaje. / El mensaje debe tener al menos 20 caracteres. / El mensaje no puede pasar de 500 caracteres. |

### Qué he hecho

- He creado `almacen.js` y he pasado el listado y el detalle de tareas a leer de ahí, con siembra
  inicial de los datos de ejemplo.
- He creado `validacion.js` con las reglas de los dos formularios y mensajes concretos.
- He montado el registro con alta, edición, borrado y contraseña no guardada.
- He montado el contacto con motivos propios, cookie de nombre y correo, contador de caracteres
  y la regla de teléfono obligatorio al pedir llamada.
- He creado la vista de mensajes enviados con borrado y confirmación.
- He adaptado el aspecto al mockup de Figma: barra lateral en escritorio, navegación con iconos
  en móvil, rejilla de tarjetas y formularios centrados.

### Qué falta

- Inicio de sesión real e invitaciones (pieza 9 del backlog).
- El alta de tareas, el calendario y la vista de grupo siguen pendientes (piezas 5, 7 y 8).
- El modo oscuro y el router con hash (piezas 11 y 12).
- La contraseña no se guarda y no hay autenticación: es una decisión consciente del hito.

### Qué me ha costado más

- **La validación entre campos**: que el teléfono pase a obligatorio al marcar la casilla y que el
  error desaparezca al corregir, sin duplicar reglas en JavaScript.
- **No repetir el HTML**: leer `required`, `minlength`, `maxlength`, `min` y `max` del propio campo
  obliga a pensar qué valida el navegador y qué valida el código.
- **Editar sin contraseña**: como no se guarda, el formulario de edición tiene que ocultar esos
  campos y seguir funcionando con los mismos validadores.
- **La cookie**: codificar el JSON, ponerle caducidad y recuperarlo sin romper la página.
- **El diseño**: pasar de una columna móvil a la barra lateral de escritorio sin romper el móvil
  ni la landing.

## Entrega del Hito 2

- Repositorio: <https://github.com/apergom/ProyectoDiseno2DAWPisos>
- Rama de trabajo: `spa2`
- Etiqueta del commit entregado: `h2`

El repositorio mantiene el historial de commits de los hitos anteriores y los commits de este hito
hechos por partes: capa de datos, registro, contacto y mensajes, diseño y documentación.
