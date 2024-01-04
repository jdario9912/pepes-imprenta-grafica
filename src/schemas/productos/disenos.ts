import { z } from "zod";
import { ProductoSchema } from "../producto";

const DisenosCrearSchema = ProductoSchema.extend({
  ubicacion_archivo: z.string(),
  detalles: z.string(),
});

export const validarDisenosCrear = (object: unknown) =>
  DisenosCrearSchema.parse(object);

const DisenosEditarSchema = ProductoSchema.extend({
  ubicacion_archivo: z.string(),
  detalles: z.string(),
}).optional();

export const validarDisenosEditar = (object: unknown) =>
  DisenosEditarSchema.parse(object);
