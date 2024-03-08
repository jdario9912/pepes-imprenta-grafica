import { Volantes } from "@/types/recursos/productos";
import { Controller, UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";
import InputSelect from "../../../components/input-select";
import { volantesCantidad, volantesImpresion, volantesTamano, volantesTipo } from "@/libs/listas";
import { Input } from "@nextui-org/react";

const VolantesForm = () => {
  const { formState, watch, control, setValue, resetField } = useFormContext<Volantes>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
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
                defaultValue={watch().tipo}
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
                defaultValue={watch().tamano}
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
                defaultValue={watch().cantidad.toString()}
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
                defaultValue={watch().impresion}
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
            defaultValue={watch().ubicacion_diseno}
          />
        </>
      )}
    </FormConnectOrdenes>
  );
};

export default VolantesForm;
