// Listado de mensajes enviados desde el formulario de contacto.

import { obtenerTodos, borrar } from './almacen.js';
import { escapar } from './ui.js';

const lista = document.getElementById('listado-mensajes');

if (lista) {
  const resumen = document.getElementById('resumen-mensajes');

  function formatearFecha(iso) {
    if (!iso) {
      return 'sin fecha';
    }
    const fecha = new Date(iso);
    if (isNaN(fecha.getTime())) {
      return iso;
    }
    return fecha.toLocaleDateString('es-ES')
      + ' a las '
      + fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  }

  function pintarMensajes() {
    const mensajes = obtenerTodos('mensajes');

    if (mensajes.length === 0) {
      resumen.textContent = 'Todavía no has enviado ningún mensaje.';
      lista.innerHTML = '<li class="vacia">Los mensajes del formulario de contacto aparecerán aquí.</li>';
      return;
    }

    resumen.textContent = mensajes.length === 1
      ? '1 mensaje guardado'
      : mensajes.length + ' mensajes guardados';

    let html = '';

    for (const mensaje of mensajes) {
      const telefono = mensaje.telefono ? escapar(mensaje.telefono) : 'sin teléfono';
      const llamada = mensaje.preferenciaLlamada ? ' · prefiere que le llamen' : '';

      html += `
        <li class="tarjeta tarjeta--fila tarjeta--mensaje">
          <div class="tarjeta__textos">
            <span class="tarjeta__titulo">${escapar(mensaje.motivo)}</span>
            <span class="tarjeta__meta">${escapar(mensaje.nombre)} · ${escapar(mensaje.correo)} · ${telefono}${llamada}</span>
            <span class="tarjeta__meta">Enviado el ${formatearFecha(mensaje.enviadoEl)}</span>
            <p class="mensaje__texto">${escapar(mensaje.mensaje)}</p>
          </div>
          <div class="acciones">
            <button class="boton boton--peligro" type="button" data-accion="borrar" data-id="${mensaje.id}">Borrar</button>
          </div>
        </li>`;
    }

    lista.innerHTML = html;
  }

  // Delegación de eventos: borrar con confirmación previa.
  lista.addEventListener('click', function (event) {
    const boton = event.target.closest('button[data-accion="borrar"]');
    if (!boton) {
      return;
    }

    const seguro = confirm('¿Borrar este mensaje? No se puede deshacer.');
    if (seguro) {
      borrar('mensajes', Number(boton.dataset.id));
      pintarMensajes();
    }
  });

  pintarMensajes();
}
