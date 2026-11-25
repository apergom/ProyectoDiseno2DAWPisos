// Inicio de sesión: comprueba el usuario y el hash de la contraseña.

import { obtenerTodos } from './almacen.js';
import { validarNombreUsuario } from './validacion.js';
import { prepararFormulario } from './formulario.js';
import { comprobarContrasena } from './contrasena.js';
import { iniciarSesion } from './sesion.js';

const formulario = document.getElementById('formulario-login');

if (formulario) {
  const aviso = document.getElementById('error-login');
  const boton = document.getElementById('boton-login');
  const notaSinCuentas = document.getElementById('nota-sin-cuentas');

  if (obtenerTodos('usuarios').length === 0 && notaSinCuentas) {
    notaSinCuentas.hidden = false;
  }

  const validadores = {
    usuario: validarNombreUsuario,
    contrasena: function (valor) {
      if (String(valor) === '') {
        return 'Escribe tu contraseña.';
      }
      return null;
    }
  };

  function mostrarAviso(texto) {
    aviso.textContent = texto;
    aviso.hidden = false;
  }

  function ocultarAviso() {
    aviso.textContent = '';
    aviso.hidden = true;
  }

  async function entrar(datos) {
    boton.disabled = true;
    boton.textContent = 'Comprobando…';

    try {
      const usuarios = obtenerTodos('usuarios');
      const usuario = usuarios.find(function (cuenta) {
        return cuenta.usuario.toLowerCase() === datos.usuario.toLowerCase();
      });

      if (!usuario) {
        mostrarAviso('Usuario o contraseña incorrectos.');
        return;
      }

      if (!usuario.contrasenaHash) {
        mostrarAviso('Esa cuenta todavía no tiene contraseña. Entra en Registro, edita la cuenta y asígnale una.');
        return;
      }

      const correcta = await comprobarContrasena(datos.contrasena, usuario.contrasenaHash);

      if (!correcta) {
        mostrarAviso('Usuario o contraseña incorrectos.');
        return;
      }

      iniciarSesion(usuario);
      window.location.href = 'grupo.html';
    } catch {
      mostrarAviso('No se ha podido comprobar la contraseña. Inténtalo de nuevo.');
    } finally {
      boton.disabled = false;
      boton.textContent = 'Entrar';
    }
  }

  prepararFormulario(formulario, validadores, entrar);
  formulario.addEventListener('input', ocultarAviso);
}
