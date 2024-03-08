import {
  lomaBolsillo,
  lomaMaterial,
  lomaOrientacion,
  siNo,
} from "@/libs/listas";
import InputRadio from "../../../../components/input-radio";
import FormConnectProductos from "../form-connect-productos";
import { Controller, UseFormRegister, useFormContext } from "react-hook-form";
import { Input } from "@nextui-org/react";
import type { Loma } from "@/types/recursos/productos";
import InputSelect from "@/app/system/ordenes/components/input-select";

const LomaForm = () => {
  const { formState, resetField, setValue, control } = useFormContext<Loma>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Loma> }) => (
        <>
          <Input
            label="Ubicación del archivo"
            {...register("ubicacion_archivo", {
              required: "La ubicación del archivo es requerido.",
            })}
            isInvalid={!!errors.ubicacion_archivo}
            errorMessage={errors.ubicacion_archivo?.message}
            variant={errors.ubicacion_archivo ? "bordered" : "flat"}
          />

          <Controller
            name="material"
            control={control}
            rules={{
              required: "El material es requerido.",
            }}
            render={() => (
              <InputSelect
                error={!!errors.material}
                opciones={lomaMaterial}
                name="material"
                resetField={resetField}
                setValue={setValue}
              />
            )}
          />

          <Controller
            name="bolsillo"
            control={control}
            rules={{
              required: "El bolsillo es requerido.",
            }}
            render={() => (
              <InputSelect
                error={!!errors.bolsillo}
                opciones={lomaBolsillo}
                name="bolsillo"
                resetField={resetField}
                setValue={setValue}
              />
            )}
          />

          <InputRadio
            label="Orientación"
            register={register("orientacion", {
              required: "La orientación es requerida.",
            })}
            error={!!errors.orientacion}
            errorMessage={errors.orientacion?.message}
            opciones={lomaOrientacion}
          />

          <InputRadio
            label="Corte"
            register={register("corte", { required: "Completar esta opción." })}
            error={!!errors.corte}
            errorMessage={errors.corte?.message}
            opciones={siNo}
          />

          <InputRadio
            label="Ojales"
            register={register("ojales", {
              required: "Completar esta opción.",
            })}
            error={!!errors.ojales}
            errorMessage={errors.ojales?.message}
            opciones={siNo}
          />

          <InputRadio
            label="Troquelado"
            register={register("troquelado", {
              required: "Completar esta opción.",
            })}
            error={!!errors.troquelado}
            errorMessage={errors.troquelado?.message}
            opciones={siNo}
          />

          <InputRadio
            label="Portabaner"
            register={register("portabaner", {
              required: "Muestra es requerido.",
            })}
            error={!!errors.portabaner}
            errorMessage={errors.portabaner?.message}
            opciones={siNo}
          />
        </>
      )}
    </FormConnectProductos>
  );
};

export default LomaForm;
