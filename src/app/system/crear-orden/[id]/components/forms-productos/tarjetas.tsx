import {
  metodosPago,
  siNo,
  tarjetasCantidad,
  tarjetasPapel,
  tarjetasTerminacion,
  tarjetasTipo,
} from "@/libs/listas";
import InputSelect from "../input-select";
import InputRadio from "../input-radio";
import { useForm } from "react-hook-form";
import type { Tarjetas } from "@/types/recursos/productos";
import { Input, Textarea } from "@nextui-org/react";
import FormProducto from "../form-producto";

const TarjetasForm = () => {
  const { handleSubmit, register, formState } = useForm<Tarjetas>();
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
            required: "La ubicación del archivo es obligatoria.",
          })}
          isInvalid={errors.ubicacion_archivo ? true : false}
          errorMessage={errors.ubicacion_archivo?.message}
          variant={errors.ubicacion_archivo ? "bordered" : "flat"}
        />

        <InputSelect
          label="Tipo"
          error={errors.tipo ? true : false}
          errorMessage={errors.tipo?.message}
          opciones={tarjetasTipo}
          register={register("tipo", {
            required: "El tipo es obligatorio.",
          })}
        />

        <InputSelect
          label="Cantidad"
          error={errors.cantidad ? true : false}
          errorMessage={errors.cantidad?.message}
          opciones={tarjetasCantidad}
          register={register("cantidad", {
            required: "La cantidad es obligatoria.",
          })}
        />

        <InputSelect
          label="Papel"
          error={errors.papel ? true : false}
          errorMessage={errors.papel?.message}
          opciones={tarjetasPapel}
          register={register("papel", {
            required: "El papel es requerido.",
          })}
        />

        <InputSelect
          label="Terminación"
          error={errors.terminacion ? true : false}
          errorMessage={errors.terminacion?.message}
          opciones={tarjetasTerminacion}
          register={register("terminacion", {
            required: "La terminación es requerida.",
          })}
        />

        <InputRadio
          label="Puntas redondeadas"
          register={register("puntas_redondeadas", { required: "Completar esta opción." })}
          error={errors.puntas_redondeadas ? true : false}
          errorMessage={errors.puntas_redondeadas?.message}
          opciones={siNo}
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

export default TarjetasForm;
