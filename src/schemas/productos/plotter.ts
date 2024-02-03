import { z } from "zod";
import { ProductoSchema } from "../producto";
import { plotterMaterial, plotterTerminacion } from "@/libs/listas";
import type { Plotter } from "@/types/recursos/productos";

const PlotterSchema = ProductoSchema.extend({
  ubicacion_archivo: z.string(),
  tamano: z.string(),
  color: z.number().positive(),
  material: z.string(z.enum(["", ...plotterMaterial])),
  terminacion: z.string(z.enum(["", ...plotterTerminacion])),
});

export const validarPlotterCrear = (object: unknown): Plotter =>
  PlotterSchema.parse(object);

export const validarPlotterEditar = (object: unknown) =>
  PlotterSchema.partial().parse(object) as Plotter;
