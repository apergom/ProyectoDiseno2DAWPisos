// Pantalla de acceso al piso: crear un grupo, aceptar una invitación
// o entrar en modo personal mientras no se pertenece a ninguno.

import { obtenerTodos, obtenerPorId, crear, actualizar } from './almacen.js';
import { prepararFormulario } from './formulario.js';
import { escapar } from './ui.js';
import { obtenerSesion, entrarAlPiso, cerrarSesion } from './sesion.js';

const vistaConGrupo = document.getElementById('vista-con-grupo');
const vistaSinGrupo = document.getElementById('vista-sin-grupo');
const aviso = document.getElementById('aviso-grupo');
const subtitulo = document.getElementById('subtitulo-grupo');
const nombreGrupo = document.getElementById('nombre-grupo');
const resumenGrupo = document.getElementById('resumen-grupo');
const codigoGrupo = document.getElementById('codigo-grupo');
const miembrosGrupo = document.getElementById('miembros-grupo');
const botonEntrarPanel = document.getElementById('entrar-panel');
const botonEntrarPersonal = document.getElementById('entrar-personal');
const botonModoPersonal = document.getElementById('modo-personal');

if (vistaConGrupo) {
  iniciar();
}

function iniciar() {
  const sesion = obtenerSesion();

  if (!sesion) {
    window.location.replace('login.html');
    return;
  }

  const usuario = obtenerPorId('usuarios', sesion.usuarioId);
  if (!usuario) {
    cerrarSesion();
    window.location.replace('login.html');
    return;
  }

  // Nombre del piso: obligatorio y entre 3 y 40 caracteres.
  function validarNombreGrupo(valor, campo) {
    const texto = String(valor).trim();

    if (texto === '') {
      return 'Ponle un nombre al piso.';
    }
    if (texto.length < 3) {
      return 'El nombre del piso debe tener al menos 3 caracteres.';
    }
    if (campo && campo.maxLength > 0 && texto.length > campo.maxLength) {
      return 'El nombre del piso no puede pasar de ' + campo.maxLength + ' caracteres.';
    }
    return null;
  }

  // Código de invitación: 6 letras o números y tiene que existir.
  function validarCodigo(valor) {
    const codigo = normalizarCodigo(valor);

    if (codigo === '') {
      return 'Escribe el código de invitación.';
    }
    if (!/^[A-Z0-9]{6}$/.test(codigo)) {
      return 'El código tiene 6 caracteres, entre letras y números.';
    }

    const grupos = obtenerTodos('grupos');
    const existe = grupos.some(function (grupo) {
      return grupo.codigo === codigo;
    });

    if (!existe) {
      return 'No hay ningún piso con ese código de invitación.';
    }
    return null;
  }

  const controlCrear = prepararFormulario(
    document.getElementById('formulario-crear-grupo'),
    { nombreGrupo: validarNombreGrupo },
    crearGrupo
  );

  const controlUnirse = prepararFormulario(
    document.getElementById('formulario-unirse'),
    { codigo: validarCodigo },
    unirseAlGrupo
  );

  const campoCodigo = document.getElementById('codigo-invitacion');
  campoCodigo.addEventListener('input', function () {
    const posicion = campoCodigo.selectionStart;
    campoCodigo.value = campoCodigo.value.toUpperCase();
    campoCodigo.setSelectionRange(posicion, posicion);
  });

  botonEntrarPanel.addEventListener('click', function () {
    entrar('grupo');
  });

  botonEntrarPersonal.addEventListener('click', function () {
    entrar('personal');
  });

  botonModoPersonal.addEventListener('click', function () {
    entrar('personal');
  });

  pintar(usuario);

  function entrar(modo) {
    entrarAlPiso(modo);
    window.location.href = 'index.html';
  }

  function mostrarAviso(texto, esError) {
    aviso.textContent = texto;
    aviso.hidden = false;
    aviso.classList.toggle('aviso--error', esError === true);
  }

  function crearGrupo(datos) {
    const ahora = new Date().toISOString();
    const grupo = crear('grupos', {
      nombre: datos.nombreGrupo.trim(),
      codigo: generarCodigo(),
      creadoPor: usuario.id,
      creadoEl: ahora
    });

    actualizar('usuarios', usuario.id, {
      grupoId: grupo.id,
      actualizadoEl: ahora
    });

    controlCrear.limpiar();
    mostrarAviso('Grupo «' + grupo.nombre + '» creado. El código de invitación es ' + grupo.codigo + '.', false);
    pintar(obtenerPorId('usuarios', usuario.id));
  }

  function unirseAlGrupo(datos) {
    const codigo = normalizarCodigo(datos.codigo);
    const grupos = obtenerTodos('grupos');
    const grupo = grupos.find(function (elemento) {
      return elemento.codigo === codigo;
    });

    if (!grupo) {
      mostrarAviso('No hay ningún piso con ese código de invitación.', true);
      return;
    }

    actualizar('usuarios', usuario.id, {
      grupoId: grupo.id,
      actualizadoEl: new Date().toISOString()
    });

    controlUnirse.limpiar();
    mostrarAviso('Ya formas parte de «' + grupo.nombre + '».', false);
    pintar(obtenerPorId('usuarios', usuario.id));
  }

  function generarCodigo() {
    const letras = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const usados = obtenerTodos('grupos').map(function (grupo) {
      return grupo.codigo;
    });
    let codigo = '';

    do {
      codigo = '';
      for (let i = 0; i < 6; i++) {
        codigo += letras[Math.floor(Math.random() * letras.length)];
      }
    } while (usados.includes(codigo));

    return codigo;
  }

  function pintar(cuenta) {
    const grupo = cuenta.grupoId ? obtenerPorId('grupos', cuenta.grupoId) : null;

    if (grupo) {
      pintarGrupo(grupo, cuenta);
      return;
    }

    // Si el grupo ya no existe, se deja la cuenta sin piso.
    if (cuenta.grupoId) {
      actualizar('usuarios', cuenta.id, { grupoId: null });
    }

    vistaConGrupo.hidden = true;
    vistaSinGrupo.hidden = false;
    subtitulo.textContent = 'Hola, ' + cuenta.usuario + '. Todavía no formas parte de ningún piso.';
  }

  function pintarGrupo(grupo, cuenta) {
    const miembros = obtenerTodos('usuarios').filter(function (persona) {
      return Number(persona.grupoId) === Number(grupo.id);
    });

    vistaSinGrupo.hidden = true;
    vistaConGrupo.hidden = false;

    subtitulo.textContent = 'Hola, ' + cuenta.usuario + '. Este es el piso con el que vas a trabajar.';
    nombreGrupo.textContent = grupo.nombre;
    resumenGrupo.textContent = miembros.length === 1
      ? '1 persona en el piso'
      : miembros.length + ' personas en el piso';
    codigoGrupo.textContent = grupo.codigo;

    let html = '';
    for (const persona of miembros) {
      const eresTu = Number(persona.id) === Number(cuenta.id);
      const esCreador = Number(persona.id) === Number(grupo.creadoPor);
      const etiquetas = [];

      if (eresTu) {
        etiquetas.push('tú');
      }
      if (esCreador) {
        etiquetas.push('creador');
      }

      html += '<li><span>' + escapar(persona.usuario) + '</span><span class="lista-miembros__etiqueta">' + etiquetas.join(' · ') + '</span></li>';
    }
    miembrosGrupo.innerHTML = html;

    botonEntrarPanel.textContent = obtenerSesion().modo === 'grupo'
      ? 'Volver al panel del piso'
      : 'Entrar al panel del piso';
  }
}

function normalizarCodigo(valor) {
  return String(valor).trim().toUpperCase();
}
