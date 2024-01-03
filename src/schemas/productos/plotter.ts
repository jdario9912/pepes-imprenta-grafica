import { z } from "zod";
import { ProductoSchema } from "../producto";

const PlotterCrearSchema = ProductoSchema.extend({});

export const validarPlotterCrear = (object: unknown) =>
  PlotterCrearSchema.parse(object);
