import { iconos } from "@/components/icons";
import Session from "@/components/session";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const HomeNotFound = async () => (
  <div className="p-4 flex flex-col justify-center items-center h-screen">
    <div className="w-full text-center">
      <h2 className="bg-gradient-to-r from-red-100/50 via-red-200 to-red-100/50 mt-6">
        <span className="font-black text-danger bg-white p-2 text-4xl">
          404
        </span>
      </h2>
      <p className="font-extrabold text-slate-700 text-4xl mt-6">
        Página no encontrada
      </p>
      <p className="text-slate-500 italic mt-2">
        Ésta página no existe o fue borrada.
      </p>

      <span className="flex justify-center w-full text-8xl text-red-300 mt-4">
        {iconos.break}
      </span>

      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          as={Link}
          href="/"
          startContent={iconos.home}
          color="primary"
          variant="flat"
        >
          inicio
        </Button>

        <Session>
          <Button
            as={Link}
            href="/system"
            color="primary"
            variant="solid"
            startContent={iconos.ir}
          >
            sistema
          </Button>
        </Session>
      </div>
    </div>
  </div>
);

export default HomeNotFound;
