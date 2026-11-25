// Datos de ejemplo del Planificador (semilla de localStorage).
// Dos entidades relacionadas: las tareas pertenecen a una categoría (categoriaId).
// La app no los usa directamente: los copia almacen.js la primera vez.

export const categorias = [
  { id: 1, nombre: 'Limpieza' },
  { id: 2, nombre: 'Cocina' },
  { id: 3, nombre: 'Compra' },
  { id: 4, nombre: 'Baño' },
  { id: 5, nombre: 'Ropa' },
  { id: 6, nombre: 'Basura' },
  { id: 7, nombre: 'Mantenimiento' },
  { id: 8, nombre: 'Plantas' },
  { id: 9, nombre: 'Animales' },
  { id: 10, nombre: 'Zona común' }
];

export const tareas = [
  {
    id: 1,
    titulo: 'Fregar los platos',
    descripcion: 'Lavar los platos del día y secar el fregadero al terminar.',
    categoriaId: 2,
    responsable: 'Carlos M.',
    dia: 'Hoy',
    hora: '18:00',
    estado: 'pendiente'
  },
  {
    id: 2,
    titulo: 'Comprar detergente',
    descripcion: 'Comprar detergente para la lavadora y esponjas nuevas.',
    categoriaId: 3,
    responsable: 'Lucía R.',
    dia: 'Hoy',
    hora: '22:00',
    estado: 'hecha'
  },
  {
    id: 3,
    titulo: 'Bajar los envases al contenedor',
    descripcion: 'Bajar la bolsa de envases de plástico y cartón al contenedor amarillo.',
    categoriaId: 6,
    responsable: 'Alejandro G.',
    dia: 'Hoy',
    hora: '19:30',
    estado: 'hecha'
  },
  {
    id: 4,
    titulo: 'Reponer toallas',
    descripcion: 'Llevar toallas limpias del armario al baño.',
    categoriaId: 4,
    responsable: 'María S.',
    dia: 'Mañana',
    hora: '10:00',
    estado: 'pendiente'
  },
  {
    id: 5,
    titulo: 'Regar las plantas',
    descripcion: 'Regar las plantas del salón y de la cocina, poco agua en las suculentas.',
    categoriaId: 8,
    responsable: 'Carlos M.',
    dia: 'Mañana',
    hora: '09:00',
    estado: 'pendiente'
  },
  {
    id: 6,
    titulo: 'Sacar la basura',
    descripcion: 'Sacar el contenedor de orgánico, sale los martes por la mañana.',
    categoriaId: 6,
    responsable: 'Lucía R.',
    dia: 'Martes',
    hora: '08:00',
    estado: 'pendiente'
  },
  {
    id: 7,
    titulo: 'Planchar la ropa de la semana',
    descripcion: 'Planchar camisas y pantalones de la cesta azul.',
    categoriaId: 5,
    responsable: 'María S.',
    dia: 'Miércoles',
    hora: '17:00',
    estado: 'pendiente'
  },
  {
    id: 8,
    titulo: 'Limpiar el baño a fondo',
    descripcion: 'Inodoro, ducha y espejo; usar el spray del armario de debajo del fregadero.',
    categoriaId: 4,
    responsable: 'Alejandro G.',
    dia: 'Jueves',
    hora: '11:00',
    estado: 'pendiente'
  },
  {
    id: 9,
    titulo: 'Comprar fruta y verduras',
    descripcion: 'Lista de la semana: plátanos, manzanas, lechuga, tomates y cebollas.',
    categoriaId: 3,
    responsable: 'Carlos M.',
    dia: 'Viernes',
    hora: '18:30',
    estado: 'pendiente'
  },
  {
    id: 10,
    titulo: 'Pasar la aspiradora',
    descripcion: 'Aspirar salón, pasillo y dormitorios.',
    categoriaId: 1,
    responsable: 'Lucía R.',
    dia: 'Sábado',
    hora: '12:00',
    estado: 'pendiente'
  },
  {
    id: 11,
    titulo: 'Fregar el suelo de la cocina',
    descripcion: 'Fregar con agua caliente y jabón neutro, dejar secar con la ventana abierta.',
    categoriaId: 1,
    responsable: 'María S.',
    dia: 'Sábado',
    hora: '13:00',
    estado: 'pendiente'
  },
  {
    id: 12,
    titulo: 'Dar de comer al gato',
    descripcion: 'Llenar el comedero y cambiar el agua del cuenco.',
    categoriaId: 9,
    responsable: 'Alejandro G.',
    dia: 'Domingo',
    hora: '09:00',
    estado: 'pendiente'
  }
];
