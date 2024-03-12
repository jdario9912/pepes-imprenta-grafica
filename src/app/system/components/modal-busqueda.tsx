"use client";

import { OrdenEncontrada } from "@/types/orden";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ModalBusqueda = ({
  ordenEncontrada,
  handleModal,
  setHandleModal,
}: {
  ordenEncontrada?: OrdenEncontrada;
  handleModal: boolean;
  setHandleModal: (state: boolean) => void;
}) => {
  const router = useRouter();

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleVerPdf = () => {
    router.push(
      `/system/pdf/producto/${ordenEncontrada?.producto}/${ordenEncontrada?.id}`
    );

    (() => onClose())();
  };

  useEffect(() => {
    if (handleModal) onOpen();
    else onClose();
  }, [handleModal]);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Orden</ModalHeader>
            <ModalBody>
              <p>{ordenEncontrada?.estado}</p>
              <p>{ordenEncontrada?.nombre}</p>
              <p>{ordenEncontrada?.producto}</p>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  onClose();
                  setHandleModal(false);
                }}
              >
                Cerrar
              </Button>
              <Button color="primary" onPress={handleVerPdf}>
                Ver pdf
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalBusqueda;
