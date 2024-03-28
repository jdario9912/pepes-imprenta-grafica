"use client";

import { iconos } from "@/components/icons";
import { errorToast, succesToast } from "@/libs/client/toast";
import {
  Button,
  Input,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { cambiarPassword } from "../../libs/server-actions";

type FormEditarEmpleadoProps = { empleado: Empleado; onClose: () => void };

const FormEditarEmpleado = ({ empleado, onClose }: FormEditarEmpleadoProps) => {
  const { handleSubmit, formState, register } = useForm<{ password: string }>();
  const { isLoading, errors, isSubmitSuccessful } = formState;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await cambiarPassword(empleado.id || 0, data.password);

      onClose();

      succesToast("Contraseña actualizada");
    } catch (error: unknown) {
      if (error instanceof AxiosError) errorToast(error.response?.data.mensaje);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Cambiar contraseña de {empleado.nickname}
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Nueva contraseña"
                type="password"
                placeholder="******"
                color={errors.password ? "danger" : "primary"}
                variant={errors.password ? "bordered" : "flat"}
                {...register("password", {
                  required: "La nueva contraseña es requerida.",
                })}
                errorMessage={errors.password?.message}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="solid" onPress={onClose}>
                {isSubmitSuccessful ? "cerrar" : "cancelar"}
              </Button>

              {!isSubmitSuccessful && (
                <Button
                  color="primary"
                  variant="bordered"
                  type="submit"
                  startContent={iconos.guardar}
                  isLoading={isLoading}
                  isDisabled={isLoading}
                >
                  guardar
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </form>
  );
};

export default FormEditarEmpleado;
