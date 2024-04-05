import { Plotter } from "@/types/recursos/productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";
import { Input } from "@nextui-org/react";
import InputRadio from "../../../components/input-radio";
import { plotterMaterial, plotterTerminacion } from "@/libs/listas";
import PlotterColor from "../../../crear/[id_cliente]/components/plotter-color";
import AlertInvalidInput from "../../../crear/[id_cliente]/components/alert-invalid-input";
import { useState } from "react";
import { plotterColores } from "@/types/const";

const PlotterForm = () => {
  const { formState, watch, setValue } = useFormContext<Plotter>();
  const { errors } = formState;
  const [plotterColor] = useState(
    plotterColores.filter((color) => color.codigo == watch().color)[0].color
  );

  return (
    <FormConnectOrdenes>
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
            defaultValue={watch().ubicacion_archivo}
            color="primary"
          />

          <Input
            label="Tamaño"
            {...register("tamano", {
              required: "El tamaño es requerido.",
            })}
            isInvalid={!!errors.tamano}
            errorMessage={errors.tamano?.message}
            variant={errors.tamano ? "bordered" : "flat"}
            defaultValue={watch().tamano}
            color="primary"
          />

          <InputRadio
            label="Material"
            register={register("material", {
              required: "El material es requerido.",
            })}
            error={!!errors.material}
            errorMessage={errors.material?.message}
            opciones={plotterMaterial}
            valorInicial={watch().material}
          />

          <InputRadio
            label="Terminación"
            register={register("terminacion", {
              required: "La terminación es requerida.",
            })}
            error={!!errors.terminacion}
            errorMessage={errors.terminacion?.message}
            opciones={plotterTerminacion}
            valorInicial={watch().terminacion}
          />

          <PlotterColor
            setValue={setValue}
            error={watch().color === undefined}
            watch={watch}
            color={plotterColor}
          />
          {watch().color === undefined && (
            <AlertInvalidInput texto="El color es requerido." />
          )}
        </>
      )}
    </FormConnectOrdenes>
  );
};

export default PlotterForm;
