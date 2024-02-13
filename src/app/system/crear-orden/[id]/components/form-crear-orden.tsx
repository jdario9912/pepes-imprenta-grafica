"use client";

import { useState } from "react";
import BotonesProductos from "./botones-productos";
import { productosModel } from "../services/productos-index";
import { Button } from "@nextui-org/react";

const WraperFormCrearOrden = () => {
  const [productoElegido, setProductoElegido] = useState("");

  return (
    <>
      {productoElegido == "" ? (
        <BotonesProductos setProductoElegido={setProductoElegido} />
      ) : (
        <Button>cambiar producto</Button>
      )}
      {productosModel[productoElegido]?.inputs}
    </>
  );
};

export default WraperFormCrearOrden;
