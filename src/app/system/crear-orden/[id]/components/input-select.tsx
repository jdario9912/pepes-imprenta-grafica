import { Select, SelectItem } from "@nextui-org/react";
import { UseFormRegisterReturn } from "react-hook-form";

const InputSelect = ({
  label,
  opciones,
  error,
  errorMessage,
  register,
}: {
  label: string;
  opciones: string[];
  error: boolean;
  errorMessage: string | undefined;
  register: UseFormRegisterReturn;
}) => (
  <Select
    label={label}
    {...register}
    isInvalid={error}
    errorMessage={errorMessage}
    variant={error ? "bordered" : "flat"}
  >
    {opciones.map((opcion) => (
      <SelectItem key={opcion}>{opcion}</SelectItem>
    ))}
  </Select>
);

export default InputSelect;
