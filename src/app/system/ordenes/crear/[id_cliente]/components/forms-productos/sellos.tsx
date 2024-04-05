import { sellosTipo } from "@/libs/listas";
import { Controller, UseFormRegister, useFormContext } from "react-hook-form";
import type { Sellos } from "@/types/recursos/productos";
import { Textarea } from "@nextui-org/react";
import FormConnectProductos from "../form-connect-productos";
import InputSelect from "@/app/system/ordenes/components/input-select";

const SellosForm = () => {
  const { formState, resetField, setValue, control } = useFormContext<Sellos>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Sellos> }) => (
        <>
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
                opciones={sellosTipo}
                name="tipo"
                resetField={resetField}
                setValue={setValue}
              />
            )}
          />

          <Textarea
            label="Tamaño"
            {...register("tamano", {
              required: "El tamaño es requerido.",
            })}
            isInvalid={!!errors.tamano}
            errorMessage={errors.tamano?.message}
            variant={errors.tamano ? "bordered" : "flat"}
            color="primary"
          />

          <Textarea
            label="Texto"
            {...register("texto", {
              required: "El texto es requerido.",
            })}
            isInvalid={!!errors.texto}
            errorMessage={errors.texto?.message}
            variant={errors.texto ? "bordered" : "flat"}
            color="primary"
          />

          <Textarea
            label="Dibujo"
            {...register("dibujo", {
              required: "El dibujo es requerido.",
            })}
            isInvalid={!!errors.dibujo}
            errorMessage={errors.dibujo?.message}
            variant={errors.dibujo ? "bordered" : "flat"}
            color="primary"
          />
        </>
      )}
    </FormConnectProductos>
  );
};

export default SellosForm;
