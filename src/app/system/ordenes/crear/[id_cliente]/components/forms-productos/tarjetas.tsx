import {
  siNo,
  tarjetasCantidad,
  tarjetasPapel,
  tarjetasTerminacion,
  tarjetasTipo,
} from "@/libs/listas";
import InputRadio from "../../../../components/input-radio";
import { Controller, UseFormRegister, useFormContext } from "react-hook-form";
import type { Tarjetas } from "@/types/recursos/productos";
import { Input } from "@nextui-org/react";
import FormConnectProductos from "../form-connect-productos";
import InputSelect from "@/app/system/ordenes/components/input-select";

const TarjetasForm = () => {
  const { formState, resetField, setValue, control } =
    useFormContext<Tarjetas>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Tarjetas> }) => (
        <>
          <Input
            label="Ubicación del archivo"
            {...register("ubicacion_archivo", {
              required: "La ubicación del archivo es requerida.",
            })}
            isInvalid={!!errors.ubicacion_archivo}
            errorMessage={errors.ubicacion_archivo?.message}
            variant={errors.ubicacion_archivo ? "bordered" : "flat"}
          />

          <Controller
            name="tipo"
            control={control}
            rules={{
              required: "El tipo es requerido.",
            }}
            render={() => (
              <InputSelect
                label="tipo"
                error={!!errors.tipo}
                opciones={tarjetasTipo}
                name="tipo"
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
                label="cantidad"
                error={!!errors.cantidad}
                opciones={tarjetasCantidad}
                name="cantidad"
                resetField={resetField}
                setValue={setValue}
              />
            )}
          />

          <Controller
            name="papel"
            control={control}
            rules={{
              required: "El papel es requerido.",
            }}
            render={() => (
              <InputSelect
                label="papel"
                error={!!errors.papel}
                opciones={tarjetasPapel}
                name="papel"
                resetField={resetField}
                setValue={setValue}
              />
            )}
          />

          <Controller
            name="terminacion"
            control={control}
            rules={{
              required: "La terminaciòn es requerida.",
            }}
            render={() => (
              <InputSelect
                label="terminación"
                error={!!errors.terminacion}
                opciones={tarjetasTerminacion}
                name="terminacion"
                resetField={resetField}
                setValue={setValue}
              />
            )}
          />

          <Controller
            name="puntas_redondeadas"
            control={control}
            rules={{
              required: "Completar esta opción.",
            }}
            render={() => (
              <InputRadio
                label="Puntas redondeadas"
                register={register("puntas_redondeadas")}
                error={!!errors.puntas_redondeadas}
                errorMessage={errors.puntas_redondeadas?.message}
                opciones={siNo}
              />
            )}
          />
        </>
      )}
    </FormConnectProductos>
  );
};

export default TarjetasForm;
