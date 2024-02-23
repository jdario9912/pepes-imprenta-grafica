"use client";

import { useState } from "react";
import BotonesProductos from "./botones-productos";
import { productosModel } from "../services/productos-index";
import { Button } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form";
import * as querys from "@/libs/server-actions/axios";
import { useParams, useRouter } from "next/navigation";
import { AxiosError } from "axios";

const FormCrearOrdenProvider = ({ atendido_por }: { atendido_por: string }) => {
  const [productoElegido, setProductoElegido] = useState("");
  const params = useParams();
  const router = useRouter();

  const id_cliente = params.id_cliente;

  const methods = useForm({
    defaultValues: {
      entrega: 0,
      total: 0,
      id_cliente,
      atendido_por,
    },
  });

  const resetProducto = () => {
    setProductoElegido("");
    methods.reset();
  };

  const onSubmit = methods.handleSubmit(async (data) => {
    if (Number(data.total) < Number(data.entrega)) {
      methods.setError("entrega", {
        message: "El monto de entrega es mayor al importe total.",
      });
      return;
    }

    try {
      switch (productoElegido) {
        case "bonos": {
          await querys.crearBonoFetch(data);

          return;
        }
        case "diseños": {
          await querys.crearDisenoFetch(data);

          return;
        }
        case "impresiones": {
          await querys.crearImpresionFetch(data);

          return;
        }
        case "loma": {
          await querys.crearLomaFetch(data);

          return;
        }
        case "plotter": {
          await querys.crearPlotterFetch(data);

          return;
        }
        case "remeras": {
          await querys.crearRemeraFetch(data);

          return;
        }
        case "sellos": {
          await querys.crearSelloFetch(data);

          return;
        }
        case "talonarios": {
          await querys.crearTalonarioFetch(data);

          return;
        }
        case "tarjetas": {
          await querys.crearTarjetaFetch(data);

          return;
        }
        case "varios": {
          await querys.crearVariosFetch(data);

          return;
        }
        case "volantes": {
          await querys.crearVolanteFetch(data);

          return;
        }

        default:
          return;
      }
    } catch (error) {
      if (error instanceof AxiosError) console.log(error.response?.data);
    }
  });

  return (
    <>
      {productoElegido == "" ? (
        <BotonesProductos setProductoElegido={setProductoElegido} />
      ) : (
        <>
          <div>
            {productosModel[productoElegido].icono}
            {productoElegido}
          </div>
          <Button onClick={resetProducto}>cambiar producto</Button>
        </>
      )}
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          {productosModel[productoElegido]?.inputs}
        </form>
      </FormProvider>
    </>
  );
};

export default FormCrearOrdenProvider;
