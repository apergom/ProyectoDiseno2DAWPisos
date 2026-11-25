// Sesión de la persona que ha iniciado sesión.
// Guarda solo el id del usuario y el modo de acceso elegido: «grupo» o «personal».

import { obtenerPorId } from './almacen.js';

const CLAVE = 'planificador.v1.sesion';

export function obtenerSesion() {
  try {
    const texto = localStorage.getItem(CLAVE);
    if (!texto) {
      return null;
    }
    const sesion = JSON.parse(texto);
    if (!sesion || !sesion.usuarioId) {
      return null;
    }
    return sesion;
  } catch {
    return null;
  }
}

function guardarSesion(sesion) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(sesion));
  } catch {
    // Sin almacenamiento no hay sesión persistente.
  }
}

export function iniciarSesion(usuario) {
  guardarSesion({
    usuarioId: usuario.id,
    usuario: usuario.usuario,
    modo: null,
    iniciadaEl: new Date().toISOString()
  });
}

// Elige cómo se entra al panel: con las tareas del piso o con las propias.
export function entrarAlPiso(modo) {
  const sesion = obtenerSesion();
  if (!sesion) {
    return;
  }
  sesion.modo = modo;
  guardarSesion(sesion);
}

export function cerrarSesion() {
  try {
    localStorage.removeItem(CLAVE);
  } catch {
    // Nada que borrar.
  }
}

export function usuarioDeSesion() {
  const sesion = obtenerSesion();
  if (!sesion) {
    return null;
  }
  return obtenerPorId('usuarios', sesion.usuarioId);
}

export function grupoDeSesion() {
  const usuario = usuarioDeSesion();
  if (!usuario || !usuario.grupoId) {
    return null;
  }
  return obtenerPorId('grupos', usuario.grupoId);
}

// Pinta el saludo y el botón de salir en la cabecera de las páginas.
function pintarCabecera() {
  const cabecera = document.querySelector('.cabecera');
  if (!cabecera) {
    return;
  }

  const caja = document.createElement('div');
  caja.className = 'cabecera__sesion';
  const sesion = obtenerSesion();
  const usuario = sesion ? usuarioDeSesion() : null;

  if (sesion && usuario) {
    const grupo = grupoDeSesion();
    const marca = cabecera.querySelector('.cabecera__marca');

    if (grupo && sesion.modo === 'grupo' && marca) {
      marca.textContent = grupo.nombre;
    }

    const saludo = document.createElement('span');
    saludo.className = 'cabecera__usuario';
    saludo.textContent = 'Hola, ' + usuario.usuario;

    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'cabecera__salir';
    boton.textContent = 'Salir';
    boton.addEventListener('click', function () {
      cerrarSesion();
      window.location.href = 'login.html';
    });

    caja.append(saludo, boton);
  } else {
    if (sesion) {
      cerrarSesion();
    }
    const enlace = document.createElement('a');
    enlace.className = 'cabecera__entrar';
    enlace.href = 'login.html';
    enlace.textContent = 'Iniciar sesión';
    caja.appendChild(enlace);
  }

  cabecera.appendChild(caja);
}

pintarCabecera();
