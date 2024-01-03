import * as enums from "./enums";

interface Producto {
  id: number;
  id_cliente: number;
  nro_orden: number;
  fecha_creacion: string;
  atendido_por: string;
  fecha_entrega: string;
  hora_entrega: string;
  muestra: enums.SiNo;
  producto: enums.Productos; // actualmente esta propiedad se llama "tipo_trabajo" en la base de datos
  ubicacion_archivo: string;
  observaciones: string;
  total: number;
  entrega: number;
  estado: enums.Estado;
  metodo_pago: enums.MetodoPago; // actualmente esto se llama "abono" en la base de datos
}

export interface Bonos extends Producto<Omit, "ubicacion_archivo"> {
  tipo: enums.BonosTipo;
  tamano: enums.BonosTamano;
  desde_numero: number;
  cantidad: number;
  numeradores: enums.BonosNumeradores;
  lotes: enums.BonosLotes;
}

export interface Disenos extends Producto {
  detalles: string;
}

export interface Impresiones extends Producto {
  impresion: enums.ImpresionesImpesion;
  faz: enums.ImpresionesFaz;
  tipo_papel: string;
  tamano_papel: enums.ImpresionesTamanoPapel;
  orientacion: enums.ImpresionesOrientacion;
  anillado: enums.SiNo;
  abrochado: enums.SiNo;
  corte: enums.SiNo;
}

export interface Loma extends Producto {
  material: enums.LomaMaterial;
  orientacion: enums.LomaOrientacion;
  bolsillo: enums.SiNo;
  corte: enums.SiNo;
  ojales: enums.SiNo;
  troquelado: enums.SiNo;
  portabaner: enums.SiNo;
}

export interface Plotter extends Producto {
  tamano: string;
  color: enums.PlotterColor;
  material: enums.PlotterMaterial;
  terminacion: enums.PlotterTerminacion;
}

export interface Remeras extends Producto {
  talles: string;
  color: string;
  estampa_pecho: string;
  estampa_espalda: string;
  color_estampa: string;
  cantidad: number;
}

export interface Sellos extends Producto<Omit, "ubicacion_archivo"> {
  tipo: enums.SellosTipo;
  tamano: string;
  texto: string;
  dibujo: string;
}

export interface Talonarios extends Producto<Omit, "ubicacion_archivo"> {
  tipo: enums.TalonariosTipo;
  cantidad: number;
  tamano: enums.TalonariosTamano;
  modelo_anterior: enums.SiNo;
  tiene_logo: enums.SiNo;
  ubicacion_logo: string;
  numero_desde: number;
  puntillado_emblocado: enums.TalonariosPuntilladoEmblocado;
  color_duplicado: enums.TalonariosColorDuplicado;
  triplicado: enums.SiNo;
  color_triplicado: enums.TalonariosColorTriplicado;
}

export interface Tarjetas extends Producto {
  tipo: enums.TarjetasTipo;
  cantidad: enums.TarjetasCantidad;
  papel: enums.TarjetasPapel;
  terminacion: enums.TarjetasTerminacion;
  puntas_redondeadas: enums.SiNo;
}

export interface Varios extends Producto<Omit, "ubicacion_archivo"> {
  detalle: string;
}

export interface Volantes extends Producto<Omit, "ubicacion_archivo"> {
  tipo: enums.VolantesTipo;
  tamano: enums.VolantesTamano;
  cantidad: enums.VolantesCantidad;
  impresion: enums.VolantesImpresion;
  ubicacion_diseno: string;
}

// en las validaciones me falta agregar la ubicacion_archivo a los productos que lo tengan
