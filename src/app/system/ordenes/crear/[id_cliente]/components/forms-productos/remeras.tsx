import type { Remeras } from "@/types/recursos/productos";
import FormConnectProductos from "../form-connect-productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import { Input } from "@nextui-org/react";

const RemerasForm = () => {
  const { formState } = useFormContext<Remeras>();
  const { errors } = formState;

  return (
    <FormConnectProductos>
      {({ register }: { register: UseFormRegister<Remeras> }) => (
        <>
          <Input
            label="ubicación del archivo"
            {...register("ubicacion_archivo", {
              required: "La ubicación del archivo es requerida.",
            })}
            isInvalid={errors.ubicacion_archivo ? true : false}
            errorMessage={errors.ubicacion_archivo?.message}
            variant={errors.ubicacion_archivo ? "bordered" : "flat"}
          />

          <Input
            label="talles"
            {...register("talles", {
              required: "Los talles son requeridos.",
            })}
            isInvalid={errors.talles ? true : false}
            errorMessage={errors.talles?.message}
            variant={errors.talles ? "bordered" : "flat"}
          />

          <Input
            label="color"
            {...register("color", {
              required: "El color es requerido.",
            })}
            isInvalid={errors.color ? true : false}
            errorMessage={errors.color?.message}
            variant={errors.color ? "bordered" : "flat"}
          />

          <Input
            label="Estampa pecho"
            {...register("estampa_pecho", {
              required: "La estampa del pecho es requerida.",
            })}
            isInvalid={errors.estampa_pecho ? true : false}
            errorMessage={errors.estampa_pecho?.message}
            variant={errors.estampa_pecho ? "bordered" : "flat"}
          />

          <Input
            label="Estampa espalda"
            {...register("estampa_espalda", {
              required: "La estampa de espalda es requerida es requerida.",
            })}
            isInvalid={errors.estampa_espalda ? true : false}
            errorMessage={errors.estampa_espalda?.message}
            variant={errors.estampa_espalda ? "bordered" : "flat"}
          />

          <Input
            label="Color estampa"
            {...register("color_estampa", {
              required: "El color de la estampa es requerida.",
            })}
            isInvalid={errors.color_estampa ? true : false}
            errorMessage={errors.color_estampa?.message}
            variant={errors.color_estampa ? "bordered" : "flat"}
          />

          <Input
            label="cantidad"
            type="num"
            {...register("cantidad", {
              required: "La cantidad es requerida.",
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

export default RemerasForm;
