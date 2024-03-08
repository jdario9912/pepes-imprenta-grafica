import { Tarjetas } from "@/types/recursos/productos";
import { Controller, UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";
import { Input } from "@nextui-org/react";
import InputSelect from "../../../components/input-select";
import { siNo, tarjetasCantidad, tarjetasPapel, tarjetasTerminacion, tarjetasTipo } from "@/libs/listas";
import InputRadio from "../../../components/input-radio";

const TarjetasForm = () => {
  const { formState, watch, control, setValue, resetField } = useFormContext<Tarjetas>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
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
            defaultValue={watch().ubicacion_archivo}
          />

          <Controller
            name="tipo"
            control={control}
            rules={{
              required: "El tipo es requerido.",
            }}
            render={() => (
              <InputSelect
                error={!!errors.tipo}
                opciones={tarjetasTipo}
                name="tipo"
                resetField={resetField}
                setValue={setValue}
                defaultValue={watch().tipo}
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
                opciones={tarjetasCantidad}
                name="cantidad"
                resetField={resetField}
                setValue={setValue}
                defaultValue={watch().cantidad.toString()}
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
                error={!!errors.papel}
                opciones={tarjetasPapel}
                name="papel"
                resetField={resetField}
                setValue={setValue}
                defaultValue={watch().papel}
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
                error={!!errors.terminacion}
                opciones={tarjetasTerminacion}
                name="terminacion"
                resetField={resetField}
                setValue={setValue}
                defaultValue={watch().terminacion}
              />
            )}
          />

          <InputRadio
            label="Puntas redondeadas"
            register={register("puntas_redondeadas", {
              required: "Completar esta opción.",
            })}
            error={!!errors.puntas_redondeadas}
            errorMessage={errors.puntas_redondeadas?.message}
            opciones={siNo}
            valorInicial={watch().puntas_redondeadas}
          />
        </>
      )}
    </FormConnectOrdenes>
  );
}

export default TarjetasForm