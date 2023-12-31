import { z } from "zod";

const ClienteSchema = z.object({
  nombre: z.string(),
  telefono: z.string(),
  email: z.string().email().optional(),
  observaciones: z.string().nullish().default(""),
});

export const validarCliente = (object: any): Cliente =>
  ClienteSchema.parse(object) as Cliente;

const ClienteActualizarSchema = z.object({
  nombre: z.string().optional(),
  telefono: z.string().optional(),
  email: z.string().email().optional(),
  observaciones: z.string().optional(),
});

export const validarClienteActualizar = (object: any): Cliente =>
  ClienteActualizarSchema.parse(object) as Cliente;
