import { z } from "zod";

const EmpleadoSchema = z.object({
  nickname: z.string(),
  email: z.string().email().optional(),
  password: z.string(),
  permisions: z.string(),
});

export const validarEmpleadoCrear = (object: unknown): Empleado =>
  EmpleadoSchema.parse(object) as Empleado;

export const validarEmpleadoActualizar = (object: unknown): Empleado =>
  EmpleadoSchema.partial().parse(object) as Empleado;
