"use client";

import { crearCliente } from "@/libs/client/axios";
import { Button, Input, Textarea } from "@nextui-org/react";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const FormCliente = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  // si el id existe, obtener el cliente y cargar el formulario para editar, si no crear uno nuevo
  const { register, handleSubmit, formState } = useForm<Cliente>();

  const { errors, isSubmitting } = formState;

  const onSubmit = handleSubmit(async (data) => {
    try {
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
      />

      <Input type="email" label="email" {...register("email")} />

      <Textarea label="observaciones" {...register("observaciones")} />

      <Button type="submit" isDisabled={isSubmitting}>
        Guardar
      </Button>
    </form>
  );
};

export default FormCliente;
