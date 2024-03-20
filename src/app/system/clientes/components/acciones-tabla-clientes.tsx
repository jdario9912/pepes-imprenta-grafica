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
import CampoVacio from "./campo-vacio";

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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
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
