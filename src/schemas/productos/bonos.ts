import { z } from "zod";
import { ProductoSchema } from "../producto";
import { bonosTamano, bonosTipo } from "@/libs/api/listas";
import { Bonos } from "@/types/productos";

const BonosCrearSchema = ProductoSchema.extend({
  tipo: z.string(z.enum(["", ...bonosTipo])),
  tamano: z.string(z.enum(["", ...bonosTamano])),
  desde_numero: z.number().positive(),
  cantidad: z.number().positive(),
  numeradores: z.number().positive(),
  lotes: z.number().positive(),
});

export const validarBonosCrear = (object: unknown): Bonos =>
  BonosCrearSchema.parse(object);

const BonosEditarSchema = ProductoSchema.extend({
  tipo: z.string(z.enum(["", ...bonosTipo])),
  tamano: z.string(z.enum(["", ...bonosTamano])),
  desde_numero: z.number().positive(),
  cantidad: z.number().positive(),
  numeradores: z.number().positive(),
  lotes: z.number().positive(),
}).optional();

export const validarBonosEditar = (object: unknown) =>
  BonosEditarSchema.parse(object);
