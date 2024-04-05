import * as enums from "../enums";

interface Producto {
  id?: number;
  id_cliente: number;
  nro_orden?: number;
  fecha_creacion?: string;
  atendido_por: string;
  fecha_entrega: string;
  hora_entrega: string;
  muestra: string;
  producto?: string; // actualmente esta propiedad se llama "tipo_trabajo" en la base de datos
  observaciones: string;
  total: number;
  entrega: number;
  estado: string;
  metodo_pago: string; // actualmente esto se llama "abono" en la base de datos
}

export interface Bonos extends Producto {
  tipo: string;
  tamano: string;
  desde_numero: number;
  cantidad: number;
  numeradores: number;
  lotes: number;
}

export interface Disenos extends Producto {
  ubicacion_archivo: string;
  detalles: string;
}

export interface Impresiones extends Producto {
  impresion: string;
  faz: string;
  tipo_papel: string;
  tamano_papel: string;
  orientacion: string;
  anillado: string;
  abrochado: string;
  corte: string;
  ubicacion_archivo: string;
}

export interface Loma extends Producto {
  material: string;
  orientacion: string;
  bolsillo: string;
  corte: string;
  ojales: string;
  troquelado: string;
  portabaner: string;
  ubicacion_archivo: string;
}

export interface Plotter extends Producto {
  tamano: string;
  color: number;
  material: string;
  terminacion: string;
  ubicacion_archivo: string;
}

export interface Remeras extends Producto {
  talles: string;
  color: string;
  estampa_pecho: string;
  estampa_espalda: string;
  color_estampa: string;
  cantidad: number;
  ubicacion_archivo: string;
}

export interface Sellos extends Producto {
  tipo: string;
  tamano: string;
  texto: string;
  dibujo: string;
}

export interface Talonarios extends Producto {
  tipo: string;
  cantidad: number;
  tamano: string;
  modelo_anterior: string;
  tiene_logo: string;
  ubicacion_logo: string;
  numero_desde: number;
  puntillado_emblocado: string;
  color_duplicado: string;
  triplicado?: string;
  color_triplicado?: string;
}

export interface Tarjetas extends Producto {
  tipo: string;
  cantidad: number;
  papel: string;
  terminacion: string;
  puntas_redondeadas: string;
  ubicacion_archivo: string;
}

export interface Varios extends Producto {
  detalle: string;
}

export interface Volantes extends Producto {
  tipo: string;
  tamano: string;
  cantidad: number;
  impresion: string;
  ubicacion_diseno: string;
}
