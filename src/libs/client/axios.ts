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
import { OrdenCliente, OrdenEncontrada } from "@/types/orden";

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

export const obtenerOrdenesCliente = async (id: number): Promise<OrdenCliente[]> =>
  (await axiosQuery.get(`/api/clientes/${id}/ordenes`)).data;
