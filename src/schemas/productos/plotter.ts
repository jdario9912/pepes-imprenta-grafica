import { z } from "zod";
import { ProductoSchema } from "../producto";
import {
  plotterColor,
  plotterMaterial,
  plotterTerminacion,
} from "@/libs/api/listas";

const PlotterCrearSchema = ProductoSchema.extend({
  tamano: z.string(),
  color: z.string(z.enum(["", ...plotterColor])),
  material: z.string(z.enum(["", ...plotterMaterial])),
  terminacion: z.string(z.enum(["", ...plotterTerminacion])),
});

export const validarPlotterCrear = (object: unknown) =>
  PlotterCrearSchema.parse(object);
