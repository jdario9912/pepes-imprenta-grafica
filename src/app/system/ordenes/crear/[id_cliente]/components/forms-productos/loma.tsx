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
                label="material"
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
                label="bolsillo"
                error={!!errors.bolsillo}
                opciones={lomaBolsillo}
                name="bolsillo"
                resetField={resetField}
                setValue={setValue}
              />
            )}
          />

          <Controller
            name="orientacion"
            control={control}
            rules={{
              required: "La orientación es requerida.",
            }}
            render={() => (
              <InputRadio
                label="Orientación"
                register={register("orientacion")}
                error={!!errors.orientacion}
                errorMessage={errors.orientacion?.message}
                opciones={lomaOrientacion}
              />
            )}
          />

          <Controller
            name="corte"
            control={control}
            rules={{ required: "Completar esta opción." }}
            render={() => (
              <InputRadio
                label="Corte"
                register={register("corte")}
                error={!!errors.corte}
                errorMessage={errors.corte?.message}
                opciones={siNo}
              />
            )}
          />

          <Controller
            name="ojales"
            control={control}
            rules={{
              required: "Completar esta opción.",
            }}
            render={() => (
              <InputRadio
                label="Ojales"
                register={register("ojales")}
                error={!!errors.ojales}
                errorMessage={errors.ojales?.message}
                opciones={siNo}
              />
            )}
          />

          <Controller
            name="troquelado"
            control={control}
            rules={{
              required: "Completar esta opción.",
            }}
            render={() => (
              <InputRadio
                label="Troquelado"
                register={register("troquelado")}
                error={!!errors.troquelado}
                errorMessage={errors.troquelado?.message}
                opciones={siNo}
              />
            )}
          />

          <Controller
            name="portabaner"
            control={control}
            rules={{
              required: "Muestra es requerido.",
            }}
            render={() => (
              <InputRadio
                label="Portabaner"
                register={register("portabaner")}
                error={!!errors.portabaner}
                errorMessage={errors.portabaner?.message}
                opciones={siNo}
              />
            )}
          />
        </>
      )}
    </FormConnectProductos>
  );
};

export default LomaForm;
