import { iconos } from "@/components/icons";
import {
  Button,
  Input,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";

type FormEditarEmpleadoProps = { empleado: Empleado };

const FormEditarEmpleado = ({ empleado }: FormEditarEmpleadoProps) => {
  const { handleSubmit, formState, register } = useForm<Empleado>();
  const { isLoading, errors } = formState;

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    // CONTINUAR ACA

    // await editarEmpleado(id);
    // const params = new URLSearchParams(searchParams);
    // params.set("id-cliente", id.toString());
    // replace(`${pathname}?${params.toString()}`);
    // onClose();
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
                cancelar
              </Button>

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
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </form>
  );
};

export default FormEditarEmpleado;
