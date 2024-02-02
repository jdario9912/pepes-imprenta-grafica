"use client";

import { crearCliente } from "@/libs/client/axios";
import { Button, Input, Textarea } from "@nextui-org/react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const FormNuevoCliente = () => {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<FormNuevoCliente>();

  const { errors } = formState;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await crearCliente(data as FormNuevoCliente)

      const id = res.data.id
      
      router.push(`/system/crear-orden/${id}`);
    } catch (error: unknown) {
      if (error instanceof AxiosError)
        console.log(error.response?.data.mensaje);
      router.push('/login')
    }
  });
  
  return (
    <form onSubmit={onSubmit}>
      <Input type="text" label="nombre" {...register("nombre")} />
      <Input type="text" label="telefono" {...register("telefono")} />
      <Input type="email" label="email" {...register("email")} />
      <Textarea label="observaciones" {...register("observaciones")} />
      <Button type="submit">Guardar</Button>
    </form>
  );
};

export default FormNuevoCliente;
