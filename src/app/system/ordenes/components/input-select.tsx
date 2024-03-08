import { UseFormResetField, UseFormSetValue } from "react-hook-form";
import Select from "react-select";

const formatoOpcion = (opcion: string) => ({ value: opcion, label: opcion });

const InputSelect = ({
  opciones,
  error,
  defaultValue = "",
  name,
  resetField,
  setValue,
  isDisabled = false,
}: {
  opciones: string[];
  error: boolean;
  defaultValue?: string;
  name: string;
  resetField: UseFormResetField<any>;
  setValue: UseFormSetValue<any>;
  isDisabled?: boolean;
}) => (
  <Select
    options={opciones.map((opcion) => formatoOpcion(opcion))}
    classNames={{
      container: () => (error ? "border border-danger border-2" : ""),
    }}
    defaultValue={formatoOpcion(defaultValue)}
    onChange={(e) => {
      resetField(name);
      setValue(name, e?.value);
    }}
    isDisabled={isDisabled}
  />
);

export default InputSelect;
