"use client";

import { Disenos } from "@/types/recursos/productos";
import { FormProvider, useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import DisenosForm from "../../../../components/forms-ordenes/disenos";
import { useRouter } from "next/navigation";
import { actualizarDisenoFetch } from "@/libs/server-actions/axios";

const Form = ({ orden }: { orden: Disenos }) => {
  const router = useRouter()
  const methods = useForm<Disenos>({
    defaultValues: {
      fecha_entrega: formatearFechaFormEditar(orden.fecha_entrega),
      hora_entrega: formatearHoraFormEditar(orden.hora_entrega),
      muestra: orden.muestra,
      observaciones: orden.observaciones,
      metodo_pago: orden.metodo_pago,
      total: orden.total,
      entrega: orden.entrega,
      ubicacion_archivo: orden.ubicacion_archivo,
      detalles: orden.detalles,
    },
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    const ordenActualizada = await actualizarDisenoFetch(data, orden.id || 0);

    const urlPdf = `/system/pdf/producto/disenos/${ordenActualizada.id}`
    
    router.push(urlPdf)
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <DisenosForm />
      </form>
    </FormProvider>
  );
};

export default Form;
