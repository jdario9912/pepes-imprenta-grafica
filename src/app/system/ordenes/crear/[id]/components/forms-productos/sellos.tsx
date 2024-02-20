import { sellosTipo } from "@/libs/listas";
import InputSelect from "../input-select";
import { UseFormRegister, useFormContext } from "react-hook-form";
import type { Sellos } from "@/types/recursos/productos";
import { Textarea } from "@nextui-org/react";
import FormConnectProductos from "../form-connect-productos";

const SellosForm = () => {
  const { formState } = useFormContext<Sellos>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Sellos> }) => (
        <>
          <InputSelect
            label="Tipo"
            error={errors.tipo ? true : false}
            errorMessage={errors.tipo?.message}
            opciones={sellosTipo}
            register={register("tipo", {
              required: "El tipo es requerido.",
            })}
          />

          <Textarea
            label="Tamaño"
            {...register("tamano", {
              required: "El tamaño es requerido.",
            })}
            isInvalid={errors.tamano ? true : false}
            errorMessage={errors.tamano?.message}
            variant={errors.tamano ? "bordered" : "flat"}
          />

          <Textarea
            label="Texto"
            {...register("texto", {
              required: "El texto es requerido.",
            })}
            isInvalid={errors.texto ? true : false}
            errorMessage={errors.texto?.message}
            variant={errors.texto ? "bordered" : "flat"}
          />

          <Textarea
            label="Dibujo"
            {...register("dibujo", {
              required: "El dibujo es requerido.",
            })}
            isInvalid={errors.dibujo ? true : false}
            errorMessage={errors.dibujo?.message}
            variant={errors.dibujo ? "bordered" : "flat"}
          />
        </>
      )}
    </FormConnectProductos>
  );
};

export default SellosForm;
