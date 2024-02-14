import { RadioGroup } from "@nextui-org/react";
import { UseFormRegisterReturn } from "react-hook-form";

const InputRadio = ({
  label,
  opciones,
  error,
  errorMessage,
  register,
  disabled = false,
}: {
  label: string;
  opciones: string[];
  error: boolean;
  errorMessage: string | undefined;
  register: UseFormRegisterReturn;
  disabled?: boolean
}) => (
  <RadioGroup
    label={label}
    isInvalid={error}
    errorMessage={errorMessage}
    orientation="horizontal"
  >
    {opciones.map((opcion) => (
      <label key={opcion} htmlFor={opcion}>
        {opcion}
        <input id={opcion} type="radio" {...register} value={opcion} disabled={disabled} />
      </label>
    ))}
  </RadioGroup>
);

export default InputRadio;
