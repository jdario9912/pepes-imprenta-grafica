"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import { Remeras } from "@/types/recursos/productos";
import RemerasForm from "../../../../components/forms-ordenes/remeras";

const Form = ({ orden }: { orden: Remeras }) => {
  const methods = useForm<Remeras>({
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
      color: orden.color,
      color_estampa: orden.color_estampa,
      estampa_espalda: orden.estampa_espalda,
      estampa_pecho: orden.estampa_pecho,
      talles: orden.talles,
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <RemerasForm />
      </form>
    </FormProvider>
  );
};

export default Form;
