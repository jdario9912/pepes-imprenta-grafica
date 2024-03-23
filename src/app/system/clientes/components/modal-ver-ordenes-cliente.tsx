"use client";

import { iconos } from "@/components/icons";
import { obtenerOrdenesCliente } from "@/libs/client/axios";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import LabelBtnAccion from "../../components/label-btn-accion";
import { useState } from "react";
import { OrdenCliente } from "@/types/orden";
import { formatearFecha } from "@/libs/client/moment";

const columns: string[] = ["atendió", "producto", "creado", "entrega"];

const ModalVerOrdenesCliente = ({ cliente }: { cliente: Cliente }) => {
  const { id, nombre } = cliente;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(false);
  const [ordenes, setOrdenes] = useState<OrdenCliente[]>([]);

  const handleClick = async () => {
    onOpen();
    setLoading(true);

    const res = await obtenerOrdenesCliente(id || 0);

    setOrdenes(res);
    setLoading(false);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        startContent={iconos.ordenes}
        color="primary"
        variant="solid"
      >
        <LabelBtnAccion>ver ordenes</LabelBtnAccion>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-x-2">
                <h2>{nombre}</h2>
              </ModalHeader>
              <ModalBody>
                {loading ? (
                  <Spinner label="Cargando..." color="primary" size="lg" />
                ) : (
                  <Table aria-label="Ordenes de cliente">
                    <TableHeader>
                      {columns.map((columna) => (
                        <TableColumn key={columna}>{columna}</TableColumn>
                      ))}
                    </TableHeader>
                    <TableBody>
                      {ordenes.map((orden) => (
                        <TableRow key={orden.nro_orden}>
                          <TableCell>{orden.atendido_por}</TableCell>
                          <TableCell>{orden.producto}</TableCell>
                          <TableCell>
                            {formatearFecha(orden.fecha_creacion)}
                          </TableCell>
                          <TableCell>
                            {formatearFecha(orden.fecha_entrega)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
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

export default ModalVerOrdenesCliente;
