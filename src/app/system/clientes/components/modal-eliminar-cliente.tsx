"use client";

import { iconos } from "@/components/icons";
import { eliminarCliente } from "@/libs/client/axios";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type ModalEliminarClienteProps = { cliente: Cliente };

const ModalEliminarCliente = ({ cliente }: ModalEliminarClienteProps) => {
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();const pathname = usePathname();
  const { replace } = useRouter();

  const handleEliminar = async (id: number) => {
    setLoading(true);

    await eliminarCliente(id);

    const params = new URLSearchParams(searchParams);

    params.set("id-cliente", id.toString());

    replace(`${pathname}?${params.toString()}`);
    setLoading(false);
    onClose();
  };

  return (
    <>
      <Button isIconOnly onClick={onOpen} color="danger">
        {iconos.eliminar}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Eliminar cliente
              </ModalHeader>
              <ModalBody>
                <p>¿Estás seguro de eliminar a {cliente.nombre}?</p>
                <p>Se borrarán todas sus órdenes.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="solid" onPress={onClose}>
                  cancelar
                </Button>

                <Button
                  color="danger"
                  variant="light"
                  onPress={() => handleEliminar(cliente.id || 0)}
                  endContent={iconos.eliminar}
                  isLoading={loading}
                >
                  eliminar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalEliminarCliente;
