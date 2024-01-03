import { z } from "zod";
import { ProductoSchema } from "../producto";

const SellosCrearSchema = ProductoSchema.extend({});

export const validarSellosCrear = (object: unknown) =>
  SellosCrearSchema.parse(object);
