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

const AccionesTablaPendientes = ({ orden }: { orden: OrdenePendiente }) => {
  const id = orden.id;
  const producto = orden.producto;

  const handleCambiarEstado = async (estado: string) =>
    cambiarEstadoOrden(producto, id, estado);

  return (
    <div>
      <Button as={Link} href={`/system/pdf/producto/${producto}/${id}`}>
        Ver orden
      </Button>
      <Button>Editar</Button>
      <Dropdown>
        <DropdownTrigger>
          <Button>Cambiar estado</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {estadoOrden
            .filter((estado) => estado !== "pendiente")
            .map((estado) => (
              <DropdownItem
                key={estado}
                onClick={() => handleCambiarEstado(estado)}
              >
                {estado}
              </DropdownItem>
            ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default AccionesTablaPendientes;
