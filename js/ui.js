// Funciones de dibujo: convierten los datos en HTML.

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
