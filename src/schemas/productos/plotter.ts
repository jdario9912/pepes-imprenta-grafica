import { z } from "zod";
import { ProductoSchema } from "../producto";
import {
  plotterColor,
  plotterMaterial,
  plotterTerminacion,
} from "@/libs/api/listas";

const PlotterCrearSchema = ProductoSchema.extend({
  ubicacion_archivo: z.string(),
  tamano: z.string(),
  color: z.string(z.enum(["", ...plotterColor])),
  material: z.string(z.enum(["", ...plotterMaterial])),
  terminacion: z.string(z.enum(["", ...plotterTerminacion])),
});

export const validarPlotterCrear = (object: unknown) =>
  PlotterCrearSchema.parse(object);

const PlotterEditarSchema = ProductoSchema.extend({
  ubicacion_archivo: z.string(),
  tamano: z.string(),
  color: z.string(z.enum(["", ...plotterColor])),
  material: z.string(z.enum(["", ...plotterMaterial])),
  terminacion: z.string(z.enum(["", ...plotterTerminacion])),
}).optional();

export const validarPlotterEditar = (object: unknown) =>
  PlotterEditarSchema.parse(object);
