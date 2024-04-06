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
import FormCambiarContrasenaEmpleado from "./form-cambiar-contrasena-empleado";
import FormCambiarEmailEmpleado from "./form-cambiar-email-empleado";
import FormCambiarNombreEmpleado from "./form-cambiar-nombre-empleado";
import FormCambiarPermisosEmpleado from "./form-cambiar-permisos-empleado";

type ModalEditarEmpleadoProps = { empleado: Empleado };
const ModalEditarEmpleado = ({ empleado }: ModalEditarEmpleadoProps) => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        startContent={iconos.editar}
        onClick={onOpen}
        color="primary"
        variant="solid"
      >
        editar
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-slate-800">
                Editar {empleado.nickname}
              </ModalHeader>
              <ModalBody>
                <FormCambiarNombreEmpleado
                  id={empleado.id!}
                  nombre={empleado.nickname}
                />

                <FormCambiarEmailEmpleado
                  id={empleado.id!}
                  email={empleado.email!}
                />

                <FormCambiarContrasenaEmpleado empleado={empleado} />

                <FormCambiarPermisosEmpleado
                  id={empleado.id!}
                  permisos={empleado.permisos}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalEditarEmpleado;
