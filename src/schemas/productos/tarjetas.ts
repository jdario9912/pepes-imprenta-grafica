import { z } from "zod";
import { ProductoSchema } from "../producto";
import {
  siNo,
  tarjetasPapel,
  tarjetasTerminacion,
  tarjetasTipo,
} from "@/libs/listas";
import type { Tarjetas } from "@/types/recursos/productos";

const TarjetasSchema = ProductoSchema.extend({
  ubicacion_archivo: z.string(),
  tipo: z.string(z.enum(["", ...tarjetasTipo])),
  cantidad: z.coerce.number().positive(),
  papel: z.string(z.enum(["", ...tarjetasPapel])),
  terminacion: z.string(z.enum(["", ...tarjetasTerminacion])),
  puntas_redondeadas: z.string(z.enum(["", ...siNo])),
});

export const validarTarjetasCrear = (object: unknown): Tarjetas =>
  TarjetasSchema.parse(object);

export const validarTarjetasEditar = (object: unknown) =>
  TarjetasSchema.partial().parse(object) as Tarjetas;
