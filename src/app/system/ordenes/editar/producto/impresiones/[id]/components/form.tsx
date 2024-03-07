"use client";

import { Impresiones } from "@/types/recursos/productos";
import { FormProvider, useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import ImpresionesForm from "../../../../components/forms-ordenes/impresiones";

const Form = ({ orden }: { orden: Impresiones }) => {
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

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
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
