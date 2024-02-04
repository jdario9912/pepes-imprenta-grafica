"use client";

import { useState } from "react";
import BotonesProductos from "./botones-productos";
import FormProducto from "./form-producto";
import { productosModel } from "../services/productos-index";

const WraperFormCrearOrden = () => {
  const [productoElegido, setProductoElegido] = useState("");

  return (
    <>
      <BotonesProductos setProductoElegido={setProductoElegido} />
      <FormProducto>
        <div>
          {productoElegido && productosModel[productoElegido].inputs}
        </div>
      </FormProducto>
    </>
  );
};

export default WraperFormCrearOrden;
