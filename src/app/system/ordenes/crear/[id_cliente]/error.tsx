"use client";

import { iconos } from "@/components/icons";
import Session from "@/components/session";
import { Button } from "@nextui-org/react";
import Link from "next/link";

type Props = {
  reset: () => void;
};

const Error = ({ reset }: Props) => {
  return (
    <div className="p-4 flex flex-col justify-center items-center h-full">
      <div className="w-full text-center">
        <div className="text-center text-8xl text-red-300">
          <span>{iconos.break}</span>
        </div>

        <h2 className="bg-gradient-to-r from-red-100/50 via-red-200 to-red-100/50 mt-6">
          <span className="font-black text-danger bg-white p-2 text-4xl">
            Página de Error.
          </span>
        </h2>

        <p className="text-slate-500 italic mt-2">Algo salió mal al intentar crear una orden.</p>

        <h3>Posibles causas:</h3>
        
        <ul>
          <li>El usuario no existe.</li>
          <li>Ocurrió un problema en el servidor.</li>
          <li>
            <div className="flex gap-x-2">
              <Session>
                <Button
                  as={Link}
                  href="/system"
                  startContent={iconos.ir}
                  color="primary"
                  variant="solid"
                >
                  ir al sistema
                </Button>
              </Session>

              <Button
                startContent={iconos.reload}
                color="primary"
                variant="flat"
                onClick={() => reset()}
              >
                volver a intentar
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Error;
