"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import { Tarjetas } from "@/types/recursos/productos";
import TarjetasForm from "../../../../components/forms-ordenes/tarjetas";
import { useRouter } from "next/navigation";
import { actualizarTarjetaFetch } from "@/libs/client/axios";

const Form = ({ orden }: { orden: Tarjetas }) => {
  const router = useRouter();

  const methods = useForm<Tarjetas>({
    defaultValues: {
      fecha_entrega: formatearFechaFormEditar(orden.fecha_entrega),
      hora_entrega: formatearHoraFormEditar(orden.hora_entrega),
      muestra: orden.muestra,
      observaciones: orden.observaciones,
      metodo_pago: orden.metodo_pago,
      total: orden.total,
      entrega: orden.entrega,
      ubicacion_archivo: orden.ubicacion_archivo,
      cantidad: orden.cantidad,
      papel: orden.papel,
      puntas_redondeadas: orden.puntas_redondeadas,
      terminacion: orden.terminacion,
      tipo: orden.tipo,
    },
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    const ordenActualizada = await actualizarTarjetaFetch(data, orden.id || 0);

    router.push(
      `/system/pdf/producto/${ordenActualizada.producto}/${ordenActualizada.id}`
    );
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <TarjetasForm />
      </form>
    </FormProvider>
  );
};

export default Form;
