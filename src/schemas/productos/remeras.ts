import { z } from "zod";
import { ProductoSchema } from "../producto";

const RemerasCrearSchema = ProductoSchema.extend({});

export const validarRemerasCrear = (object: unknown) =>
  RemerasCrearSchema.parse(object);
