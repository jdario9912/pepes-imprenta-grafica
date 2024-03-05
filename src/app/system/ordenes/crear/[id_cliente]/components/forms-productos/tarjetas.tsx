import {
  siNo,
  tarjetasCantidad,
  tarjetasPapel,
  tarjetasTerminacion,
  tarjetasTipo,
} from "@/libs/listas";
import InputSelect from "../input-select";
import InputRadio from "../input-radio";
import { UseFormRegister, useFormContext } from "react-hook-form";
import type { Tarjetas } from "@/types/recursos/productos";
import { Input } from "@nextui-org/react";
import FormConnectProductos from "../form-connect-productos";

const TarjetasForm = () => {
  const { formState } = useFormContext<Tarjetas>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Tarjetas> }) => (
        <>
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
            opciones={tarjetasTipo.map((opcion) => ({value: opcion, label: opcion}))}
            register={register("tipo", {
              required: "El tipo es obligatorio.",
            })}
          />

          <InputSelect
            label="Cantidad"
            error={errors.cantidad ? true : false}
            errorMessage={errors.cantidad?.message}
            opciones={tarjetasCantidad.map((opcion) => ({value: opcion, label: opcion}))}
            register={register("cantidad", {
              required: "La cantidad es obligatoria.",
            })}
          />

          <InputSelect
            label="Papel"
            error={errors.papel ? true : false}
            errorMessage={errors.papel?.message}
            opciones={tarjetasPapel.map((opcion) => ({value: opcion, label: opcion}))}
            register={register("papel", {
              required: "El papel es requerido.",
            })}
          />

          <InputSelect
            label="Terminación"
            error={errors.terminacion ? true : false}
            errorMessage={errors.terminacion?.message}
            opciones={tarjetasTerminacion.map((opcion) => ({value: opcion, label: opcion}))}
            register={register("terminacion", {
              required: "La terminación es requerida.",
            })}
          />

          <InputRadio
            label="Puntas redondeadas"
            register={register("puntas_redondeadas", {
              required: "Completar esta opción.",
            })}
            error={errors.puntas_redondeadas ? true : false}
            errorMessage={errors.puntas_redondeadas?.message}
            opciones={siNo}
          />
        </>
      )}
    </FormConnectProductos>
  );
};

export default TarjetasForm;
