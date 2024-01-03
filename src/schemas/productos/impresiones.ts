import { z } from "zod";
import { ProductoSchema } from "../producto";

const ImpresionesCrearSchema = ProductoSchema.extend({
  impresion: z.string(),
faz:
tipo_papel:
tamano_papel:
orientacion:
anillado:
abrochado:
corte:
});

export const validarImpresionesCrear = (object: any) =>
  ImpresionesCrearSchema.parse(object);
