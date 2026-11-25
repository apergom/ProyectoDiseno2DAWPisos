// Guardia de acceso. Se carga en el <head> para redirigir antes de pintar.
// No usa módulos a propósito: tiene que ejecutarse cuanto antes.

(function () {
  var PREFIJO = 'planificador.v1.';

  function leer(coleccion) {
    try {
      var texto = localStorage.getItem(PREFIJO + coleccion);
      if (!texto) {
        return null;
      }
      return JSON.parse(texto);
    } catch {
      return null;
    }
  }

  var pagina = window.location.pathname.split('/').pop();
  if (!pagina) {
    pagina = 'index.html';
  }

  var sesion = leer('sesion');
  var usuarios = leer('usuarios') || [];

  // Si la cuenta de la sesión ya no existe, se cierra la sesión.
  if (sesion) {
    var existe = usuarios.some(function (usuario) {
      return Number(usuario.id) === Number(sesion.usuarioId);
    });
    if (!existe) {
      localStorage.removeItem(PREFIJO + 'sesion');
      sesion = null;
    }
  }

  // Al entrar en el login con sesión abierta se va directo al siguiente paso.
  if (pagina === 'login.html') {
    if (sesion) {
      window.location.replace(sesion.modo ? 'index.html' : 'grupo.html');
    }
    return;
  }

  var conSesion = [
    'index.html',
    'detalle.html',
    'calendario.html',
    'chat.html',
    'grupo.html',
    'nueva-tarea.html'
  ];

  var conModo = [
    'index.html',
    'detalle.html',
    'calendario.html',
    'chat.html',
    'nueva-tarea.html'
  ];

  if (conSesion.indexOf(pagina) !== -1 && !sesion) {
    window.location.replace('login.html');
    return;
  }

  if (conModo.indexOf(pagina) === -1) {
    return;
  }

  var usuario = null;
  for (var i = 0; i < usuarios.length; i++) {
    if (Number(usuarios[i].id) === Number(sesion.usuarioId)) {
      usuario = usuarios[i];
      break;
    }
  }

  if (!sesion.modo) {
    window.location.replace('grupo.html');
    return;
  }

  // El modo grupo necesita que la cuenta siga perteneciendo a un piso.
  if (sesion.modo === 'grupo' && (!usuario || !usuario.grupoId)) {
    window.location.replace('grupo.html');
  }
})();
