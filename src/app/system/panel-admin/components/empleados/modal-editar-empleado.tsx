"use client";

import { iconos } from "@/components/icons";
import { Button, Modal, useDisclosure } from "@nextui-org/react";
import FormCambiarContrasenaEmpleado from "./form-cambiar-contrasena-empleado";

type ModalEditarEmpleadoProps = { empleado: Empleado };
const ModalEditarEmpleado = ({ empleado }: ModalEditarEmpleadoProps) => {
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Button startContent={iconos.editar} onClick={onOpen} color="primary">
        editar
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <FormCambiarContrasenaEmpleado empleado={empleado} onClose={onClose} />
      </Modal>
    </>
  );
};

export default ModalEditarEmpleado;
