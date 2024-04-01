import { Producto } from "@/types/recursos/productos";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Textarea,
} from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
import InputRadio from "../../components/input-radio";
import { metodosPago, siNo } from "@/libs/listas";
import InputSelect from "../../components/input-select";
import { iconos } from "@/components/icons";
import WraperInputLabel from "../../components/wraper-input-label";

const FormConnectOrdenes = ({ children }: { children: any }) => {
  const methods = useFormContext<Producto>();
  const { errors, isSubmitting } = methods.formState;

  return (
    <Card>
      <CardBody>
        <div className="flex flex-col gap-y-2">
          <WraperInputLabel label="fecha">
            <Input
              type="date"
              {...methods.register("fecha_entrega", {
                required: "La fecha de entrega es obligatoria.",
              })}
              isInvalid={errors.fecha_entrega ? true : false}
              errorMessage={errors.fecha_entrega?.message}
              variant={errors.fecha_entrega ? "bordered" : "flat"}
              defaultValue={methods.watch().fecha_entrega}
              color="primary"
            />
          </WraperInputLabel>

          <WraperInputLabel label="hora">
            <Input
              type="time"
              {...methods.register("hora_entrega", {
                required: "la hora de entrega es requerida.",
              })}
              isInvalid={errors.hora_entrega ? true : false}
              errorMessage={errors.hora_entrega?.message}
              variant={errors.hora_entrega ? "bordered" : "flat"}
              defaultValue={methods.watch().hora_entrega}
              color="primary"
            />
          </WraperInputLabel>

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
            {...methods.register("observaciones", {
              maxLength: {
                value: 500,
                message: "Solo se admiten hasta 500 caracteres.",
              },
            })}
            defaultValue={methods.watch().observaciones}
            variant={errors.observaciones ? "bordered" : "flat"}
            isInvalid={!!errors.observaciones}
            color="primary"
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
            color="primary"
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
            color="primary"
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
                menuPlacement="top"
              />
            )}
          />
        </div>
      </CardBody>
      <CardFooter>
        <Button
          type="submit"
          variant="solid"
          color="primary"
          isDisabled={isSubmitting}
          isLoading={isSubmitting}
          startContent={iconos.guardar}
        >
          guardar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FormConnectOrdenes;
