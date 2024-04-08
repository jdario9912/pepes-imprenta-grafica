"use client";

import { iconos } from "@/components/icons";
import WrapperBtnAccionesTabla from "@/components/wrapper-btn-acciones-tabla";
import { BtnAccionesTabla } from "@/types/botones";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import LabelBtnAccion from "../../components/label-btn-accion";
import ModalDetallesCliente from "./modal-detalles-cliente";
import ModalVerOrdenesCliente from "./modal-ver-ordenes-cliente";
import ModalEliminarCliente from "./modal-eliminar-cliente";
import { useId } from "react";
import { uuid } from "@/libs/uuid";

type AccionesTablaClientesProps = { cliente: Cliente; isAdmin: boolean };

const AccionesTablaClientes = ({
  cliente,
  isAdmin,
}: AccionesTablaClientesProps) => {
  const router = useRouter();
  const idBtn = uuid();
  const { id } = cliente;

  const handleCrear = () => router.push(`/system/ordenes/crear/${id}`);

  const handleEditar = () => router.push(`/system/clientes/editar/${id}`);

  const botones: BtnAccionesTabla[] = [
    {
      id: idBtn,
      accion: handleCrear,
      icono: iconos.crearOrden,
      texto: "crear orden",
    },
    { id: idBtn, accion: handleEditar, icono: iconos.editar, texto: "editar" },
  ];

  return (
    <>
      <WrapperBtnAccionesTabla>
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

        {isAdmin && <ModalEliminarCliente cliente={cliente} />}
      </WrapperBtnAccionesTabla>
    </>
  );
};

export default AccionesTablaClientes;
