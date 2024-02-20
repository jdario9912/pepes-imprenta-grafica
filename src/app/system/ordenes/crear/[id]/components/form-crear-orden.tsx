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
          router.push(
            `/system/pdf/producto/${res.data.producto}/${res.data.id}`
          );

          break;
        }
        case "diseños": {
          const res = await querys.crearDisenoFetch(data);
          router.push(
            `/system/pdf/producto/${res.data.producto}/${res.data.id}`
          );

          break;
        }
        case "impresiones": {
          const res = await querys.crearImpresionFetch(data);
          router.push(
            `/system/pdf/producto/${res.data.producto}/${res.data.id}`
          );

          break;
        }
        case "loma": {
          const res = await querys.crearLomaFetch(data);
          router.push(
            `/system/pdf/producto/${res.data.producto}/${res.data.id}`
          );

          break;
        }
        case "plotter": {
          const res = await querys.crearPlotterFetch(data);
          router.push(
            `/system/pdf/producto/${res.data.producto}/${res.data.id}`
          );

          break;
        }
        case "remeras": {
          const res = await querys.crearRemeraFetch(data);
          router.push(
            `/system/pdf/producto/${res.data.producto}/${res.data.id}`
          );

          break;
        }
        case "sellos": {
          const res = await querys.crearSelloFetch(data);
          router.push(
            `/system/pdf/producto/${res.data.producto}/${res.data.id}`
          );

          break;
        }
        case "talonarios": {
          const res = await querys.crearTalonarioFetch(data);
          router.push(
            `/system/pdf/producto/${res.data.producto}/${res.data.id}`
          );

          break;
        }
        case "tarjetas": {
          const res = await querys.crearTarjetaFetch(data);
          router.push(
            `/system/pdf/producto/${res.data.producto}/${res.data.id}`
          );

          break;
        }
        case "varios": {
          const res = await querys.crearVariosFetch(data);
          router.push(
            `/system/pdf/producto/${res.data.producto}/${res.data.id}`
          );

          break;
        }
        case "volantes": {
          const res = await querys.crearVolanteFetch(data);
          router.push(
            `/system/pdf/producto/${res.data.producto}/${res.data.id}`
          );

          break;
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
