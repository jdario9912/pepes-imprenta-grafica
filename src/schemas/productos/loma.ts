import { z } from "zod";
import { ProductoSchema } from "../producto";
import { lomaMaterial, lomaOrientacion, siNo } from "@/libs/api/listas";

const LomaCrearSchema = ProductoSchema.extend({
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
