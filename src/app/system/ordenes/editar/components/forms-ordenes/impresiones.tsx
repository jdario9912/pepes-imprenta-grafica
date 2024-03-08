import type { Impresiones } from '@/types/recursos/productos';
import { Controller, UseFormRegister, useFormContext } from 'react-hook-form';
import FormConnectOrdenes from '../form-connect-ordenes';
import { Input } from '@nextui-org/react';
import InputRadio from '../../../components/input-radio';
import { impresionesFaz, impresionesImpesion, impresionesOrientacion, impresionesTamanoPapel, siNo } from '@/libs/listas';
import InputSelect from '../../../components/input-select';

const ImpresionesForm = () => {
  const { formState, watch, control, setValue, resetField } = useFormContext<Impresiones>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Impresiones> }) => (
        <>
          <Input
            label="ubicación del archivo"
            {...register("ubicacion_archivo", {
              required: "La ubicación del archivo es requerida.",
            })}
            isInvalid={!!errors.ubicacion_archivo}
            errorMessage={errors.ubicacion_archivo?.message}
            variant={errors.ubicacion_archivo ? "bordered" : "flat"}
            defaultValue={watch().ubicacion_archivo}
          />

          <InputRadio
            label="Impresión"
            register={register("impresion", {
              required: "El tipo de impresión es requerido.",
            })}
            error={!!errors.impresion}
            errorMessage={errors.impresion?.message}
            opciones={impresionesImpesion}
            valorInicial={watch().impresion}
          />

          <InputRadio
            label="Faz"
            register={register("faz", { required: "Faz es requerido." })}
            error={!!errors.faz}
            errorMessage={errors.faz?.message}
            opciones={impresionesFaz}
            valorInicial={watch().faz}
          />

          <Input
            label="Tipo de papel"
            {...register("tipo_papel", {
              required: "El tipo de papel es obligatorio.",
            })}
            isInvalid={!!errors.tipo_papel}
            errorMessage={errors.tipo_papel?.message}
            variant={errors.tipo_papel ? "bordered" : "flat"}
            defaultValue={watch().tipo_papel}
          />

          <Controller
            name="tamano_papel"
            control={control}
            rules={{
              required: "El tamaño del papel es requerido.",
            }}
            render={() => (
              <InputSelect
                error={!!errors.tamano_papel}
                opciones={impresionesTamanoPapel}
                name="tamano_papel"
                resetField={resetField}
                setValue={setValue}
                defaultValue={watch().tamano_papel}
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
            opciones={impresionesOrientacion}
            valorInicial={watch().orientacion}
          />

          <InputRadio
            label="Anillado"
            register={register("anillado", {
              required: "Completar esta opción.",
            })}
            error={!!errors.anillado}
            errorMessage={errors.anillado?.message}
            opciones={siNo}
            valorInicial={watch().anillado}
          />

          <InputRadio
            label="Abrochado"
            register={register("abrochado", {
              required: "Completar esta opción.",
            })}
            error={!!errors.abrochado}
            errorMessage={errors.abrochado?.message}
            opciones={siNo}
            valorInicial={watch().abrochado}
          />

          <InputRadio
            label="Corte"
            register={register("corte", {
              required: "Completar esta opción.",
            })}
            error={!!errors.corte}
            errorMessage={errors.corte?.message}
            opciones={siNo}
            valorInicial={watch().corte}
          />
        </>
      )}
    </FormConnectOrdenes>
  );
}

export default ImpresionesForm