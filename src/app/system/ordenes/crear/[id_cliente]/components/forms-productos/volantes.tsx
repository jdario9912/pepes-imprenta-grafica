import {
  volantesCantidad,
  volantesImpresion,
  volantesTamano,
  volantesTipo,
} from "@/libs/listas";
import FormConnectProductos from "../form-connect-productos";
import { Controller, UseFormRegister, useFormContext } from "react-hook-form";
import type { Volantes } from "@/types/recursos/productos";
import { Input } from "@nextui-org/react";
import InputSelect from "@/app/system/ordenes/components/input-select";

const VolantesForm = () => {
  const { formState, resetField, setValue, control } =
    useFormContext<Volantes>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Volantes> }) => (
        <>
          <Controller
            name="tipo"
            control={control}
            rules={{
              required: "El tipo es requerido.",
            }}
            render={() => (
              <InputSelect
                error={!!errors.tipo}
                opciones={volantesTipo}
                name="tipo"
                resetField={resetField}
                setValue={setValue}
              />
            )}
          />

          <Controller
            name="tamano"
            control={control}
            rules={{
              required: "El tamaño es requerido.",
            }}
            render={() => (
              <InputSelect
                error={!!errors.tamano}
                opciones={volantesTamano}
                name="tamano"
                resetField={resetField}
                setValue={setValue}
              />
            )}
          />

          <Controller
            name="cantidad"
            control={control}
            rules={{
              required: "La cantidad es requerida.",
            }}
            render={() => (
              <InputSelect
                error={!!errors.cantidad}
                opciones={volantesCantidad}
                name="cantidad"
                resetField={resetField}
                setValue={setValue}
              />
            )}
          />

          <Controller
            name="impresion"
            control={control}
            rules={{
              required: "La impresión es requerida.",
            }}
            render={() => (
              <InputSelect
                error={!!errors.impresion}
                opciones={volantesImpresion}
                name="impresion"
                resetField={resetField}
                setValue={setValue}
              />
            )}
          />

          <Input
            label="Ubicación del diseño"
            {...register("ubicacion_diseno", {
              required: "La ubicación del diseño es requerida.",
            })}
            isInvalid={!!errors.ubicacion_diseno}
            errorMessage={errors.ubicacion_diseno?.message}
            variant={errors.ubicacion_diseno ? "bordered" : "flat"}
          />
        </>
      )}
    </FormConnectProductos>
  );
};

export default VolantesForm;
