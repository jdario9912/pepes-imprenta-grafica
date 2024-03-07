"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import { Sellos } from "@/types/recursos/productos";
import SellosForm from "../../../../components/forms-ordenes/sellos";

const Form = ({ orden }: { orden: Sellos }) => {
  const methods = useForm<Sellos>({
    defaultValues: {
      fecha_entrega: formatearFechaFormEditar(orden.fecha_entrega),
      hora_entrega: formatearHoraFormEditar(orden.hora_entrega),
      muestra: orden.muestra,
      observaciones: orden.observaciones,
      metodo_pago: orden.metodo_pago,
      total: orden.total,
      entrega: orden.entrega,
      dibujo: orden.dibujo,
      tamano: orden.tamano,
      texto: orden.texto,
      tipo: orden.tipo,
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <SellosForm />
      </form>
    </FormProvider>
  );
};

export default Form;
