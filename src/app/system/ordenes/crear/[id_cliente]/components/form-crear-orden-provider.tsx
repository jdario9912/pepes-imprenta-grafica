"use client";

import { useState } from "react";
import BotonesProductos from "./botones-productos";
import { productosModel } from "../services/productos-index";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as querys from "@/libs/server-actions/axios";
import { useParams } from "next/navigation";
import { AxiosError } from "axios";
import { iconos } from "@/components/icons";
import { Producto } from "@/types/recursos/productos";

type InputsFields = Omit<
  Producto,
  "id" | "producto" | "estado" | "nro_orden" | "fecha_creacion"
>;

const FormCrearOrdenProvider = ({ atendido_por }: { atendido_por: string }) => {
  const [productoElegido, setProductoElegido] = useState("");
  const params = useParams();

  const id_cliente = params.id_cliente;

  const methods = useForm<InputsFields>({
    defaultValues: {
      entrega: 0,
      total: 0,
      id_cliente: Number(id_cliente),
      atendido_por,
    },
  });

  const resetProducto = () => {
    setProductoElegido("");
    methods.reset();
  };

  const onSubmit: SubmitHandler<InputsFields> = async (data) => {
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
  };
  // };

  // const onSubmit = methods.handleSubmit(async (data) => {
  //   if (Number(data.total) < Number(data.entrega)) {
  //     methods.setError("entrega", {
  //       message: "El monto de entrega es mayor al importe total.",
  //     });
  //     return;
  //   }

  //   try {
  //     switch (productoElegido) {
  //       case "bonos": {
  //         await querys.crearBonoFetch(data);

  //         return;
  //       }
  //       case "diseños": {
  //         await querys.crearDisenoFetch(data);

  //         return;
  //       }
  //       case "impresiones": {
  //         await querys.crearImpresionFetch(data);

  //         return;
  //       }
  //       case "loma": {
  //         await querys.crearLomaFetch(data);

  //         return;
  //       }
  //       case "plotter": {
  //         await querys.crearPlotterFetch(data);

  //         return;
  //       }
  //       case "remeras": {
  //         await querys.crearRemeraFetch(data);

  //         return;
  //       }
  //       case "sellos": {
  //         await querys.crearSelloFetch(data);

  //         return;
  //       }
  //       case "talonarios": {
  //         await querys.crearTalonarioFetch(data);

  //         return;
  //       }
  //       case "tarjetas": {
  //         await querys.crearTarjetaFetch(data);

  //         return;
  //       }
  //       case "varios": {
  //         await querys.crearVariosFetch(data);

  //         return;
  //       }
  //       case "volantes": {
  //         await querys.crearVolanteFetch(data);

  //         return;
  //       }

  //       default:
  //         return;
  //     }
  //   } catch (error) {
  //     if (error instanceof AxiosError) console.log(error.response?.data);
  //   }
  // });

  return (
    <Card>
      <CardHeader>
        {productoElegido == "" ? (
          <BotonesProductos setProductoElegido={setProductoElegido} />
        ) : (
          <>
            <div className="flex gap-4 items-center">
              <Chip
                color="primary"
                startContent={productosModel[productoElegido].icono}
                radius="sm"
                size="lg"
                classNames={{
                  base: "py-6 bg-gradient-to-br from-indigo-500/80 to-pink-500/80 border-small border-white/50 shadow-pink-500/30",
                  content: "drop-shadow shadow-black text-white",
                }}
              >
                <span className="capitalize">{productoElegido}</span>
              </Chip>

              <Button
                onClick={resetProducto}
                variant="flat"
                color="primary"
                startContent={iconos.cambiarProducto}
                isIconOnly
              />
            </div>
          </>
        )}
      </CardHeader>
      {!!productoElegido && (
        <>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <CardBody>{productosModel[productoElegido]?.inputs}</CardBody>

              <CardFooter>
                <Button
                  type="submit"
                  color="primary"
                  isLoading={methods.formState.isSubmitting}
                >
                  Crear orden
                </Button>
              </CardFooter>
            </form>
          </FormProvider>
        </>
      )}
    </Card>
  );
};

export default FormCrearOrdenProvider;
