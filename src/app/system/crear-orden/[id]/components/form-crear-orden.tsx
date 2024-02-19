"use client";

import { useState } from "react";
import BotonesProductos from "./botones-productos";
import { productosModel } from "../services/productos-index";
import { Button } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form";

const WraperFormCrearOrden = () => {
  const [productoElegido, setProductoElegido] = useState("");
  const methods = useForm({
    defaultValues: {
      entrega: 0,
      total: 0,
    },
  });

  const resetProducto = () => {
    setProductoElegido("");
    methods.reset();
  };

  const onSubmit = methods.handleSubmit((data) => {
    if (data.total < data.entrega) {
      methods.setError("entrega", {
        message: "El monto de entrega es mayor al importe total.",
      });
      return;
    }

    console.log(data);
  });

  return (
    <>
      {productoElegido == "" ? (
        <BotonesProductos setProductoElegido={setProductoElegido} />
      ) : (
        <Button onClick={resetProducto}>cambiar producto</Button>
      )}
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          {productosModel[productoElegido]?.inputs}
        </form>
      </FormProvider>
    </>
  );
};

export default WraperFormCrearOrden;
