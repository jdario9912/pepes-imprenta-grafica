"use client";

import { crearCliente } from "@/libs/client/axios";
import { editarCliente } from "@/libs/server-actions/axios";
import { Button, Input, Textarea } from "@nextui-org/react";
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
      if (error instanceof AxiosError)
        console.log(error.response?.data.mensaje);
    }
  });

  return (
    <form onSubmit={onSubmit}>
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
      />

      {addInputEmail ? (
        <>
          <Input
            type="email"
            label="user@email.com"
            {...(addInputEmail
              ? register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "El formato de email es incorrecto.",
                  },
                })
              : null)}
            isInvalid={errors.email ? true : false}
            errorMessage={errors.email?.message}
            variant={errors.email ? "bordered" : "flat"}
            defaultValue={watch().email}
          />

          <Button onClick={ocultarInputEmail}>ocultar</Button>
        </>
      ) : (
        <Button onClick={mostrarInputEmail}>agregar email</Button>
      )}

      {addInputObservaciones ? (
        <>
          <Textarea
            label="observaciones"
            {...(addInputObservaciones ? register("observaciones") : null)}
            defaultValue={watch().observaciones}
          />
          <Button onClick={ocultarInputObservaciones}>ocultar</Button>
        </>
      ) : (
        <Button onClick={mostrarInputObservaciones}>
          agregar observaciones
        </Button>
      )}

      <Button type="submit" isDisabled={isSubmitting}>
        Guardar
      </Button>
    </form>
  );
};

export default FormCliente;
