import { z } from "zod";
import { ProductoSchema } from "../producto";
import { bonosTamano, bonosTipo } from "@/libs/api/listas";
import { Bonos } from "@/types/productos";

const BonosSchema = ProductoSchema.extend({
  tipo: z.string(z.enum(["", ...bonosTipo])),
  tamano: z.string(z.enum(["", ...bonosTamano])),
  desde_numero: z.number().positive(),
  cantidad: z.number().positive(),
  numeradores: z.number().positive(),
  lotes: z.number().positive(),
});

export const validarBonosCrear = (object: unknown): Bonos =>
  BonosSchema.parse(object);

export const validarBonosEditar = (object: unknown) =>
  BonosSchema.optional().parse(object);
