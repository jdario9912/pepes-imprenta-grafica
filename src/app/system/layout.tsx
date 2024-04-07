import Logout from "@/components/btn-logout";
import NavAside from "./components/nav-aside";
import { metadataSystem } from "@/libs/client/metadata";
import DarkMode from "./components/dark-mode";
import { estilosSystemBase } from "./services/estilos-system";
import Busqueda from "./components/busqueda";
import { Card, CardBody } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import Usuario from "./components/usuario";
import UserLoader from "../components/loaders/user";

export const metadata = metadataSystem;

const SystemLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();

  const emailUser = session?.user?.email;
  const nombreUser = session?.user?.name;

  return (
    <div id="system-object-dom" className={estilosSystemBase}>
      <aside className="p-4 dark:bg-neutral-800 dark:text-white">
        <Card className="h-full">
          <CardBody>
            <div className="flex flex-col justify-between h-full">
              <Suspense fallback={<UserLoader />}>
                <Usuario email={emailUser || ""} nombre={nombreUser || ""} />
              </Suspense>
              <NavAside />

              <Busqueda />

              <DarkMode />

              <div className={"flex justify-center px-2 py-3"}>
                <Logout />
              </div>
            </div>
          </CardBody>
        </Card>
      </aside>
      <div className="overflow-scroll w-full dark:bg-neutral-800 dark:text-white">
        {children}
      </div>
    </div>
  );
};

export default SystemLayout;
