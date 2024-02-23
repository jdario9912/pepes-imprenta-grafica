"use server";

import { revalidatePath } from "next/cache";
import { axiosQuery } from "../axios";
import { OrdenPendiente } from "@/types/orden-pendiente";
import {
  Bonos,
  Disenos,
  Impresiones,
  Loma,
  Plotter,
  Remeras,
  Sellos,
  Talonarios,
  Tarjetas,
  Varios,
  Volantes,
} from "@/types/recursos/productos";
import { revalidarClientesYDireccionar } from "./libs";
import { OrdenAProveedor } from "@/types/orden-a-proveedor";

export const editarCliente = async (cliente: Cliente, id: number) => {
  const clienteActualizado = await axiosQuery.patch<Cliente>(
    `/api/clientes/${id}`,
    cliente
  );
  revalidatePath(`/system/clientes/editar/${clienteActualizado.data.id}`);
  revalidatePath("/system/clientes");
  return clienteActualizado.data;
};

export const obtenerOrdenesPendientes = async () =>
  (await axiosQuery.get<OrdenPendiente[]>("/api/ordenes/pendientes")).data;

export const obtenerOrdenesAProveedor = async () =>
  (await axiosQuery.get<OrdenAProveedor[]>("/api/ordenes/a-proveedor")).data;

export const cambiarEstadoOrden = async (
  producto: string,
  id: number,
  estado: string
) => {
  await axiosQuery.patch(`/api/ordenes/${producto}/${id}`, { estado });
  revalidatePath("/system/ordenes/pendientes");
  revalidatePath("/system/ordenes/proveedor");
};

export const crearBonoFetch = async (data: unknown) => {
  const orden = (await axiosQuery.post<Bonos>("/api/ordenes/bonos", data)).data;
  revalidarClientesYDireccionar(orden.id, orden.producto);
};

export const crearDisenoFetch = async (data: unknown) => {
  const orden = (await axiosQuery.post<Disenos>("/api/ordenes/disenos", data))
    .data;
  revalidarClientesYDireccionar(orden.id, orden.producto);
};

export const crearImpresionFetch = async (data: unknown) => {
  const orden = (
    await axiosQuery.post<Impresiones>("/api/ordenes/impresiones", data)
  ).data;
  revalidarClientesYDireccionar(orden.id, orden.producto);
};

export const crearLomaFetch = async (data: unknown) => {
  const orden = (await axiosQuery.post<Loma>("/api/ordenes/loma", data)).data;
  revalidarClientesYDireccionar(orden.id, orden.producto);
};

export const crearPlotterFetch = async (data: unknown) => {
  const orden = (await axiosQuery.post<Plotter>("/api/ordenes/plotter", data))
    .data;
  revalidarClientesYDireccionar(orden.id, orden.producto);
};

export const crearRemeraFetch = async (data: unknown) => {
  const orden = (await axiosQuery.post<Remeras>("/api/ordenes/remeras", data))
    .data;
  revalidarClientesYDireccionar(orden.id, orden.producto);
};

export const crearSelloFetch = async (data: unknown) => {
  const orden = (await axiosQuery.post<Sellos>("/api/ordenes/sellos", data))
    .data;
  revalidarClientesYDireccionar(orden.id, orden.producto);
};

export const crearTalonarioFetch = async (data: unknown) => {
  const orden = (
    await axiosQuery.post<Talonarios>("/api/ordenes/talonarios", data)
  ).data;
  revalidarClientesYDireccionar(orden.id, orden.producto);
};

export const crearTarjetaFetch = async (data: unknown) => {
  const orden = (await axiosQuery.post<Tarjetas>("/api/ordenes/tarjetas", data))
    .data;
  revalidarClientesYDireccionar(orden.id, orden.producto);
};

export const crearVariosFetch = async (data: unknown) => {
  const orden = (await axiosQuery.post<Varios>("/api/ordenes/varios", data))
    .data;
  revalidarClientesYDireccionar(orden.id, orden.producto);
};

export const crearVolanteFetch = async (data: unknown) => {
  const orden = (await axiosQuery.post<Volantes>("/api/ordenes/volantes", data))
    .data;
  revalidarClientesYDireccionar(orden.id, orden.producto);
};
