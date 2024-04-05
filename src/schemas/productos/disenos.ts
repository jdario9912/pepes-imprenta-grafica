import { z } from "zod";
import { ProductoSchema } from "../producto";
import type { Disenos } from "@/types/recursos/productos";

const DisenosSchema = ProductoSchema.extend({
  ubicacion_archivo: z.string(),
  detalles: z.string(),
});

export const validarDisenosCrear = (object: unknown): Disenos =>
  DisenosSchema.parse(object);

export const validarDisenosEditar = (object: unknown) =>
  DisenosSchema.partial().parse(object) as Disenos;
