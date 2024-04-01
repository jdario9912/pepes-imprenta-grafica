import FormConnectProductos from "../form-connect-productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import type { Disenos } from "@/types/recursos/productos";
import { Input, Textarea } from "@nextui-org/react";

const DisenosForm = () => {
  const { formState } = useFormContext<Disenos>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Disenos> }) => (
        <>
          <Input
            label="Ubicación del archivo"
            {...register("ubicacion_archivo", {
              required: "La ubicación del archivo es requerida.",
            })}
            isInvalid={!!errors.ubicacion_archivo}
            errorMessage={errors.ubicacion_archivo?.message}
            variant={errors.ubicacion_archivo ? "bordered" : "flat"}
            color="primary"
          />

          <Textarea
            label="Detalles"
            {...register("detalles", {
              required: "Los detalles son requeridos.",
            })}
            isInvalid={!!errors.detalles}
            errorMessage={errors.detalles?.message}
            variant={errors.detalles ? "bordered" : "flat"}
            color="primary"
          />
        </>
      )}
    </FormConnectProductos>
  );
};

export default DisenosForm;
