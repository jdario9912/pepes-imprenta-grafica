"use server";

import { EmpleadosModel } from "@/models/mysql/empleados";
import {
  validarEmpleadoActualizar,
  validarEmpleadoCrear,
} from "@/schemas/empleado";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const revalidateYredirec = (path: string) => {
  revalidatePath(path, "page");
  redirect(path);
};

export const cambiarPassword = async (id: number, password: string) => {
  const empeadoValidado = validarEmpleadoActualizar({ password });

  await EmpleadosModel.actualizarPassword(id, empeadoValidado.password);

  revalidateYredirec("/system/panel-admin");
};

export const eliminarEmpleado = async (id: number) => {
  await EmpleadosModel.eliminar(id);
};

export const agregarEmpleado = async (empleado: Empleado) => {
  const empleadoValidado = validarEmpleadoCrear(empleado);

  await EmpleadosModel.crear(empleadoValidado);
};
