import { Sellos } from "@/types/recursos/productos";
import { Controller, UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";
import InputSelect from "../../../components/input-select";
import { sellosTipo } from "@/libs/listas";
import { Textarea } from "@nextui-org/react";

const SellosForm = () => {
  const { formState, watch, control, setValue, resetField } =
    useFormContext<Sellos>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
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
                defaultValue={watch().tipo}
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
            defaultValue={watch().tamano}
          />

          <Textarea
            label="Texto"
            {...register("texto", {
              required: "El texto es requerido.",
            })}
            isInvalid={!!errors.texto}
            errorMessage={errors.texto?.message}
            variant={errors.texto ? "bordered" : "flat"}
            defaultValue={watch().texto}
          />

          <Textarea
            label="Dibujo"
            {...register("dibujo", {
              required: "El dibujo es requerido.",
            })}
            isInvalid={!!errors.dibujo}
            errorMessage={errors.dibujo?.message}
            variant={errors.dibujo ? "bordered" : "flat"}
            defaultValue={watch().dibujo}
          />
        </>
      )}
    </FormConnectOrdenes>
  );
};

export default SellosForm;
