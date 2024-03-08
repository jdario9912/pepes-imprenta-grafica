import { Varios } from "@/types/recursos/productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";
import { Textarea } from "@nextui-org/react";

const VariosForm = () => {
  const { formState, watch } = useFormContext<Varios>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
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
            defaultValue={watch().detalle}
          />
        </>
      )}
    </FormConnectOrdenes>
  );
}

export default VariosForm