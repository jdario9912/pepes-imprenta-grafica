import { Input } from "@nextui-org/react";
import { FormState, UseFormRegister } from "react-hook-form";
import AlertInvalidInput from "./alert-invalid-input";
import type { Producto } from "@/types/recursos/productos";

const InputDate = ({
  register,
  formState,
}: {
  register: UseFormRegister<Producto>;
  formState: FormState<Producto>;
}) => {
  const { errors } = formState;

  return (
    <>
      <Input type="date" {...register} required />
      {errors.fecha_entrega && (
        <AlertInvalidInput texto={errors.fecha_entrega.message} />
      )}
    </>
  );
};

// revisar la ruta ordenes en el navegador o volver la carpeta "crear orden" a "system"

export default InputDate;
