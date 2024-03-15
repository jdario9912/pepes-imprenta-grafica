import type {
  Disenos,
  Bonos,
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
import { axiosQuery } from "../axios";
import { OrdenEncontrada } from "@/types/orden";

export const crearCliente = async (nuevoCliente: Cliente) =>
  await axiosQuery.post<Cliente>("/api/clientes", nuevoCliente);

export const obtenerCliente = async (id: string) =>
  (await axiosQuery.get<Cliente>(`/api/clientes/${id}`)).data;

export const obtenerClientes = async () =>
  (await axiosQuery.get<Cliente[]>("/api/clientes")).data;

export const obtenerBonoFetch = async (id: string) =>
  (await axiosQuery.get<Bonos>(`/api/ordenes/bonos/${id}`)).data;

export const obtenerDisenoFetch = async (id: string) =>
  (await axiosQuery.get<Disenos>(`/api/ordenes/disenos/${id}`)).data;

export const obtenerImpresionFetch = async (id: string) =>
  (await axiosQuery.get<Impresiones>(`/api/ordenes/impresiones/${id}`)).data;

export const obtenerLomaFetch = async (id: string) =>
  (await axiosQuery.get<Loma>(`/api/ordenes/loma/${id}`)).data;

export const obtenerPlotterFetch = async (id: string) =>
  (await axiosQuery.get<Plotter>(`/api/ordenes/plotter/${id}`)).data;

export const obtenerRemeraFetch = async (id: string) =>
  (await axiosQuery.get<Remeras>(`/api/ordenes/remeras/${id}`)).data;

export const obtenerSelloFetch = async (id: string) =>
  (await axiosQuery.get<Sellos>(`/api/ordenes/sellos/${id}`)).data;

export const obtenerTalonarioFetch = async (id: string) =>
  (await axiosQuery.get<Talonarios>(`/api/ordenes/talonarios/${id}`)).data;

export const obtenerTarjetaFetch = async (id: string) =>
  (await axiosQuery.get<Tarjetas>(`/api/ordenes/tarjetas/${id}`)).data;

export const obtenerVariosFetch = async (id: string) =>
  (await axiosQuery.get<Varios>(`/api/ordenes/varios/${id}`)).data;

export const obtenerVolanteFetch = async (id: string) =>
  (await axiosQuery.get<Volantes>(`/api/ordenes/volantes/${id}`)).data;

export const buscarOrden = async (numero: string): Promise<OrdenEncontrada> =>
  (await axiosQuery.get<OrdenEncontrada>(`/api/busqueda/orden/${numero}`)).data;

export const buscarTelefono = async (numero: string): Promise<Cliente[]> =>
  (await axiosQuery.get<Cliente[]>(`/api/busqueda/telefono/${numero}`)).data;

export const actualizarBonoFetch = async (
  actualizado: Bonos,
  id: number
): Promise<Bonos> =>
  (await axiosQuery.patch(`/api/ordenes/bonos/${id}`, actualizado)).data;

export const actualizarDisenoFetch = async (
  actualizado: Disenos,
  id: number
): Promise<Disenos> =>
  (await axiosQuery.patch<Disenos>(`/api/ordenes/disenos/${id}`, actualizado))
    .data;

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
