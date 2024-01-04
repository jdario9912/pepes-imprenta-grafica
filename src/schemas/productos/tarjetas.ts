import { z } from "zod";
import { ProductoSchema } from "../producto";
import {
  siNo,
  tarjetasPapel,
  tarjetasTerminacion,
  tarjetasTipo,
} from "@/libs/api/listas";

const TarjetasCrearSchema = ProductoSchema.extend({
  ubicacion_archivo: z.string(),
  tipo: z.string(z.enum(["", ...tarjetasTipo])),
  cantidad: z.number().positive(),
  papel: z.string(z.enum(["", ...tarjetasPapel])),
  terminacion: z.string(z.enum(["", ...tarjetasTerminacion])),
  puntas_redondeadas: z.string(z.enum(["", ...siNo])),
});

export const validarTarjetasCrear = (object: unknown) =>
  TarjetasCrearSchema.parse(object);
