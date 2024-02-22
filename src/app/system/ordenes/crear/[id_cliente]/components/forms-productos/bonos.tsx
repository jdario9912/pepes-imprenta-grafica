import {
  bonosLotes,
  bonosNumeradores,
  bonosTamano,
  bonosTipo,
} from "@/libs/listas";
import InputRadio from "../input-radio";
import InputSelect from "../input-select";
import { UseFormRegister, useFormContext } from "react-hook-form";
import type { Bonos } from "@/types/recursos/productos";
import FormConnectProductos from "../form-connect-productos";
import { Input } from "@nextui-org/react";

const BonosForm = () => {
  const { formState } = useFormContext<Bonos>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Bonos> }) => (
        <>
          <InputRadio
            label="Tipo"
            register={register("tipo", { required: "El tipo es requerido." })}
            error={errors.tipo ? true : false}
            errorMessage={errors.tipo?.message}
            opciones={bonosTipo}
          />

          <InputSelect
            label="Tamaño"
            error={errors.tamano ? true : false}
            errorMessage={errors.tamano?.message}
            opciones={bonosTamano}
            register={register("tamano", {
              required: "El tamaño es requerido.",
            })}
          />

          <InputSelect
            label="Numeradores"
            error={errors.numeradores ? true : false}
            errorMessage={errors.numeradores?.message}
            opciones={bonosNumeradores}
            register={register("numeradores", {
              required: "Los numeradores son requeridos.",
            })}
          />

          <InputSelect
            label="Lotes"
            error={errors.lotes ? true : false}
            errorMessage={errors.lotes?.message}
            opciones={bonosLotes}
            register={register("lotes", {
              required: "Los lotes son requeridos.",
            })}
          />

          <Input
            type="num"
            label="Desde número"
            {...register("desde_numero", {
              required: "El núnero inicial es requerido.",
            })}
            isInvalid={errors.desde_numero ? true : false}
            errorMessage={errors.desde_numero?.message}
            variant={errors.desde_numero ? "bordered" : "flat"}
          />

          <Input
            type="num"
            label="Cantidad"
            {...register("cantidad", {
              required: "El núnero inicial es requerido.",
            })}
            isInvalid={errors.cantidad ? true : false}
            errorMessage={errors.cantidad?.message}
            variant={errors.cantidad ? "bordered" : "flat"}
          />
        </>
      )}
    </FormConnectProductos>
  );
};

export default BonosForm;
