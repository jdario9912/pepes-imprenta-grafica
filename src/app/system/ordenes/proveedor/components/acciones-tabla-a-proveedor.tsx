import { Button, Tooltip } from "@nextui-org/react";
import CambiarEstado from "../../components/cambiar-estado";
import { useRouter } from "next/navigation";
import { BtnAccionesTabla } from "@/types/botones";
import { uuid } from "@/libs/uuid";
import { iconos } from "@/components/icons";
import WrapperBtnAccionesTabla from "@/components/wrapper-btn-acciones-tabla";
import { OrdenAProveedor } from "@/types/orden";
import LabelBtnAccion from "@/app/system/components/label-btn-accion";

const AccionesTablaAProveedor = ({
  orden,
  disabledKeys,
}: {
  orden: OrdenAProveedor;
  disabledKeys: string[];
}) => {
  const router = useRouter();
  const id = orden.id;
  const producto = orden.producto;

  const handleVerOrden = () =>
    router.push(`/system/pdf/producto/${producto}/${id}`);

  const handleEditar = () =>
    router.push(`/system/ordenes/editar/producto/${producto}/${id}`);

  const botones: BtnAccionesTabla[] = [
    {
      id: uuid(),
      accion: handleVerOrden,
      icono: iconos.verOrden,
      texto: "ver orden",
    },
    {
      id: uuid(),
      accion: handleEditar,
      icono: iconos.editar,
      texto: "editar",
    },
  ];

  return (
    <WrapperBtnAccionesTabla>
      <>
        {botones.map(({ id, accion, icono, texto }) => (
          <Button
            key={id}
            onClick={accion}
            startContent={icono}
            color="secondary"
            variant="solid"
          >
            <LabelBtnAccion>{texto}</LabelBtnAccion>
          </Button>
        ))}

        <CambiarEstado
          id={orden.id}
          producto={orden.producto}
          disabledKeys={disabledKeys}
          nro_orden={orden.nro_orden}
        />
      </>
    </WrapperBtnAccionesTabla>
  );
};

export default AccionesTablaAProveedor;
