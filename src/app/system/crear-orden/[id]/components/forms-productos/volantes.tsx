import {
  metodosPago,
  siNo,
  volantesCantidad,
  volantesImpresion,
  volantesTamano,
  volantesTipo,
} from "@/libs/listas";
import InputSelect from "../input-select";
import FormProducto from "../form-producto";
import { useForm } from "react-hook-form";
import type { Volantes } from "@/types/recursos/productos";
import { Input, Textarea } from "@nextui-org/react";
import InputRadio from "../input-radio";

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

        <InputSelect
          label="Tipo"
          error={errors.tipo ? true : false}
          errorMessage={errors.tipo?.message}
          opciones={volantesTipo}
          register={register("tipo", {
            required: "El tipo es requerido.",
          })}
        />

        <InputSelect
          label="Tamaño"
          error={errors.tamano ? true : false}
          errorMessage={errors.tamano?.message}
          opciones={volantesTamano}
          register={register("tamano", {
            required: "El tamaño es requerido.",
          })}
        />

        <InputSelect
          label="Cantidad"
          error={errors.cantidad ? true : false}
          errorMessage={errors.cantidad?.message}
          opciones={volantesCantidad}
          register={register("cantidad", {
            required: "La cantidad es requerida.",
          })}
        />

        <InputSelect
          label="Impresión"
          error={errors.impresion ? true : false}
          errorMessage={errors.impresion?.message}
          opciones={volantesImpresion}
          register={register("impresion", {
            required: "La impresión es requerida.",
          })}
        />

        <Input
          label="Ubicación del diseño"
          {...register("ubicacion_diseno", {
            required: "La ubicación del diseño es requerida.",
          })}
          isInvalid={errors.ubicacion_diseno ? true : false}
          errorMessage={errors.ubicacion_diseno?.message}
          variant={errors.ubicacion_diseno ? "bordered" : "flat"}
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

export default VolantesForm;
