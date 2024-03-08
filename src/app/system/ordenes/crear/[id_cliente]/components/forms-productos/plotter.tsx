import { plotterMaterial, plotterTerminacion } from "@/libs/listas";
import InputRadio from "../../../../components/input-radio";
import PlotterColor from "../plotter-color";
import FormConnectProductos from "../form-connect-productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import type { Plotter } from "@/types/recursos/productos";
import { Input } from "@nextui-org/react";
import AlertInvalidInput from "../alert-invalid-input";

const PlotterForm = () => {
  const { formState, setValue, watch } = useFormContext<Plotter>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Plotter> }) => (
        <>
          <Input
            label="Ubicación del archivo"
            {...register("ubicacion_archivo", {
              required: "La ubicación del archivo es requerida.",
            })}
            isInvalid={!!errors.ubicacion_archivo}
            errorMessage={errors.ubicacion_archivo?.message}
            variant={errors.ubicacion_archivo ? "bordered" : "flat"}
          />

          <Input
            label="Tamaño"
            {...register("tamano", {
              required: "El tamaño es requerido.",
            })}
            isInvalid={!!errors.tamano}
            errorMessage={errors.tamano?.message}
            variant={errors.tamano ? "bordered" : "flat"}
          />

          <InputRadio
            label="Material"
            register={register("material", {
              required: "El material es requerido.",
            })}
            error={!!errors.material}
            errorMessage={errors.material?.message}
            opciones={plotterMaterial}
          />

          <InputRadio
            label="Terminación"
            register={register("terminacion", {
              required: "La terminación es requerida.",
            })}
            error={!!errors.terminacion}
            errorMessage={errors.terminacion?.message}
            opciones={plotterTerminacion}
          />

          <PlotterColor
            setValue={setValue}
            error={watch().color === undefined}
            watch={watch}
          />
          {watch().color === undefined && (
            <AlertInvalidInput texto="El color es requerido." />
          )}
        </>
      )}
    </FormConnectProductos>
  );
};

export default PlotterForm;
