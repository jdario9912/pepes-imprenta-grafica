import * as enums from "@/types/enums";

export const metodosPago: string[] = Object.values(enums.MetodoPago);
export const estado: string[] = Object.values(enums.Estado);

export const siNo: string[] =Object.values(enums.SiNo)

// bonos
export const bonosTipo: string[] = Object.values(enums.BonosTipo);
export const bonosTamano: string[] = Object.values(enums.BonosTamano);

// impresiones
export const impresionesImpesion: string[] = Object.values(
  enums.ImpresionesImpesion
);
export const impresionesTamanoPapel: string[] = Object.values(
  enums.ImpresionesTamanoPapel
);
export const impresionesOrientacion: string[] = Object.values(
  enums.ImpresionesOrientacion
);
export const impresionesFaz: string[] = Object.values(enums.ImpresionesFaz);
