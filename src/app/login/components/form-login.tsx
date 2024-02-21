"use client";

import { Button, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function FormLogin() {
  const [esVisible, setEsVisible] = useState(false);
  const toggleVisibilidad = () => setEsVisible(!esVisible);
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<FormLogin>();

  const { errors } = formState;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signIn("credentials", {
        ...data,
        redirect: false,
      });

      router.push("/system/ordenes/pendientes");
    } catch (error: unknown) {
      // tengo que manejar este error

      console.log(error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Input
        label="Email"
        type="email"
        placeholder="usuario@email.com"
        isInvalid={errors.email ? true : false}
        {...register("email", {
          required: {
            value: true,
            message: "Email requerido.",
          },
        })}
        errorMessage={errors.email?.message}
        variant={errors.email ? "bordered" : "flat"}
      />

      <Input
        type={esVisible ? "text" : "password"}
        label="password"
        placeholder="*******"
        isInvalid={errors.password ? true : false}
        {...register("password", {
          required: {
            value: true,
            message: "Password requerida",
          },
        })}
        errorMessage={errors.password?.message}
        variant={errors.password ? "bordered" : "flat"}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibilidad}
          >
            {esVisible ? (
              <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
      />

      <Button type="submit">Entrar</Button>
    </form>
  );
}
