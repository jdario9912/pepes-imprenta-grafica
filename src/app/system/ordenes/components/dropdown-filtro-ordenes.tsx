import { iconos } from "@/components/icons";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const DropdownFiltroOrdenes = ({
  handleFiltroFecha,
}: {
  handleFiltroFecha: (filtro: FechaOrden | null) => void;
}) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" color="primary" startContent={iconos.filtro}>
          Filtrar
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="filtro ordenes">
        <DropdownItem
          key="todas"
          onClick={() => handleFiltroFecha(null)}
          className="text-slate-800"
        >
          Todas
        </DropdownItem>
        <DropdownItem
          key="yesterday"
          onClick={() => handleFiltroFecha("yesterday")}
          className="text-danger"
        >
          De ayer
        </DropdownItem>
        <DropdownItem
          key="today"
          onClick={() => handleFiltroFecha("today")}
          className="text-warning"
        >
          De hoy
        </DropdownItem>
        <DropdownItem
          key="tomorrow"
          onClick={() => handleFiltroFecha("tomorrow")}
          className="text-success"
        >
          De mañana
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownFiltroOrdenes;
