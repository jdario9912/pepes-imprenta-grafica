"use server";

import { EmpleadosModel } from "@/models/mysql/empleados";
import { validarEmpleadoActualizar } from "@/schemas/empleado";
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
