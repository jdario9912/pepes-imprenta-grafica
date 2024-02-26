import { OrdenPendiente } from "@/types/orden-pendiente";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import CambiarEstado from "../../components/cambiar-estado";
import IconoBtnAccionesTablas from "@/components/icono-btn-acciones-tablas";
import LabelBtnAccionesTablas from "@/components/label-btn-acciones-tablas";
import { BtnAccionesTabla } from "@/types/botones";
import { useRouter } from "next/navigation";
import { iconos } from "@/components/icons";
import { uuid } from "@/libs/uuid";
import WrapperBtnAccionesTabla from "@/components/wrapper-btn-acciones-tabla";

const AccionesTablaPendientes = ({
  orden,
  disabledKeys,
}: {
  orden: OrdenPendiente;
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
          <Button key={id} onClick={accion}>
            <IconoBtnAccionesTablas icono={icono} />
            <LabelBtnAccionesTablas texto={texto} />
          </Button>
        ))}

        <CambiarEstado orden={orden} disabledKeys={disabledKeys} />
      </>
    </WrapperBtnAccionesTabla>
  );
};

export default AccionesTablaPendientes;
