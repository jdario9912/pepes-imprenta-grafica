import { estado, metodosPago } from "@/libs/api/listas";
import { z } from "zod";

export const ProductoSchema = z.object({
  id_cliente: z.number().int().positive(),
  atendido_por: z.string(),
  fecha_entrega: z.date(),
  hora_entrega: z.string().includes(":"),
  muestra: z.enum(["si", "no"]),
  ubicacion_archivo: z.string(),
  observaciones: z.string(),
  total: z.number().positive(),
  entrega: z.number().positive(),
  estado: z.enum(["", ...estado]),
  metodo_pago: z.enum(["", ...metodosPago]),
});


