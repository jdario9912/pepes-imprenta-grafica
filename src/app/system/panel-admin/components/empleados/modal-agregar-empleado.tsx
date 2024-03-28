"use client";

import { iconos } from "@/components/icons";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const ModalAgregarEmpleado = () => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        startContent={iconos.plus}
        onPress={onOpen}
        color="primary"
        variant="bordered"
      >
        empleado
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Agregar empleado</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={iconos.persona}
                  label="nickname"
                  color="primary"
                  variant="flat"
                />

                <Input
                  endContent={iconos.email}
                  label="email"
                  placeholder="user@email.com"
                  color="primary"
                  variant="flat"
                />

                <Input
                  endContent={iconos.lock}
                  label="contraseña"
                  placeholder="******"
                  type="password"
                  color="primary"
                  variant="flat"
                />
                <div className="flex py-2 px-1 justify-between"></div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  cancelar
                </Button>
                <Button color="primary" onPress={onClose}>
                  guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAgregarEmpleado;
