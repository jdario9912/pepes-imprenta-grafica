import { z } from "zod";
import { ProductoSchema } from "../producto";
import {
  volantesImpresion,
  volantesTamano,
  volantesTipo,
} from "@/libs/listas";
import type { Volantes } from "@/types/recursos/productos";

const VolantesSchema = ProductoSchema.extend({
  tipo: z.string(z.enum(["", ...volantesTipo])),
  tamano: z.string(z.enum(["", ...volantesTamano])),
  cantidad: z.coerce.number().positive(),
  impresion: z.string(z.enum(["", ...volantesImpresion])),
  ubicacion_diseno: z.string(),
});

export const validarVolantesCrear = (object: unknown): Volantes =>
  VolantesSchema.parse(object);

export const validarVolantesEditar = (object: unknown) =>
  VolantesSchema.partial().parse(object) as Volantes;
