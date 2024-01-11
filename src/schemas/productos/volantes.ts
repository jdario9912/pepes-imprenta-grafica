import { z } from "zod";
import { ProductoSchema } from "../producto";
import {
  volantesImpresion,
  volantesTamano,
  volantesTipo,
} from "@/libs/api/listas";
import { Volantes } from "@/types/productos";

const VolantesSchema = ProductoSchema.extend({
  tipo: z.string(z.enum(["", ...volantesTipo])),
  tamano: z.string(z.enum(["", ...volantesTamano])),
  cantidad: z.number().positive(),
  impresion: z.string(z.enum(["", ...volantesImpresion])),
  ubicacion_diseno: z.string(),
});

export const validarVolantesCrear = (object: unknown): Volantes =>
  VolantesSchema.parse(object);

export const validarVolantesEditar = (object: unknown) =>
  VolantesSchema.optional().parse(object);
