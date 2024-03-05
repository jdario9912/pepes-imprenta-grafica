"use client";

import { UseFormRegisterReturn, Controller, Control, UseFormReset, UseFormSetValue } from "react-hook-form";
import Select from "react-select";

const InputSelect = ({
  error,
  // errorMessage,
  // register,
  opciones,
  name,
  resetField,
  setValue,
}: {
  opciones: string[];
  error: boolean;
  // disabled?: boolean;
  // valorInicial?: string;
  name: string;
  resetField: UseFormReset<any>
  setValue: UseFormSetValue<any>
}) => {
  return (
    <Select
      classNames={{
        container: () =>
          error
            ? "border border-2 border-danger rounded"
            : "border-grey-300",
      }}
      options={opciones.map((opcion) => ({
        value: opcion,
        label: opcion,
      }))}
      onChange={(e) => {
        resetField(name);
        setValue(name, e?.value || "");
      }}
    />
  );
};

export default InputSelect;
