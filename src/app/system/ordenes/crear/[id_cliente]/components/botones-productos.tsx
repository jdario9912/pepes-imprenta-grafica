"use client";

import { Button } from "@nextui-org/react";
import { botonesProductos } from "../services/productos-index";

const BotonesProductos = ({
  setProductoElegido,
}: {
  setProductoElegido: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleClick = (producto: string) => {
    setProductoElegido(producto);
  };

  return (
    <div className="flex flex-col gap-y-2">
      {botonesProductos.map(({ nombre, icono }) => (
        <Button
          key={nombre}
          onClick={() => handleClick(nombre)}
          variant="flat"
          color="primary"
          startContent={<span>{icono}</span>}
        >
          {nombre}
        </Button>
      ))}
    </div>
  );
};

export default BotonesProductos;
