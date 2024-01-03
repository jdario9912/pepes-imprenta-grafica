import { z } from "zod";
import { ProductoSchema } from "../producto";

const VolantesCrearSchema = ProductoSchema.extend({});

export const validarVolantesCrear = (object: unknown) =>
  VolantesCrearSchema.parse(object);
