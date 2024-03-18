import { Producto } from "@/types/recursos/productos";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
import InputRadio from "../../../components/input-radio";
import { metodosPago, siNo } from "@/libs/listas";
import InputSelect from "../../../components/input-select";

const FormConnectProducto = ({ children }: { children: any }) => {
  const methods = useFormContext<Producto>();
  const { errors, isSubmitting } = methods.formState;

  return (
    <>
      <Input
        type="date"
        {...methods.register("fecha_entrega", {
          required: "La fecha de entrega es obligatoria.",
        })}
        isInvalid={!!errors.fecha_entrega}
        errorMessage={errors.fecha_entrega?.message}
        variant={errors.fecha_entrega ? "bordered" : "flat"}
      />

      <Input
        type="time"
        {...methods.register("hora_entrega", {
          required: "la hora de entrega es requerida.",
        })}
        isInvalid={!!errors.hora_entrega}
        errorMessage={errors.hora_entrega?.message}
        variant={errors.hora_entrega ? "bordered" : "flat"}
        defaultValue="19:00"
      />

      <Controller
        name="muestra"
        rules={{ required: "Muestra es requerida." }}
        control={methods.control}
        render={() => (
          <InputRadio
            label="Muestra"
            register={methods.register("muestra")}
            error={!!errors.muestra}
            errorMessage={errors.muestra?.message}
            opciones={siNo}
          />
        )}
      />

      {children({ ...methods })}

      <Textarea label="Observaciones" {...methods.register("observaciones")} />

      <Input
        type="num"
        label="Total"
        {...methods.register("total", {
          required: "El total es requerido.",
        })}
        isInvalid={!!errors.total}
        errorMessage={errors.total?.message}
        variant={errors.total ? "bordered" : "flat"}
      />

      <Input
        type="num"
        label="Entrega"
        {...methods.register("entrega", {
          required: "El monto que entrega el cliente es requerido.",
        })}
        isInvalid={!!errors.entrega}
        errorMessage={errors.entrega?.message}
        variant={errors.entrega ? "bordered" : "flat"}
      />

      <Controller
        name="metodo_pago"
        control={methods.control}
        rules={{
          required: { value: true, message: "El método de pago requerido." },
        }}
        render={() => (
          <InputSelect
            label="Metodo de pago"
            error={!!errors.metodo_pago}
            name="metodo_pago"
            opciones={metodosPago}
            resetField={methods.resetField}
            setValue={methods.setValue}
          />
        )}
      />

      <Button
        type="submit"
        variant="flat"
        color="primary"
        isLoading={isSubmitting}
      >
        Crear orden
      </Button>
    </>
  );
};

export default FormConnectProducto;
