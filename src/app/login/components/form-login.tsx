"use client";

import { Button, CardBody, CardFooter, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { errorsLogin } from "../libs/errors";
import { errorToast } from "@/libs/client/toast";
import { iconos } from "@/components/icons";

export default function FormLogin() {
  const [esVisible, setEsVisible] = useState(false);
  const toggleVisibilidad = () => setEsVisible(!esVisible);
  const [loginOk, setLoginOk] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<FormLogin>();

  const { errors, isSubmitting } = formState;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (res?.ok) setLoginOk(true);
      errorsLogin(res?.status);

      router.push("/system/ordenes/pendientes");
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorToast(error.message);
        return;
      }
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <CardBody className="gap-y-4">
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
          endContent={iconos.email}
          color="primary"
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
          color="primary"
        />
      </CardBody>
      <CardFooter>
        <Button
          type="submit"
          isLoading={isSubmitting}
          disabled={loginOk}
          variant="solid"
          color="primary"
        >
          Entrar
        </Button>
      </CardFooter>
    </form>
  );
}
