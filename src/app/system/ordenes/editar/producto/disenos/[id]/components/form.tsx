"use client";

import { Disenos } from "@/types/recursos/productos";
import { Button, Input, Textarea } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import InputRadio from "@/app/system/ordenes/crear/[id_cliente]/components/input-radio";
import { metodosPago, siNo } from "@/libs/listas";
import InputSelect from "@/app/system/ordenes/crear/[id_cliente]/components/input-select";
import DisenosForm from "../../../../components/forms-ordenes/disenos";

const Form = ({ orden }: { orden: Disenos }) => {
  const methods = useForm<Disenos>({
    defaultValues: {
      fecha_entrega: formatearFechaFormEditar(orden.fecha_entrega),
      hora_entrega: formatearHoraFormEditar(orden.hora_entrega),
      muestra: orden.muestra,
      observaciones: orden.observaciones,
      metodo_pago: orden.metodo_pago,
      total: orden.total,
      entrega: orden.entrega,
      ubicacion_archivo: orden.ubicacion_archivo,
      detalles: orden.detalles,
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <DisenosForm />
      </form>
    </FormProvider>
  );
};

export default Form;
