import { Producto } from "@/types/recursos/productos";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";
import InputRadio from "./input-radio";
import { metodosPago, siNo } from "@/libs/listas";
import InputSelect from "./input-select";

const FormProducto = ({ children }: { children: any }) => {
  const methods = useFormContext<Producto>();
  const { errors } = methods.formState;

  return (
    <>
      <Input
        type="date"
        {...methods.register("fecha_entrega", {
          required: "La fecha de entrega es obligatoria.",
        })}
        isInvalid={errors.fecha_entrega ? true : false}
        errorMessage={errors.fecha_entrega?.message}
        variant={errors.fecha_entrega ? "bordered" : "flat"}
      />

      <Input
        type="time"
        {...methods.register("hora_entrega", {
          required: "la hora de entrega es requerida.",
        })}
        isInvalid={errors.hora_entrega ? true : false}
        errorMessage={errors.hora_entrega?.message}
        variant={errors.hora_entrega ? "bordered" : "flat"}
        defaultValue="19:00"
      />

      <InputRadio
        label="Muestra"
        register={methods.register("muestra", {
          required: "Muestra es requerido.",
        })}
        error={errors.muestra ? true : false}
        errorMessage={errors.muestra?.message}
        opciones={siNo}
      />

      {children({ ...methods })}

      <Textarea label="Observaciones" {...methods.register("observaciones")} />

      <Input
        type="num"
        label="Total"
        {...methods.register("total", {
          required: "El total es requerido.",
        })}
        isInvalid={errors.total ? true : false}
        errorMessage={errors.total?.message}
        variant={errors.total ? "bordered" : "flat"}
      />

      <Input
        type="num"
        label="Entrega"
        {...methods.register("entrega", {
          required: "El monto que entrega el cliente es requerido.",
        })}
        isInvalid={errors.entrega ? true : false}
        errorMessage={errors.entrega?.message}
        variant={errors.entrega ? "bordered" : "flat"}
      />
      

      {methods.watch().entrega !== 0 ? (
        <InputSelect
          label="Método de pago"
          error={errors.metodo_pago ? true : false}
          errorMessage={errors.metodo_pago?.message}
          opciones={metodosPago}
          register={methods.register("metodo_pago", {
            required: "Falta el metodo de pago.",
          })}
        />
      ) : <></>}
      <Button type="submit" variant="flat" color="primary">Crear orden</Button>
    </>
  );
};

export default FormProducto;
