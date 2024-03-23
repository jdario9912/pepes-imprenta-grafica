"use client";

import { iconos } from "@/components/icons";
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
import { useState } from "react";
import LabelBtnAccion from "../../components/label-btn-accion";

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
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleCambiarEstado = async (estado: string) => {
    setLoading(true);

    await cambiarEstadoOrden(producto, id, estado);

    const params = new URLSearchParams(searchParams);

    params.set("nro-orden", nro_orden.toString());

    replace(`${pathname}?${params.toString()}`);

    setLoading(false);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          isLoading={loading}
          startContent={iconos.cambiarEstado}
          color="secondary"
          variant="solid"
        >
          <LabelBtnAccion>cambiar estado</LabelBtnAccion>
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
