import {
  metodosPago,
  volantesCantidad,
  volantesImpresion,
  volantesTamano,
  volantesTipo,
} from "@/libs/listas";
import InputSelect from "../input-select";
import InputText from "../input-text";
import FormProducto from "../form-producto";
import { useForm } from "react-hook-form";
import type { Volantes } from "@/types/recursos/productos";
import { Input, Textarea } from "@nextui-org/react";

const VolantesForm = () => {
  const { handleSubmit, register, formState } = useForm<Volantes>();
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

        <InputSelect label="tipo" opciones={volantesTipo} name="tipo" />

        <InputSelect label="tamaño" opciones={volantesTamano} name="tamano" />

        <InputSelect
          label="cantidad"
          opciones={volantesCantidad}
          name="cantidad"
        />

        <InputSelect
          label="impresión"
          opciones={volantesImpresion}
          name="impresion"
        />

        <InputText label="ubicación del diseño" name="ubicacion_diseno" />
        
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

export default VolantesForm;
