"use client";

import { iconos } from "@/components/icons";
import { crearCliente } from "@/libs/client/axios";
import { errorToast } from "@/libs/client/toast";
import { editarCliente } from "@/libs/server-actions/axios";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Textarea,
} from "@nextui-org/react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const FormCliente = ({ cliente }: { cliente?: Cliente }) => {
  const router = useRouter();
  const { register, handleSubmit, formState, watch, resetField } =
    useForm<Cliente>({
      defaultValues: cliente ? cliente : {},
    });

  const [addInputEmail, setAddInputEmail] = useState(!!cliente?.email);
  const [addInputObservaciones, setAddInputObservaciones] = useState(
    !!cliente?.observaciones
  );

  const mostrarInputEmail = () => setAddInputEmail(true);
  const ocultarInputEmail = () => {
    resetField("email");
    setAddInputEmail(false);
  };

  const mostrarInputObservaciones = () => setAddInputObservaciones(true);
  const ocultarInputObservaciones = () => {
    resetField("observaciones");
    setAddInputObservaciones(false);
  };

  const { errors, isSubmitting } = formState;

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (cliente) {
        const clienteActualizado = await editarCliente(data, cliente.id || 0);
        router.push(`/system/clientes?cliente=${clienteActualizado.nombre}`);
        return;
      }

      const res = await crearCliente(data);
      const id = res.data.id;
      router.push(`/system/ordenes/crear/${id}`);
      return;
    } catch (error: unknown) {
      errorToast("Algo salio mal.")
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <CardBody>
        <div className="flex flex-col gap-y-4">
          <Input
            type="text"
            label="nombre"
            {...register("nombre", {
              required: "El nombre es requerido",
            })}
            isInvalid={errors.nombre ? true : false}
            errorMessage={errors.nombre?.message}
            variant={errors.nombre ? "bordered" : "flat"}
            defaultValue={watch().nombre}
            endContent={iconos.persona}
            color="primary"
          />

          <Input
            type="text"
            label="telefono"
            {...register("telefono", {
              required: "El teléfono es requerido.",
            })}
            isInvalid={errors.telefono ? true : false}
            errorMessage={errors.telefono?.message}
            variant={errors.telefono ? "bordered" : "flat"}
            defaultValue={watch().telefono}
            endContent={iconos.telefono}
            color="primary"
          />

          {addInputEmail ? (
            <div className="flex items-start gap-x-2">
              <Input
                type="email"
                label="user@email.com"
                {...(addInputEmail
                  ? register("email", {
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "El formato de email es incorrecto.",
                      },
                    })
                  : null)}
                isInvalid={errors.email ? true : false}
                errorMessage={errors.email?.message}
                variant={errors.email ? "bordered" : "flat"}
                defaultValue={watch().email}
                endContent={iconos.email}
                color="primary"
              />

              <Button
                onClick={ocultarInputEmail}
                variant="flat"
                color="primary"
                isIconOnly
              >
                {iconos.cerrar}
              </Button>
            </div>
          ) : (
            <Button
              onClick={mostrarInputEmail}
              variant="flat"
              color="primary"
              startContent={iconos.plus}
            >
              email
            </Button>
          )}

          {addInputObservaciones ? (
            <div className="flex items-start gap-x-2">
              <Textarea
                label="observaciones"
                {...(addInputObservaciones ? register("observaciones") : null)}
                defaultValue={watch().observaciones}
                endContent={iconos.observaciones}
                color="primary"
              />

              <Button
                onClick={ocultarInputObservaciones}
                variant="flat"
                color="primary"
                isIconOnly
              >
                {iconos.cerrar}
              </Button>
            </div>
          ) : (
            <Button
              onClick={mostrarInputObservaciones}
              variant="flat"
              color="primary"
              startContent={iconos.plus}
            >
              observaciones
            </Button>
          )}
        </div>
      </CardBody>
      <CardFooter>
        <Button
          type="submit"
          isDisabled={isSubmitting}
          isLoading={isSubmitting}
          variant="solid"
          color="primary"
          startContent={iconos.guardar}
        >
          guardar
        </Button>
      </CardFooter>
    </form>
  );
};

export default FormCliente;
