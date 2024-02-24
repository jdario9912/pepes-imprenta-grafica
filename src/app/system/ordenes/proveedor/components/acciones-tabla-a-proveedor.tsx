import { Button } from "@nextui-org/react";
import Link from "next/link";
import CambiarEstado from "../../components/cambiar-estado";
import { OrdenAProveedor } from "@/types/orden-a-proveedor";

const AccionesTablaAProveedor = ({
  orden,
  disabledKeys,
}: {
  orden: OrdenAProveedor;
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

export default AccionesTablaAProveedor;
