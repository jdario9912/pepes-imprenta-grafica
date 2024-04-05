import { UseFormResetField, UseFormSetValue } from "react-hook-form";
import Select, { MenuPlacement } from "react-select";
import { formatoOpcion } from "../../libs/formate-opciones-input-select";
import WraperInputLabel from "./wraper-input-label";

type Props = {
  opciones: string[];
  error: boolean;
  defaultValue?: string;
  name: string;
  resetField: UseFormResetField<any>;
  setValue: UseFormSetValue<any>;
  isDisabled?: boolean;
  label?: string;
  menuPlacement?: MenuPlacement;
};

const InputSelect = ({
  label,
  opciones,
  error,
  defaultValue = "",
  name,
  resetField,
  setValue,
  isDisabled = false,
  menuPlacement = "auto",
}: Props) => (
  <WraperInputLabel label={label!}>
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
          styles.color = "#1d4ed8";
          return styles;
        },
      }}
      menuPlacement={menuPlacement}
    />
  </WraperInputLabel>
);

export default InputSelect;
