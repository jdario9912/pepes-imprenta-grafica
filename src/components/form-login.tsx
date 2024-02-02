"use client";

import { login } from "@/libs/client/axios";
import { setToken } from "@/libs/client/localstorage";
import { Button, Input } from "@nextui-org/react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function FormLogin(){
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<FormLogin>();

  const { errors } = formState;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await login(data as FormLogin);
      setToken(res.data)
      router.push("/system");
    } catch (error: unknown) {
      if (error instanceof AxiosError)
        console.log(error.response?.data.mensaje);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="email"
        label="email"
        isInvalid={errors.email ? true : false}
        // isRequired
        {...register("email", {
          required: {
            value: true,
            message: "email requerido",
          },
        })}
      />
      {errors.email && <span className="text-red-500">campo requerido</span>}

      <Input
        type="password"
        label="password"
        isInvalid={errors.password ? true : false}
        // isRequired
        {...register("password", {
          required: {
            value: true,
            message: "password requerida",
          },
        })}
      />
      {errors.password && <span className="text-red-500">campo requerido</span>}

      <Button type="submit">Entrar</Button>
    </form>
  );
}