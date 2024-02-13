import type { Productos } from "@/types/recursos/productos";
import { Input } from "@nextui-org/react";
import { FormState, UseFormRegister } from "react-hook-form";
import AlertInvalidInput from "./alert-invalid-input";

const InputDate = ({
  register,
  formState,
}: {
  register: UseFormRegister<Productos>;
  formState: FormState<Productos>;
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

export default InputDate;
