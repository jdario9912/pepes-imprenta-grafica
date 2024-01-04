import { z } from "zod";
import { ProductoSchema } from "../producto";
import { lomaMaterial, lomaOrientacion, siNo } from "@/libs/api/listas";

const LomaCrearSchema = ProductoSchema.extend({
  ubicacion_archivo: z.string(),
  material: z.string(z.enum(["", ...lomaMaterial])),
  orientacion: z.string(z.enum(["", ...lomaOrientacion])),
  bolsillo: z.string(z.enum(["", ...siNo])),
  corte: z.string(z.enum(["", ...siNo])),
  ojales: z.string(z.enum(["", ...siNo])),
  troquelado: z.string(z.enum(["", ...siNo])),
  portabaner: z.string(z.enum(["", ...siNo])),
});

export const validarLomaCrear = (object: unknown) =>
  LomaCrearSchema.parse(object);

  const LomaEditarSchema = ProductoSchema.extend({
  ubicacion_archivo: z.string(),
  material: z.string(z.enum(["", ...lomaMaterial])),
  orientacion: z.string(z.enum(["", ...lomaOrientacion])),
  bolsillo: z.string(z.enum(["", ...siNo])),
  corte: z.string(z.enum(["", ...siNo])),
  ojales: z.string(z.enum(["", ...siNo])),
  troquelado: z.string(z.enum(["", ...siNo])),
  portabaner: z.string(z.enum(["", ...siNo])),
}).optional();

export const validarLomaEditar = (object: unknown) =>
  LomaEditarSchema.parse(object);
