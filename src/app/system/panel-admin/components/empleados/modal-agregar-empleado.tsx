"use client";

import { iconos } from "@/components/icons";
import { Button, Modal, useDisclosure } from "@nextui-org/react";
import FormAgregarEmpleado from "./form-agrear-empleado";

const ModalAgregarEmpleado = () => {
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        variant="bordered"
        startContent={iconos.plus}
      >
        empleado
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <FormAgregarEmpleado onClose={onClose} />
      </Modal>
    </>
  );
};

export default ModalAgregarEmpleado;
