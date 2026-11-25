// Capa de datos del Planificador.
// Único punto de acceso a localStorage: el resto de la app no toca el
// almacenamiento del navegador directamente.
//
// Colecciones: categorias, tareas, usuarios, grupos, mensajes y sesion.

import { categorias as categoriasSemilla, tareas as tareasSemilla } from './datos.js';

const PREFIJO = 'planificador.v1.';
const CLAVE_SEMILLA = PREFIJO + 'sembrado';

// Datos iniciales: solo se copian la primera vez que se abre la app.
const SEMILLAS = {
  categorias: categoriasSemilla,
  tareas: tareasSemilla
};

// Lee una colección completa. Devuelve [] si no existe o está corrupta.
function leer(coleccion) {
  try {
    const texto = localStorage.getItem(PREFIJO + coleccion);
    if (texto === null) {
      return [];
    }
    const datos = JSON.parse(texto);
    return Array.isArray(datos) ? datos : [];
  } catch {
    return [];
  }
}

// Guarda una colección completa.
function escribir(coleccion, datos) {
  try {
    localStorage.setItem(PREFIJO + coleccion, JSON.stringify(datos));
  } catch {
    // Sin espacio o sin permiso: la app sigue funcionando en memoria.
  }
}

// Copia los datos de ejemplo la primera vez; después manda lo guardado.
function sembrar() {
  try {
    if (localStorage.getItem(CLAVE_SEMILLA) === '1') {
      return;
    }
    for (const coleccion of Object.keys(SEMILLAS)) {
      if (localStorage.getItem(PREFIJO + coleccion) === null) {
        escribir(coleccion, SEMILLAS[coleccion]);
      }
    }
    localStorage.setItem(CLAVE_SEMILLA, '1');
  } catch {
    // Si localStorage no está disponible, no hay nada que sembrar.
  }
}

sembrar();

// Devuelve todos los elementos de una colección.
export function obtenerTodos(coleccion) {
  return leer(coleccion);
}

// Devuelve un elemento por su id (o null si no existe).
export function obtenerPorId(coleccion, id) {
  const buscado = Number(id);
  return leer(coleccion).find(function (dato) {
    return Number(dato.id) === buscado;
  }) || null;
}

// Crea un elemento con el siguiente id libre y lo devuelve.
export function crear(coleccion, dato) {
  const datos = leer(coleccion);
  let maximo = 0;
  for (const elemento of datos) {
    if (Number(elemento.id) > maximo) {
      maximo = Number(elemento.id);
    }
  }
  const nuevo = { ...dato, id: maximo + 1 };
  datos.push(nuevo);
  escribir(coleccion, datos);
  return nuevo;
}

// Actualiza un elemento por id. Devuelve el elemento actualizado o null.
export function actualizar(coleccion, id, dato) {
  const datos = leer(coleccion);
  const buscado = Number(id);
  const indice = datos.findIndex(function (elemento) {
    return Number(elemento.id) === buscado;
  });
  if (indice === -1) {
    return null;
  }
  const actualizado = { ...datos[indice], ...dato, id: datos[indice].id };
  datos[indice] = actualizado;
  escribir(coleccion, datos);
  return actualizado;
}

// Borra un elemento por id. Devuelve true si lo encontró.
export function borrar(coleccion, id) {
  const datos = leer(coleccion);
  const buscado = Number(id);
  const restantes = datos.filter(function (elemento) {
    return Number(elemento.id) !== buscado;
  });
  if (restantes.length === datos.length) {
    return false;
  }
  escribir(coleccion, restantes);
  return true;
}
