import {
  bonosLotes,
  bonosNumeradores,
  bonosTamano,
  bonosTipo,
} from "@/libs/listas";
import InputRadio from "../../../../components/input-radio";
import { Controller, UseFormRegister, useFormContext } from "react-hook-form";
import type { Bonos } from "@/types/recursos/productos";
import FormConnectProductos from "../form-connect-productos";
import { Input } from "@nextui-org/react";
import InputSelect from "@/app/system/ordenes/components/input-select";

const BonosForm = () => {
  const { formState, resetField, setValue, control } = useFormContext<Bonos>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Bonos> }) => (
        <>
          <Controller
            name="tipo"
            control={control}
            rules={{ required: "El tipo es requerido." }}
            render={() => (
              <InputRadio
                label="Tipo"
                register={register("tipo", {
                  required: "El tipo es requerido.",
                })}
                error={!!errors.tipo}
                errorMessage={errors.tipo?.message}
                opciones={bonosTipo}
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
                label="tamaño"
                error={!!errors.tamano}
                opciones={bonosTamano}
                name="tamano"
                resetField={resetField}
                setValue={setValue}
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
          />
        </>
      )}
    </FormConnectProductos>
  );
};

export default BonosForm;
