// Validaciones de los formularios de registro y de contacto.
// Cada función recibe el valor del campo (y, si hace falta, el propio campo
// para leer sus atributos del HTML) y devuelve un mensaje de error o null.

export const EDAD_MINIMA = 16;
export const MOTIVOS = [
  'Proponer una tarea',
  'Incidencia con una tarea',
  'Cambiar un turno',
  'Sugerencia para el piso'
];

// Quita los espacios de los extremos.
function limpiar(valor) {
  return String(valor).trim();
}

// Comprueba si el campo es obligatorio según el HTML.
function esObligatorio(campo) {
  return campo === undefined || campo.required;
}

// Nombre de usuario: obligatorio, entre 3 y 20 caracteres, sin espacios.
export function validarNombreUsuario(valor, campo) {
  const texto = limpiar(valor);
  let minimo = 3;
  let maximo = 20;

  if (campo) {
    if (campo.minLength > 0) {
      minimo = campo.minLength;
    }
    if (campo.maxLength > 0) {
      maximo = campo.maxLength;
    }
  }

  if (texto === '') {
    return 'Elige un nombre de usuario.';
  }
  if (texto.length < minimo) {
    return 'El nombre de usuario debe tener al menos ' + minimo + ' caracteres.';
  }
  if (texto.length > maximo) {
    return 'El nombre de usuario no puede pasar de ' + maximo + ' caracteres.';
  }
  if (!/^[a-zA-Z0-9._-]+$/.test(texto)) {
    return 'Usa solo letras, números, punto, guion o guion bajo, sin espacios.';
  }
  return null;
}

// Correo electrónico con expresión regular.
export function validarEmail(valor) {
  const texto = limpiar(valor);

  if (texto === '') {
    return 'Escribe tu correo electrónico.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(texto)) {
    return 'El correo no tiene un formato válido (ejemplo: nombre@dominio.com).';
  }
  return null;
}

// Contraseña: mínimo 8 caracteres, una mayúscula y un número.
export function validarContrasena(valor, campo) {
  const texto = String(valor);
  let minimo = 8;

  if (campo && campo.minLength > 0) {
    minimo = campo.minLength;
  }

  // Al editar un usuario la contraseña es opcional: se guarda solo como hash.
  if (texto === '' && !esObligatorio(campo)) {
    return null;
  }
  if (texto === '') {
    return 'Escribe una contraseña.';
  }
  if (texto.length < minimo) {
    return 'La contraseña debe tener al menos ' + minimo + ' caracteres.';
  }
  if (!/[A-ZÁÉÍÓÚÜÑ]/.test(texto)) {
    return 'La contraseña debe incluir al menos una letra mayúscula.';
  }
  if (!/[0-9]/.test(texto)) {
    return 'La contraseña debe incluir al menos un número.';
  }
  return null;
}

// Repetir contraseña: tiene que coincidir con la del campo "contrasena".
export function validarRepeticion(valor, campo) {
  const texto = String(valor);
  let original = '';

  if (campo && campo.form && campo.form.elements.contrasena) {
    original = campo.form.elements.contrasena.value;
  }

  if (texto === '' && !esObligatorio(campo)) {
    return null;
  }
  if (texto === '') {
    return 'Repite la contraseña.';
  }
  if (texto !== original) {
    return 'Las contraseñas no coinciden.';
  }
  return null;
}

// Calcula la edad a partir de una fecha ISO (AAAA-MM-DD).
export function calcularEdad(fechaISO) {
  const fecha = new Date(fechaISO + 'T00:00:00');
  const hoy = new Date();
  let edad = hoy.getFullYear() - fecha.getFullYear();
  const mes = hoy.getMonth() - fecha.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
    edad = edad - 1;
  }
  return edad;
}

// Fecha de nacimiento: válida, no futura y con la edad mínima.
export function validarFechaNacimiento(valor, campo) {
  const texto = limpiar(valor);

  if (texto === '') {
    return 'Indica tu fecha de nacimiento.';
  }

  const fecha = new Date(texto + 'T00:00:00');

  if (isNaN(fecha.getTime())) {
    return 'Escribe una fecha de nacimiento válida.';
  }

  // El atributo max del HTML ya marca el día de hoy.
  let hoy = new Date();
  if (campo && campo.max) {
    hoy = new Date(campo.max + 'T00:00:00');
  }

  if (fecha > hoy) {
    return 'La fecha de nacimiento no puede ser futura.';
  }

  const edad = calcularEdad(texto);

  if (edad < EDAD_MINIMA) {
    return 'Tienes que tener al menos ' + EDAD_MINIMA + ' años para usar el piso.';
  }
  if (edad > 120) {
    return 'Revisa la fecha: no puede tener más de 120 años.';
  }
  return null;
}

// Casilla de condiciones: hay que marcarla.
export function validarCondiciones(valor) {
  if (valor !== true) {
    return 'Tienes que aceptar las condiciones para continuar.';
  }
  return null;
}

// Nombre de contacto: obligatorio y con un máximo de caracteres del HTML.
export function validarNombre(valor, campo) {
  const texto = limpiar(valor);

  if (texto === '') {
    return 'Escribe tu nombre.';
  }
  if (texto.length < 2) {
    return 'El nombre debe tener al menos 2 caracteres.';
  }
  if (campo && campo.maxLength > 0 && texto.length > campo.maxLength) {
    return 'El nombre no puede pasar de ' + campo.maxLength + ' caracteres.';
  }
  return null;
}

// Teléfono opcional; obligatorio si se prefiere que llamen.
export function validarTelefono(valor, campo) {
  const texto = limpiar(valor);
  const soloDigitos = texto.replace(/[\s.-]/g, '');

  if (texto === '') {
    if (campo && campo.required) {
      return 'Si prefieres que te llamemos, deja un teléfono de contacto.';
    }
    return null;
  }
  if (!/^(\+34)?[6-9][0-9]{8}$/.test(soloDigitos)) {
    return 'Escribe un teléfono válido, por ejemplo 612 345 678.';
  }
  return null;
}

// Motivo: tiene que ser una de las opciones del desplegable.
export function validarMotivo(valor) {
  const texto = limpiar(valor);

  if (texto === '') {
    return 'Elige el motivo del mensaje.';
  }
  if (!MOTIVOS.includes(texto)) {
    return 'Elige uno de los motivos de la lista.';
  }
  return null;
}

// Mensaje: longitud mínima y máxima (el máximo lo marca el maxlength del HTML).
export function validarMensaje(valor, campo) {
  const texto = limpiar(valor);
  let minimo = 20;
  let maximo = 500;

  if (campo) {
    if (campo.minLength > 0) {
      minimo = campo.minLength;
    }
    if (campo.maxLength > 0) {
      maximo = campo.maxLength;
    }
  }

  if (texto === '') {
    return 'Escribe tu mensaje.';
  }
  if (texto.length < minimo) {
    return 'El mensaje debe tener al menos ' + minimo + ' caracteres.';
  }
  if (texto.length > maximo) {
    return 'El mensaje no puede pasar de ' + maximo + ' caracteres.';
  }
  return null;
}
