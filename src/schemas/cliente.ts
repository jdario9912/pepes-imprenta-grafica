import { z } from "zod";

const ClienteSchema = z.object({
  nombre: z.string(),
  telefono: z.string(),
  email: z.string().nullish().default(""),
  observaciones: z.string().nullish().default(""),
});

export const validarClienteCrear = (object: unknown): Cliente =>
  ClienteSchema.parse(object) as Cliente;

export const validarClienteActualizar = (object: unknown): Cliente =>
  ClienteSchema.partial()
  .parse(object) as Cliente;
