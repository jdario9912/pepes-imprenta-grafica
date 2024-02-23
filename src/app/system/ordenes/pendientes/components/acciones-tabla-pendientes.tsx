import { estadoOrden } from "@/libs/listas";
import { cambiarEstadoOrden } from "@/libs/server-actions/axios";
import { OrdenePendiente } from "@/types/ordenes-pendientes";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import CambiarEstado from "../../components/cambiar-estado";

const AccionesTablaPendientes = ({ orden }: { orden: OrdenePendiente }) => {
  const id = orden.id;
  const producto = orden.producto;

  return (
    <div>
      <Button as={Link} href={`/system/pdf/producto/${producto}/${id}`}>
        Ver orden
      </Button>
      <Button>Editar</Button>
      <CambiarEstado orden={orden} disabledKeys={["pendiente"]} />
    </div>
  );
};

export default AccionesTablaPendientes;
