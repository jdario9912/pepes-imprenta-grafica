interface Producto {
  id: string;
  id_cliente: string;
  nro_orden: number;
  fecha_creacion: string;
  atendido_por: string;
  fecha_entrega: string;
  hora_entrega: string;
  muestra: string;
  tipo_trabajo: TipoProducto;
  observaciones: string;
  total: number;
  entrega: number;
  estado: Estado;
  abono: Abono;
}

enum TipoProducto {
  bonos = "Bonos",
  disenos = "Disenos",
  impresiones = "Impresiones",
  loma = "Loma",
  plotter = "Plotter",
  remeras = "Remeras",
  sellos = "Sellos",
  talonarios = "Talonarios",
  tarjetas = "Tarjetas",
  varios = "Varios",
  volantes = "Volantes",
}

enum Estado {
  pendiente = "pendiente",
  entergado = "entregado",
  proveedor = "proveedor",
  realizado = "realizado",
}

enum Abono {
  efectivo = "efectivo",
  debito = "debito",
  transferencia = "tranferencia",
}

export interface Bonos extends Producto {}
export interface Disenos extends Producto {}
export interface Impresiones extends Producto {}
export interface Loma extends Producto {}
export interface Plotter extends Producto {}
export interface Remeras extends Producto {}
export interface Sellos extends Producto {}
export interface Talonarios extends Producto {}
export interface Tarjetas extends Producto {}
export interface Varios extends Producto {}
export interface Volantes extends Producto {}