import {
  impresionesFaz,
  impresionesImpesion,
  impresionesOrientacion,
  impresionesTamanoPapel,
  metodosPago,
  siNo,
} from "@/libs/listas";
import { Input, Textarea } from "@nextui-org/react";
import InputRadio from "../input-radio";
import InputText from "../input-text";
import InputSelect from "../input-select";
import FormProducto from "../form-producto";
import { useForm } from "react-hook-form";
import type { Impresiones } from "@/types/recursos/productos";

const ImpresionesForm = () => {
  const { handleSubmit, register, formState } = useForm<Impresiones>();
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

        <InputText label="ubicación del archivo" name="ubicacion_archivo" />

        <InputRadio
          label="Impresión"
          register={register("impresion", {
            required: "El tipo de impresión es requerido.",
          })}
          error={errors.impresion ? true : false}
          errorMessage={errors.impresion?.message}
          opciones={impresionesImpesion}
        />

        <InputRadio
          label="Faz"
          register={register("faz", { required: "Faz es requerido." })}
          error={errors.faz ? true : false}
          errorMessage={errors.faz?.message}
          opciones={impresionesFaz}
        />

        <Input
          label="Tipo de papel"
          {...register("tipo_papel", {
            required: "El tipo de papel es obligatorio.",
          })}
          isInvalid={errors.tipo_papel ? true : false}
          errorMessage={errors.tipo_papel?.message}
          variant={errors.tipo_papel ? "bordered" : "flat"}
        />

        <InputSelect
          label="Tamaño del papel"
          error={errors.tamano_papel ? true : false}
          errorMessage={errors.tamano_papel?.message}
          opciones={impresionesTamanoPapel}
          register={register("tamano_papel", {
            required: "El tamaño del papel es requerido.",
          })}
        />

        <InputRadio
          label="Orientación"
          register={register("orientacion", {
            required: "La orientación es requerida.",
          })}
          error={errors.orientacion ? true : false}
          errorMessage={errors.orientacion?.message}
          opciones={impresionesOrientacion}
        />

        <InputRadio
          label="Anillado"
          register={register("anillado", {
            required: "Completar esta opción.",
          })}
          error={errors.anillado ? true : false}
          errorMessage={errors.anillado?.message}
          opciones={siNo}
        />

        <InputRadio
          label="Abrochado"
          register={register("abrochado", {
            required: "Completar esta opción.",
          })}
          error={errors.abrochado ? true : false}
          errorMessage={errors.abrochado?.message}
          opciones={siNo}
        />

        <InputRadio
          label="Corte"
          register={register("corte", {
            required: "Completar esta opción.",
          })}
          error={errors.corte ? true : false}
          errorMessage={errors.corte?.message}
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

export default ImpresionesForm;
