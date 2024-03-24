"use client";

import { iconos } from "@/components/icons";
import WrapperBtnAccionesTabla from "@/components/wrapper-btn-acciones-tabla";
import { uuid } from "@/libs/uuid";
import { BtnAccionesTabla } from "@/types/botones";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import LabelBtnAccion from "../../components/label-btn-accion";
import ModalDetallesCliente from "./modal-detalles-cliente";
import ModalVerOrdenesCliente from "./modal-ver-ordenes-cliente";
import { eliminarCliente } from "@/libs/client/axios";
import ModalEliminarCliente from "./modal-eliminar-cliente";

type AccionesTablaClientesProps = { cliente: Cliente; isAdmin: boolean };

const AccionesTablaClientes = ({
  cliente,
  isAdmin,
}: AccionesTablaClientesProps) => {
  const router = useRouter();
  const { id } = cliente;

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
  ];

  return (
    <>
      <WrapperBtnAccionesTabla>
        <>
          {botones.map(({ id, accion, icono, texto }) => (
            <Button
              key={id}
              onClick={accion}
              startContent={icono}
              color="primary"
              variant="solid"
            >
              <LabelBtnAccion>{texto}</LabelBtnAccion>
            </Button>
          ))}

          <ModalVerOrdenesCliente cliente={cliente} />

          <ModalDetallesCliente cliente={cliente} />

          {isAdmin && (
            <ModalEliminarCliente cliente={cliente} />
          )}
        </>
      </WrapperBtnAccionesTabla>
    </>
  );
};

export default AccionesTablaClientes;
