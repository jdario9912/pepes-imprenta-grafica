"use client";

import { Bonos } from "@/types/recursos/productos";
import { FormProvider, useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import BonosForm from "../../../../components/forms-ordenes/bonos";

const Form = ({ orden }: { orden: Bonos }) => {
  const methods = useForm<Bonos>({
    defaultValues: {
      fecha_entrega: formatearFechaFormEditar(orden.fecha_entrega),
      hora_entrega: formatearHoraFormEditar(orden.hora_entrega),
      muestra: orden.muestra,
      observaciones: orden.observaciones,
      metodo_pago: orden.metodo_pago,
      total: orden.total,
      entrega: orden.entrega,
      cantidad: orden.cantidad,
      desde_numero: orden.desde_numero,
      lotes: orden.lotes,
      numeradores: orden.numeradores,
      tamano: orden.tamano,
      tipo: orden.tipo,
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <BonosForm />
      </form>
    </FormProvider>
  );
};

export default Form;
