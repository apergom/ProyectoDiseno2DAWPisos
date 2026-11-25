// Formulario de contacto del Planificador.
// Guarda los mensajes y recuerda nombre y correo en una cookie.

import { crear } from './almacen.js';
import {
  MOTIVOS,
  validarNombre,
  validarEmail,
  validarTelefono,
  validarMotivo,
  validarMensaje
} from './validacion.js';
import { prepararFormulario, enlazarContador } from './formulario.js';

const NOMBRE_COOKIE = 'planificador_contacto';
const DIAS_COOKIE = 30;

const formulario = document.getElementById('formulario-contacto');

if (formulario) {
  iniciarContacto();
}

function iniciarContacto() {
  const campoNombre = formulario.elements.nombre;
  const campoCorreo = formulario.elements.correo;
  const campoTelefono = formulario.elements.telefono;
  const preferencia = formulario.elements.preferenciaLlamada;
  const campoMotivo = formulario.elements.motivo;
  const campoMensaje = formulario.elements.mensaje;
  const aviso = document.getElementById('aviso-contacto');
  const notaCookie = document.getElementById('nota-cookie');
  const actualizarContador = enlazarContador(campoMensaje);

  // Las opciones del motivo salen de la misma lista que usa la validación.
  for (const motivo of MOTIVOS) {
    const opcion = document.createElement('option');
    opcion.value = motivo;
    opcion.textContent = motivo;
    campoMotivo.appendChild(opcion);
  }

  // Recupera el nombre y el correo de la última visita.
  const recuerdo = leerCookie();
  if (recuerdo) {
    campoNombre.value = recuerdo.nombre;
    campoCorreo.value = recuerdo.correo;
    notaCookie.hidden = false;
  }

  // Validación entre campos: si prefieren llamada, el teléfono es obligatorio.
  preferencia.addEventListener('change', function () {
    campoTelefono.required = preferencia.checked;
  });

  const validadores = {
    nombre: validarNombre,
    correo: validarEmail,
    telefono: validarTelefono,
    preferenciaLlamada: function () {
      return null;
    },
    motivo: validarMotivo,
    mensaje: validarMensaje
  };

  const control = prepararFormulario(formulario, validadores, guardarMensaje);

  function guardarMensaje(datos) {
    crear('mensajes', {
      nombre: datos.nombre,
      correo: datos.correo,
      telefono: datos.telefono,
      preferenciaLlamada: datos.preferenciaLlamada === true,
      motivo: datos.motivo,
      mensaje: datos.mensaje,
      enviadoEl: new Date().toISOString()
    });

    guardarCookie(datos.nombre, datos.correo);

    control.limpiar();
    actualizarContador();
    campoTelefono.required = false;

    aviso.textContent = 'Mensaje enviado. Puedes verlo en «Mensajes enviados».';
    aviso.hidden = false;
    campoNombre.focus();
  }

  function guardarCookie(nombre, correo) {
    const datos = JSON.stringify({ nombre: nombre, correo: correo });
    const caducidad = new Date();
    caducidad.setDate(caducidad.getDate() + DIAS_COOKIE);

    document.cookie = NOMBRE_COOKIE + '=' + encodeURIComponent(datos)
      + '; expires=' + caducidad.toUTCString()
      + '; path=/; SameSite=Lax';
  }

  function leerCookie() {
    const trozos = document.cookie.split('; ');

    for (const trozo of trozos) {
      if (trozo.indexOf(NOMBRE_COOKIE + '=') === 0) {
        const valor = trozo.slice(NOMBRE_COOKIE.length + 1);
        try {
          const datos = JSON.parse(decodeURIComponent(valor));
          return {
            nombre: datos.nombre || '',
            correo: datos.correo || ''
          };
        } catch {
          return null;
        }
      }
    }
    return null;
  }
}
