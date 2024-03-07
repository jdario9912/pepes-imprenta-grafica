"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import { Volantes } from "@/types/recursos/productos";
import VolantesForm from "../../../../components/forms-ordenes/volantes";

const Form = ({ orden }: { orden: Volantes }) => {
  const methods = useForm<Volantes>({
    defaultValues: {
      fecha_entrega: formatearFechaFormEditar(orden.fecha_entrega),
      hora_entrega: formatearHoraFormEditar(orden.hora_entrega),
      muestra: orden.muestra,
      observaciones: orden.observaciones,
      metodo_pago: orden.metodo_pago,
      total: orden.total,
      entrega: orden.entrega,
      cantidad: orden.cantidad,
      impresion: orden.impresion,
      tamano: orden.tamano,
      tipo: orden.tipo,
      ubicacion_diseno: orden.ubicacion_diseno,
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <VolantesForm />
      </form>
    </FormProvider>
  );
};

export default Form;
