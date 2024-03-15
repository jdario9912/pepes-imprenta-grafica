"use client";

import { Bonos } from "@/types/recursos/productos";
import { FormProvider, useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import BonosForm from "../../../../components/forms-ordenes/bonos";
import { actualizarBonoFetch } from "@/libs/client/axios";
import { useRouter } from "next/navigation";

const Form = ({ orden }: { orden: Bonos }) => {
  const router = useRouter();
  const methods = useForm<Bonos>({
    defaultValues: {
      fecha_entrega: formatearFechaFormEditar(orden.fecha_entrega),
      hora_entrega: formatearHoraFormEditar(orden.hora_entrega),
      muestra: orden.muestra,
      observaciones: orden.observaciones,
      metodo_pago: orden.metodo_pago,
      total: orden.total,
      entrega: orden.entrega,
      cantidad: orden.cantidad,
      desde_numero: orden.desde_numero,
      lotes: orden.lotes,
      numeradores: orden.numeradores,
      tamano: orden.tamano,
      tipo: orden.tipo,
    },
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    const ordenActualizada = await actualizarBonoFetch(data, orden.id || 0);

    router.push(
      `/system/pdf/producto/${ordenActualizada.producto}/${ordenActualizada.id}`
    );
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <BonosForm />
      </form>
    </FormProvider>
  );
};

export default Form;
