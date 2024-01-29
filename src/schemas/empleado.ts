import { permisosEmpleado } from "@/libs/api/listas";
import { z } from "zod";

const EmpleadoSchema = z.object({
  nickname: z.string(),
  email: z.string().email().optional(),
  password: z.string().min(6),
  permisos: z.enum(["", ...permisosEmpleado]),
});

export const validarEmpleadoCrear = (object: unknown): Empleado =>
  EmpleadoSchema.parse(object) as Empleado;

export const validarEmpleadoActualizar = (object: unknown): Empleado =>
  EmpleadoSchema.partial().parse(object) as Empleado;