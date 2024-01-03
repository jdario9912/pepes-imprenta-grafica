import { z } from "zod";
import { ProductoSchema } from "../producto";

const DisenosCrearSchema = ProductoSchema.extend({
  detalles: z.string(),
});

export const validarDisenosCrear = (object: unknown) =>
  DisenosCrearSchema.parse(object);
