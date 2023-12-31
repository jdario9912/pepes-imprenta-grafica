import { z } from "zod";
import { ProductoSchema } from "../producto";

const VariosCrearSchema = ProductoSchema.extend({
  detalles: z.string(),
});

export const validarVariosCrear = (object: unknown) =>
  VariosCrearSchema.parse(object);

const VariosEditarSchema = ProductoSchema.extend({
  detalles: z.string(),
}).optional();

export const validarVariosEditar = (object: unknown) =>
  VariosEditarSchema.parse(object);
