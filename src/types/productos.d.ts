import * as enums from "./enums";

interface Producto {
  id: string;
  id_cliente: string;
  nro_orden: number;
  fecha_creacion: string;
  atendido_por: string;
  fecha_entrega: string;
  hora_entrega: string;
  muestra: enums.SiNo;
  producto: enums.Productos; // actualmente esta propiedad se llama tipo_trabajo en la base de datos
  ubicacion_archivo: string;
  observaciones: string;
  total: number;
  entrega: number;
  estado: enums.Estado;
  abono: enums.Abono;
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
  impresion: ImpresionesImpesion;
  faz: ImpresionesFaz;
  tipo_papel: string;
  tamano_papel: ImpresionesTamanoPapel;
  orientacion: ImpresionesOrientacion;
  anillado: SiNo;
  abrochado: SiNo;
  corte: SiNo;
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
  ubicacion_logo: enums.SiNo;
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

export interface ParamsRequest {
  producto: enums.Productos;
  id: string
}