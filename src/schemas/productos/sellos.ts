import { z } from "zod";
import { ProductoSchema } from "../producto";
import { sellosTipo } from "@/libs/api/listas";

const SellosCrearSchema = ProductoSchema.extend({
  tipo: z.string(z.enum(["", ...sellosTipo])),
  tamano: z.string(),
  texto: z.string(),
  dibujo: z.string(),
});

export const validarSellosCrear = (object: unknown) =>
  SellosCrearSchema.parse(object);
