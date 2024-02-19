import { axiosBaseURL } from "@/config";
import type { Bonos } from "@/types/recursos/productos";
import axios from "axios";

const query = axios.create({
  baseURL: axiosBaseURL,
});

export const crearCliente = async (nuevoCliente: FormNuevoCliente) =>
  await query.post<Cliente>("/api/clientes", nuevoCliente);

export const obtenerCliente = async (id: string) =>
  (await query.get<Cliente>(`/api/clientes/${id}`)).data;

export const obtenerClientes = async () =>
  (await query.get<Cliente[]>("/api/clientes")).data;

export const crearBonoFetch = async (data: unknown) =>
  query.post<Bonos>("/api/ordenes/bonos", data);
