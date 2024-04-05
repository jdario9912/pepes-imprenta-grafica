import { z } from "zod";
import { ProductoSchema } from "../producto";
import { lomaBolsillo, lomaMaterial, lomaOrientacion, siNo } from "@/libs/listas";
import type { Loma } from "@/types/recursos/productos";

const LomaSchema = ProductoSchema.extend({
  ubicacion_archivo: z.string(),
  material: z.string(z.enum(["", ...lomaMaterial])),
  orientacion: z.string(z.enum(["", ...lomaOrientacion])),
  bolsillo: z.string(z.enum(["", ...lomaBolsillo])),
  corte: z.string(z.enum(["", ...siNo])),
  ojales: z.string(z.enum(["", ...siNo])),
  troquelado: z.string(z.enum(["", ...siNo])),
  portabaner: z.string(z.enum(["", ...siNo])),
});

export const validarLomaCrear = (object: unknown): Loma =>
  LomaSchema.parse(object);

export const validarLomaEditar = (object: unknown) =>
  LomaSchema.partial().parse(object) as Loma;
