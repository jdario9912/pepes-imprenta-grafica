import {
  siNo,
  talonariosColorDuplicado,
  talonariosColorTriplicado,
  talonariosPuntilladoEmblocado,
  talonariosTamano,
  talonariosTipo,
} from "@/libs/listas";
import InputRadio from "../../../../components/input-radio";
import { Controller, UseFormRegister, useFormContext } from "react-hook-form";
import type { Talonarios } from "@/types/recursos/productos";
import { Input } from "@nextui-org/react";
import FormConnectProductos from "../form-connect-productos";
import InputSelect from "@/app/system/ordenes/components/input-select";

const TalonariosForm = () => {
  const { formState, resetField, setValue, control, watch } =
    useFormContext<Talonarios>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
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
            color="primary"
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
              />
            )}
          />

          <Controller
            name="modelo_anterior"
            control={control}
            rules={{
              required: "Completar esta opción.",
            }}
            render={() => (
              <InputRadio
                label="Modelo anterior"
                register={register("modelo_anterior")}
                error={!!errors.modelo_anterior}
                errorMessage={errors.modelo_anterior?.message}
                opciones={siNo}
              />
            )}
          />

          <Controller
            name="tiene_logo"
            control={control}
            rules={{
              required: "Completar esta opción.",
            }}
            render={() => (
              <InputRadio
                label="Tiene logo"
                register={register("tiene_logo")}
                error={!!errors.tiene_logo}
                errorMessage={errors.tiene_logo?.message}
                opciones={siNo}
              />
            )}
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
            color="primary"
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
            color="primary"
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
              />
            )}
          />

          <Controller
            name="triplicado"
            control={control}
            rules={{
              required: {
                value:
                  watch("color_duplicado") === "solo original" ? false : true,
                message: "Completar esta opción.",
              },
              value: watch("color_duplicado") === "solo original" ? "" : "",
            }}
            render={() => (
              <InputRadio
                label="Triplicado"
                register={register("triplicado")}
                error={!!errors.triplicado}
                errorMessage={errors.triplicado?.message}
                opciones={siNo}
                disabled={
                  watch("color_duplicado") === "solo original" ? true : false
                }
              />
            )}
          />

          {!!(watch("triplicado") == "si") && (
            <Controller
              name="color_triplicado"
              control={control}
              rules={{
                required: {
                  value:
                    watch("color_duplicado") === "solo original" ? false : true,
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
                    watch("triplicado") == "no"
                  }
                />
              )}
            />
          )}
        </>
      )}
    </FormConnectProductos>
  );
};

export default TalonariosForm;
