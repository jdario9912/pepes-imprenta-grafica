"use server";

import { revalidatePath } from "next/cache";
import { axiosQuery } from "../axios";

export const editarCliente = async (cliente: Cliente, id: number) => {
  const clienteActualizado = await axiosQuery.patch<Cliente>(
    `/api/clientes/${id}`,
    cliente
  );
  revalidatePath(`/system/clientes/editar/${clienteActualizado.data.id}`);
  revalidatePath("/system/clientes");
  return clienteActualizado.data;
};
