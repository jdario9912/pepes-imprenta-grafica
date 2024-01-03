import { z } from "zod";
import { ProductoSchema } from "../producto";

const TalonariosCrearSchema = ProductoSchema.extend({});

export const validarTalonariosCrear = (object: unknown) =>
  TalonariosCrearSchema.parse(object);
