import { metodosPago, sellosTipo, siNo } from "@/libs/listas";
import InputSelect from "../input-select";
import { useForm } from "react-hook-form";
import type { Sellos } from "@/types/recursos/productos";
import { Input, Textarea } from "@nextui-org/react";
import FormProducto from "../form-producto";
import InputRadio from "../input-radio";

const SellosForm = () => {
  const { handleSubmit, register, formState } = useForm<Sellos>();
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

        <InputSelect
          label="Tipo"
          error={errors.tipo ? true : false}
          errorMessage={errors.tipo?.message}
          opciones={sellosTipo}
          register={register("tipo", {
            required: "El tipo es requerido.",
          })}
        />

        <Textarea
          label="Tamaño"
          {...register("tamano", {
            required: "El tamaño es requerido.",
          })}
          isInvalid={errors.tamano ? true : false}
          errorMessage={errors.tamano?.message}
          variant={errors.tamano ? "bordered" : "flat"}
        />

        <Textarea
          label="Texto"
          {...register("texto", {
            required: "El texto es requerido.",
          })}
          isInvalid={errors.texto ? true : false}
          errorMessage={errors.texto?.message}
          variant={errors.texto ? "bordered" : "flat"}
        />

        <Textarea
          label="Dibujo"
          {...register("dibujo", {
            required: "El dibujo es requerido.",
          })}
          isInvalid={errors.dibujo ? true : false}
          errorMessage={errors.dibujo?.message}
          variant={errors.dibujo ? "bordered" : "flat"}
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

export default SellosForm;
