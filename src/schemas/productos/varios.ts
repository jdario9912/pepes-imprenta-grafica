import { z } from "zod";
import { ProductoSchema } from "../producto";

const VariosCrearSchema = ProductoSchema.extend({});

export const validarVariosCrear = (object: unknown) =>
  VariosCrearSchema.parse(object);