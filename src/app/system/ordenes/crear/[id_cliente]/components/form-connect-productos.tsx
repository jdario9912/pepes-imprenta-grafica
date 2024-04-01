import { Producto } from "@/types/recursos/productos";
import { Input, Textarea } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
import InputRadio from "../../../components/input-radio";
import { metodosPago, siNo } from "@/libs/listas";
import InputSelect from "../../../components/input-select";
import WraperInputLabel from "../../../components/wraper-input-label";

const FormConnectProducto = ({ children }: { children: any }) => {
  const methods = useFormContext<Producto>();
  const { errors } = methods.formState;

  return (
    <div className="flex flex-col gap-y-3">
      <WraperInputLabel label="fecha">
        <Input
          type="date"
          {...methods.register("fecha_entrega", {
            required: "La fecha de entrega es obligatoria.",
          })}
          isInvalid={!!errors.fecha_entrega}
          errorMessage={errors.fecha_entrega?.message}
          variant={errors.fecha_entrega ? "bordered" : "flat"}
          color="primary"
        />
      </WraperInputLabel>

      <WraperInputLabel label="hora">
        <Input
          type="time"
          {...methods.register("hora_entrega", {
            required: "la hora de entrega es requerida.",
          })}
          isInvalid={!!errors.hora_entrega}
          errorMessage={errors.hora_entrega?.message}
          variant={errors.hora_entrega ? "bordered" : "flat"}
          defaultValue="19:00"
          color="primary"
        />
      </WraperInputLabel>

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

      <Textarea
        label="Observaciones"
        {...methods.register("observaciones", {
          maxLength: {
            value: 500,
            message: "Solo se admiten hasta 500 caracteres.",
          },
        })}
        color="primary"
        isInvalid={!!errors.observaciones}
      />

      <Input
        type="num"
        label="Total"
        {...methods.register("total", {
          required: "El total es requerido.",
        })}
        isInvalid={!!errors.total}
        errorMessage={errors.total?.message}
        variant={errors.total ? "bordered" : "flat"}
        color="primary"
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
        color="primary"
      />

      <Controller
        name="metodo_pago"
        control={methods.control}
        rules={{
          required: { value: true, message: "El método de pago requerido." },
        }}
        render={() => (
          <InputSelect
            label="Método de pago"
            error={!!errors.metodo_pago}
            name="metodo_pago"
            opciones={metodosPago}
            resetField={methods.resetField}
            setValue={methods.setValue}
            menuPlacement="top"
          />
        )}
      />
    </div>
  );
};

export default FormConnectProducto;
