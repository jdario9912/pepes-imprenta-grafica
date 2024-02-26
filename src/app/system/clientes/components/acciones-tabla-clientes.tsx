"use client";

import IconoBtnAccionesTablas from "@/components/icono-btn-acciones-tablas";
import { iconos } from "@/components/icons";
import LabelBtnAccionesTablas from "@/components/label-btn-acciones-tablas";
import WrapperBtnAccionesTabla from "@/components/wrapper-btn-acciones-tabla";
import { uuid } from "@/libs/uuid";
import { BtnAccionesTabla } from "@/types/botones";
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

  const handleCrear = () => router.push(`/system/ordenes/crear/${id}`);

  const handleEditar = () => router.push(`/system/clientes/editar/${id}`);

  const botones: BtnAccionesTabla[] = [
    {
      id: uuid(),
      accion: handleCrear,
      icono: iconos.crearOrden,
      texto: "crear orden",
    },
    { id: uuid(), accion: handleEditar, icono: iconos.editar, texto: "editar" },
    { id: uuid(), accion: onOpen, icono: iconos.detalles, texto: "detalles" },
  ];

  return (
    <>
      <WrapperBtnAccionesTabla>
        <>
          {botones.map(({ id, accion, icono, texto }) => (
            <Button key={id} onClick={accion}>
              <IconoBtnAccionesTablas icono={icono} />
              <LabelBtnAccionesTablas texto={texto} />
            </Button>
          ))}
        </>
      </WrapperBtnAccionesTabla>

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
    </>
  );
};

export default AccionesTablaClientes;
