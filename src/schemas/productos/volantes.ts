import { z } from "zod";
import { ProductoSchema } from "../producto";
import {
  volantesImpresion,
  volantesTamano,
  volantesTipo,
} from "@/libs/api/listas";

const VolantesCrearSchema = ProductoSchema.extend({
  tipo: z.string(z.enum(["", ...volantesTipo])),
  tamano: z.string(z.enum(["", ...volantesTamano])),
  cantidad: z.number().positive(),
  impresion: z.string(z.enum(["", ...volantesImpresion])),
  ubicacion_diseno: z.string(),
});

export const validarVolantesCrear = (object: unknown) =>
  VolantesCrearSchema.parse(object);

const VolantesEditarSchema = ProductoSchema.extend({
  tipo: z.string(z.enum(["", ...volantesTipo])),
  tamano: z.string(z.enum(["", ...volantesTamano])),
  cantidad: z.number().positive(),
  impresion: z.string(z.enum(["", ...volantesImpresion])),
  ubicacion_diseno: z.string(),
}).optional();

export const validarVolantesEditar = (object: unknown) =>
  VolantesEditarSchema.parse(object);
