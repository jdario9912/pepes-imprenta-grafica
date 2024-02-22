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

export const crearCliente = async (nuevoCliente: Cliente) =>
  await axiosQuery.post<Cliente>("/api/clientes", nuevoCliente);

export const obtenerCliente = async (id: string) =>
  (await axiosQuery.get<Cliente>(`/api/clientes/${id}`)).data;

export const obtenerClientes = async () =>
  (await axiosQuery.get<Cliente[]>("/api/clientes")).data;

export const crearBonoFetch = async (data: unknown) =>
  axiosQuery.post<Bonos>("/api/ordenes/bonos", data);

export const crearDisenoFetch = async (data: unknown) =>
  axiosQuery.post<Disenos>("/api/ordenes/disenos", data);

export const crearImpresionFetch = async (data: unknown) =>
  axiosQuery.post<Impresiones>("/api/ordenes/impresiones", data);

export const crearLomaFetch = async (data: unknown) =>
  axiosQuery.post<Loma>("/api/ordenes/loma", data);

export const crearPlotterFetch = async (data: unknown) =>
  axiosQuery.post<Plotter>("/api/ordenes/plotter", data);

export const crearRemeraFetch = async (data: unknown) =>
  axiosQuery.post<Remeras>("/api/ordenes/remeras", data);

export const crearSelloFetch = async (data: unknown) =>
  axiosQuery.post<Sellos>("/api/ordenes/sellos", data);

export const crearTalonarioFetch = async (data: unknown) =>
  axiosQuery.post<Talonarios>("/api/ordenes/talonarios", data);

export const crearTarjetaFetch = async (data: unknown) =>
  axiosQuery.post<Tarjetas>("/api/ordenes/tarjetas", data);

export const crearVariosFetch = async (data: unknown) =>
  axiosQuery.post<Varios>("/api/ordenes/varios", data);

export const crearVolanteFetch = async (data: unknown) =>
  axiosQuery.post<Volantes>("/api/ordenes/volantes", data);

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
