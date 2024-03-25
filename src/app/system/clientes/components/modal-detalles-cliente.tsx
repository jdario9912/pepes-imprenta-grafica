"use client";

import { iconos } from "@/components/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import CampoVacio from "./campo-vacio";
import { useRouter } from "next/navigation";
import LabelBtnAccion from "../../components/label-btn-accion";

const ModalDetallesCliente = ({ cliente }: { cliente: Cliente }) => {
  const router = useRouter();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { id, nombre, telefono, email, observaciones } = cliente;

  const handleEditar = () => router.push(`/system/clientes/editar/${id}`);

  return (
    <>
      <Button
        onClick={() => onOpen()}
        startContent={iconos.detalles}
        color="primary"
        variant="solid"
      >
        <LabelBtnAccion>detalles</LabelBtnAccion>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-x-2">
                <Button
                  isIconOnly
                  variant="solid"
                  color="primary"
                  onClick={handleEditar}
                >
                  {iconos.editar}
                </Button>
                <h2>{nombre}</h2>
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center gap-x-4">
                  {iconos.telefono}
                  {telefono ? <p>{telefono}</p> : <CampoVacio />}
                </div>

                <div className="flex items-center gap-x-4">
                  {iconos.email}
                  {email ? <p>{email}</p> : <CampoVacio />}
                </div>

                <div className="flex items-center gap-x-4">
                  {iconos.observaciones}
                  {observaciones ? <p>{observaciones}</p> : <CampoVacio />}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose} color="primary" variant="light">
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDetallesCliente;
