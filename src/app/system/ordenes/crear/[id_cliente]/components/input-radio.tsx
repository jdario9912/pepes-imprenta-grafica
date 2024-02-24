import { RadioGroup } from "@nextui-org/react";
import { UseFormRegisterReturn } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const InputRadio = ({
  label,
  opciones,
  error,
  errorMessage,
  register,
  disabled = false,
  valorInicial
}: {
  label: string;
  opciones: string[];
  error: boolean;
  errorMessage: string | undefined;
  register: UseFormRegisterReturn;
  disabled?: boolean;
  valorInicial?: string
}) => (
  <RadioGroup
    // label={label}
    isInvalid={error}
    errorMessage={errorMessage}
    orientation="horizontal"
  >
    <div className="flex items-center gap-4">
      <p>{label}</p>
      <div className="flex gap-2">
        {opciones.map((opcion) => {
          const id = uuidv4();

          return (
            <label
              key={id}
              htmlFor={id}
              className="flex gap-x-2 items-center p-2 rounded-sm hover:bg-blue-200 hover:underline hover:cursor-pointer"
            >
              {opcion}
              <input
                id={id}
                type="radio"
                {...register}
                value={opcion}
                disabled={disabled}
                className="hover:cursor-pointer"
                checked={opcion === valorInicial}
              />
            </label>
          );
        })}
      </div>
    </div>
  </RadioGroup>
);

export default InputRadio;
