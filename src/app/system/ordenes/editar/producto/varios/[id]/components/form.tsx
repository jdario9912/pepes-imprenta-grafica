"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import { Varios } from "@/types/recursos/productos";
import VariosForm from "../../../../components/forms-ordenes/varios";

const Form = ({ orden }: { orden: Varios }) => {
  const methods = useForm<Varios>({
    defaultValues: {
      fecha_entrega: formatearFechaFormEditar(orden.fecha_entrega),
      hora_entrega: formatearHoraFormEditar(orden.hora_entrega),
      muestra: orden.muestra,
      observaciones: orden.observaciones,
      metodo_pago: orden.metodo_pago,
      total: orden.total,
      entrega: orden.entrega,
      detalle: orden.detalle,
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <VariosForm />
      </form>
    </FormProvider>
  );
};

export default Form;
