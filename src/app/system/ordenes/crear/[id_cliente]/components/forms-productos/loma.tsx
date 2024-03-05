import {
  lomaBolsillo,
  lomaMaterial,
  lomaOrientacion,
  siNo,
} from "@/libs/listas";
import InputSelect from "../input-select";
import InputRadio from "../input-radio";
import FormConnectProductos from "../form-connect-productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import { Input } from "@nextui-org/react";
import type { Loma } from "@/types/recursos/productos";

const LomaForm = () => {
  const { formState } = useFormContext<Loma>();
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
            isInvalid={errors.ubicacion_archivo ? true : false}
            errorMessage={errors.ubicacion_archivo?.message}
            variant={errors.ubicacion_archivo ? "bordered" : "flat"}
          />

          <InputSelect
            label="Material"
            error={errors.material ? true : false}
            errorMessage={errors.material?.message}
            opciones={lomaMaterial.map((opcion) => ({value: opcion, label: opcion}))}
            register={register("material", {
              required: "El material es requerido.",
            })}
          />

          <InputSelect
            label="Bolsillo"
            error={errors.bolsillo ? true : false}
            errorMessage={errors.bolsillo?.message}
            opciones={lomaBolsillo.map((opcion) => ({value: opcion, label: opcion}))}
            register={register("bolsillo", {
              required: "El bolsillo es requerido.",
            })}
          />

          <InputRadio
            label="Orientación"
            register={register("orientacion", {
              required: "La orientación es requerida.",
            })}
            error={errors.orientacion ? true : false}
            errorMessage={errors.orientacion?.message}
            opciones={lomaOrientacion}
          />

          <InputRadio
            label="Corte"
            register={register("corte", { required: "Completar esta opción." })}
            error={errors.corte ? true : false}
            errorMessage={errors.corte?.message}
            opciones={siNo}
          />

          <InputRadio
            label="Ojales"
            register={register("ojales", {
              required: "Completar esta opción.",
            })}
            error={errors.ojales ? true : false}
            errorMessage={errors.ojales?.message}
            opciones={siNo}
          />

          <InputRadio
            label="Troquelado"
            register={register("troquelado", {
              required: "Completar esta opción.",
            })}
            error={errors.troquelado ? true : false}
            errorMessage={errors.troquelado?.message}
            opciones={siNo}
          />

          <InputRadio
            label="Portabaner"
            register={register("portabaner", {
              required: "Muestra es requerido.",
            })}
            error={errors.portabaner ? true : false}
            errorMessage={errors.portabaner?.message}
            opciones={siNo}
          />
        </>
      )}
    </FormConnectProductos>
  );
};

export default LomaForm;
