import type { Remeras } from "@/types/recursos/productos";
import FormProducto from "../form-producto";
import { useForm } from "react-hook-form";
import { metodosPago, siNo } from "@/libs/listas";
import InputSelect from "../input-select";
import { Input, Textarea } from "@nextui-org/react";
import InputRadio from "../input-radio";

const RemerasForm = () => {
  const { handleSubmit, register, formState } = useForm<Remeras>();
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
          label="ubicación del archivo"
          {...register("ubicacion_archivo", {
            required: "La ubicación del archivo es requerida.",
          })}
          isInvalid={errors.ubicacion_archivo ? true : false}
          errorMessage={errors.ubicacion_archivo?.message}
          variant={errors.ubicacion_archivo ? "bordered" : "flat"}
        />

        <Input
          label="talles"
          {...register("talles", {
            required: "Los talles son requeridos.",
          })}
          isInvalid={errors.talles ? true : false}
          errorMessage={errors.talles?.message}
          variant={errors.talles ? "bordered" : "flat"}
        />

        <Input
          label="color"
          {...register("color", {
            required: "El color es requerido.",
          })}
          isInvalid={errors.color ? true : false}
          errorMessage={errors.color?.message}
          variant={errors.color ? "bordered" : "flat"}
        />

        <Input
          label="Estampa pecho"
          {...register("estampa_pecho", {
            required: "La estampa del pecho es requerida.",
          })}
          isInvalid={errors.estampa_pecho ? true : false}
          errorMessage={errors.estampa_pecho?.message}
          variant={errors.estampa_pecho ? "bordered" : "flat"}
        />

        <Input
          label="Estampa espalda"
          {...register("estampa_espalda", {
            required: "La estampa de espalda es requerida es requerida.",
          })}
          isInvalid={errors.estampa_espalda ? true : false}
          errorMessage={errors.estampa_espalda?.message}
          variant={errors.estampa_espalda ? "bordered" : "flat"}
        />

        <Input
          label="Color estampa"
          {...register("color_estampa", {
            required: "El color de la estampa es requerida.",
          })}
          isInvalid={errors.color_estampa ? true : false}
          errorMessage={errors.color_estampa?.message}
          variant={errors.color_estampa ? "bordered" : "flat"}
        />

        <Input
          label="cantidad"
          type="num"
          {...register("cantidad", {
            required: "La cantidad es requerida.",
          })}
          isInvalid={errors.cantidad ? true : false}
          errorMessage={errors.cantidad?.message}
          variant={errors.cantidad ? "bordered" : "flat"}
        />

        <Textarea label="Observaciones" {...register("observaciones")} />

        <Input
          label="Total"
          type="num"
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

export default RemerasForm;
