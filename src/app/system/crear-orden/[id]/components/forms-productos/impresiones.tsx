import {
  impresionesFaz,
  impresionesImpesion,
  impresionesOrientacion,
  impresionesTamanoPapel,
  siNo,
} from "@/libs/listas";
import { Input } from "@nextui-org/react";
import InputRadio from "../input-radio";
import InputText from "../input-text";
import InputSelect from "../input-select";
import FormConnectProductos from "../form-connect-productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import type { Impresiones } from "@/types/recursos/productos";

const ImpresionesForm = () => {
  const { formState } = useFormContext<Impresiones>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Impresiones> }) => (
        <>
          <InputText label="ubicación del archivo" name="ubicacion_archivo" />

          <InputRadio
            label="Impresión"
            register={register("impresion", {
              required: "El tipo de impresión es requerido.",
            })}
            error={errors.impresion ? true : false}
            errorMessage={errors.impresion?.message}
            opciones={impresionesImpesion}
          />

          <InputRadio
            label="Faz"
            register={register("faz", { required: "Faz es requerido." })}
            error={errors.faz ? true : false}
            errorMessage={errors.faz?.message}
            opciones={impresionesFaz}
          />

          <Input
            label="Tipo de papel"
            {...register("tipo_papel", {
              required: "El tipo de papel es obligatorio.",
            })}
            isInvalid={errors.tipo_papel ? true : false}
            errorMessage={errors.tipo_papel?.message}
            variant={errors.tipo_papel ? "bordered" : "flat"}
          />

          <InputSelect
            label="Tamaño del papel"
            error={errors.tamano_papel ? true : false}
            errorMessage={errors.tamano_papel?.message}
            opciones={impresionesTamanoPapel}
            register={register("tamano_papel", {
              required: "El tamaño del papel es requerido.",
            })}
          />

          <InputRadio
            label="Orientación"
            register={register("orientacion", {
              required: "La orientación es requerida.",
            })}
            error={errors.orientacion ? true : false}
            errorMessage={errors.orientacion?.message}
            opciones={impresionesOrientacion}
          />

          <InputRadio
            label="Anillado"
            register={register("anillado", {
              required: "Completar esta opción.",
            })}
            error={errors.anillado ? true : false}
            errorMessage={errors.anillado?.message}
            opciones={siNo}
          />

          <InputRadio
            label="Abrochado"
            register={register("abrochado", {
              required: "Completar esta opción.",
            })}
            error={errors.abrochado ? true : false}
            errorMessage={errors.abrochado?.message}
            opciones={siNo}
          />

          <InputRadio
            label="Corte"
            register={register("corte", {
              required: "Completar esta opción.",
            })}
            error={errors.corte ? true : false}
            errorMessage={errors.corte?.message}
            opciones={siNo}
          />
        </>
      )}
    </FormConnectProductos>
  );
};

export default ImpresionesForm;
