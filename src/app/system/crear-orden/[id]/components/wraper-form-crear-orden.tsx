"use client";

import { useState } from "react";
import BotonesProductos from "./botones-productos";
import FormProductos from "./form-producto";
import { productosModel } from "../services/productos-index";

const WraperFormCrearOrden = () => {
  const [productoElegido, setProductoElegido] = useState("");

  return (
    <>
      <BotonesProductos setProductoElegido={setProductoElegido} />
      <FormProductos>
        <div>
          {productoElegido && productosModel[productoElegido].inputs}
        </div>
      </FormProductos>
    </>
  );
};

export default WraperFormCrearOrden;
