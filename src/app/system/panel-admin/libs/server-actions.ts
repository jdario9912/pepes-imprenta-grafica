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

export const cambiarEmail = async (id: number, email: string) => {
  const empeadoValidado = validarEmpleadoActualizar({ email });

  await EmpleadosModel.actualizar(id, empeadoValidado);

  revalidateYredirec("/system/panel-admin");
}

export const cambiarNombre = async (id: number, nickname: string) => {
  const empeadoValidado = validarEmpleadoActualizar({ nickname });

  await EmpleadosModel.actualizar(id, empeadoValidado);

  revalidateYredirec("/system/panel-admin");
}

export const cambiarPermisos = async (id: number, permisos: string) => {
  const empeadoValidado = validarEmpleadoActualizar({ permisos });

  await EmpleadosModel.actualizar(id, empeadoValidado);

  revalidateYredirec("/system/panel-admin");
}

export const eliminarEmpleado = async (id: number) => {
  await EmpleadosModel.eliminar(id);
};

export const agregarEmpleado = async (empleado: Empleado) => {
  const empleadoValidado = validarEmpleadoCrear(empleado);

  await EmpleadosModel.crear(empleadoValidado);
};
