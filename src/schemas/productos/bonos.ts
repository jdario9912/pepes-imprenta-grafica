import { z } from "zod";
import { ProductoSchema } from "../producto";
import { bonosTamano, bonosTipo } from "@/libs/listas";
import type { Bonos } from "@/types/recursos/productos";

const BonosSchema = ProductoSchema.extend({
  tipo: z.string(z.enum(["", ...bonosTipo])),
  tamano: z.string(z.enum(["", ...bonosTamano])),
  desde_numero: z.coerce.number().positive(),
  cantidad: z.coerce.number().positive(),
  numeradores: z.coerce.number().positive(),
  lotes: z.coerce.number().positive(),
});

export const validarBonosCrear = (object: unknown): Bonos =>
  BonosSchema.parse(object);

export const validarBonosEditar = (object: unknown): Bonos =>
  BonosSchema.partial().parse(object) as Bonos;
