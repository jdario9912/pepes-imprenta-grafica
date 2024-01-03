import { z } from "zod";
import { ProductoSchema } from "../producto";

const RemerasCrearSchema = ProductoSchema.extend({
  talles: z.string(),
  color: z.string(),
  estampa_pecho: z.string(),
  estampa_espalda: z.string(),
  color_estampa: z.string(),
  cantidad: z.number().positive(),
});

export const validarRemerasCrear = (object: unknown) =>
  RemerasCrearSchema.parse(object);
