"use client";

import {
  bonosLotes,
  bonosNumeradores,
  bonosTamano,
  bonosTipo,
  metodosPago,
  siNo,
} from "@/libs/listas";
import InputRadio from "../input-radio";
import InputSelect from "../input-select";
import { useForm } from "react-hook-form";
import type { Bonos } from "@/types/recursos/productos";
import FormProducto from "../form-producto";
import { Input, Textarea } from "@nextui-org/react";

const BonosForm = () => {
  const { handleSubmit, register, formState } = useForm<Bonos>();
  const { errors } = formState;

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <FormProducto>
        <Input
          type="date"
          {...register("fecha_entrega", {
            required: "La fecha de entrega es obligatoria.",
          })}
          isInvalid={errors.fecha_entrega ? true : false}
          errorMessage={errors.fecha_entrega?.message}
          variant={errors.fecha_entrega ? "bordered" : "flat"}
        />

        <Input
          type="time"
          {...register("hora_entrega", {
            required: "la hora de entrega es requerida.",
          })}
          isInvalid={errors.hora_entrega ? true : false}
          errorMessage={errors.hora_entrega?.message}
          variant={errors.hora_entrega ? "bordered" : "flat"}
          defaultValue="19:00"
        />

        <InputRadio
          label="Muestra"
          register={register("muestra", { required: "Muestra es requerido." })}
          error={errors.muestra ? true : false}
          errorMessage={errors.muestra?.message}
          opciones={siNo}
        />

        <InputRadio
          label="Tipo"
          register={register("tipo", { required: "El tipo es requerido." })}
          error={errors.tipo ? true : false}
          errorMessage={errors.tipo?.message}
          opciones={bonosTipo}
        />

        <InputSelect
          label="Tamaño"
          error={errors.tamano ? true : false}
          errorMessage={errors.tamano?.message}
          opciones={bonosTamano}
          register={register("tamano", {
            required: "El tamaño es requerido.",
          })}
        />

        <InputSelect
          label="Numeradores"
          error={errors.numeradores ? true : false}
          errorMessage={errors.numeradores?.message}
          opciones={bonosNumeradores}
          register={register("numeradores", {
            required: "Los numeradores son requeridos.",
          })}
        />

        <InputSelect
          label="Lotes"
          error={errors.lotes ? true : false}
          errorMessage={errors.lotes?.message}
          opciones={bonosLotes}
          register={register("lotes", {
            required: "Los lotes son requeridos.",
          })}
        />

        <Input
          type="num"
          label="Desde número"
          {...register("desde_numero", {
            required: "El núnero inicial es requerido.",
          })}
          isInvalid={errors.desde_numero ? true : false}
          errorMessage={errors.desde_numero?.message}
          variant={errors.desde_numero ? "bordered" : "flat"}
        />

        <Input
          type="num"
          label="Cantidad"
          {...register("cantidad", {
            required: "El núnero inicial es requerido.",
          })}
          isInvalid={errors.cantidad ? true : false}
          errorMessage={errors.cantidad?.message}
          variant={errors.cantidad ? "bordered" : "flat"}
        />

        <Textarea label="Observaciones" {...register("observaciones")} />

        <Input
          type="num"
          label="Total"
          {...register("total", {
            required: "El total es requerido.",
          })}
          isInvalid={errors.total ? true : false}
          errorMessage={errors.total?.message}
          variant={errors.total ? "bordered" : "flat"}
        />

        <Input
          type="num"
          label="Entrega"
          {...register("entrega", {
            required: "El monto que entrega el cliente es requerido.",
          })}
          isInvalid={errors.entrega ? true : false}
          errorMessage={errors.entrega?.message}
          variant={errors.entrega ? "bordered" : "flat"}
        />

        <InputSelect
          error={errors.metodo_pago ? true : false}
          errorMessage={errors.metodo_pago?.message}
          label="Método de pago"
          opciones={metodosPago}
          register={register("metodo_pago", {
            required: "Falta el metodo de pago.",
          })}
        />
      </FormProducto>
    </form>
  );
};

export default BonosForm;
