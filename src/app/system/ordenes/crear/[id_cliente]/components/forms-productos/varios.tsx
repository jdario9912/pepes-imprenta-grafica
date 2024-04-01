import type { Varios } from "@/types/recursos/productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import { Textarea } from "@nextui-org/react";
import FormConnectProductos from "../form-connect-productos";

const VariosForm = () => {
  const { formState } = useFormContext<Varios>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Varios> }) => (
        <>
          <Textarea
            label="detalle"
            {...register("detalle", {
              required: "El detalle es requerido.",
            })}
            isInvalid={!!errors.detalle}
            errorMessage={errors.detalle?.message}
            variant={errors.detalle ? "bordered" : "flat"}
            color="primary"
          />
        </>
      )}
    </FormConnectProductos>
  );
};

export default VariosForm;
