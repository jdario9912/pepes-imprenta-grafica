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

const CambiarEstado = ({
  orden,
  disabledKeys,
}: {
  orden: OrdenePendiente;
  disabledKeys?: string[];
}) => {
  const producto = orden.producto;
  const id = orden.id;

  const handleCambiarEstado = async (estado: string) =>
    cambiarEstadoOrden(producto, id, estado);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button>Cambiar estado</Button>
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
