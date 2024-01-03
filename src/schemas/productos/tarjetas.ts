import { z } from "zod";
import { ProductoSchema } from "../producto";

const TarjetasCrearSchema = ProductoSchema.extend({});

export const validarTarjetasCrear = (object: unknown) =>
  TarjetasCrearSchema.parse(object);