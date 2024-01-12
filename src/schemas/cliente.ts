import { z } from "zod";

const ClienteSchema = z.object({
  nombre: z.string(),
  telefono: z.string(),
  email: z.string().email(),
  observaciones: z.string().nullish().default(""),
});

export const validarClienteCrear = (object: any): Cliente =>
  ClienteSchema.parse(object) as Cliente;

export const validarClienteActualizar = (object: any): Cliente =>
  ClienteSchema.partial().parse(object) as Cliente;
