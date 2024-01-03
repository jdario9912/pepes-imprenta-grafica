import { z } from "zod";
import { ProductoSchema } from "../producto";
import * as lista from "@/libs/api/listas";

const BonosCrearSchema = ProductoSchema.extend({
  tipo: z.string(z.enum(["", ...lista.bonosTipo])),
  tamano: z.string(z.enum(["", ...lista.bonosTamano])),
  desde_numero: z.number().positive(),
  cantidad: z.number().positive(),
  numeradores: z.number().positive(),
  lotes: z.number().positive(),
});

export const validarBonosCrear = (object: unknown) =>
  BonosCrearSchema.parse(object);
