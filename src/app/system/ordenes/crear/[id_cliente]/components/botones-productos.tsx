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
    <>
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
    </>
  );
};

export default BotonesProductos;
