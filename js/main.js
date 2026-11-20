// Punto de entrada: mira qué página hemos abierto y dibuja su contenido.

import { tareas, categorias } from './datos.js';
import { pintarListado, pintarFicha, pintarProgreso } from './ui.js';

// Página del panel: listado + progreso.
const listado = document.getElementById('listado');

if (listado) {
  pintarListado(listado, tareas, categorias);
  pintarProgreso(tareas);
}

// Página de detalle: buscamos la tarea por el ?id= de la URL.
const ficha = document.getElementById('ficha');

if (ficha) {
  const parametros = new URLSearchParams(window.location.search);
  const idTexto = parametros.get('id');
  const id = Number(idTexto);

  const tareaEncontrada = tareas.find(function (tarea) {
    return tarea.id === id;
  });

  if (tareaEncontrada) {
    pintarFicha(ficha, tareaEncontrada, categorias);
    document.title = tareaEncontrada.titulo + ' · Planificador';
  } else {
    ficha.innerHTML = `
      <h1>Tarea no encontrada</h1>
      <p class="vacia">No existe ninguna tarea con ese identificador.</p>
      <a class="boton" href="index.html">← Volver al panel</a>`;
  }
}
