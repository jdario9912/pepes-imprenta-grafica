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
import { redirect } from "next/navigation";

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

  const res = await axiosQuery.patch(`/api/ordenes/bonos/${id}`, actualizado);

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
): Promise<Impresiones> =>
  (
    await axiosQuery.patch<Impresiones>(
      `/api/ordenes/impresiones/${id}`,
      actualizado
    )
  ).data;

export const actualizarLomaFetch = async (
  actualizado: Loma,
  id: number
): Promise<Loma> =>
  (await axiosQuery.patch<Loma>(`/api/ordenes/loma/${id}`, actualizado)).data;

export const actualizarPlotterFetch = async (
  actualizado: Plotter,
  id: number
): Promise<Plotter> =>
  (await axiosQuery.patch<Plotter>(`/api/ordenes/plotter/${id}`, actualizado))
    .data;

export const actualizarRemeraFetch = async (
  actualizado: Remeras,
  id: number
): Promise<Remeras> =>
  (await axiosQuery.patch<Remeras>(`/api/ordenes/remeras/${id}`, actualizado))
    .data;

export const actualizarSelloFetch = async (
  actualizado: Sellos,
  id: number
): Promise<Sellos> =>
  (await axiosQuery.patch<Sellos>(`/api/ordenes/sellos/${id}`, actualizado))
    .data;

export const actualizarTalonarioFetch = async (
  actualizado: Talonarios,
  id: number
): Promise<Talonarios> =>
  (
    await axiosQuery.patch<Talonarios>(
      `/api/ordenes/talonarios/${id}`,
      actualizado
    )
  ).data;

export const actualizarTarjetaFetch = async (
  actualizado: Tarjetas,
  id: number
): Promise<Tarjetas> =>
  (await axiosQuery.patch<Tarjetas>(`/api/ordenes/tarjetas/${id}`, actualizado))
    .data;

export const actualizarVarioFetch = async (
  actualizado: Varios,
  id: number
): Promise<Varios> =>
  (await axiosQuery.patch<Varios>(`/api/ordenes/varios/${id}`, actualizado))
    .data;

export const actualizarVolanteFetch = async (
  actualizado: Volantes,
  id: number
): Promise<Volantes> =>
  (await axiosQuery.patch<Volantes>(`/api/ordenes/volantes/${id}`, actualizado))
    .data;
