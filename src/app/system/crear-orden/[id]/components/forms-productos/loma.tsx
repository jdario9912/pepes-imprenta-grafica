import {
  lomaBolsillo,
  lomaMaterial,
  lomaOrientacion,
  metodosPago,
  siNo,
} from "@/libs/listas";
import InputSelect from "../input-select";
import InputRadio from "../input-radio";
import FormProducto from "../form-producto";
import { useForm } from "react-hook-form";
import { Input, Textarea } from "@nextui-org/react";
import type { Loma } from "@/types/recursos/productos";

const LomaForm = () => {
  const { handleSubmit, register, formState } = useForm<Loma>();
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

        <Input
          label="Ubicación del archivo"
          {...register("ubicacion_archivo", {
            required: "La ubicación del archivo es requerido.",
          })}
          isInvalid={errors.ubicacion_archivo ? true : false}
          errorMessage={errors.ubicacion_archivo?.message}
          variant={errors.ubicacion_archivo ? "bordered" : "flat"}
        />

        <InputSelect
          label="Material"
          error={errors.material ? true : false}
          errorMessage={errors.material?.message}
          opciones={lomaMaterial}
          register={register("material", {
            required: "El material es requerido.",
          })}
        />

        <InputSelect
          label="Bolsillo"
          error={errors.bolsillo ? true : false}
          errorMessage={errors.bolsillo?.message}
          opciones={lomaBolsillo}
          register={register("bolsillo", {
            required: "El bolsillo es requerido.",
          })}
        />

        <InputRadio
          label="Orientación"
          register={register("orientacion", { required: "La orientación es requerida." })}
          error={errors.orientacion ? true : false}
          errorMessage={errors.orientacion?.message}
          opciones={lomaOrientacion}
        />

        <InputRadio
          label="Corte"
          register={register("corte", { required: "Completar esta opción." })}
          error={errors.corte ? true : false}
          errorMessage={errors.corte?.message}
          opciones={siNo}
        />

        <InputRadio
          label="Ojales"
          register={register("ojales", { required: "Completar esta opción." })}
          error={errors.ojales ? true : false}
          errorMessage={errors.ojales?.message}
          opciones={siNo}
        />

        <InputRadio
          label="Troquelado"
          register={register("troquelado", { required: "Completar esta opción." })}
          error={errors.troquelado ? true : false}
          errorMessage={errors.troquelado?.message}
          opciones={siNo}
        />

        <InputRadio
          label="Portabaner"
          register={register("portabaner", { required: "Muestra es requerido." })}
          error={errors.portabaner ? true : false}
          errorMessage={errors.portabaner?.message}
          opciones={siNo}
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
          label="Entrega"
          type="num"
          {...register("entrega", {
            required: "El monto que entrega el cliente es requerido.",
          })}
          isInvalid={errors.entrega ? true : false}
          errorMessage={errors.entrega?.message}
          variant={errors.entrega ? "bordered" : "flat"}
        />

        <InputSelect
          label="Método de pago"
          error={errors.metodo_pago ? true : false}
          errorMessage={errors.metodo_pago?.message}
          opciones={metodosPago}
          register={register("metodo_pago", {
            required: "Falta el metodo de pago.",
          })}
        />
      </FormProducto>
    </form>
  );
};

export default LomaForm;
