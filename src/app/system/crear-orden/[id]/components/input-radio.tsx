import { RadioGroup } from "@nextui-org/react";
import { UseFormRegisterReturn } from "react-hook-form";

const InputRadio = ({
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
  <RadioGroup
    label={label}
    isInvalid={error}
    errorMessage={errorMessage}
    orientation="horizontal"
  >
    {opciones.map((opcion) => (
      <label key={opcion} htmlFor={opcion}>
        {opcion}
        <input id={opcion} type="radio" {...register} value={opcion} />
      </label>
    ))}
  </RadioGroup>
);

export default InputRadio;
