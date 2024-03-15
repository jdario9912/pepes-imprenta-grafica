"use client";

import { Impresiones } from "@/types/recursos/productos";
import { FormProvider, useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import ImpresionesForm from "../../../../components/forms-ordenes/impresiones";
import { useRouter } from "next/navigation";
import { actualizarImpresionFetch } from "@/libs/client/axios";

const Form = ({ orden }: { orden: Impresiones }) => {
  const router = useRouter();

  const methods = useForm<Impresiones>({
    defaultValues: {
      fecha_entrega: formatearFechaFormEditar(orden.fecha_entrega),
      hora_entrega: formatearHoraFormEditar(orden.hora_entrega),
      muestra: orden.muestra,
      observaciones: orden.observaciones,
      metodo_pago: orden.metodo_pago,
      total: orden.total,
      entrega: orden.entrega,
      ubicacion_archivo: orden.ubicacion_archivo,
      abrochado: orden.abrochado,
      anillado: orden.anillado,
      corte: orden.corte,
      faz: orden.faz,
      impresion: orden.impresion,
      orientacion: orden.orientacion,
      tamano_papel: orden.tamano_papel,
      tipo_papel: orden.tipo_papel,
    },
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    const ordenActualizada = await actualizarImpresionFetch(
      data,
      orden.id || 0
    );

    router.push(
      `/system/pdf/producto/${ordenActualizada.producto}/${ordenActualizada.id}`
    );
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <ImpresionesForm />
      </form>
    </FormProvider>
  );
};

export default Form;
