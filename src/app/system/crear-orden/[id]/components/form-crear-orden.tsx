"use client";

import { useState } from "react";
import BotonesProductos from "./botones-productos";
import { productosModel } from "../services/productos-index";
import { Button } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form";
import * as querys from "@/libs/client/axios";
import { useParams, useRouter } from "next/navigation";
import { AxiosError } from "axios";

const FormCrearOrdenProvider = ({ atendido_por }: { atendido_por: string }) => {
  const [productoElegido, setProductoElegido] = useState("");
  const params = useParams();
  const router = useRouter();

  const id_cliente = params.id;

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
          const res = await querys.crearBonoFetch(data);
          console.log(res);

          break;
        }
        case "diseños": {
          const res = await querys.crearDisenoFetch(data);

          router.push(`/system/pdf/${res.data.nro_orden}`);

          break;
        }
        case "impresiones": {
          const res = await querys.crearImpresionFetch(data);
          console.log(res);
          break;
        }
        case "loma": {
          const res = await querys.crearLomaFetch(data);
          console.log(res);
          break;
        }
        case "plotter": {
          const res = await querys.crearPlotterFetch(data);
          console.log(res);
          break;
        }
        case "remeras": {
          const res = await querys.crearRemeraFetch(data);
          console.log(res);
          break;
        }
        case "sellos": {
          const res = await querys.crearSelloFetch(data);
          console.log(res);
          break;
        }
        case "talonarios": {
          const res = await querys.crearTalonarioFetch(data);
          console.log(res);
          break;
        }
        case "tarjetas": {
          const res = await querys.crearTarjetaFetch(data);
          console.log(res);
          break;
        }
        case "varios": {
          const res = await querys.crearVariosFetch(data);
          console.log(res);
          break;
        }
        case "volantes": {
          const res = await querys.crearVolanteFetch(data);
          console.log(res);
          break;
        }

        default:
          return;
      }
    } catch (error) {
      if (error instanceof AxiosError) console.log(error.message);
    }
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

export default FormCrearOrdenProvider;
