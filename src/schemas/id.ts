import type { Id } from "@/types/params";
import { z } from "zod";

const IdSchema = z.object({
  id: z.string().or(z.number().positive()),
});

export const validarId = (id: string | number): Id => IdSchema.parse({id}).id as Id;
