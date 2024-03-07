"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import { Loma } from "@/types/recursos/productos";
import LomaForm from "../../../../components/forms-ordenes/loma";

const Form = ({ orden }: { orden: Loma }) => {
  const methods = useForm<Loma>({
    defaultValues: {
      fecha_entrega: formatearFechaFormEditar(orden.fecha_entrega),
      hora_entrega: formatearHoraFormEditar(orden.hora_entrega),
      muestra: orden.muestra,
      observaciones: orden.observaciones,
      metodo_pago: orden.metodo_pago,
      total: orden.total,
      entrega: orden.entrega,
      ubicacion_archivo: orden.ubicacion_archivo,
      bolsillo: orden.bolsillo,
      corte: orden.corte,
      material: orden.material,
      ojales: orden.ojales,
      orientacion: orden.orientacion,
      portabaner: orden.portabaner,
      troquelado: orden.troquelado,
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <LomaForm />
      </form>
    </FormProvider>
  );
};

export default Form;
