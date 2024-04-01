import { Remeras } from "@/types/recursos/productos";
import { UseFormRegister, useFormContext } from "react-hook-form";
import FormConnectOrdenes from "../form-connect-ordenes";
import { Input } from "@nextui-org/react";

const RemerasForm = () => {
  const { formState, watch } = useFormContext<Remeras>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Remeras> }) => (
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
            color="primary"
          />

          <Input
            label="talles"
            {...register("talles", {
              required: "Los talles son requeridos.",
            })}
            isInvalid={!!errors.talles}
            errorMessage={errors.talles?.message}
            variant={errors.talles ? "bordered" : "flat"}
            defaultValue={watch().talles}
            color="primary"
          />

          <Input
            label="color"
            {...register("color", {
              required: "El color es requerido.",
            })}
            isInvalid={!!errors.color}
            errorMessage={errors.color?.message}
            variant={errors.color ? "bordered" : "flat"}
            defaultValue={watch().color}
            color="primary"
          />

          <Input
            label="Estampa pecho"
            {...register("estampa_pecho", {
              required: "La estampa del pecho es requerida.",
            })}
            isInvalid={!!errors.estampa_pecho}
            errorMessage={errors.estampa_pecho?.message}
            variant={errors.estampa_pecho ? "bordered" : "flat"}
            defaultValue={watch().estampa_pecho}
            color="primary"
          />

          <Input
            label="Estampa espalda"
            {...register("estampa_espalda", {
              required: "La estampa de espalda es requerida es requerida.",
            })}
            isInvalid={!!errors.estampa_espalda}
            errorMessage={errors.estampa_espalda?.message}
            variant={errors.estampa_espalda ? "bordered" : "flat"}
            defaultValue={watch().estampa_espalda}
            color="primary"
          />

          <Input
            label="Color estampa"
            {...register("color_estampa", {
              required: "El color de la estampa es requerida.",
            })}
            isInvalid={!!errors.color_estampa}
            errorMessage={errors.color_estampa?.message}
            variant={errors.color_estampa ? "bordered" : "flat"}
            defaultValue={watch().color_estampa}
            color="primary"
          />

          <Input
            label="cantidad"
            type="num"
            {...register("cantidad", {
              required: "La cantidad es requerida.",
            })}
            isInvalid={!!errors.cantidad}
            errorMessage={errors.cantidad?.message}
            variant={errors.cantidad ? "bordered" : "flat"}
            defaultValue={watch().cantidad.toString()}
            color="primary"
          />
        </>
      )}
    </FormConnectOrdenes>
  );
};

export default RemerasForm;
