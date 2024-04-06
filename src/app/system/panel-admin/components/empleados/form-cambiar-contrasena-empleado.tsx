"use client";

import { iconos } from "@/components/icons";
import { errorToast, succesToast } from "@/libs/client/toast";
import { Button, Input } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { cambiarPassword } from "../../libs/server-actions";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type Props = { empleado: Empleado };

const FormCambiarContrasenaEmpleado = ({ empleado }: Props) => {
  const [esVisible, setEsVisible] = useState(false);
  const toggleVisibilidad = () => setEsVisible(!esVisible);

  const { handleSubmit, formState, register } =
    useForm<Pick<Empleado, "password">>();
  const { isLoading, errors } = formState;

  const onSubmit: SubmitHandler<Pick<Empleado, "password">> = async (data) => {
    try {
      await cambiarPassword(empleado.id!, data.password);

      succesToast("Contraseña actualizada");
    } catch {
      errorToast("Algo salió mal.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-x-2">
      <Input
        autoFocus
        label="cambiar contraseña"
        type={esVisible ? "text" : "password"}
        placeholder="******"
        color={errors.password ? "danger" : "primary"}
        variant={errors.password ? "bordered" : "flat"}
        {...register("password", {
          required: "La nueva contraseña es requerida.",
        })}
        errorMessage={errors.password?.message}
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

export default FormCambiarContrasenaEmpleado;
