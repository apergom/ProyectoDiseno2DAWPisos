// Registro y listado de usuarios del piso.
// El mismo formulario crea y edita; la contraseña nunca se guarda.

import { obtenerTodos, obtenerPorId, crear, actualizar, borrar } from './almacen.js';
import {
  validarNombreUsuario,
  validarEmail,
  validarContrasena,
  validarRepeticion,
  validarFechaNacimiento,
  validarCondiciones,
  calcularEdad
} from './validacion.js';
import { prepararFormulario } from './formulario.js';
import { escapar } from './ui.js';

const formulario = document.getElementById('formulario-usuario');

if (formulario) {
  iniciarRegistro();
}

function iniciarRegistro() {
  const lista = document.getElementById('listado-usuarios');
  const resumen = document.getElementById('resumen-usuarios');
  const titulo = document.getElementById('titulo-registro');
  const subtitulo = document.getElementById('subtitulo-registro');
  const aviso = document.getElementById('aviso-usuarios');
  const botonGuardar = document.getElementById('boton-guardar');
  const botonCancelar = document.getElementById('cancelar-edicion');
  const notaEdicion = document.getElementById('nota-edicion');
  const bloquesContrasena = document.querySelectorAll('.campo--contrasena');
  const idOculto = formulario.elements.id;
  const campoUsuario = formulario.elements.usuario;
  const campoEmail = formulario.elements.email;
  const campoContrasena = formulario.elements.contrasena;
  const campoRepeticion = formulario.elements.repeticion;
  const campoFecha = formulario.elements.fechaNacimiento;
  const campoCondiciones = formulario.elements.condiciones;

  // La fecha máxima es hoy: no se puede nacer en el futuro.
  campoFecha.max = fechaDeHoy();

  function fechaDeHoy() {
    const hoy = new Date();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    return hoy.getFullYear() + '-' + mes + '-' + dia;
  }

  function formatearFecha(iso) {
    if (!iso) {
      return 'sin fecha';
    }
    const partes = iso.split('-');
    if (partes.length !== 3) {
      return iso;
    }
    return partes[2] + '/' + partes[1] + '/' + partes[0];
  }

  function mostrarAviso(texto) {
    aviso.textContent = texto;
    aviso.hidden = false;
  }

  // Nombre de usuario único (sin contar el que se está editando).
  function validarUsuarioUnico(valor, campo) {
    const mensaje = validarNombreUsuario(valor, campo);
    if (mensaje) {
      return mensaje;
    }

    const idActual = Number(idOculto.value);
    const usuarios = obtenerTodos('usuarios');

    for (const usuario of usuarios) {
      if (usuario.id !== idActual && usuario.usuario.toLowerCase() === valor.trim().toLowerCase()) {
        return 'Ese nombre de usuario ya está en uso.';
      }
    }
    return null;
  }

  // Correo único (sin contar el que se está editando).
  function validarEmailUnico(valor) {
    const mensaje = validarEmail(valor);
    if (mensaje) {
      return mensaje;
    }

    const idActual = Number(idOculto.value);
    const usuarios = obtenerTodos('usuarios');

    for (const usuario of usuarios) {
      if (usuario.id !== idActual && usuario.email.toLowerCase() === valor.trim().toLowerCase()) {
        return 'Ya hay una cuenta con ese correo.';
      }
    }
    return null;
  }

  const validadores = {
    usuario: validarUsuarioUnico,
    email: validarEmailUnico,
    contrasena: validarContrasena,
    repeticion: validarRepeticion,
    fechaNacimiento: validarFechaNacimiento,
    condiciones: validarCondiciones
  };

  const control = prepararFormulario(formulario, validadores, guardarUsuario);

  function guardarUsuario(datos) {
    const id = Number(idOculto.value);
    const ahora = new Date().toISOString();

    const usuario = {
      usuario: datos.usuario,
      email: datos.email,
      fechaNacimiento: datos.fechaNacimiento,
      condiciones: datos.condiciones,
      actualizadoEl: ahora
    };

    if (id) {
      actualizar('usuarios', id, usuario);
      mostrarAviso('Usuario actualizado. La contraseña no se guarda en el navegador.');
    } else {
      usuario.creadoEl = ahora;
      crear('usuarios', usuario);
      mostrarAviso('Usuario creado. La contraseña no se guarda en el navegador.');
    }

    salirDeEdicion();
    control.limpiar();
    pintarUsuarios();
  }

  // Rellena el formulario con los datos del usuario elegido.
  function cargarUsuario(id) {
    const usuario = obtenerPorId('usuarios', id);
    if (!usuario) {
      return;
    }

    idOculto.value = usuario.id;
    campoUsuario.value = usuario.usuario;
    campoEmail.value = usuario.email;
    campoFecha.value = usuario.fechaNacimiento;
    campoCondiciones.checked = usuario.condiciones === true;
    campoContrasena.value = '';
    campoRepeticion.value = '';

    titulo.textContent = 'Editar usuario';
    subtitulo.textContent = 'Modifica los datos de la cuenta. La contraseña no se puede mostrar ni guardar.';

    // Al editar no se piden contraseñas: no se guardan.
    campoContrasena.required = false;
    campoRepeticion.required = false;
    for (const bloque of bloquesContrasena) {
      bloque.hidden = true;
    }

    notaEdicion.hidden = false;
    botonGuardar.textContent = 'Guardar cambios';
    botonCancelar.hidden = false;
    control.limpiarErrores();
    aviso.hidden = true;

    formulario.scrollIntoView({ behavior: 'smooth', block: 'start' });
    campoUsuario.focus({ preventScroll: true });
  }

  // Vuelve al modo de alta.
  function salirDeEdicion() {
    idOculto.value = '';
    titulo.textContent = 'Crear cuenta';
    subtitulo.textContent = 'Crea tu cuenta para tu piso. Después podrás editar estos datos desde la lista.';
    campoContrasena.required = true;
    campoRepeticion.required = true;
    for (const bloque of bloquesContrasena) {
      bloque.hidden = false;
    }

    notaEdicion.hidden = true;
    botonGuardar.textContent = 'Crear usuario';
    botonCancelar.hidden = true;
  }

  function pintarUsuarios() {
    const usuarios = obtenerTodos('usuarios');

    if (usuarios.length === 0) {
      resumen.textContent = 'Todavía no hay ninguna cuenta.';
      lista.innerHTML = '<li class="vacia">Crea la primera cuenta con el formulario de arriba.</li>';
      return;
    }

    resumen.textContent = usuarios.length === 1
      ? '1 usuario registrado'
      : usuarios.length + ' usuarios registrados';

    let html = '';

    for (const usuario of usuarios) {
      const edad = calcularEdad(usuario.fechaNacimiento);

      html += `
        <li class="tarjeta tarjeta--fila">
          <div class="tarjeta__textos">
            <span class="tarjeta__titulo">${escapar(usuario.usuario)}</span>
            <span class="tarjeta__meta">${escapar(usuario.email)}</span>
            <span class="tarjeta__meta">Nacimiento: ${formatearFecha(usuario.fechaNacimiento)} · ${edad} años</span>
          </div>
          <div class="acciones">
            <button class="boton boton--secundario" type="button" data-accion="editar" data-id="${usuario.id}">Editar</button>
            <button class="boton boton--peligro" type="button" data-accion="borrar" data-id="${usuario.id}">Borrar</button>
          </div>
        </li>`;
    }

    lista.innerHTML = html;
  }

  // Delegación de eventos: un solo listener para editar y borrar.
  lista.addEventListener('click', function (event) {
    const boton = event.target.closest('button[data-accion]');
    if (!boton) {
      return;
    }

    const id = Number(boton.dataset.id);

    if (boton.dataset.accion === 'editar') {
      cargarUsuario(id);
      return;
    }

    if (boton.dataset.accion === 'borrar') {
      const usuario = obtenerPorId('usuarios', id);
      if (!usuario) {
        return;
      }

      const seguro = confirm('¿Borrar el usuario "' + usuario.usuario + '"? No se puede deshacer.');
      if (seguro) {
        const idActual = Number(idOculto.value);
        borrar('usuarios', id);
        mostrarAviso('Usuario borrado.');
        if (idActual === id) {
          salirDeEdicion();
          control.limpiar();
        }
        pintarUsuarios();
      }
    }
  });

  botonCancelar.addEventListener('click', function () {
    salirDeEdicion();
    control.limpiar();
    campoUsuario.focus();
  });

  pintarUsuarios();
}
