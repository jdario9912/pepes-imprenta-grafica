"use client";

import { iconos } from "@/components/icons";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const BtnEditarOrden = ({ producto, id }: { producto: string; id: number }) => {
  const router = useRouter();
  const handleClick = () =>
    router.push(`/system/ordenes/editar/producto/${producto}/${id}`);

  return (
    <Button
      isIconOnly
      onClick={handleClick}
      className="absolute right-10 bottom-10 z-10 shadow-md shadow-slate-100/50"
      size="lg"
      color="warning"
    >
      {iconos.editar}
    </Button>
  );
};

export default BtnEditarOrden;
