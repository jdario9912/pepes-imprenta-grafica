"use server";

import { crearBonoFetch } from "@/libs/client/axios";
import { BonosModel } from "@/models/mysql/productos/bonos";
import { validarBonosCrear } from "@/schemas/productos/bonos";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface State {
  errors?: {
    fecha_entrega?: string[];
  };
  message?: string | null;
}

export const crearBono = async (_: State, formData: FormData) => {
  const rawFormData = Object.fromEntries(formData.entries());

  const id_cliente = 3;
  const atendido_por = "Pepo";

  const dataNuevaOden = {
    ...rawFormData,
    id_cliente,
    atendido_por,
  };

  try {
    const res = await crearBonoFetch(dataNuevaOden);
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  // revalidatePath("/dashboar/invoices");
  // redirect("/system/pdf");
};
