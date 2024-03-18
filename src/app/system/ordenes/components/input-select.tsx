import { UseFormResetField, UseFormSetValue } from "react-hook-form";
import Select from "react-select";

const formatoOpcion = (opcion: string) => ({ value: opcion, label: opcion });

const InputSelect = ({
  label,
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
  label?: string;
}) => (
  <label className="flex items-center gap-x-2">
    <p className="first-letter:capitalize text-xs">{label}</p>
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
      styles={{
        container: (styles) => {
          styles.width = "100%";
          return styles;
        },
        menu: (styles) => {
          styles.zIndex = 15;
          return styles;
        },
      }}
    />
  </label>
);

export default InputSelect;
