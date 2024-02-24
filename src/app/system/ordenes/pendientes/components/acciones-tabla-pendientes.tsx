import { OrdenPendiente } from "@/types/orden-pendiente";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import CambiarEstado from "../../components/cambiar-estado";

const AccionesTablaPendientes = ({
  orden,
  disabledKeys,
}: {
  orden: OrdenPendiente;
  disabledKeys: string[];
}) => {
  const id = orden.id;
  const producto = orden.producto;

  return (
    <div>
      <Button as={Link} href={`/system/pdf/producto/${producto}/${id}`}>
        Ver orden
      </Button>
      <Button
        as={Link}
        href={`/system/ordenes/editar/producto/${producto}/${id}`}
      >
        Editar
      </Button>
      <CambiarEstado orden={orden} disabledKeys={disabledKeys} />
    </div>
  );
};

export default AccionesTablaPendientes;
