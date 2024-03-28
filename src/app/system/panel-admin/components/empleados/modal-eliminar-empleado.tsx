"use client";

import { iconos } from "@/components/icons";
// import { eliminarEmpleado } from "@/libs/client/axios";
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
import { eliminarEmpleado } from "../../libs/server-actions";
import { errorToast } from "@/libs/client/toast";

type ModalEliminarEmpleadoProps = { empleado: Empleado };

const ModalEliminarEmpleado = ({empleado}: ModalEliminarEmpleadoProps) => {
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleEliminar = async (id: number) => {
    try {
      
      setLoading(true);
  
      await eliminarEmpleado(id);
  
      const params = new URLSearchParams(searchParams);
  
      params.set("id-empleado", id.toString());
  
      replace(`${pathname}?${params.toString()}`);
      setLoading(false);
      onClose();
    } catch (error) {
      setLoading(false);

      errorToast("Algo salio mal.")
    }
  };

  return (
    <>
      <Button startContent={iconos.eliminar} onClick={onOpen} color="danger">
        eliminar
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Eliminar empleado
              </ModalHeader>
              <ModalBody>
                <p>¿Estás seguro de eliminar a {empleado.nickname}?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="solid" onPress={onClose}>
                  cancelar
                </Button>

                <Button
                  color="danger"
                  variant="light"
                  onPress={() => handleEliminar(empleado.id || 0)}
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

export default ModalEliminarEmpleado;
