import {
  volantesCantidad,
  volantesImpresion,
  volantesTamano,
  volantesTipo,
} from "@/libs/listas";
import InputSelect from "../input-select";
import FormConnectProductos from "../form-connect-productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import type { Volantes } from "@/types/recursos/productos";
import { Input } from "@nextui-org/react";

const VolantesForm = () => {
  const { formState } = useFormContext<Volantes>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Volantes> }) => (
        <>
          <InputSelect
            label="Tipo"
            error={errors.tipo ? true : false}
            errorMessage={errors.tipo?.message}
            opciones={volantesTipo.map((opcion) => ({value: opcion, label: opcion}))}
            register={register("tipo", {
              required: "El tipo es requerido.",
            })}
          />

          <InputSelect
            label="Tamaño"
            error={errors.tamano ? true : false}
            errorMessage={errors.tamano?.message}
            opciones={volantesTamano.map((opcion) => ({value: opcion, label: opcion}))}
            register={register("tamano", {
              required: "El tamaño es requerido.",
            })}
          />

          <InputSelect
            label="Cantidad"
            error={errors.cantidad ? true : false}
            errorMessage={errors.cantidad?.message}
            opciones={volantesCantidad.map((opcion) => ({value: opcion, label: opcion}))}
            register={register("cantidad", {
              required: "La cantidad es requerida.",
            })}
          />

          <InputSelect
            label="Impresión"
            error={errors.impresion ? true : false}
            errorMessage={errors.impresion?.message}
            opciones={volantesImpresion.map((opcion) => ({value: opcion, label: opcion}))}
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
        </>
      )}
    </FormConnectProductos>
  );
};

export default VolantesForm;
