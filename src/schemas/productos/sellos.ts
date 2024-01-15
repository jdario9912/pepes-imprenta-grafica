import { z } from "zod";
import { ProductoSchema } from "../producto";
import { sellosTipo } from "@/libs/api/listas";
import type { Sellos } from "@/types/recursos/productos";

const SellosSchema = ProductoSchema.extend({
  tipo: z.string(z.enum(["", ...sellosTipo])),
  tamano: z.string(),
  texto: z.string(),
  dibujo: z.string(),
});

export const validarSellosCrear = (object: unknown): Sellos =>
  SellosSchema.parse(object);

export const validarSellosEditar = (object: unknown) =>
  SellosSchema.partial().parse(object) as Sellos;
