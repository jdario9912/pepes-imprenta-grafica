import { axiosBaseURL } from "@/config";
import axios from "axios";

const query = axios.create({
  baseURL: axiosBaseURL,
});

export const login = async (credenciales: FormLogin) =>
  await query.post<string>("/api/auth/login", credenciales);

export const crearCliente = async (nuevoCliente: FormNuevoCliente) =>
  await query.post<Cliente>("/api/clientes", nuevoCliente);

export const obtenerCliente = async (id: string) =>
  (await query.get<Cliente>(`/api/clientes/${id}`)).data;

export const obtenerClientes = async () =>
  (await query.get<Cliente[]>("/api/clientes")).data;
