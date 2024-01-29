import z from "zod";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const validarLogin = (
  object: unknown
): { email: string; password: string } => LoginSchema.parse(object);
