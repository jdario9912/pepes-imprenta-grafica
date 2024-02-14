import {
  metodosPago,
  plotterMaterial,
  plotterTerminacion,
  siNo,
} from "@/libs/listas";
import InputRadio from "../input-radio";
import InputText from "../input-text";
import PlotterColor from "../plotter-color";
import FormProducto from "../form-producto";
import { useForm } from "react-hook-form";
import type { Plotter } from "@/types/recursos/productos";
import InputSelect from "../input-select";
import { Input, Textarea } from "@nextui-org/react";

const PlotterForm = () => {
  const { handleSubmit, register, formState, setValue } = useForm<Plotter>();
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
            required: "La ubicación del archivo es requerida.",
          })}
          isInvalid={errors.ubicacion_archivo ? true : false}
          errorMessage={errors.ubicacion_archivo?.message}
          variant={errors.ubicacion_archivo ? "bordered" : "flat"}
        />

        <Input
          label="Tamaño"
          {...register("tamano", {
            required: "El tamaño es requerido.",
          })}
          isInvalid={errors.tamano ? true : false}
          errorMessage={errors.tamano?.message}
          variant={errors.tamano ? "bordered" : "flat"}
        />

        <InputRadio
          label="Material"
          register={register("material", {
            required: "El material es requerido.",
          })}
          error={errors.material ? true : false}
          errorMessage={errors.material?.message}
          opciones={plotterMaterial}
        />

        <InputRadio
          label="Terminación"
          register={register("terminacion", {
            required: "La terminación es requerida.",
          })}
          error={errors.terminacion ? true : false}
          errorMessage={errors.terminacion?.message}
          opciones={plotterTerminacion}
        />

        <PlotterColor setValue={setValue} />

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

export default PlotterForm;
