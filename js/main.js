// Punto de entrada: mira qué página hemos abierto y dibuja su contenido.

import { obtenerTodos } from './almacen.js';
import { pintarListado, pintarFicha, pintarProgreso, rellenarFiltros } from './ui.js';

// Los datos se leen siempre a través de la capa de almacenamiento.
const tareas = obtenerTodos('tareas');
const categorias = obtenerTodos('categorias');

// Página del panel: listado + progreso.
const listado = document.getElementById('listado');

if (listado) {
  rellenarFiltros(categorias, tareas);
  pintarListado(listado, tareas, categorias);
  pintarProgreso(tareas);

  const formulario = document.getElementById('filtros');

  // Al enviar el formulario se muestra solo lo que coincida con el filtro.
  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const categoria = document.getElementById('filtro-categoria').value;
    const persona = document.getElementById('filtro-persona').value;

    const tareasFiltradas = tareas.filter(function (tarea) {
      const coincideCategoria = categoria === '' || tarea.categoriaId === Number(categoria);
      const coincidePersona = persona === '' || tarea.responsable === persona;
      return coincideCategoria && coincidePersona;
    });

    pintarListado(listado, tareasFiltradas, categorias);
    pintarProgreso(tareasFiltradas);
  });

  // Botón Limpiar: vuelve a mostrar todas las tareas.
  document.getElementById('filtro-limpiar').addEventListener('click', function () {
    formulario.reset();
    pintarListado(listado, tareas, categorias);
    pintarProgreso(tareas);
  });
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
