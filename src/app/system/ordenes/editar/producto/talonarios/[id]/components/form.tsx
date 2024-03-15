"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import { Talonarios } from "@/types/recursos/productos";
import TalonariosForm from "../../../../components/forms-ordenes/talonarios";
import { useRouter } from "next/navigation";
import { actualizarTalonarioFetch } from "@/libs/client/axios";

const Form = ({ orden }: { orden: Talonarios }) => {
  const router = useRouter();

  const methods = useForm<Talonarios>({
    defaultValues: {
      fecha_entrega: formatearFechaFormEditar(orden.fecha_entrega),
      hora_entrega: formatearHoraFormEditar(orden.hora_entrega),
      muestra: orden.muestra,
      observaciones: orden.observaciones,
      metodo_pago: orden.metodo_pago,
      total: orden.total,
      entrega: orden.entrega,
      cantidad: orden.cantidad,
      color_duplicado: orden.color_duplicado,
      color_triplicado: orden.color_triplicado,
      modelo_anterior: orden.modelo_anterior,
      numero_desde: orden.numero_desde,
      puntillado_emblocado: orden.puntillado_emblocado,
      tamano: orden.tamano,
      tiene_logo: orden.tiene_logo,
      tipo: orden.tipo,
      triplicado: orden.triplicado,
      ubicacion_logo: orden.ubicacion_logo,
    },
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    const ordenActualizada = await actualizarTalonarioFetch(
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
        <TalonariosForm />
      </form>
    </FormProvider>
  );
};

export default Form;
