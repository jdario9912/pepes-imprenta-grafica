export enum Productos {
  bonos = "bonos",
  disenos = "diseños",
  impresiones = "impresiones",
  loma = "loma",
  plotter = "plotter",
  remeras = "remeras",
  sellos = "sellos",
  talonarios = "talonarios",
  tarjetas = "tarjetas",
  varios = "varios",
  volantes = "volantes",
}

export enum Estado {
  pendiente = "pendiente",
  entergado = "entregado",
  proveedor = "proveedor",
  realizado = "realizado",
}

export enum Abono {
  efectivo = "efectivo",
  debito = "débito",
  transferencia = "tranferencia",
}

export enum SiNo {
  si = "si",
  no = "no",
}

export enum BonosTipo {
  obra = "obra",
  ilustracion = "ilustración",
}

export enum BonosTamano {
  un_tercio = "1/3",
  un_cuarto = "1/4",
  un_sexto = "1/6",
  un_octavo = "1/8",
}

export enum BonosNumeradores {
  uno = 1,
  dos = 2,
  tres = 3,
}

export enum BonosLotes {
  diez = 10,
  veinticinco = 25,
  cincuenta = 50,
  cien = 100,
}

export enum ImpresionesImpesion {
  color = "color",
  blancoYNegro = "blanco y negro",
}

export enum ImpresionesTamanoPapel {
  a4 = "a4",
  a5 = "a5",
  a3 = "a3",
  oficio = "oficio",
  legal = "legal",
}

export enum ImpresionesOrientacion {
  vertical = "vertical",
  apaisado = "apaisado",
}

export enum ImpresionesFaz {
  simple = "simple",
  doble = "doble",
}

export enum LomaMaterial {
  vinilo_brillo = "vinilo brillo",
  vinilo_mate = "vinilo mate",
  vinilo_corrugado = "vinilo sobre corrugado",
  papel = "papel",
  lona_front = "lona front",
  lona_back = "lona back",
  transparente = "transparente",
  micho = "micro",
}

export enum LomaOrientacion {
  vertical = "vertical",
  horizontal = "horizontal",
}

// plotter
// color: ...
export enum PlotterMaterial {
  autoadhesivo = "autoadhesivo",
  termotransferible = "termotransferible",
}

export enum PlotterTerminacion {
  pelado = "pelado",
  sin_pelar = "sin pelar",
}

// sellos
// tipo: madera, automatico, pocket, otro
export enum SellosTipo {
  madera = "madera",
  automatico = "automático",
  pocket = "pocket",
  otro = "otro",
}

export enum TalonariosTipo {
  factura_c = "factura C",
  recibo_c = "recibo C",
  remito_r = "remito R",
  presupuesto_x = "presupuesto X",
  recibo_x = "recibo X",
  rp = "RP",
  otros = "otros",
}

export enum TalonariosTamano {
  a4 = "A4",
  un_medio = "1/2",
  un_cuarto = "1/4",
}

export enum TalonariosPuntilladoEmblocado {
  simple = "simple",
  doble = "doble",
  sueltas = "sueltas",
  emblocado = "emblocado",
}

export enum TalonariosColorDuplicado {
  amarillo = "amarillo",
  rosa = "rosa",
  verde = "verde",
  celeste = "celeste",
  solo_original = "solo original",
}

export enum TalonariosColorTriplicado {
  amarillo = "amarillo",
  rosa = "rosa",
  verde = "verde",
  celeste = "celeste",
}

export enum TarjetasTipo {
  laser_1_0 = "laser 1/0",
  laser_4_0 = "laser 4/0",
  laser_4_1 = "laser 4/1",
  laser_4_4 = "laser 4/4",
  mil_4_1 = "1000 4/1",
  mil_4_4 = "1000 4/4",
  opp_mate_x1 = "Opp mate X1",
  opp_mate_x2 = "Opp mate X2",
  uv_sector_x1 = "UV sector X1",
  uv_sector_x2 = "UV sector X2",
}

export enum TarjetasCantidad {
  cien = 100,
  docientos = 200,
  mil = 1000,
  dosmil = 2000,
}

export enum TarjetasPapel {
  ilustracion = "ilustración",
  obra = "obra",
  madera = "madera",
}

export enum TarjetasTerminacion {
  ninguna = "ninguna",
  perforado = "perforado",
  corte = "corte",
}

export enum VolantesTipo {
  color = "color",
  grises = "escala de grises",
}
export enum VolantesImpresion {
  frente = "frente",
  frente_dorso = "frente y dorso",
}
export enum VolantesCantidad {
  dosientoscincuenta = 250,
  quinientos = 500,
  mil = 1000,
  dosmil = 2000,
  cincomil = 5000,
}
export enum VolantesTamano {
  un_cuarto = " 1/4",
  un_medio = "1/2",
  un_octavo = "1/8",
  otro = "otro",
}
