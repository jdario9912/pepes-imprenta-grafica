import { z } from "zod";
import { ProductoSchema } from "../producto";
import { Remeras } from "@/types/productos";

const RemerasSchema = ProductoSchema.extend({
  ubicacion_archivo: z.string(),
  talles: z.string(),
  color: z.string(),
  estampa_pecho: z.string(),
  estampa_espalda: z.string(),
  color_estampa: z.string(),
  cantidad: z.number().positive(),
});

export const validarRemerasCrear = (object: unknown): Remeras =>
  RemerasSchema.parse(object);

export const validarRemerasEditar = (object: unknown) =>
  RemerasSchema.optional().parse(object);
