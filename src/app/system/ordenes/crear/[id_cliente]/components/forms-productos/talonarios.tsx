import {
  siNo,
  talonariosColorDuplicado,
  talonariosColorTriplicado,
  talonariosPuntilladoEmblocado,
  talonariosTamano,
  talonariosTipo,
} from "@/libs/listas";
import InputSelect from "../input-select";
import InputRadio from "../input-radio";
import { UseFormRegister, useFormContext } from "react-hook-form";
import type { Talonarios } from "@/types/recursos/productos";
import { Input } from "@nextui-org/react";
import FormConnectProductos from "../form-connect-productos";

const TalonariosForm = () => {
  const { formState, watch } = useFormContext<Talonarios>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Talonarios> }) => (
        <>
          <InputSelect
            label="Tipo"
            error={errors.tipo ? true : false}
            errorMessage={errors.tipo?.message}
            opciones={talonariosTipo}
            register={register("tipo", {
              required: "El tipo es requerido.",
            })}
          />

          <Input
            label="Cantidad"
            type="num"
            {...register("cantidad", {
              required: "La cantidad es requerida.",
            })}
            isInvalid={errors.cantidad ? true : false}
            errorMessage={errors.cantidad?.message}
            variant={errors.cantidad ? "bordered" : "flat"}
          />

          <InputSelect
            label="Tamaño"
            error={errors.tamano ? true : false}
            errorMessage={errors.tamano?.message}
            opciones={talonariosTamano}
            register={register("tamano", {
              required: "El tamaño es requerido.",
            })}
          />

          <InputRadio
            label="Modelo anterior"
            register={register("modelo_anterior", {
              required: "Completar esta opción.",
            })}
            error={errors.modelo_anterior ? true : false}
            errorMessage={errors.modelo_anterior?.message}
            opciones={siNo}
          />

          <InputRadio
            label="Tiene logo"
            register={register("tiene_logo", {
              required: "Completar esta opción.",
            })}
            error={errors.tiene_logo ? true : false}
            errorMessage={errors.tiene_logo?.message}
            opciones={siNo}
          />

          <Input
            label="Ubicación del logo"
            {...register("ubicacion_logo", {
              required: {
                value: watch("tiene_logo") === "si" ? true : false,
                message: "La ubicación del logo es requerida.",
              },
            })}
            isInvalid={errors.ubicacion_logo ? true : false}
            errorMessage={errors.ubicacion_logo?.message}
            variant={errors.ubicacion_logo ? "bordered" : "flat"}
            isDisabled={watch("tiene_logo") === "no" ? true : false}
          />

          <Input
            label="Número desde"
            type="num"
            {...register("numero_desde", {
              required: "Éste número es requerido.",
            })}
            isInvalid={errors.numero_desde ? true : false}
            errorMessage={errors.numero_desde?.message}
            variant={errors.numero_desde ? "bordered" : "flat"}
          />

          <InputSelect
            label="Puntillado - Emblocado"
            error={errors.puntillado_emblocado ? true : false}
            errorMessage={errors.puntillado_emblocado?.message}
            opciones={talonariosPuntilladoEmblocado}
            register={register("puntillado_emblocado", {
              required: "Seleccionar una opción.",
            })}
          />

          <InputSelect
            label="Color duplicado"
            error={errors.color_duplicado ? true : false}
            errorMessage={errors.color_duplicado?.message}
            opciones={talonariosColorDuplicado}
            register={register("color_duplicado", {
              required: "El color del duplicado es requerido.",
            })}
          />

          <InputRadio
            label="Triplicado"
            register={register("triplicado", {
              required: {
                value:
                  watch("color_duplicado") === "solo original" ? false : true,
                message: "Completar esta opción.",
              },
              value: watch("color_duplicado") === "solo original" ? "" : "",
            })}
            error={errors.triplicado ? true : false}
            errorMessage={errors.triplicado?.message}
            opciones={siNo}
            disabled={
              watch("color_duplicado") === "solo original" ? true : false
            }
          />

          <InputSelect
            label="Color triplicado"
            error={errors.color_triplicado ? true : false}
            errorMessage={errors.color_triplicado?.message}
            opciones={talonariosColorTriplicado}
            register={register("color_triplicado", {
              required: {
                value:
                  watch("color_duplicado") === "solo original" ? false : true,
                message: "El color del triplicado es requerido.",
              },
            })}
            disabled={
              watch("color_duplicado") === "solo original" ? true : false
            }
          />
        </>
      )}
    </FormConnectProductos>
  );
};

export default TalonariosForm;
