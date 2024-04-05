import { estadoOrden, metodosPago } from "@/libs/listas";
import { z } from "zod";

export const ProductoSchema = z.object({
  id_cliente: z.coerce.number().int().positive(),
  atendido_por: z.string(),
  fecha_entrega: z.string(z.date()),
  hora_entrega: z.string().includes(":"),
  muestra: z.enum(["si", "no"]),
  observaciones: z.string(),
  total: z.coerce.number().positive(),
  entrega: z.coerce.number().positive(),
  estado: z.enum(["", ...estadoOrden]).default("pendiente"),
  metodo_pago: z.enum(["", ...metodosPago]),
});

