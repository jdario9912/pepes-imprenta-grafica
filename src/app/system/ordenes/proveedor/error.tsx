"use client";

import { iconos } from "@/components/icons";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type Props = {
  reset: () => void;
};

const Error = ({ reset }: Props) => {
  const router = useRouter();

  return (
    <div className="p-4 flex flex-col justify-center items-center h-full">
      <div className="w-full text-center">
        <div className="flex justify-center">
          <span className=" text-8xl text-red-300">{iconos.warning}</span>
        </div>

        <h2 className="bg-gradient-to-r from-red-100/50 via-red-200 to-red-100/50 mt-6">
          <span className="font-black text-danger bg-white p-2 text-4xl">
            Error.
          </span>
        </h2>

        <p className="text-slate-500 italic mt-5">
          Algo salió mal al cargar ordenes a proveedor.
        </p>

        <div className="w-fit container mt-7">
          <h3 className="text-slate-600 text-left font-medium">
            Posibles causas:
          </h3>

          <ul className="pl-6">
            <li className="list-disc text-slate-500 text-left">
              Ocurrió un problema en el servidor.
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="flex justify-center gap-x-2 mt-6">
            <Button
              startContent={iconos.back}
              color="primary"
              variant="solid"
              onClick={() => router.back()}
            >
              atrás
            </Button>

            <Button
              startContent={iconos.reload}
              color="primary"
              variant="flat"
              onClick={() => reset()}
            >
              volver a intentar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
