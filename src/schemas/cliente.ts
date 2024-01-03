import { z } from "zod";

const ClienteCrearSchema = z.object({
  nombre: z.string(),
  telefono: z.string(),
  email: z.string().email().optional(),
  observaciones: z.string().nullish().default(""),
});

export const validarClienteCrear = (object: any): Cliente =>
  ClienteCrearSchema.parse(object) as Cliente;

const ClienteActualizarSchema = z.object({
  nombre: z.string().optional(),
  telefono: z.string().optional(),
  email: z.string().email().optional(),
  observaciones: z.string().optional(),
});

export const validarClienteActualizar = (object: any): Cliente =>
  ClienteActualizarSchema.parse(object) as Cliente;
