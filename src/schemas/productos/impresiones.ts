import { z } from "zod";
import { ProductoSchema } from "../producto";
import {
  impresionesFaz,
  impresionesImpesion,
  impresionesOrientacion,
  impresionesTamanoPapel,
  siNo,
} from "@/libs/api/listas";
import type { Impresiones } from "@/types/recursos/productos";

const ImpresionesSchema = ProductoSchema.extend({
  ubicacion_archivo: z.string(),
  impresion: z.string(z.enum(["", ...impresionesImpesion])),
  faz: z.string(z.enum(["", ...impresionesFaz])),
  tipo_papel: z.string(),
  tamano_papel: z.string(z.enum(["", ...impresionesTamanoPapel])),
  orientacion: z.string(z.enum(["", ...impresionesOrientacion])),
  anillado: z.string(z.enum(["", ...siNo])),
  abrochado: z.string(z.enum(["", ...siNo])),
  corte: z.string(z.enum(["", ...siNo])),
});

export const validarImpresionesCrear = (object: unknown): Impresiones =>
  ImpresionesSchema.parse(object);

export const validarImpresionesEditar = (object: unknown) =>
  ImpresionesSchema.partial().parse(object) as Impresiones;
