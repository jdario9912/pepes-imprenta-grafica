"use client";

import { Disenos } from "@/types/recursos/productos";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import {
  formatearFechaFormEditar,
  formatearHoraFormEditar,
} from "../../../../libs/moment";
import InputRadio from "@/app/system/ordenes/crear/[id_cliente]/components/input-radio";
import { metodosPago, siNo } from "@/libs/listas";
import InputSelect from "@/app/system/ordenes/crear/[id_cliente]/components/input-select";

const Form = ({ orden }: { orden: Disenos }) => {
  const { register, watch, formState } = useForm<Disenos>({
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
  const { errors } = formState;

  return (
    <form>
      <Input
        type="date"
        {...register("fecha_entrega")}
        defaultValue={watch().fecha_entrega}
      />

      <Input
        type="time"
        {...register("hora_entrega")}
        defaultValue={watch().hora_entrega}
      />

      <InputRadio
        label="Muestra"
        error={errors.muestra ? true : false}
        errorMessage={errors.muestra?.message}
        opciones={siNo}
        register={register("muestra")}
        valorInicial={watch().muestra}
      />

      <Input
        label="Ubicacion del archivo"
        {...register("ubicacion_archivo")}
        defaultValue={watch().ubicacion_archivo}
      />

      <Textarea
        label="Detalles"
        {...register("detalles")}
        defaultValue={watch().detalles}
      />

      <Textarea
        label="Observaciones"
        {...register("observaciones")}
        defaultValue={watch().observaciones}
      />

      <Input
        type="num"
        label="Total"
        {...register("total")}
        defaultValue={watch().total.toString()}
      />

      <Input
        type="num"
        label="Entrega"
        {...register("entrega")}
        defaultValue={watch().entrega.toString()}
      />

      <InputSelect
        error={errors.metodo_pago ? true : false}
        errorMessage={errors.metodo_pago?.message}
        label="Metodo de pago"
        opciones={metodosPago}
        register={register("metodo_pago")}
        valorInicial={watch().metodo_pago}
      />

      <Button variant="flat" color="primary">
        guardar
      </Button>
    </form>
  );
};

export default Form;
