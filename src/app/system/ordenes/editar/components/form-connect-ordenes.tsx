import { Producto } from "@/types/recursos/productos";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
import InputRadio from "../../components/input-radio";
import { metodosPago, siNo } from "@/libs/listas";
import InputSelect from "../../components/input-select";

const FormConnectOrdenes = ({ children }: { children: any }) => {
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
        defaultValue={methods.watch().fecha_entrega}
      />

      <Input
        type="time"
        {...methods.register("hora_entrega", {
          required: "la hora de entrega es requerida.",
        })}
        isInvalid={errors.hora_entrega ? true : false}
        errorMessage={errors.hora_entrega?.message}
        variant={errors.hora_entrega ? "bordered" : "flat"}
        defaultValue={methods.watch().hora_entrega}
      />

      <InputRadio
        label="Muestra"
        register={methods.register("muestra", {
          required: "Muestra es requerido.",
        })}
        error={errors.muestra ? true : false}
        errorMessage={errors.muestra?.message}
        opciones={siNo}
        valorInicial={methods.watch().muestra}
      />

      {children({ ...methods })}

      <Textarea
        label="Observaciones"
        {...methods.register("observaciones")}
        defaultValue={methods.watch().observaciones}
      />

      <Input
        type="num"
        label="Total"
        {...methods.register("total", {
          required: "El total es requerido.",
        })}
        isInvalid={errors.total ? true : false}
        errorMessage={errors.total?.message}
        variant={errors.total ? "bordered" : "flat"}
        defaultValue={methods.watch().total.toString()}
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
        defaultValue={methods.watch().entrega.toString()}
      />

      <Controller
        name="metodo_pago"
        control={methods.control}
        rules={{
          required: { value: true, message: "metodo de pago requerido" },
        }}
        render={() => (
          <InputSelect
            label="Metodo de pago"
            error={!!errors.metodo_pago}
            name="metodo_pago"
            opciones={metodosPago}
            resetField={methods.resetField}
            setValue={methods.setValue}
            defaultValue={methods.watch().metodo_pago}
          />
        )}
      />

      <Button type="submit" variant="flat" color="primary">
        guardar
      </Button>
    </>
  );
};

export default FormConnectOrdenes;
