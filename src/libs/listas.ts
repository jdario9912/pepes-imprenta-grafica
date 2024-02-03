import { plotterColores } from "@/types/const";
import * as enums from "@/types/enums";

export const metodosPago: string[] = Object.values(enums.MetodoPago);
export const estadoOrden: string[] = Object.values(enums.Estado);

export const siNo: string[] = Object.values(enums.SiNo);

// bonos
export const bonosTipo: string[] = Object.values(enums.BonosTipo);
export const bonosTamano: string[] = Object.values(enums.BonosTamano);

export const bonosNumeradores: Array<number | string> = Object.values(
  enums.BonosNumeradores
).filter((numerador) => !isNaN(Number(numerador)));

export const bonosLotes: Array<number | string> = Object.values(
  enums.BonosLotes
).filter((numerador) => !isNaN(Number(numerador)));

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

// loma
export const lomaMaterial: string[] = Object.values(enums.LomaMaterial);
export const lomaOrientacion: string[] = Object.values(enums.LomaOrientacion);

// plotter
export const plotterColor: number[] = plotterColores.map(
  (color) => color.codigo
);
export const plotterMaterial: string[] = Object.values(enums.PlotterMaterial);
export const plotterTerminacion: string[] = Object.values(
  enums.PlotterTerminacion
);

// sellos
export const sellosTipo: string[] = Object.values(enums.SellosTipo);

// talonarios
export const talonariosTipo: string[] = Object.values(enums.TalonariosTipo);
export const talonariosTamano: string[] = Object.values(enums.TalonariosTamano);
export const talonariosPuntilladoEmblocado: string[] = Object.values(
  enums.TalonariosPuntilladoEmblocado
);
export const talonariosColorDuplicado: string[] = Object.values(
  enums.TalonariosColorDuplicado
);
export const talonariosColorTriplicado: string[] = Object.values(
  enums.TalonariosColorTriplicado
);

// tarjetas
export const tarjetasTipo: string[] = Object.values(enums.TarjetasTipo);
export const tarjetasPapel: string[] = Object.values(enums.TarjetasPapel);
export const tarjetasTerminacion: string[] = Object.values(
  enums.TarjetasTerminacion
);

// volantes
export const volantesTipo: string[] = Object.values(enums.VolantesTipo);
export const volantesImpresion: string[] = Object.values(
  enums.VolantesImpresion
);
export const volantesTamano: string[] = Object.values(enums.VolantesTamano);

// empleados
export const permisosEmpleado: string[] = Object.values(enums.Permiso);
