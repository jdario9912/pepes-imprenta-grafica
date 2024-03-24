"use server";

import { revalidatePath } from "next/cache";
import { axiosQuery } from "../axios";
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
import { OrdenAProveedor, OrdenPendiente } from "@/types/orden";

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
  return;
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

export const actualizarBonoFetch = async (
  actualizado: Bonos,
  id: number
): Promise<Bonos> => {
  const urlApi = `/api/ordenes/bonos/${id}`;
  const urlPdf = `/system/pdf/producto/bonos/${id}`;

  const res = await axiosQuery.patch(urlApi, actualizado);

  revalidatePath(urlPdf);

  return res.data;
};

export const actualizarDisenoFetch = async (
  actualizado: Disenos,
  id: number
): Promise<Disenos> => {
  const urlApi = `/api/ordenes/disenos/${id}`;
  const urlPdf = `/system/pdf/producto/disenos/${id}`;

  const res = await axiosQuery.patch<Disenos>(urlApi, actualizado);

  revalidatePath(urlPdf);

  return res.data;
};

export const actualizarImpresionFetch = async (
  actualizado: Impresiones,
  id: number
): Promise<Impresiones> => {
  const urlApi = `/api/ordenes/impresiones/${id}`;
  const urlPdf = `/system/pdf/producto/impresiones/${id}`;

  const res = await axiosQuery.patch<Impresiones>(urlApi, actualizado);

  revalidatePath(urlPdf);

  return res.data;
};

export const actualizarLomaFetch = async (
  actualizado: Loma,
  id: number
): Promise<Loma> => {
  const urlApi = `/api/ordenes/loma/${id}`;
  const urlPdf = `/system/pdf/producto/loma/${id}`;

  const res = await axiosQuery.patch<Loma>(urlApi, actualizado);

  revalidatePath(urlPdf);

  return res.data;
};

export const actualizarPlotterFetch = async (
  actualizado: Plotter,
  id: number
): Promise<Plotter> => {
  const urlApi = `/api/ordenes/plotter/${id}`;
  const urlPdf = `/system/pdf/producto/plotter/${id}`;

  const res = await axiosQuery.patch<Plotter>(urlApi, actualizado);

  revalidatePath(urlPdf);

  return res.data;
};

export const actualizarRemeraFetch = async (
  actualizado: Remeras,
  id: number
): Promise<Remeras> => {
  const urlApi = `/api/ordenes/remeras/${id}`;
  const urlPdf = `/system/pdf/producto/remeras/${id}`;

  const res = await axiosQuery.patch<Remeras>(urlApi, actualizado);

  revalidatePath(urlPdf);

  return res.data;
};

export const actualizarSelloFetch = async (
  actualizado: Sellos,
  id: number
): Promise<Sellos> => {
  const urlApi = `/api/ordenes/sellos/${id}`;
  const urlPdf = `/system/pdf/producto/sellos/${id}`;

  const res = await axiosQuery.patch<Sellos>(urlApi, actualizado);

  revalidatePath(urlPdf);

  return res.data;
};

export const actualizarTalonarioFetch = async (
  actualizado: Talonarios,
  id: number
): Promise<Talonarios> => {
  const urlApi = `/api/ordenes/talonarios/${id}`;
  const urlPdf = `/system/pdf/producto/talonarios/${id}`;

  const res = await axiosQuery.patch<Talonarios>(urlApi, actualizado);

  revalidatePath(urlPdf);

  return res.data;
};

export const actualizarTarjetaFetch = async (
  actualizado: Tarjetas,
  id: number
): Promise<Tarjetas> => {
  const urlApi = `/api/ordenes/tarjetas/${id}`;
  const urlPdf = `/system/pdf/producto/tarjetas/${id}`;

  const res = await axiosQuery.patch<Tarjetas>(urlApi, actualizado);

  revalidatePath(urlPdf);

  return res.data;
};

export const actualizarVarioFetch = async (
  actualizado: Varios,
  id: number
): Promise<Varios> => {
  const urlApi = `/api/ordenes/varios/${id}`;
  const urlPdf = `/system/pdf/producto/varios/${id}`;

  const res = await axiosQuery.patch<Varios>(urlApi, actualizado);

  revalidatePath(urlPdf);

  return res.data;
};

export const actualizarVolanteFetch = async (
  actualizado: Volantes,
  id: number
): Promise<Volantes> => {
  const urlApi = `/api/ordenes/volantes/${id}`;
  const urlPdf = `/system/pdf/producto/volantes/${id}`;

  const res = await axiosQuery.patch<Volantes>(urlApi, actualizado);

  revalidatePath(urlPdf);

  return res.data;
};