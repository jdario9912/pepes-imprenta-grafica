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
import InputText from "../input-text";
import { useForm } from "react-hook-form";
import type { Tarjetas } from "@/types/recursos/productos";
import { Input, Textarea } from "@nextui-org/react";


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

        <InputText label="ubicación del archivo" name="ubicacion_archivo" />

        <InputSelect label="tipo" opciones={tarjetasTipo} name="tipo" />

        <InputSelect
          label="cantidad"
          opciones={tarjetasCantidad}
          name="cantidad"
        />

        <InputSelect label="papel" opciones={tarjetasPapel} name="papel" />

        <InputSelect
          label="terminación"
          opciones={tarjetasTerminacion}
          name="terminacion"
        />

        <InputRadio
          label="puntas redondeadas"
          opciones={siNo}
          name="puntas_redondeadas"
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

export default TarjetasForm;
