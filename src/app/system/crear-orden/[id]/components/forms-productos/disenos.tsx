import FormProducto from "../form-producto";
import { useForm } from "react-hook-form";
import type { Disenos } from "@/types/recursos/productos";
import { Input, Textarea } from "@nextui-org/react";
import InputRadio from "../input-radio";
import { metodosPago, siNo } from "@/libs/listas";
import InputSelect from "../input-select";

const DisenosForm = () => {
  const { handleSubmit, register, formState } = useForm<Disenos>();
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
          register={register("muestra", { required: "Muestra es requerido." })}
          error={errors.muestra ? true : false}
          errorMessage={errors.muestra?.message}
          label="Muestra"
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

        <Textarea
          label="Detalles"
          {...register("detalles", {
            required: "Los detalles son requeridos.",
          })}
          isInvalid={errors.detalles ? true : false}
          errorMessage={errors.detalles?.message}
          variant={errors.detalles ? "bordered" : "flat"}
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

export default DisenosForm;
