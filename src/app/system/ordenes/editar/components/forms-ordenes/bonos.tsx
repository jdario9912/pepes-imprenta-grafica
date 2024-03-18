import type { Bonos } from "@/types/recursos/productos";
import { Controller, UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";
import InputSelect from "../../../components/input-select";
import InputRadio from "../../../components/input-radio";
import {
  bonosLotes,
  bonosNumeradores,
  bonosTamano,
  bonosTipo,
} from "@/libs/listas";
import { Input } from "@nextui-org/react";

const BonosForm = () => {
  const { formState, watch, setValue, resetField, control } =
    useFormContext<Bonos>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Bonos> }) => (
        <>
          <InputRadio
            label="Tipo"
            register={register("tipo", { required: "El tipo es requerido." })}
            error={!!errors.tipo}
            errorMessage={errors.tipo?.message}
            opciones={bonosTipo}
            valorInicial={watch().tipo}
          />

          <Controller
            name="tamano"
            control={control}
            rules={{
              required: "El tamaño es requerido.",
            }}
            render={() => (
              <InputSelect
                label="tamaño"
                error={!!errors.tamano}
                opciones={bonosTamano}
                name="tamano"
                resetField={resetField}
                setValue={setValue}
                defaultValue={watch().tamano}
              />
            )}
          />

          <Controller
            name="numeradores"
            control={control}
            rules={{
              required: "El numerador es requerido.",
            }}
            render={() => (
              <InputSelect
                label="numeradores"
                error={!!errors.numeradores}
                opciones={bonosNumeradores}
                name="numeradores"
                resetField={resetField}
                setValue={setValue}
                defaultValue={watch().numeradores.toString()}
              />
            )}
          />

          <Controller
            name="lotes"
            control={control}
            rules={{
              required: "El tamaño es requerido.",
            }}
            render={() => (
              <InputSelect
                label="lotes"
                error={!!errors.lotes}
                opciones={bonosLotes}
                name="lotes"
                resetField={resetField}
                setValue={setValue}
                defaultValue={watch().lotes.toString()}
              />
            )}
          />

          <Input
            type="num"
            label="Desde número"
            {...register("desde_numero", {
              required: "El núnero inicial es requerido.",
            })}
            isInvalid={!!errors.desde_numero}
            errorMessage={errors.desde_numero?.message}
            variant={errors.desde_numero ? "bordered" : "flat"}
            defaultValue={watch().desde_numero.toString()}
          />

          <Input
            type="num"
            label="Cantidad"
            {...register("cantidad", {
              required: "El núnero inicial es requerido.",
            })}
            isInvalid={!!errors.cantidad}
            errorMessage={errors.cantidad?.message}
            variant={errors.cantidad ? "bordered" : "flat"}
            defaultValue={watch().cantidad.toString()}
          />
        </>
      )}
    </FormConnectOrdenes>
  );
};

export default BonosForm;
