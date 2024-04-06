"use client";

import { iconos } from "@/components/icons";
import { errorToast, succesToast } from "@/libs/client/toast";
import { Button, Input } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { cambiarNombre } from "../../libs/server-actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type Props = { id: number; nombre: string };

const FormCambiarNombreEmpleado = ({ id, nombre }: Props) => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { handleSubmit, formState, register } =
    useForm<Pick<Empleado, "nickname">>();
  const { isLoading, errors } = formState;

  const onSubmit: SubmitHandler<Pick<Empleado, "nickname">> = async (data) => {
    try {
      setLoading(true);

      await cambiarNombre(id, data.nickname);

      const params = new URLSearchParams(searchParams);

      params.set("revalidar", id.toString());

      replace(`${pathname}?${params.toString()}`);

      setLoading(false);

      succesToast("Nombre actualizado.");
    } catch {
      errorToast("Algo salió mal.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-x-2">
      <Input
        autoFocus
        label="cambiar nombre"
        type="text"
        placeholder="Usuario"
        color={errors.nickname ? "danger" : "primary"}
        variant={errors.nickname ? "bordered" : "flat"}
        {...register("nickname", {
          required: "El nuevo nombre es requerido.",
        })}
        errorMessage={errors.nickname?.message}
        endContent={<span className="text-slate-800">{iconos.persona}</span>}
        defaultValue={nombre}
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

export default FormCambiarNombreEmpleado;
