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

export const obtenerCliente = async (id: string) => {
  try {
    return (await axiosQuery.get<Cliente>(`/api/clientes/${id}`)).data;
  } catch {}
};

export const obtenerClientes = async () =>
  (await axiosQuery.get<Cliente[]>("/api/clientes")).data;

export const obtenerBonoFetch = async (id: string) => {
  try {
    return (await axiosQuery.get<Bonos>(`/api/ordenes/bonos/${id}`)).data;
  } catch {}
};

export const obtenerDisenoFetch = async (id: string) => {
  try {
    return (await axiosQuery.get<Disenos>(`/api/ordenes/disenos/${id}`)).data;
  } catch {}
};

export const obtenerImpresionFetch = async (id: string) => {
  try {
    return (await axiosQuery.get<Impresiones>(`/api/ordenes/impresiones/${id}`))
      .data;
  } catch {}
};

export const obtenerLomaFetch = async (id: string) => {
  try {
    return (await axiosQuery.get<Loma>(`/api/ordenes/loma/${id}`)).data;
  } catch {}
};

export const obtenerPlotterFetch = async (id: string) => {
  try {
    return (await axiosQuery.get<Plotter>(`/api/ordenes/plotter/${id}`)).data;
  } catch {}
};

export const obtenerRemeraFetch = async (id: string) => {
  try {
    return (await axiosQuery.get<Remeras>(`/api/ordenes/remeras/${id}`)).data;
  } catch {}
};

export const obtenerSelloFetch = async (id: string) => {
  try {
    return (await axiosQuery.get<Sellos>(`/api/ordenes/sellos/${id}`)).data;
  } catch {}
};

export const obtenerTalonarioFetch = async (id: string) => {
  try {
    return (await axiosQuery.get<Talonarios>(`/api/ordenes/talonarios/${id}`))
      .data;
  } catch {}
};

export const obtenerTarjetaFetch = async (id: string) => {
  try {
    return (await axiosQuery.get<Tarjetas>(`/api/ordenes/tarjetas/${id}`)).data;
  } catch {}
};

export const obtenerVariosFetch = async (id: string) => {
  try {
    return (await axiosQuery.get<Varios>(`/api/ordenes/varios/${id}`)).data;
  } catch {}
};

export const obtenerVolanteFetch = async (id: string) => {
  try {
    return (await axiosQuery.get<Volantes>(`/api/ordenes/volantes/${id}`)).data;
  } catch {}
};

export const buscarOrden = async (numero: string): Promise<OrdenEncontrada> =>
  (await axiosQuery.get<OrdenEncontrada>(`/api/busqueda/orden/${numero}`)).data;

export const obtenerOrdenesCliente = async (
  id: number
): Promise<OrdenCliente[]> =>
  (await axiosQuery.get(`/api/clientes/${id}/ordenes`)).data;

export const eliminarCliente = async (id: number) =>
  await axiosQuery.delete(`/api/clientes/${id}`);

export const eliminarEmpleado = async (id: number) =>
  await axiosQuery.delete(`/api/empleados/${id}`);

export const actualizarPassword = async (
  id: number,
  password: { password: string }
): Promise<Empleado> => await axiosQuery.put(`/api/empleados/${id}`, password);
