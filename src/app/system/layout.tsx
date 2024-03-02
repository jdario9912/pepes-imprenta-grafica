import Logout from "@/components/btn-logout";
import NavAside from "./components/nav-aside";
import { metadataSystem } from "@/libs/client/metadata";
import DarkMode from "./components/dark-mode";
import { estilosSystemBase } from "./services/estilos-system";

export const metadata = metadataSystem;

const SystemLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="system-object-dom" className={estilosSystemBase}>
      <aside className="bg-zinc-300">
        <div className="flex flex-col justify-between h-full">
          <NavAside />
          <DarkMode />
          <div className={"flex justify-center px-2 py-3"}>
            <Logout />
          </div>
        </div>
      </aside>
      <div className="overflow-scroll w-full">{children}</div>
    </div>
  );
};

export default SystemLayout;
