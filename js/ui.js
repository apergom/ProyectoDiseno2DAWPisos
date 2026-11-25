// Funciones de dibujo: convierten los datos en HTML.

// Escapa el texto que escribe el usuario antes de meterlo en HTML.
export function escapar(texto) {
  return String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Devuelve el nombre de la categoría de una tarea.
export function nombreCategoria(tarea, categorias) {
  for (const categoria of categorias) {
    if (categoria.id === tarea.categoriaId) {
      return categoria.nombre;
    }
  }
  return 'Sin categoría';
}

// Dibuja la lista de tareas dentro del elemento indicado.
export function pintarListado(contenedor, tareas, categorias) {
  if (tareas.length === 0) {
    contenedor.innerHTML = '<li class="vacia">No hay tareas que coincidan con el filtro.</li>';
    return;
  }

  let html = '';

  for (const tarea of tareas) {
    const categoria = nombreCategoria(tarea, categorias);
    const claseHecha = tarea.estado === 'hecha' ? ' tarjeta--hecha' : '';
    const claseCasilla = tarea.estado === 'hecha' ? ' tarjeta__casilla--hecha' : '';
    const marca = tarea.estado === 'hecha' ? '✓' : '';

    html += `
      <li class="tarjeta${claseHecha}">
        <a class="tarjeta__enlace" href="detalle.html?id=${tarea.id}">
          <span class="tarjeta__casilla${claseCasilla}" aria-hidden="true">${marca}</span>
          <span class="tarjeta__textos">
            <span class="tarjeta__titulo">${tarea.titulo}</span>
            <span class="tarjeta__meta">${categoria} · ${tarea.responsable} · ${tarea.dia} ${tarea.hora}</span>
          </span>
        </a>
      </li>`;
  }

  contenedor.innerHTML = html;
}

// Dibuja la ficha completa de una tarea dentro del elemento indicado.
export function pintarFicha(contenedor, tarea, categorias) {
  const categoria = nombreCategoria(tarea, categorias);

  let estadoClase = 'ficha__estado';
  if (tarea.estado !== 'hecha') {
    estadoClase += ' ficha__estado--pendiente';
  }

  const estadoTexto = tarea.estado === 'hecha' ? 'Hecha' : 'Pendiente';

  contenedor.innerHTML = `
    <p class="ficha__categoria">${categoria}</p>
    <h1 class="ficha__titulo">${tarea.titulo}</h1>
    <p class="ficha__descripcion">${tarea.descripcion}</p>
    <dl class="ficha__datos">
      <dt>Responsable</dt><dd>${tarea.responsable}</dd>
      <dt>Cuándo</dt><dd>${tarea.dia} a las ${tarea.hora}</dd>
      <dt>Estado</dt><dd><span class="${estadoClase}">${estadoTexto}</span></dd>
    </dl>
    <a class="boton" href="index.html">← Volver al panel</a>`;
}

// Actualiza el texto y la barra de progreso del panel.
export function pintarProgreso(tareas) {
  let hechas = 0;
  for (const tarea of tareas) {
    if (tarea.estado === 'hecha') {
      hechas++;
    }
  }

  const total = tareas.length;
  const porcentaje = total === 0 ? 0 : Math.round((hechas / total) * 100);

  const relleno = document.getElementById('progreso-relleno');
  const texto = document.getElementById('progreso-texto');
  const resumen = document.getElementById('resumen');

  if (relleno) {
    relleno.style.width = porcentaje + '%';
  }
  if (texto) {
    texto.textContent = hechas + ' de ' + total + ' completadas';
  }
  if (resumen) {
    resumen.textContent = 'Semana del 13 al 19 · ' + total + ' tareas';
  }
}

// Rellena los desplegables del buscador con las categorías y las personas.
export function rellenarFiltros(categorias, tareas) {
  const selectCategoria = document.getElementById('filtro-categoria');
  const selectPersona = document.getElementById('filtro-persona');

  for (const categoria of categorias) {
    const opcion = document.createElement('option');
    opcion.value = String(categoria.id);
    opcion.textContent = categoria.nombre;
    selectCategoria.appendChild(opcion);
  }

  const personas = [];
  for (const tarea of tareas) {
    if (!personas.includes(tarea.responsable)) {
      personas.push(tarea.responsable);
    }
  }

  for (const persona of personas) {
    const opcion = document.createElement('option');
    opcion.value = persona;
    opcion.textContent = persona;
    selectPersona.appendChild(opcion);
  }
}
