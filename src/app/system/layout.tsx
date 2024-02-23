import Logout from "@/components/btn-logout";
import NavAside from "./components/nav-aside";
import { metadataSystem } from "@/libs/client/metadata";
import classNames from "classnames";

export const metadata = metadataSystem;

export default function SystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen max-h-screen">
      <aside className="bg-zinc-300">
        <div className="flex flex-col justify-between h-full">
          <NavAside />
          <div className={"flex justify-center px-2 py-3"}>
            <Logout />
          </div>
        </div>
      </aside>
      <div className="overflow-scroll w-full">{children}</div>
    </div>
  );
}
