import { Talonarios } from "@/types/recursos/productos";
import { Controller, UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";
import InputSelect from "../../../components/input-select";
import {
  siNo,
  talonariosColorDuplicado,
  talonariosColorTriplicado,
  talonariosPuntilladoEmblocado,
  talonariosTamano,
  talonariosTipo,
} from "@/libs/listas";
import { Input } from "@nextui-org/react";
import InputRadio from "../../../components/input-radio";

const TalonariosForm = () => {
  const { formState, watch, control, setValue, resetField } =
    useFormContext<Talonarios>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Talonarios> }) => (
        <>
          <Controller
            name="tipo"
            control={control}
            rules={{
              required: "El tipo es requerido.",
            }}
            render={() => (
              <InputSelect
                label="tipo"
                error={!!errors.tipo}
                opciones={talonariosTipo}
                name="tipo"
                resetField={resetField}
                setValue={setValue}
                defaultValue={watch().tipo}
              />
            )}
          />

          <Input
            label="Cantidad"
            type="num"
            {...register("cantidad", {
              required: "La cantidad es requerida.",
            })}
            isInvalid={!!errors.cantidad}
            errorMessage={errors.cantidad?.message}
            variant={errors.cantidad ? "bordered" : "flat"}
            defaultValue={watch().cantidad.toString()}
          />

          <Controller
            name="tamano"
            control={control}
            rules={{
              required: "El tamaño es requerido.",
            }}
            render={() => (
              <InputSelect
                label="tamaño"
                error={!!errors.tamano}
                opciones={talonariosTamano}
                name="tamano"
                resetField={resetField}
                setValue={setValue}
                defaultValue={watch().tamano}
              />
            )}
          />

          <InputRadio
            label="Modelo anterior"
            register={register("modelo_anterior", {
              required: "Completar esta opción.",
            })}
            error={!!errors.modelo_anterior}
            errorMessage={errors.modelo_anterior?.message}
            opciones={siNo}
            valorInicial={watch().modelo_anterior}
          />

          <InputRadio
            label="Tiene logo"
            register={register("tiene_logo", {
              required: "Completar esta opción.",
            })}
            error={!!errors.tiene_logo}
            errorMessage={errors.tiene_logo?.message}
            opciones={siNo}
            valorInicial={watch().tiene_logo}
          />

          <Input
            label="Ubicación del logo"
            {...register("ubicacion_logo", {
              required: {
                value: watch("tiene_logo") === "si" ? true : false,
                message: "La ubicación del logo es requerida.",
              },
            })}
            isInvalid={!!errors.ubicacion_logo}
            errorMessage={errors.ubicacion_logo?.message}
            variant={errors.ubicacion_logo ? "bordered" : "flat"}
            isDisabled={watch("tiene_logo") === "no" ? true : false}
            defaultValue={watch().ubicacion_logo}
          />

          <Input
            label="Número desde"
            type="num"
            {...register("numero_desde", {
              required: "Éste número es requerido.",
            })}
            isInvalid={!!errors.numero_desde}
            errorMessage={errors.numero_desde?.message}
            variant={errors.numero_desde ? "bordered" : "flat"}
            defaultValue={watch().numero_desde.toString()}
          />

          <Controller
            name="puntillado_emblocado"
            control={control}
            rules={{
              required: "Puntillado - emblocado requerido.",
            }}
            render={() => (
              <InputSelect
                label="puntillado-emblocado"
                error={!!errors.puntillado_emblocado}
                opciones={talonariosPuntilladoEmblocado}
                name="puntillado_emblocado"
                resetField={resetField}
                setValue={setValue}
                defaultValue={watch().puntillado_emblocado}
              />
            )}
          />

          <Controller
            name="color_duplicado"
            control={control}
            rules={{
              required: "El color duplicado es requerido.",
            }}
            render={() => (
              <InputSelect
                label="color duplicado"
                error={!!errors.color_duplicado}
                opciones={talonariosColorDuplicado}
                name="color_duplicado"
                resetField={resetField}
                setValue={setValue}
                defaultValue={watch().color_duplicado}
              />
            )}
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
            error={!!errors.triplicado}
            errorMessage={errors.triplicado?.message}
            opciones={siNo}
            disabled={
              watch("color_duplicado") === "solo original" ? true : false
            }
            valorInicial={watch().triplicado}
          />

          <Controller
            name="color_triplicado"
            control={control}
            rules={{
              required: {
                value:
                  watch("color_duplicado") === "solo original" ||
                  watch("triplicado") === "no"
                    ? false
                    : true,
                message: "El color del triplicado es requerido.",
              },
            }}
            render={() => (
              <InputSelect
                label="color triplicado"
                error={!!errors.color_triplicado}
                opciones={talonariosColorTriplicado}
                name="color_triplicado"
                resetField={resetField}
                setValue={setValue}
                isDisabled={
                  watch("color_duplicado") === "solo original" ||
                  watch("triplicado") === "no"
                }
                defaultValue={watch().color_triplicado}
              />
            )}
          />
        </>
      )}
    </FormConnectOrdenes>
  );
};

export default TalonariosForm;
