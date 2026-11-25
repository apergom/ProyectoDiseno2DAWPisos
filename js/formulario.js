// Piezas comunes a los dos formularios: mostrar errores, validar al salir
// del campo y al escribir, y validar todo al enviar.

// Devuelve el valor de un campo convertido a su tipo.
export function valorDe(campo) {
  if (campo.type === 'checkbox') {
    return campo.checked;
  }
  if (campo.type === 'number') {
    return campo.value === '' ? '' : Number(campo.value);
  }
  return campo.value.trim();
}

// Recoge los datos del formulario en un objeto.
export function leerDatos(campos) {
  const datos = {};
  for (const campo of campos) {
    datos[campo.name] = valorDe(campo);
  }
  return datos;
}

// Prepara un formulario con validación propia (el HTML lleva novalidate).
// validadores: objeto { nombreDelCampo: funcion(valor, campo) }
// alGuardar: se llama solo si todo es válido, con los datos convertidos.
export function prepararFormulario(formulario, validadores, alGuardar) {
  const campos = [];
  const tocados = [];

  for (const elemento of formulario.elements) {
    if (elemento.name && validadores[elemento.name]) {
      campos.push(elemento);
    }
  }

  // El párrafo de error se busca por data-error-para.
  function buscarError(campo) {
    return formulario.querySelector('[data-error-para="' + campo.name + '"]');
  }

  function mostrarError(campo, mensaje) {
    const parrafo = buscarError(campo);

    if (mensaje) {
      campo.setAttribute('aria-invalid', 'true');
      if (parrafo) {
        parrafo.textContent = mensaje;
        parrafo.hidden = false;
      }
    } else {
      campo.removeAttribute('aria-invalid');
      if (parrafo) {
        parrafo.textContent = '';
        parrafo.hidden = true;
      }
    }
  }

  function validarCampo(campo) {
    const validador = validadores[campo.name];
    const mensaje = validador(valorDe(campo), campo);
    mostrarError(campo, mensaje);
    return mensaje;
  }

  function validarTocados(excepto) {
    for (const nombre of tocados) {
      const campo = formulario.elements[nombre];
      if (campo && campo !== excepto) {
        validarCampo(campo);
      }
    }
  }

  // Al salir del campo se valida y queda marcado como tocado.
  formulario.addEventListener('focusout', function (event) {
    const campo = event.target;
    if (!campos.includes(campo)) {
      return;
    }
    if (!tocados.includes(campo.name)) {
      tocados.push(campo.name);
    }
    validarCampo(campo);
  });

  // Si ya se ha tocado, se revisa mientras se escribe (y al cambiar).
  function alCambiar(event) {
    const campo = event.target;
    if (!campos.includes(campo)) {
      return;
    }
    if (tocados.includes(campo.name)) {
      validarCampo(campo);
    }
    // Repetir contraseña o teléfono dependen de otro campo.
    validarTocados(campo);
  }

  formulario.addEventListener('input', alCambiar);
  formulario.addEventListener('change', alCambiar);

  // Al enviar se validan todos; si hay errores, el foco va al primero.
  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    let primerError = null;

    for (const campo of campos) {
      if (!tocados.includes(campo.name)) {
        tocados.push(campo.name);
      }
      if (validarCampo(campo) && primerError === null) {
        primerError = campo;
      }
    }

    if (primerError) {
      primerError.focus();
      return;
    }

    alGuardar(leerDatos(campos));
  });

  function limpiarErrores() {
    tocados.length = 0;
    for (const campo of campos) {
      mostrarError(campo, null);
    }
  }

  function limpiar() {
    formulario.reset();
    limpiarErrores();
  }

  return { campos: campos, limpiar: limpiar, limpiarErrores: limpiarErrores };
}

// Enlaza el contador de caracteres de un textarea.
// Devuelve una función para refrescarlo a mano (por ejemplo, al vaciar).
export function enlazarContador(campo) {
  const contador = document.querySelector('[data-contador-para="' + campo.name + '"]');

  function actualizar() {
    if (contador) {
      contador.textContent = campo.value.length + ' / ' + campo.maxLength;
    }
  }

  campo.addEventListener('input', actualizar);
  actualizar();

  return actualizar;
}
