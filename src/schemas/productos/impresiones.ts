import { z } from "zod";
import { ProductoSchema } from "../producto";
import {
  impresionesFaz,
  impresionesImpesion,
  impresionesOrientacion,
  impresionesTamanoPapel,
  siNo,
} from "@/libs/api/listas";

const ImpresionesCrearSchema = ProductoSchema.extend({
  impresion: z.string(z.enum(["", ...impresionesImpesion])),
  faz: z.string(z.enum(["", ...impresionesFaz])),
  tipo_papel: z.string(),
  tamano_papel: z.string(z.enum(["", ...impresionesTamanoPapel])),
  orientacion: z.string(z.enum(["", ...impresionesOrientacion])),
  anillado: z.string(z.enum(["", ...siNo])),
  abrochado: z.string(z.enum(["", ...siNo])),
  corte: z.string(z.enum(["", ...siNo])),
});

export const validarImpresionesCrear = (object: unknown) =>
  ImpresionesCrearSchema.parse(object);
