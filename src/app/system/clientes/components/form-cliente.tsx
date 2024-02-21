"use client";

import { crearCliente, editarCliente } from "@/libs/client/axios";
import { Button, Input, Textarea } from "@nextui-org/react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const FormCliente = ({ cliente }: { cliente?: Cliente }) => {
  const router = useRouter();

  const { register, handleSubmit, formState, watch, setValue } =
    useForm<Cliente>({
      defaultValues: cliente ? cliente : {},
    });

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
      router.push(`/system/ordenes/crear-orden/${id}`);
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

      <Input
        type="email"
        label="email"
        {...register("email")}
        defaultValue={watch().email}
      />

      <Textarea
        label="observaciones"
        {...register("observaciones")}
        defaultValue={watch().observaciones}
      />

      <Button type="submit" isDisabled={isSubmitting}>
        Guardar
      </Button>
    </form>
  );
};

export default FormCliente;
