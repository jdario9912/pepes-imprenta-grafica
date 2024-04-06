"use client";

import { iconos } from "@/components/icons";
import { errorToast, succesToast } from "@/libs/client/toast";
import { Button, Input } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { cambiarEmail } from "../../libs/server-actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type Props = { id: number; email: string };

const FormCambiarEmailEmpleado = ({ id, email }: Props) => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { handleSubmit, formState, register } =
    useForm<Pick<Empleado, "email">>();
  const { isLoading, errors } = formState;

  const onSubmit: SubmitHandler<Pick<Empleado, "email">> = async (data) => {
    try {
      setLoading(true);

      await cambiarEmail(id, data.email!);

      const params = new URLSearchParams(searchParams);

      params.set("revalidar", id.toString());

      replace(`${pathname}?${params.toString()}`);

      setLoading(false);

      succesToast("Email actualizado.");
    } catch {
      errorToast("Algo salió mal.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-x-2">
      <Input
        autoFocus
        label="cambiar email"
        type="email"
        placeholder="usuario@email.com"
        color={errors.email ? "danger" : "primary"}
        variant={errors.email ? "bordered" : "flat"}
        {...register("email", {
          required: "El nuevo email es requerido.",
        })}
        errorMessage={errors.email?.message}
        endContent={<span className="text-slate-800">{iconos.email}</span>}
        defaultValue={email}
      />

      <Button
        color="primary"
        variant="solid"
        type="submit"
        startContent={iconos.guardar}
        isLoading={isLoading}
        isDisabled={isLoading}
        isIconOnly
      />
    </form>
  );
};

export default FormCambiarEmailEmpleado;
