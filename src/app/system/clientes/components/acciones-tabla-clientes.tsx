"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

const AccionesTablaClientes = ({ cliente }: { cliente: Cliente }) => {
  const router = useRouter();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { id, nombre, telefono, email, observaciones } = cliente;

  const handleClick = () => router.push(`/system/crear-orden/${id}`);

  return (
    <div>
      <Button onClick={handleClick}>crear orden</Button>
      <Button>ver ordenes</Button>
      <Button onPress={onOpen}>detalles</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{nombre}</ModalHeader>
              <ModalBody>
                <p>{telefono}</p>
                <p>{email}</p>
                <p>{observaciones}</p>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Cerrar</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AccionesTablaClientes;