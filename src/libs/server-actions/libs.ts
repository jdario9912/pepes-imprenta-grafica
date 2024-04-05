import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const revalidarClientesYDireccionar = (
  id?: number,
  producto?: string
) => {
  revalidatePath("/system/ordenes/pendientes");
  redirect(`/system/pdf/producto/${producto}/${id}`);
};
