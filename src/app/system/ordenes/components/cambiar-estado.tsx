"use client";

import IconoBtnAccionesTablas from "@/components/icono-btn-acciones-tablas";
import { iconos } from "@/components/icons";
import LabelBtnAccionesTablas from "@/components/label-btn-acciones-tablas";
import { estadoOrden } from "@/libs/listas";
import { cambiarEstadoOrden } from "@/libs/server-actions/axios";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CambiarEstado = ({
  producto,
  id,
  disabledKeys,
  nro_orden,
}: {
  disabledKeys?: string[];
  producto: string;
  id: number;
  nro_orden: number;
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleCambiarEstado = async (estado: string) => {
    await cambiarEstadoOrden(producto, id, estado);

    const params = new URLSearchParams(searchParams);

    params.set("nro-orden", nro_orden.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button>
          <IconoBtnAccionesTablas icono={iconos.cambiarEstado} />
          <LabelBtnAccionesTablas texto="estado" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" disabledKeys={disabledKeys}>
        {estadoOrden.map((estado) => (
          <DropdownItem
            key={estado}
            onClick={() => handleCambiarEstado(estado)}
          >
            {estado}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CambiarEstado;
