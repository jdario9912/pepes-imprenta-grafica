"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import { Plotter } from "@/types/recursos/productos";
import PlotterForm from "../../../../components/forms-ordenes/plotter";

const Form = ({ orden }: { orden: Plotter }) => {
  const methods = useForm<Plotter>({
    defaultValues: {
      fecha_entrega: formatearFechaFormEditar(orden.fecha_entrega),
      hora_entrega: formatearHoraFormEditar(orden.hora_entrega),
      muestra: orden.muestra,
      observaciones: orden.observaciones,
      metodo_pago: orden.metodo_pago,
      total: orden.total,
      entrega: orden.entrega,
      ubicacion_archivo: orden.ubicacion_archivo,
      color: orden.color,
      material: orden.material,
      tamano: orden.tamano,
      terminacion: orden.terminacion,
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <PlotterForm />
      </form>
    </FormProvider>
  );
};

export default Form;
