import { Select, SelectItem } from "@nextui-org/react";
import { UseFormRegisterReturn } from "react-hook-form";

const InputSelect = ({
  label,
  opciones,
  error,
  errorMessage,
  register,
  disabled = false,
  valorInicial = "",
}: {
  label: string;
  opciones: string[];
  error: boolean;
  errorMessage: string | undefined;
  register: UseFormRegisterReturn;
  disabled?: boolean;
  valorInicial?: string;
}) => (
  <Select
    label={label}
    {...register}
    isInvalid={error}
    errorMessage={errorMessage}
    variant={error ? "bordered" : "flat"}
    isDisabled={disabled}
    selectedKeys={[valorInicial]}
  >
    {opciones.map((opcion) => (
      <SelectItem key={opcion}>{opcion}</SelectItem>
    ))}
  </Select>
);

export default InputSelect;
