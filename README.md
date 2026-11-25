# Planificador · Las tareas del piso, sin discutir

Aplicación web para organizar y repartir por turnos las tareas domésticas de un piso compartido, con gestión de cuentas, grupos por código de invitación y canal de contacto.

## Estado del proyecto

### Backlog
- [x] Landing de presentación (`landing.html`) y maquetación base accesible con hojas de estilo modulares (`css/styles.css`, `css/landing.css`).
- [x] Capa de persistencia centralizada sobre `localStorage` (`js/almacen.js`) con prefijo `planificador.v1.` y datos semilla (`js/datos.js`).
- [x] Módulo de validación reutilizable (`js/validacion.js`) y gestión común de eventos y accesibilidad ARIA en formularios (`js/formulario.js`).
- [x] Registro, edición y listado de usuarios (`registro.html`, `js/usuarios.js`) con almacenamiento seguro mediante hash SHA-256 (`js/contrasena.js`).
- [x] Inicio de sesión, guardia de rutas y gestión de grupos por código de invitación (`login.html`, `grupo.html`, `js/login.js`, `js/sesion.js`, `js/guardia.js`, `js/grupo.js`).
- [x] Formulario de contacto con recuerdo de nombre y correo mediante cookie (`contacto.html`, `js/contacto.js`) y listado de mensajes enviados con borrado por delegación (`mensajes.html`, `js/mensajes.js`).

---

## Hito 2 · Formularios, validación y persistencia

### Mapa de validación

| Formulario | Campo | Regla | Mensaje de error |
| --- | --- | --- | --- |
| Registro | Nombre de usuario | Obligatorio, 3-20 caracteres (`[a-zA-Z0-9._-]`), único | *Elige un nombre de usuario.* / *El nombre de usuario debe tener al menos 3 caracteres.* / *Ese nombre de usuario ya está en uso.* |
| Registro | Correo electrónico | Obligatorio, formato email válido, único | *Escribe tu correo electrónico.* / *El correo no tiene un formato válido (ejemplo: nombre@dominio.com).* / *Ya hay una cuenta con ese correo.* |
| Registro | Contraseña | Obligatoria al crear (opcional al editar), mín. 8 caracteres, 1 mayúscula y 1 número | *Escribe una contraseña.* / *La contraseña debe tener al menos 8 caracteres.* / *La contraseña debe incluir al menos una letra mayúscula.* / *La contraseña debe incluir al menos un número.* |
| Registro | Repetir contraseña | Obligatoria al crear, debe coincidir con la contraseña | *Repite la contraseña.* / *Las contraseñas no coinciden.* |
| Registro | Fecha de nacimiento | Obligatoria, no futura (`max` = hoy), edad mínima 16 años y máxima 120 | *Indica tu fecha de nacimiento.* / *La fecha de nacimiento no puede ser futura.* / *Tienes que tener al menos 16 años para usar el piso.* |
| Registro | Condiciones | Casilla obligatoria (`true`) | *Tienes que aceptar las condiciones para continuar.* |
| Inicio de sesión | Nombre de usuario | Obligatorio, 3-20 caracteres (`[a-zA-Z0-9._-]`) | *Elige un nombre de usuario.* / *Usa solo letras, números, punto, guion o guion bajo, sin espacios.* |
| Inicio de sesión | Contraseña | Obligatoria y coincidente con el hash guardado | *Escribe tu contraseña.* / *Usuario o contraseña incorrectos.* |
| Crear grupo | Nombre del piso | Obligatorio, entre 3 y 40 caracteres | *Ponle un nombre al piso.* / *El nombre del piso debe tener al menos 3 caracteres.* |
| Unirse a grupo | Código de invitación | Obligatorio, 6 caracteres alfanuméricos existentes | *Escribe el código de invitación.* / *El código tiene 6 caracteres, entre letras y números.* / *No hay ningún piso con ese código de invitación.* |
| Contacto | Nombre | Obligatorio, entre 2 y 60 caracteres | *Escribe tu nombre.* / *El nombre debe tener al menos 2 caracteres.* |
| Contacto | Correo electrónico | Obligatorio, formato email válido | *Escribe tu correo electrónico.* / *El correo no tiene un formato válido (ejemplo: nombre@dominio.com).* |
| Contacto | Teléfono | Opcional, obligatorio si se marca «Prefiero que me llaméis»; formato español (9 dígitos, opcional `+34`) | *Si prefieres que te llamemos, deja un teléfono de contacto.* / *Escribe un teléfono válido, por ejemplo 612 345 678.* |
| Contacto | Motivo | Obligatorio, valor incluido en `MOTIVOS` | *Elige el motivo del mensaje.* / *Elige uno de los motivos de la lista.* |
| Contacto | Mensaje | Obligatorio, entre 20 y 500 caracteres | *Escribe tu mensaje.* / *El mensaje debe tener al menos 20 caracteres.* |

### Balance del hito
* **Qué se ha hecho:** Capa de almacenamiento centralizada (`almacen.js`) con datos semilla (`datos.js`), módulo de validación (`validacion.js`) y gestor común de formularios con validación al perder el foco (`focusout`), en tiempo real (`input`/`change`) y al enviar (`submit`) en `formulario.js`. Se han implementado el CRUD de usuarios con hash SHA-256 (`usuarios.js`, `contrasena.js`), el sistema de sesión y acceso por grupo/invitación (`login.js`, `sesion.js`, `guardia.js`, `grupo.js`), el formulario de contacto con recuerdo por cookie (`contacto.js`) y la vista de mensajes enviados con borrado mediante delegación de eventos (`mensajes.js`).
* **Qué falta:** Conectar las tareas, el calendario semanal y el chat al grupo o modo personal activo de la sesión, y migrar la aplicación multipágina a una SPA con enrutado por hash.
* **Qué ha costado más:** Coordinar la validación cruzada entre campos (repetir contraseña y teléfono condicional según la casilla de llamada), gestionar el modo edición de usuarios haciendo opcional la contraseña y sincronizar el guardia de acceso (`guardia.js`) antes del renderizado de cada página.
