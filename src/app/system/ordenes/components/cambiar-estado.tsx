"use client";

import { iconos } from "@/components/icons";
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
import { botonesCambiarEstado } from "../libs/botones-cambiar-estado";

type CambiarEstadoProps = {
  disabledKeys?: string[];
  producto: string;
  id: number;
  nro_orden: number;
};

const CambiarEstado = ({
  producto,
  id,
  disabledKeys,
  nro_orden,
}: CambiarEstadoProps) => {
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
          <LabelBtnAccion>estado</LabelBtnAccion>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" disabledKeys={disabledKeys}>
        {botonesCambiarEstado().map(({ icono, label }) => (
          <DropdownItem
            key={label}
            onClick={() => handleCambiarEstado(label)}
            startContent={loading ? null : icono}
          >
            {label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CambiarEstado;
