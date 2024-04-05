import { Loma } from "@/types/recursos/productos";
import { Controller, UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";
import { Input } from "@nextui-org/react";
import InputSelect from "../../../components/input-select";
import {
  lomaBolsillo,
  lomaMaterial,
  lomaOrientacion,
  siNo,
} from "@/libs/listas";
import InputRadio from "../../../components/input-radio";

const LomaForm = () => {
  const { formState, watch, setValue, resetField, control } =
    useFormContext<Loma>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
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
            defaultValue={watch().ubicacion_archivo}
            color="primary"
          />

          <Controller
            name="material"
            control={control}
            rules={{
              required: "El material es requerido.",
            }}
            render={() => (
              <InputSelect
                label="material"
                error={!!errors.material}
                opciones={lomaMaterial}
                name="material"
                resetField={resetField}
                setValue={setValue}
                defaultValue={watch().material}
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
                label="bolsillo"
                error={!!errors.bolsillo}
                opciones={lomaBolsillo}
                name="bolsillo"
                resetField={resetField}
                setValue={setValue}
                defaultValue={watch().bolsillo}
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
            valorInicial={watch().orientacion}
          />

          <InputRadio
            label="Corte"
            register={register("corte", { required: "Completar esta opción." })}
            error={!!errors.corte}
            errorMessage={errors.corte?.message}
            opciones={siNo}
            valorInicial={watch().corte}
          />

          <InputRadio
            label="Ojales"
            register={register("ojales", {
              required: "Completar esta opción.",
            })}
            error={!!errors.ojales}
            errorMessage={errors.ojales?.message}
            opciones={siNo}
            valorInicial={watch().ojales}
          />

          <InputRadio
            label="Troquelado"
            register={register("troquelado", {
              required: "Completar esta opción.",
            })}
            error={!!errors.troquelado}
            errorMessage={errors.troquelado?.message}
            opciones={siNo}
            valorInicial={watch().troquelado}
          />

          <InputRadio
            label="Portabaner"
            register={register("portabaner", {
              required: "Muestra es requerido.",
            })}
            error={!!errors.portabaner}
            errorMessage={errors.portabaner?.message}
            opciones={siNo}
            valorInicial={watch().portabaner}
          />
        </>
      )}
    </FormConnectOrdenes>
  );
};

export default LomaForm;
