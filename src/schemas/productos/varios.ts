import { z } from "zod";
import { ProductoSchema } from "../producto";
import type { Varios } from "@/types/recursos/productos";

const VariosSchema = ProductoSchema.extend({
  detalle: z.string(),
});

export const validarVariosCrear = (object: unknown): Varios =>
  VariosSchema.parse(object);

export const validarVariosEditar = (object: unknown) =>
  VariosSchema.partial().parse(object) as Varios;
