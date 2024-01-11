import { z } from "zod";
import { ProductoSchema } from "../producto";
import { Varios } from "@/types/productos";

const VariosSchema = ProductoSchema.extend({
  detalle: z.string(),
});

export const validarVariosCrear = (object: unknown): Varios =>
  VariosSchema.parse(object);

export const validarVariosEditar = (object: unknown) =>
  VariosSchema.optional().parse(object);
