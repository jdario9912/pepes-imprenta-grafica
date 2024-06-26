"use client";

import { iconos } from "@/components/icons";
import { obtenerOrdenesCliente } from "@/libs/client/axios";
import {
  Button,
  Chip,
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
import { ContadorPedidos, agruparOrdenes } from "../libs/agrupar-ordenes";
import { useRouter } from "next/navigation";

const columns: string[] = [
  "atendió",
  "producto",
  "creado",
  "entrega",
  "acciones",
];

const ModalVerOrdenesCliente = ({ cliente }: { cliente: Cliente }) => {
  const router = useRouter();
  const { id, nombre } = cliente;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(false);
  const [ordenes, setOrdenes] = useState<OrdenCliente[]>([]);
  const [ordenesAgrupadas, setOrdenesAgrupadas] = useState<ContadorPedidos[]>(
    []
  );

  const handleVerOrden = (producto: string, id: number) =>
    router.push(`/system/pdf/producto/${producto}/${id}`);

  const handleModal = async () => {
    onOpen();
    setLoading(true);

    const res = await obtenerOrdenesCliente(id || 0);

    const productosAgrupados = agruparOrdenes(res);

    setOrdenesAgrupadas(productosAgrupados);
    setOrdenes(res);
    setLoading(false);
  };

  return (
    <>
      <Button
        onClick={handleModal}
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
                  <>
                    <div className="flex flex-wrap gap-2">
                      {ordenesAgrupadas.map((orden) => (
                        <Chip
                          key={orden.producto}
                          color="primary"
                          variant="bordered"
                        >
                          {orden.producto}
                          <span className="p-1 font-semibold">
                            {orden.cantidad}
                          </span>
                        </Chip>
                      ))}
                    </div>

                    <Table aria-label="Ordenes de cliente">
                      <TableHeader>
                        {columns.map((columna) => (
                          <TableColumn key={columna}>{columna}</TableColumn>
                        ))}
                      </TableHeader>
                      <TableBody
                        emptyContent={`${cliente.nombre} no tiene órdenes registradas.`}
                      >
                        {ordenes.map((orden) => (
                          <TableRow key={orden.nro_orden} className="text-slate-800">
                            <TableCell>{orden.atendido_por}</TableCell>

                            <TableCell>{orden.producto}</TableCell>

                            <TableCell>
                              {formatearFecha(orden.fecha_creacion)}
                            </TableCell>

                            <TableCell>
                              {formatearFecha(orden.fecha_entrega)}
                            </TableCell>

                            <TableCell>
                              <Button
                                onClick={() =>
                                  handleVerOrden(orden.producto, orden.id)
                                }
                                startContent={iconos.verOrden}
                                color="primary"
                                variant="flat"
                              >
                                <LabelBtnAccion>ver orden</LabelBtnAccion>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose} color="primary" variant="light">Cerrar</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalVerOrdenesCliente;
