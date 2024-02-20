import { Productos } from "@/types/recursos/productos";
import { Input } from "@nextui-org/react";
import { FormState, UseFormRegister } from "react-hook-form";
import AlertInvalidInput from "./alert-invalid-input";

const InputTime = ({
  register,
  formState,
}: {
  register: UseFormRegister<Productos>;
  formState: FormState<Productos>;
}) => {
  const { errors } = formState;

  return (
    <>
      <Input type="time" defaultValue="19:00" {...register} />
      {errors.hora_entrega && (
        <AlertInvalidInput texto={errors.hora_entrega.message} />
      )}
    </>
  );
};

export default InputTime;
