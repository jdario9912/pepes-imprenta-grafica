import { z } from "zod";
import { ProductoSchema } from "../producto";
import {
  siNo,
  talonariosColorDuplicado,
  talonariosColorTriplicado,
  talonariosPuntilladoEmblocado,
  talonariosTamano,
  talonariosTipo,
} from "@/libs/listas";
import type { Talonarios } from "@/types/recursos/productos";

const TalonariosSchema = ProductoSchema.extend({
  tipo: z.string(z.enum(["", ...talonariosTipo])),
  cantidad: z.coerce.number().positive(),
  tamano: z.string(z.enum(["", ...talonariosTamano])),
  modelo_anterior: z.string(z.enum(["", ...siNo])),
  tiene_logo: z.string(z.enum(["", ...siNo])),
  ubicacion_logo: z.string(),
  numero_desde: z.coerce.number().positive(),
  puntillado_emblocado: z.string(
    z.enum(["", ...talonariosPuntilladoEmblocado])
  ),
  color_duplicado: z.string(z.enum(["", ...talonariosColorDuplicado])),
  triplicado: z.string(z.enum(["", ...siNo])).nullable().default(""),
  color_triplicado: z
    .string(z.enum(["", ...talonariosColorTriplicado]))
    .nullish()
    .transform((valor) => {
      if (!valor) return "";
    }),
});

export const validarTalonariosCrear = (object: unknown): Talonarios =>
  TalonariosSchema.parse(object);

export const validarTalonariosEditar = (object: unknown) =>
  TalonariosSchema.partial().parse(object) as Talonarios;
