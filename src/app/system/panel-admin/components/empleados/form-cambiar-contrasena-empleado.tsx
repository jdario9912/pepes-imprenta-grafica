"use client";

import { iconos } from "@/components/icons";
import { actualizarPassword } from "@/libs/client/axios";
import { errorToast, succesToast } from "@/libs/client/toast";
import {
  Button,
  Input,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

type FormEditarEmpleadoProps = { empleado: Empleado };

const FormEditarEmpleado = ({ empleado }: FormEditarEmpleadoProps) => {
  const { handleSubmit, formState, register } = useForm<Empleado>();
  const { isLoading, errors, isSubmitSuccessful } = formState;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await actualizarPassword(empleado.id || 0, data);

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
