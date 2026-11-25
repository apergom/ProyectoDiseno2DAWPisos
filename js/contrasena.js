// Huella de la contraseña. Nunca se guarda el texto que escribe la persona.
// Se usa SHA-256 cuando el navegador lo permite y una huella sencilla si no.

function aHexadecimal(bytes) {
  let salida = '';
  for (const byte of bytes) {
    salida += byte.toString(16).padStart(2, '0');
  }
  return salida;
}

// Huella de reserva para navegadores sin crypto.subtle (por ejemplo, file://).
function huellaSencilla(texto) {
  let hash = 2166136261;
  for (let i = 0; i < texto.length; i++) {
    hash ^= texto.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return 'simple:' + (hash >>> 0).toString(16);
}

export async function hashContrasena(texto) {
  if (window.crypto && window.crypto.subtle) {
    const datos = new TextEncoder().encode(texto);
    const resumen = await window.crypto.subtle.digest('SHA-256', datos);
    return 'sha256:' + aHexadecimal(new Uint8Array(resumen));
  }
  return huellaSencilla(texto);
}

export async function comprobarContrasena(texto, guardada) {
  if (!guardada) {
    return false;
  }
  const calculada = await hashContrasena(texto);
  return calculada === guardada;
}
